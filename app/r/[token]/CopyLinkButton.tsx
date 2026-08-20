"use client";

import styles from "./copy.module.css";

export function CopyLinkButton({ url }: { url: string }) {
  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
  }

  return (
    <button type="button" onClick={copy} className={styles.copyBtn}>
      🔗 Copiar link
    </button>
  );
}