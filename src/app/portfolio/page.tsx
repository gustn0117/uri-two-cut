"use client";

import { useMemo, useState } from "react";

type Category = "전체" | "팝업스토어" | "기업·관공서" | "지역축제" | "교회·학교" | "납품·수출";

type Case = {
  title: string;
  desc: string;
  category: Category;
  color: string;
};

const CASES: Case[] = [
  { title: "한국지역자활센터협회 네컷사진 포토부스대여", desc: "경주 강동리조트에서 개최된 전국지역자활센터 실장 연수대회에 우리투컷 네컷사진 포토부스를 대여·설치하였습니다. 미니스탠드형 네컷사진 포토부스는 슬림한 구조로 협소한 공간", category: "기업·관공서", color: "#cbd5e1" },
  { title: "연두향 축제 '네컷포토부스 & 룰렛 게임키오스크' 렌탈", desc: "삼척 도계읍에서 열린 2026 연두향 축제에서 '우리투컷 네컷포토부스와 룰렛게임키오스크' 렌탈 진행하였습니다. 이번 행사는 도계미디어센터와 함께하며 다양한 체험", category: "지역축제", color: "#fde68a" },
  { title: "LG전자 플래그십 D5 해리티지 라운지 맞춤형 포토부스제작 납품", desc: "LG전자 플래그십 D5, 해리티지 라운지 내 방문객 체험 콘텐츠 강화를 위해 진행된 맞춤형 포토부스 제작 및 납품 하였습니다.", category: "기업·관공서", color: "#1f2937" },
  { title: "ERA 'SPRING BREAKERS' 팝업스토어 미니형 인생네컷대여", desc: "서울 성동구 아차산로에 위치한 ERA 성수 팝업스토어에 브랜드 아이덴티티를 반영한 커스텀 미니형 인생네컷대여하였습니다.", category: "팝업스토어", color: "#3b82f6" },
  { title: "동양생명 연도대상 시상식 네컷사진기계렌탈", desc: "2026년 동양생명 연도대상 시상식은 한 해의 성과를 돌아보고 우수 인력을 시상하는 중요한 기업 행사로, 참석자들이 자연스럽게 참여하고 즐길 수 있는 콘텐츠로 우리투컷 네컷사진기계", category: "기업·관공서", color: "#7c3aed" },
  { title: "코인노래방 포토부스 납품 설치사례", desc: "이번 설치사례는 코인노래방 내에 우리투컷 셀프 포토부스를 납품 설치한 사례입니다.", category: "납품·수출", color: "#f43f5e" },
  { title: "의료미용품 런칭 1주년 기념행사 네컷사진기계렌탈", desc: "이번 설치사례는 서울 호텔 컨벤션홀에서 진행된 의료미용 브랜드 1주년 기념 심포지엄에 우리투컷 네컷사진기계를 설치하였습니다.", category: "팝업스토어", color: "#06b6d4" },
  { title: "Park1538 광양 POSCO AI포토부스납품 설치", desc: "POSCO 복합문화공간 Park1538에 AI 기능 탑재 포토부스 납품 설치한 사례입니다.", category: "납품·수출", color: "#0d9488" },
  { title: "통영 시민 안전 한마당 포토부스 설치", desc: "2026 통영시민 안전한마당 행사 현장에 우리투컷 포토부스를 설치하여 시민 참여형 부스를 운영하였습니다.", category: "지역축제", color: "#0ea5e9" },
  { title: "할로윈 PHOTO ZONE 포토부스 설치", desc: "테마형 포토존을 결합한 시즌 한정 우리투컷 포토부스로 방문객 체류 시간을 연장하였습니다.", category: "팝업스토어", color: "#ec4899" },
  { title: "비즈니스 라운지 프리미엄 키오스크 납품", desc: "고급 라운지 인테리어와 어울리는 톤다운 마감의 프리미엄 우리투컷 키오스크를 맞춤 제작·납품하였습니다.", category: "납품·수출", color: "#a3a3a3" },
  { title: "포스코 (Posco) 안내 키오스크 납품사례", desc: "포스코 사옥에 외부 안내 및 직원 인증을 위한 우리투컷 스탠드형 키오스크를 납품하였습니다.", category: "기업·관공서", color: "#64748b" },
  { title: "인천국제공항 대한항공 라운지 포토부스납품 설치", desc: "대한민국을 대표하는 국적기, 대한항공(Korean Air)과 함께 진행한 인천국제공항 제2터미널 프레스티지 라운지 내에 공간의 격에 맞는 깔끔한 외관 디자인과 글로벌 항공사의 특색", category: "납품·수출", color: "#1e3a8a" },
  { title: "광주 아키웨딩스튜디오 포토부스납품", desc: "우리투컷은 이번 서울·광주·대구 3곳의 웨딩스튜디오 납품을 통해, 포토부스가 어떻게 스튜디오의 경쟁력이 되는지를 직접 입증했습니다", category: "납품·수출", color: "#f5f5f4" },
  { title: "파리바게뜨 '베리밤 소셜파티' 포토부스렌탈", desc: "파리바게뜨 베리밤 소셜파티 현장에는 짧은 행사 시간에 맞춰 우리투컷 포토부스 미니형이 4시간 단기 렌탈설치되었습니다.", category: "팝업스토어", color: "#fda4af" },
  { title: "서울 어린이 꿈 축제 포토카드 렌탈 설치사례", desc: "2025년 11월 22일, 서울시청 8층 다목적홀에서 열린 '2025 서울 어린이 꿈 축제'에서는 아이들이 주인공이 되어 즐기고 참여할 수 있는 다양한 체험", category: "지역축제", color: "#34d399" },
  { title: "교회 청년부 행사 포토부스 렌탈", desc: "교회 청년부 수련회 및 행사용 포토부스 렌탈 - 단기 일정 빠른 셋업으로 운영하였습니다.", category: "교회·학교", color: "#a16207" },
  { title: "서울대학교 축제 포토부스 렌탈", desc: "대학 축제 및 동아리 행사용 우리투컷 포토부스로 학생들에게 잊지 못할 추억을 선물하였습니다.", category: "교회·학교", color: "#15803d" },
];

const CATEGORIES: Category[] = ["전체", "팝업스토어", "기업·관공서", "지역축제", "교회·학교", "납품·수출"];

const PER_PAGE = 12;

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("전체");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => (active === "전체" ? CASES : CASES.filter((c) => c.category === active)),
    [active]
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const view = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <main>
      {/* Hero - light bg, big title (matches original) */}
      <section className="pt-32 pb-16 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <h1 className="font-display font-black text-5xl md:text-7xl">설치사례</h1>
          <p className="mt-6 text-neutral-500 text-base md:text-lg">
            이유있는 선택을 믿고 특별한 캠페인을 진행하세요.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="pb-8 bg-white border-b border-neutral-100">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => {
                setActive(c);
                setPage(1);
              }}
              className={`px-6 py-2.5 rounded-full text-sm transition border ${
                active === c
                  ? "bg-neutral-900 text-white border-neutral-900"
                  : "border-neutral-300 text-neutral-700 hover:border-neutral-500"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {view.length === 0 ? (
            <p className="text-center text-neutral-400 py-20">해당 카테고리의 사례가 없습니다.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
              {view.map((c) => (
                <article key={c.title} className="group cursor-pointer">
                  <div
                    className="aspect-[4/3] relative overflow-hidden rounded-md mb-5"
                    style={{ background: c.color }}
                  >
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="w-1/2 h-3/4 rounded-md border-2 border-white/40 bg-white/10 backdrop-blur grid place-items-center">
                        <div className="w-3/4 aspect-[3/4] bg-white/30 rounded-sm" />
                      </div>
                    </div>
                  </div>
                  <h4 className="font-bold text-base leading-snug mb-2 group-hover:text-[#1A6DFF] transition-colors line-clamp-2">
                    {c.title}
                  </h4>
                  <p className="text-sm text-neutral-500 leading-relaxed line-clamp-3">{c.desc}</p>
                </article>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <nav className="mt-16 flex justify-center items-center gap-1">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="w-10 h-10 grid place-items-center rounded-md hover:bg-neutral-100 text-neutral-500"
                aria-label="prev"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-10 h-10 rounded-md font-medium ${
                    p === page ? "bg-neutral-900 text-white" : "hover:bg-neutral-100 text-neutral-600"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="w-10 h-10 grid place-items-center rounded-md hover:bg-neutral-100 text-neutral-500"
                aria-label="next"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </nav>
          )}
        </div>
      </section>
    </main>
  );
}
