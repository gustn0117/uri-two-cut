"use client";

import { useMemo, useState } from "react";
import PageHero from "@/components/PageHero";

type Project = {
  src: string;
  title: string;
  category: Category;
};

type Category =
  | "전체"
  | "기업·관공서"
  | "페스티벌·축제"
  | "스포츠"
  | "학회·컨퍼런스"
  | "팝업·브랜드"
  | "엔터·미디어"
  | "교육·학교";

const RAW: Project[] = [
  { src: "/portfolio/01.jpg", title: "경기 배리어프리 페스티벌", category: "페스티벌·축제" },
  { src: "/portfolio/02.jpg", title: "BK Leaders 컨퍼런스", category: "학회·컨퍼런스" },
  { src: "/portfolio/03.jpg", title: "이마트 노브랜드배 챔피언십", category: "스포츠" },
  { src: "/portfolio/04.jpg", title: "POSCO 광양 키오스크 납품", category: "기업·관공서" },
  { src: "/portfolio/05.jpg", title: "인천공항 배드민턴 챔피언십", category: "스포츠" },
  { src: "/portfolio/06.jpg", title: "존슨앤존슨 KOS 대한안과학회", category: "학회·컨퍼런스" },
  { src: "/portfolio/07.jpg", title: "한국수력원자력", category: "기업·관공서" },
  { src: "/portfolio/08.jpg", title: "영화 ‘나혼자 프린스’ VIP 시사회", category: "엔터·미디어" },
  { src: "/portfolio/09.jpg", title: "롯데케미칼", category: "기업·관공서" },
  { src: "/portfolio/10.jpg", title: "ANUA 뽀용뇽 팬 미팅", category: "팝업·브랜드" },
  { src: "/portfolio/11.jpg", title: "해군 창설 80주년 기념식", category: "기업·관공서" },
  { src: "/portfolio/12.jpg", title: "신한카드 SOL페이 스퀘어", category: "팝업·브랜드" },
  { src: "/portfolio/13.jpg", title: "세대공감 MCN", category: "엔터·미디어" },
  { src: "/portfolio/14.jpg", title: "하나고등학교", category: "교육·학교" },
  { src: "/portfolio/15.jpg", title: "대웅제약 알고리즘 인화 솔루션", category: "기업·관공서" },
];

const CATEGORIES: Category[] = [
  "전체",
  "기업·관공서",
  "페스티벌·축제",
  "스포츠",
  "학회·컨퍼런스",
  "팝업·브랜드",
  "엔터·미디어",
  "교육·학교",
];

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("전체");
  const [lightbox, setLightbox] = useState<Project | null>(null);

  const visible = useMemo(
    () => (active === "전체" ? RAW : RAW.filter((p) => p.category === active)),
    [active]
  );

  return (
    <main>
      <PageHero
        eyebrow="OUR PROJECTS"
        title="우리투컷이 함께한 현장"
        subtitle="기업 행사부터 페스티벌, 학회, 팝업스토어까지 — 다양한 브랜드와 함께한 실제 설치 · 운영 사례입니다."
        breadcrumb={[{ label: "프로젝트" }]}
      />

      <section className="py-12 lg:py-16 bg-white border-b border-neutral-100">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm transition border ${
                active === c
                  ? "bg-[#0a0a0a] border-[#0a0a0a]"
                  : "bg-white border-neutral-300 text-neutral-700 hover:border-neutral-500"
              }`}
              style={active === c ? { color: "#ffffff" } : undefined}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {visible.length === 0 ? (
            <p className="text-center text-neutral-400 py-20">해당 카테고리의 사례가 없습니다.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {visible.map((p) => (
                <button
                  key={p.src}
                  onClick={() => setLightbox(p)}
                  className="group text-left cursor-pointer"
                >
                  <div className="aspect-[4/3] relative overflow-hidden rounded-md mb-4 bg-neutral-100">
                    <img
                      src={p.src}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-xs tracking-widest text-neutral-500">{p.category}</p>
                  <h4 className="font-bold text-base leading-snug mt-1 group-hover:text-[#0a0a0a] transition-colors">
                    {p.title}
                  </h4>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm grid place-items-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="닫기"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-10 h-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
          <div className="max-w-[1400px] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-md"
            />
            <div className="mt-4 text-center text-white">
              <p className="text-xs tracking-widest opacity-80">{lightbox.category}</p>
              <p className="font-display font-bold text-xl mt-1">{lightbox.title}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
