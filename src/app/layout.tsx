import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SplitLink | 모임 정산을 더 짧고 정확하게",
  description:
    "SplitLink는 모임별 지출과 참여자를 기록해 최종 송금 내역을 자동으로 정리하는 정산 서비스입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
