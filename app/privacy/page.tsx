import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import {
  PRIVACY_INTRO,
  PRIVACY_SECTIONS,
  PRIVACY_EFFECTIVE_DATE,
  PRIVACY_LAST_UPDATED,
} from "@/lib/legal/privacy";

// Esta es LA url que va en App Store Connect, en el campo Privacy Policy URL.
export const metadata: Metadata = {
  title: "Privacy Policy — BohiApp",
  description:
    "How BohiApp collects, uses and protects your personal information, under Alberta's Personal Information Protection Act.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      intro={PRIVACY_INTRO}
      sections={PRIVACY_SECTIONS}
      effectiveDate={PRIVACY_EFFECTIVE_DATE}
      lastUpdated={PRIVACY_LAST_UPDATED}
    />
  );
}
