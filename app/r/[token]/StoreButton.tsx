"use client";

/**
 * Botón a la tienda que deja el link en el portapapeles antes de salir.
 *
 * Es la mitad web del deferred deep link. iOS no le pasa a una app recién
 * instalada la URL que el usuario venía siguiendo — esa información se pierde
 * en el paso por el App Store. El portapapeles es el único canal que cruza esa
 * frontera sin un SDK de atribución de terceros, así que la app lee de ahí el
 * token en su primer arranque y reclama el share (claim_share_by_token).
 *
 * La escritura ocurre dentro del gesto del click, que es lo que exigen los
 * navegadores. Si falla —permisos, navegador viejo, modo privado— no se
 * interrumpe nada: se pierde la atribución, no la descarga.
 */
export function StoreButton({
  url,
  href,
  className,
  children,
}: {
  url: string;
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  async function go(e: React.MouseEvent<HTMLAnchorElement>) {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Sin portapapeles no hay atribución, pero la descarga sigue su curso.
    }
    // No se previene el evento: el navegador navega solo, con el token ya puesto.
    void e;
  }

  return (
    <a href={href} className={className} onClick={go}>
      {children}
    </a>
  );
}
