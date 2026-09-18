import Link from "next/link";
import Image from "next/image";
import styles from "./LegalDocument.module.css";

export type Block =
  | { kind: "paragraph"; text: string }
  | { kind: "bullets"; items: string[] };

export interface Section {
  title: string;
  blocks: Block[];
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) =>
        b.kind === "paragraph" ? (
          <p key={i} className={styles.paragraph}>{b.text}</p>
        ) : (
          <ul key={i} className={styles.list}>
            {b.items.map((it, j) => <li key={j}>{it}</li>)}
          </ul>
        ),
      )}
    </>
  );
}

/**
 * Los documentos legales, en la web.
 *
 * Existen porque App Store Connect pide una URL pública de política de
 * privacidad: la pantalla que ya tiene la app no le sirve al revisor, que mira
 * la ficha antes de abrir nada.
 *
 * El texto está en inglés, igual que dentro de la app: es un documento legal
 * redactado para la PIPA de Alberta y traducirlo es una decisión aparte, no una
 * tarea de maquetado.
 */
export function LegalDocument({
  title,
  intro,
  sections,
  effectiveDate,
  lastUpdated,
}: {
  title: string;
  intro?: Block[];
  sections: Section[];
  effectiveDate: string;
  lastUpdated: string;
}) {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>
          <Image src="/bohiapp.png" alt="" width={28} height={28} className={styles.logo} />
          <span>BohiApp</span>
        </Link>
      </header>

      <main className={styles.doc}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.dates}>
          Effective {effectiveDate} · Last updated {lastUpdated}
        </p>

        {intro ? <Blocks blocks={intro} /> : null}

        {sections.map((s) => (
          <section key={s.title} className={styles.section}>
            <h2 className={styles.sectionTitle}>{s.title}</h2>
            <Blocks blocks={s.blocks} />
          </section>
        ))}
      </main>

      <footer className={styles.footer}>
        <nav className={styles.footerNav}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/support">Support</Link>
        </nav>
        <p>© {new Date().getFullYear()} BohiApp · Calgary, Alberta, Canadá</p>
      </footer>
    </div>
  );
}
