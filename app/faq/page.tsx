import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/LegalDocument.module.css";
import { FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ — BohiApp",
  description:
    "Frequently asked questions about BohiApp: orders and pickup, payments, tickets, appointments and your account. Preguntas frecuentes en español.",
  alternates: { canonical: "/faq" },
};

const LANGS = [
  { code: "en", id: "en", label: "English" },
  { code: "es", id: "es", label: "Español" },
] as const;

// Datos estructurados para que los buscadores muestren las respuestas.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LANGS.flatMap(({ code }) =>
    FAQ[code].groups.flatMap((g) =>
      g.items.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        inLanguage: code,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    ),
  ),
};

export default function FaqPage() {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>
          <Image src="/bohiapp.png" alt="" width={28} height={28} className={styles.logo} />
          <span>BohiApp</span>
        </Link>
      </header>

      <main className={styles.doc}>
        <h1 className={styles.title}>FAQ · Preguntas frecuentes</h1>
        <p className={styles.dates}>
          <a href="#en">English</a> · <a href="#es">Español</a>
        </p>

        {LANGS.map(({ code, id, label }) => {
          const c = FAQ[code];
          return (
            <section key={id} id={id} lang={code} aria-label={label}>
              <h2 className={styles.langTitle}>{c.title}</h2>
              <p className={styles.paragraph}>
                {c.intro} <a href="mailto:info@bohiapp.com">info@bohiapp.com</a>
              </p>
              {c.groups.map((g) => (
                <div key={g.title} className={styles.section}>
                  <h3 className={styles.sectionTitle}>{g.title}</h3>
                  {g.items.map(({ q, a }) => (
                    <details key={q} className={styles.faqItem}>
                      <summary>{q}</summary>
                      <p className={styles.paragraph}>{a}</p>
                    </details>
                  ))}
                </div>
              ))}
            </section>
          );
        })}
      </main>

      <footer className={styles.footer}>
        <nav className={styles.footerNav}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/support">Support</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
        <p>© {new Date().getFullYear()} BohiApp · Calgary, Alberta, Canadá</p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </div>
  );
}
