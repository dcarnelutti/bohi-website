import { ImageResponse } from "next/og";
import { supabase } from "@/lib/supabase";

/**
 * La tarjeta que se ve al pegar un link de BohiApp en WhatsApp, Instagram o X.
 *
 * Antes la etiqueta og:image apuntaba a la foto cruda del item. Funciona, pero
 * desperdicia el momento: una foto de pan podría ser de cualquiera. Acá se
 * compone la foto con el título, la fecha o el lugar, y la marca — así el link
 * se explica solo aunque nadie lea el texto que lo acompaña.
 *
 * Se genera en el servidor con next/og, sin servicio de imágenes aparte.
 *
 * `params` se espera con await porque en Next 16 pasó a ser una promesa — ver
 * el historial de versiones en
 * node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/opengraph-image.md
 */
export const alt = "BohiApp";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TYPE_LABELS: Record<string, string> = {
  product: "Producto",
  store: "Tienda",
  provider: "Servicio",
  event: "Evento",
};

export default async function Image({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;

  const { data: share } = await supabase
    .from("shares")
    .select("share_type, title, subtitle, image_url")
    .eq("token", token)
    .maybeSingle();

  // Un link vencido o inventado también se pega en algún lado: decir qué pasó
  // es mejor que una tarjeta con la marca repetida tres veces.
  const title = share?.title ?? "Este link ya no está disponible";
  const subtitle = share?.subtitle ?? (share ? null : "Puede haber expirado o ya haber sido usado.");
  const label = share ? (TYPE_LABELS[share.share_type] ?? "BohiApp") : "Enlace";
  const photo = share?.image_url ?? null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FDF8F3",
          fontFamily: "sans-serif",
        }}
      >
        {/* La foto ocupa la mitad. Sin foto, el texto se lleva todo el ancho en
            vez de dejar un hueco gris. */}
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt=""
            width={600}
            height={630}
            style={{ width: 600, height: 630, objectFit: "cover" }}
          />
        ) : null}

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 56,
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#E8622A",
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            {label}
          </div>

          <div
            style={{
              fontSize: photo ? 52 : 68,
              fontWeight: 800,
              color: "#1E2022",
              lineHeight: 1.1,
              marginTop: 16,
              // Un título largo no puede empujar la fecha fuera del lienzo.
              display: "block",
              overflow: "hidden",
            }}
          >
            {title.length > 70 ? `${title.slice(0, 70)}…` : title}
          </div>

          {subtitle ? (
            <div style={{ fontSize: 30, color: "#6B645C", marginTop: 20, lineHeight: 1.3 }}>
              {subtitle.length > 80 ? `${subtitle.slice(0, 80)}…` : subtitle}
            </div>
          ) : null}

          <div style={{ display: "flex", alignItems: "center", marginTop: "auto", gap: 12 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "#E8622A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 26,
                fontWeight: 800,
              }}
            >
              B
            </div>
            <div style={{ fontSize: 26, fontWeight: 700, color: "#1E2022" }}>BohiApp</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
