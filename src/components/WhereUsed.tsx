"use client";

import projectsData from "@/lib/projects.json";

type Project = { id: string; category: string; cover: string };

const ALL = projectsData as Project[];

const CATEGORIES = [
  { name: "기업 행사", icon: "🏢" },
  { name: "관공서", icon: "🏛️" },
  { name: "학교", icon: "🎓" },
  { name: "페스티벌", icon: "🎪" },
  { name: "학회·컨퍼런스", icon: "🎤" },
  { name: "스포츠", icon: "🏆" },
  { name: "팝업스토어", icon: "🛍️" },
  { name: "엔터·미디어", icon: "🎬" },
  { name: "교회", icon: "⛪" },
  { name: "웨딩", icon: "💍" },
];

const MARQUEE_COVERS = ALL.filter((p) => p.cover).slice(0, 24).map((p) => p.cover);

export default function WhereUsed() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0a0a0a] text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="text-center max-w-4xl mx-auto">
          <p className="font-display tracking-[0.4em] text-xs text-amber-400 font-bold">
            TRUSTED EVERYWHERE
          </p>
          <h2 className="mt-5 font-display font-black text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
            <span className="text-amber-400">웨딩</span>이든 <span className="text-amber-400">기업행사</span>든
            <br />
            <span className="text-white">어디든 다 됩니다.</span>
          </h2>
          <p className="mt-7 text-lg md:text-2xl text-white/80 leading-relaxed font-medium">
            우리투컷 포토부스는 행사 종류와 규모를 가리지 않습니다.
            <br className="hidden md:block" />
            <span className="text-white font-bold">10가지 분야 200+ 현장</span>에서 이미 검증되었습니다.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {CATEGORIES.map((c) => (
            <div
              key={c.name}
              className="group relative rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-amber-400/50 transition px-4 py-6 md:py-8 text-center"
            >
              <div className="text-4xl md:text-5xl mb-3" aria-hidden>
                {c.icon}
              </div>
              <p className="font-display font-black text-base md:text-xl text-white leading-tight">
                {c.name}
              </p>
              <div className="mt-2 h-0.5 w-8 mx-auto bg-amber-400/0 group-hover:bg-amber-400 transition" />
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Marquee covers={MARQUEE_COVERS} />
        </div>

        <div className="mt-12 text-center">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 font-bold text-base transition-colors"
            style={{ color: "#0a0a0a" }}
          >
            실제 활용 사례 보러가기
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
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
