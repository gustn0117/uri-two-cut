"use client";

import { useEffect, useRef, useState } from "react";
import projectsData from "@/lib/projects.json";

type Project = { id: string; category: string; cover: string };

const ALL = projectsData as Project[];

const CATEGORY_ORDER = [
  "기업·관공서",
  "교육·학교",
  "페스티벌·축제",
  "학회·컨퍼런스",
  "스포츠",
  "팝업·브랜드",
  "엔터·미디어",
  "교회",
  "웨딩",
];

const COUNTS = (() => {
  const map = new Map<string, number>();
  for (const p of ALL) map.set(p.category, (map.get(p.category) ?? 0) + 1);
  return CATEGORY_ORDER.filter((c) => (map.get(c) ?? 0) > 0).map((c) => ({
    label: c,
    count: map.get(c) ?? 0,
  }));
})();

const TOTAL = ALL.length;
const TOP_CORP = COUNTS.find((c) => c.label === "기업·관공서")?.count ?? 0;

const MARQUEE_COVERS = ALL
  .filter((p) => p.cover)
  .slice(0, 24)
  .map((p) => p.cover);

export default function WhereUsed() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0a0a0a] text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-display tracking-[0.4em] text-xs text-amber-400 font-bold">
            TRUSTED EVERYWHERE
          </p>
          <h2 className="mt-5 font-display font-black text-3xl md:text-5xl lg:text-6xl leading-[1.1]">
            이미 <span className="text-amber-400">여기저기</span>
            <br className="md:hidden" /> 활용되고 있습니다
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed">
            기업 행사 · 관공서 · 학교 · 페스티벌 · 학회 · 스포츠 · 팝업스토어
            · 엔터미디어 · 교회 · 웨딩까지.
            <br className="hidden md:block" />
            우리투컷은 <span className="text-white font-bold">9개 분야 {TOTAL}+ 현장</span>에서 함께해온 프리미엄 포토부스입니다.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          <Stat target={TOTAL} suffix="+" label="진행한 행사" />
          <Stat target={9} suffix="개" label="활용 분야" />
          <Stat target={TOP_CORP} suffix="+" label="기업 · 관공서" />
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
          {COUNTS.map((c) => (
            <span
              key={c.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition"
            >
              <span className="text-sm font-bold">{c.label}</span>
              <span className="text-xs font-bold text-amber-400">{c.count}</span>
            </span>
          ))}
        </div>

        <div className="mt-16">
          <Marquee covers={MARQUEE_COVERS} />
        </div>

        <div className="mt-12 text-center">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-neutral-100 font-semibold transition-colors"
            style={{ color: "#0a0a0a" }}
          >
            전체 활용 사례 보기
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function Stat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const start = () => {
      if (started.current) return;
      started.current = true;
      const dur = 1500;
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && start()),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center px-2 py-5 rounded-2xl bg-white/5 border border-white/10">
      <p className="font-display font-black text-3xl md:text-5xl">
        {n.toLocaleString()}
        <span className="text-amber-400 ml-0.5">{suffix}</span>
      </p>
      <p className="mt-2 text-[11px] md:text-sm text-white/60 tracking-wide">{label}</p>
    </div>
  );
}

function Marquee({ covers }: { covers: string[] }) {
  const doubled = [...covers, ...covers];
  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-3 animate-marquee-x" style={{ width: "max-content" }}>
        {doubled.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="w-32 h-24 md:w-44 md:h-32 rounded-lg overflow-hidden border border-white/10 bg-white/5 shrink-0"
          >
            <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
    </div>
  );
}
