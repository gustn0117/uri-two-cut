"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="flex items-center mb-5">
              <span className="font-display font-bold text-xl">우리투컷</span>
            </Link>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs">
              포토부스 렌탈 · 포토부스 대여 · 제작 구매 전문 브랜드.
              브랜드를 경험으로, 공간을 자산으로.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="font-bold mb-4">SERVICES</p>
              <ul className="space-y-2 opacity-70">
                <li><Link href="/about" className="hover:opacity-100">회사소개</Link></li>
                <li><Link href="/rental" className="hover:opacity-100">행사렌탈</Link></li>
                <li><Link href="/manufacture" className="hover:opacity-100">제작구매</Link></li>
                <li><Link href="/portfolio" className="hover:opacity-100">설치사례</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4">CONTACT</p>
              <ul className="space-y-2 opacity-70">
                <li><Link href="/inquiry/rental" className="hover:opacity-100">렌탈문의</Link></li>
                <li><Link href="/inquiry/buy" className="hover:opacity-100">구매문의</Link></li>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
              </ul>
            </div>
          </div>

          <div className="text-sm">
            <p className="font-bold mb-4">CUSTOMER CENTER</p>
            <p className="font-display font-bold text-2xl text-[#ffffff]">010-5819-0028</p>
            <p className="font-display font-bold text-2xl text-[#ffffff] mt-1">010-4244-2534</p>
            <p className="opacity-70 mt-3">(주)지에이치컴퍼니</p>
            <p className="opacity-70">경북 포항시 북구 천마로20</p>
            <p className="opacity-70 mt-2">abckingka@naver.com</p>
            <p className="opacity-50 text-xs mt-4 leading-relaxed">
              평일 10:00 ~ 18:00 / 점심 12:30 ~ 13:30
              <br />주말 및 공휴일 휴무
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>Copyright ⓒ 2026 우리투컷 All Rights Reserved.</p>
          <p>SELF PHOTO STUDIO · PREMIUM KIOSKS</p>
        </div>
      </div>
    </footer>
  );
}
