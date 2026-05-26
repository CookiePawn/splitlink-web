import type { Metadata } from "next";
import { LegalPage } from "../legal-page";
import { privacyContent } from "../legal-content";

export const metadata: Metadata = {
  title: "개인정보처리방침 | SplitLink",
  description: "SplitLink 개인정보처리방침입니다.",
};

export default function PrivacyPage() {
  return <LegalPage eyebrow="PRIVACY" content={privacyContent} />;
}
