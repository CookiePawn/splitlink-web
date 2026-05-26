import type { Metadata } from "next";
import { LegalPage } from "../legal-page";
import { termsContent } from "../legal-content";

export const metadata: Metadata = {
  title: "이용약관 | SplitLink",
  description: "SplitLink 이용약관입니다.",
};

export default function TermsPage() {
  return <LegalPage eyebrow="TERMS" content={termsContent} />;
}
