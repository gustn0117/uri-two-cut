"use client";

import projectsData from "@/lib/projects.json";

type Project = { id: string; category: string; cover: string };

const ALL = projectsData as Project[];

const MARQUEE_COVERS = ALL.filter((p) => p.cover).slice(0, 24).map((p) => p.cover);

const SVG_BASE = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ICON_CLS = "w-9 h-9 md:w-10 md:h-10";

function IconBuilding() {
  return (
    <svg className={ICON_CLS} {...SVG_BASE}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 8h.01M12 8h.01M15 8h.01M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01" />
      <path d="M10 21v-3h4v3" />
    </svg>
  );
}
function IconGov() {
  return (
    <svg className={ICON_CLS} {...SVG_BASE}>
      <path d="M3 21h18" />
      <path d="M5 21V11M9 21V11M12 21V11M15 21V11M19 21V11" />
      <path d="M3 11h18" />
      <path d="M12 3 3 9h18z" />
    </svg>
  );
}
function IconCap() {
  return (
    <svg className={ICON_CLS} {...SVG_BASE}>
      <path d="M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
      <path d="M22 10v5" />
    </svg>
  );
}
function IconTent() {
  return (
    <svg className={ICON_CLS} {...SVG_BASE}>
      <path d="M12 4 3 20h18z" />
      <path d="M12 4v16" />
      <path d="M9 20l3-6 3 6" />
    </svg>
  );
}
function IconMic() {
  return (
    <svg className={ICON_CLS} {...SVG_BASE}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3" />
      <path d="M9 21h6" />
    </svg>
  );
}
function IconTrophy() {
  return (
    <svg className={ICON_CLS} {...SVG_BASE}>
      <path d="M8 3h8v5a4 4 0 0 1-8 0z" />
      <path d="M8 5H4v2a3 3 0 0 0 3 3" />
      <path d="M16 5h4v2a3 3 0 0 1-3 3" />
      <path d="M10 14h4v3h-4z" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  );
}
function IconBag() {
  return (
    <svg className={ICON_CLS} {...SVG_BASE}>
      <path d="M5 8h14l-1 12H6z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}
function IconFilm() {
  return (
    <svg className={ICON_CLS} {...SVG_BASE}>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M7 4v16M17 4v16M3 8h4M3 12h4M3 16h4M17 8h4M17 12h4M17 16h4" />
    </svg>
  );
}
function IconChurch() {
  return (
    <svg className={ICON_CLS} {...SVG_BASE}>
      <path d="M12 2v6" />
      <path d="M9 5h6" />
      <path d="M5 21V11l7-4 7 4v10" />
      <path d="M10 21v-5h4v5" />
    </svg>
  );
}
function IconRing() {
  return (
    <svg className={ICON_CLS} {...SVG_BASE}>
      <circle cx="12" cy="15" r="6" />
      <path d="M9 5l3-2 3 2-1 4h-4z" />
    </svg>
  );
}

const CATEGORIES: { name: string; filter: string; Icon: () => React.ReactElement }[] = [
  { name: "기업 행사", filter: "기업·관공서", Icon: IconBuilding },
  { name: "관공서", filter: "기업·관공서", Icon: IconGov },
  { name: "학교", filter: "교육·학교", Icon: IconCap },
  { name: "페스티벌", filter: "페스티벌·축제", Icon: IconTent },
  { name: "학회·컨퍼런스", filter: "학회·컨퍼런스", Icon: IconMic },
  { name: "스포츠", filter: "스포츠", Icon: IconTrophy },
  { name: "팝업스토어", filter: "팝업·브랜드", Icon: IconBag },
  { name: "엔터·미디어", filter: "엔터·미디어", Icon: IconFilm },
  { name: "교회", filter: "교회", Icon: IconChurch },
  { name: "웨딩", filter: "웨딩", Icon: IconRing },
];

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
            <span className="text-amber-400">축제·이벤트</span>든 <span className="text-amber-400">기업행사</span>든
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
          {CATEGORIES.map(({ name, filter, Icon }) => (
            <a
              key={name}
              href={`/portfolio?category=${encodeURIComponent(filter)}`}
              className="group relative rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-amber-400/50 transition px-4 py-6 md:py-8 text-center cursor-pointer"
            >
              <div className="text-amber-400 grid place-items-center mb-3">
                <Icon />
              </div>
              <p className="font-display font-black text-base md:text-xl text-white leading-tight">
                {name}
              </p>
              <div className="mt-2 h-0.5 w-8 mx-auto bg-amber-400/0 group-hover:bg-amber-400 transition" />
            </a>
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
