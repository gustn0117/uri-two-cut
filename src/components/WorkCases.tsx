"use client";

import { useState } from "react";

const CASES = [
  {
    title: "한국지역자활센터협회 네컷사진 포토부스대여",
    desc: "경주 강동리조트에서 개최된 전국지역자활센터 실장 연수대회에 우리투컷 네컷사진 포토부스를 대여·설치하였습니다. 미니 스탠드형 네컷사진 포토부스는 슬림한 구조로 협소한 공간",
    color: "#cbd5e1",
    badge: "RENTAL",
  },
  {
    title: "연두향 축제 '네컷포토부스 & 룰렛 게임키오스크' 렌탈",
    desc: "삼척 도계읍에서 열린 2026 연두향 축제에서 '우리투컷 네컷포토부스와 룰렛게임키오스크' 렌탈 진행하였습니다. 이번 행사는 도계미디어센터와 함께하며 다양한 체험",
    color: "#fde68a",
    badge: "FESTIVAL",
  },
  {
    title: "LG전자 플래그십 D5 해리티지 라운지 맞춤형 포토부스제작 납품",
    desc: "LG전자 플래그십 D5, 해리티지 라운지 내 방문객 체험 콘텐츠 강화를 위해 진행된 맞춤형 포토부스 제작 및 납품 하였습니다.",
    color: "#1f2937",
    badge: "ENTERPRISE",
  },
  {
    title: "ERA 'SPRING BREAKERS' 팝업스토어 미니형 인생네컷대여",
    desc: "서울 성동구 아차산로에 위치한 ERA 성수 팝업스토어에 브랜드 아이덴티티를 반영한 커스텀 미니형 인생네컷대여하였습니다.",
    color: "#3b82f6",
    badge: "POP-UP",
  },
  {
    title: "통영 시민 안전 한마당 포토부스 설치",
    desc: "2026 통영시민 안전한마당 행사 현장에 우리투컷 포토부스를 설치하여 시민 참여형 부스를 운영하였습니다.",
    color: "#0ea5e9",
    badge: "PUBLIC",
  },
  {
    title: "할로윈 PHOTO ZONE 포토부스 설치",
    desc: "테마형 포토존을 결합한 시즌 한정 우리투컷 포토부스로 방문객 체류 시간을 연장하였습니다.",
    color: "#ec4899",
    badge: "SEASONAL",
  },
  {
    title: "비즈니스 라운지 프리미엄 키오스크 납품",
    desc: "고급 라운지 인테리어와 어울리는 톤다운 마감의 프리미엄 우리투컷 키오스크를 맞춤 제작·납품하였습니다.",
    color: "#a3a3a3",
    badge: "PREMIUM",
  },
  {
    title: "포스코 (Posco) 안내 키오스크 납품사례",
    desc: "포스코 사옥에 외부 안내 및 직원 인증을 위한 우리투컷 스탠드형 키오스크를 납품하였습니다.",
    color: "#64748b",
    badge: "ENTERPRISE",
  },
  {
    title: "인천국제공항 대한항공 라운지 포토부스납품 설치",
    desc: "대한민국을 대표하는 국적기, 대한항공(Korean Air)과 함께 진행한 인천국제공항 제2터미널 프레스티지 라운지 내에 공간의 격에 맞는 깔끔한 외관 디자인과 글로벌 항공사의 특색",
    color: "#1e3a8a",
    badge: "AIRPORT",
  },
  {
    title: "광주 아키웨딩스튜디오 포토부스납품",
    desc: "우리투컷은 이번 서울·광주·대구 3곳의 웨딩스튜디오 납품을 통해, 포토부스가 어떻게 스튜디오의 경쟁력이 되는지를 직접 입증했습니다.",
    color: "#f5f5f4",
    badge: "WEDDING",
  },
  {
    title: "파리바게뜨 '베리밤 소셜파티' 포토부스렌탈",
    desc: "파리바게뜨 베리밤 소셜파티 현장에는 짧은 행사 시간에 맞춰 우리투컷 포토부스 미니형이 4시간 단기 렌탈설치되었습니다.",
    color: "#fda4af",
    badge: "F&B",
  },
  {
    title: "서울 어린이 꿈 축제 포토카드 렌탈 설치사례",
    desc: "2025년 11월 22일, 서울시청 8층 다목적홀에서 열린 '2025 서울 어린이 꿈 축제'에서는 아이들이 주인공이 되어 즐기고 참여할 수 있는 다양한 체험",
    color: "#34d399",
    badge: "FAMILY",
  },
];

export default function WorkCases() {
  const [page, setPage] = useState(1);
  const totalPages = 9;

  return (
    <section id="cases" className="py-28 lg:py-36 bg-neutral-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="font-display tracking-[0.3em] text-sm text-neutral-500">INSTALLATION</p>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl">설치사례</h2>
          <p className="mt-4 text-neutral-500">우리투컷이 함께한 다양한 현장의 이야기</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CASES.map((c) => (
            <article
              key={c.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="aspect-[4/3] relative overflow-hidden"
                style={{ background: c.color }}
              >
                <div className="absolute inset-0 grid place-items-center">
                  <div className="w-2/3 h-3/4 rounded-md border-2 border-white/40 bg-white/10 backdrop-blur grid place-items-center">
                    <div className="w-16 h-20 bg-white/30 rounded-sm" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 text-[10px] tracking-widest bg-black/70 text-white px-2 py-1 rounded">
                  {c.badge}
                </span>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-[15px] leading-snug mb-2 line-clamp-2 group-hover:text-[#1A6DFF] transition-colors">
                  {c.title}
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed line-clamp-3">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <nav className="mt-14 flex justify-center items-center gap-1">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="w-10 h-10 grid place-items-center rounded-md hover:bg-neutral-200 text-neutral-500"
            aria-label="prev"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-10 h-10 rounded-md font-medium ${
                p === page ? "bg-[#1A6DFF] text-white" : "hover:bg-neutral-200 text-neutral-600"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="w-10 h-10 grid place-items-center rounded-md hover:bg-neutral-200 text-neutral-500"
            aria-label="next"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </nav>
      </div>
    </section>
  );
}
