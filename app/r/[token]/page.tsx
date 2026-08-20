import { cache } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { CopyLinkButton } from "./CopyLinkButton";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

type ShareRow = {
  id: string;
  token: string;
  share_type: "product" | "store" | "provider" | "event";
  ref_id: string;
  title: string;
  subtitle: string | null;
  image_url: string | null;
  claimed_at: string | null;
};

const TYPE_LABELS: Record<ShareRow["share_type"], string> = {
  product: "Producto",
  store: "Tienda",
  provider: "Proveedor de servicios",
  event: "Evento",
};

const TYPE_EMOJIS: Record<ShareRow["share_type"], string> = {
  product: "🛍️",
  store: "🏪",
  provider: "🛠️",
  event: "🎟️",
};

// TODO: reemplazar cuando exista el link real de Google Play (hoy no hay Android).
const APP_STORE_URL = "https://apps.apple.com/app/id6772028681";
const PLAY_STORE_URL = "#";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ token: string }>;
}): Promise<Metadata> {
  const { token } = await params;
  const share = await getShare(token);

  // Antes esto devolvia un titulo fijo y ninguna etiqueta og:, asi que las
  // tarjetas de Facebook y X heredaban las del layout: la misma para cada link
  // compartido, sin la foto ni el nombre de lo que se estaba compartiendo.
  if (!share) {
    return {
      title: "BohiApp — Este link no es válido",
      description: "Es posible que ya haya sido usado o que haya expirado.",
      alternates: { canonical: `/r/${token}` },
    };
  }

  const label = TYPE_LABELS[share.share_type];
  const title = `${share.title} · ${label} en BohiApp`;
  const description =
    share.subtitle ?? `Te compartieron ${label.toLowerCase()} en BohiApp. Abrí el link para verlo.`;
  const url = `/r/${token}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "BohiApp",
      title,
      description,
      url,
      // La imagen del item cuando existe; si no, el logo, que metadataBase
      // resuelve a absoluto. Las redes descartan una URL relativa.
      images: [share.image_url ?? "/bohiapp.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [share.image_url ?? "/bohiapp.png"],
    },
  };
}

// cache() para que generateMetadata y el render compartan una sola consulta:
// Next llama a las dos en la misma request.
const getShare = cache(async function getShare(token: string): Promise<ShareRow | null> {
  try {
    const { data } = await supabase
      .from("shares")
      .select("id, token, share_type, ref_id, title, subtitle, image_url, claimed_at")
      .eq("token", token)
      .maybeSingle();
    return (data as ShareRow) ?? null;
  } catch (e) {
    console.error("getShare error:", e);
    return null;
  }
});

export default async function ShareLanding({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const share = await getShare(token);
  const url = `https://bohiapp.com/r/${token}`;

  if (!share) {
    return (
      <main className={styles.page}>
        <div className={styles.card}>
          <span className={styles.emoji}>🤷</span>
          <h1 className={styles.title}>Este link no es válido</h1>
          <p className={styles.text}>
            Es posible que ya haya sido usado o que haya expirado.
          </p>
          <Link href="/" className={styles.cta}>
            Descargar BohiApp
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <span className={styles.badge}>{TYPE_LABELS[share.share_type]}</span>
        {share.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={share.image_url} alt={share.title} className={styles.image} />
        ) : (
          <span className={styles.emoji}>{TYPE_EMOJIS[share.share_type]}</span>
        )}
        <h1 className={styles.title}>{share.title}</h1>
        {share.subtitle ? <p className={styles.text}>{share.subtitle}</p> : null}

        <div className={styles.ctaRow}>
          <a
            href={APP_STORE_URL}
            className={styles.cta}
            // iOS opens the app directly via the universal link when installed.
          >
             App Store
          </a>
          <a href={PLAY_STORE_URL} className={styles.ctaAlt}>
            ▶ Google Play
          </a>
        </div>
        <p className={styles.hint}>
          {share.claimed_at
            ? "Ya viste este contenido en la app 🧡"
            : "Descarga BohiApp y ábrelo al instante al terminar de registrarte."}
        </p>
        <CopyLinkButton url={url} />
      </div>
    </main>
  );
}