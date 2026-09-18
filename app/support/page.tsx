import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/LegalDocument.module.css";

// App Store Connect exige una Support URL aparte de la de privacidad. Mandar al
// revisor a la home no alcanza: tiene que haber una forma visible de pedir
// ayuda.
export const metadata: Metadata = {
  title: "Support — BohiApp",
  description: "How to get help with BohiApp: contact, account deletion and common questions.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>
          <Image src="/bohiapp.png" alt="" width={28} height={28} className={styles.logo} />
          <span>BohiApp</span>
        </Link>
      </header>

      <main className={styles.doc}>
        <h1 className={styles.title}>Support</h1>
        <p className={styles.dates}>Calgary, Alberta, Canadá</p>

        <p className={styles.paragraph}>
          Need help with an order, a booking or your account? Write to us at{" "}
          <a href="mailto:info@bohiapp.com">info@bohiapp.com</a> and we will get back to you.
          Escríbenos en español o en inglés, como prefieras.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Orders and pickups</h2>
          <p className={styles.paragraph}>
            Every order is prepared and handed over by the seller, who is the merchant on
            record for that sale. If something is wrong with an order, the fastest route is
            the seller — you can reach them from the order screen in the app. If you cannot
            resolve it there, write to us and we will step in.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Refunds and cancellations</h2>
          <p className={styles.paragraph}>
            You can cancel an order from the app while the seller has not started preparing
            it, and the payment is returned in full. Once preparation has started, the
            cancellation needs the seller&apos;s approval, because the food is already being
            made. Event tickets and appointments follow the policy shown before you pay.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Deleting your account</h2>
          <p className={styles.paragraph}>
            You can delete your account from the app at any time: open{" "}
            <strong>Profile</strong>, scroll to the bottom and choose{" "}
            <strong>Delete account</strong>. This removes your personal information from the
            platform. If you own a store, you need to transfer or close it first. You can
            also ask us to delete it by writing to{" "}
            <a href="mailto:info@bohiapp.com">info@bohiapp.com</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Privacy and terms</h2>
          <p className={styles.paragraph}>
            Read our <Link href="/privacy">Privacy Policy</Link> and{" "}
            <Link href="/terms">Terms &amp; Conditions</Link>.
          </p>
        </section>
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
