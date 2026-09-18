import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import {
  TERMS_SECTIONS,
  TERMS_EFFECTIVE_DATE,
  TERMS_LAST_UPDATED,
} from "@/lib/legal/terms";

export const metadata: Metadata = {
  title: "Terms & Conditions — BohiApp",
  description: "The terms that govern the use of BohiApp.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms & Conditions"
      sections={TERMS_SECTIONS}
      effectiveDate={TERMS_EFFECTIVE_DATE}
      lastUpdated={TERMS_LAST_UPDATED}
    />
  );
}
