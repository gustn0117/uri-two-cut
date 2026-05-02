import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "포토부스 렌탈, 제작 - 우리투컷",
  description:
    "행사, 축제, 웨딩, 팝업스토어에 어울리는 맞춤형 인생네컷 포토부스 대여부터, 직접 제작·개발·대여·수출까지. 우리투컷 포토부스 서비스로 소중한 순간을 특별하게 기록하세요.",
  keywords: [
    "우리투컷",
    "포토부스 렌탈",
    "포토부스 대여",
    "포토부스 제작",
    "인생네컷",
    "포토 키오스크",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
