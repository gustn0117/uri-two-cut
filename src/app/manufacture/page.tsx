import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBar from "@/components/CtaBar";

export const metadata: Metadata = {
  title: "제작구매 · 우리투컷",
  description: "포토부스 / 포토카드 키오스크 제작 및 구매 서비스",
};

const ITEMS = [
  {
    href: "/manufacture/booth",
    title: "포토부스 제작·구매",
    desc: "스튜디오·매장·라운지 운영을 위한 자체 보유용 포토부스 제작·구매.",
    color: "#0a0a0a",
    chip: "BOOTH",
  },
  {
    href: "/manufacture/card",
    title: "포토카드 제작·구매",
    desc: "굿즈샵·팝업스토어 등에서 운영 가능한 포토카드 키오스크 구매.",
    color: "#262626",
    chip: "CARD",
  },
];

export default function ManufactureHubPage() {
  return (
    <main>
      <PageHero
        variant="dark"
        eyebrow="MANUFACTURE & PURCHASE"
        title="자체 보유용 키오스크 제작 · 구매"
        subtitle="국내납품, 해외수출(미국·호주·캐나다·일본·대만·베트남 외)까지 — 우리투컷의 직접 제작·납품 서비스를 만나보세요."
        breadcrumb={[{ label: "제작구매" }]}
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          {ITEMS.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="group relative rounded-3xl overflow-hidden p-12 min-h-[360px] flex flex-col justify-between text-white transition-transform hover:-translate-y-1.5 shadow-lg"
              style={{ background: it.color }}
            >
              <span className="inline-block w-fit text-xs tracking-widest border border-white/40 px-3 py-1 rounded-full">
                {it.chip}
              </span>
              <div>
                <h3 className="font-display font-bold text-3xl">{it.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed opacity-90">{it.desc}</p>
                <p className="mt-6 text-sm font-semibold inline-flex items-center gap-1">
                  자세히 보기
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </p>
              </div>
              <div
                aria-hidden
                className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-white/15 group-hover:scale-110 transition-transform"
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-center">
            제작 · 납품 프로세스
          </h2>
          <ol className="mt-12 grid md:grid-cols-6 gap-3 text-sm">
            {[
              { n: "01", t: "상담", d: "용도·예산·일정" },
              { n: "02", t: "디자인", d: "외관·UI 컨셉" },
              { n: "03", t: "프로토타입", d: "샘플 검수" },
              { n: "04", t: "제작", d: "본 제작·QA" },
              { n: "05", t: "납품 설치", d: "현장 설치·교육" },
              { n: "06", t: "사후관리", d: "AS·소모품 공급" },
            ].map((s) => (
              <li
                key={s.n}
                className="bg-white rounded-2xl p-5 border border-neutral-100 text-center"
              >
                <p className="font-display text-[#0a0a0a] font-bold">{s.n}</p>
                <p className="mt-2 font-semibold">{s.t}</p>
                <p className="mt-1 text-xs text-neutral-500">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBar
        title="제작 · 구매 견적이 필요하신가요?"
        primary={{ label: "구매 문의하기", href: "/inquiry/buy" }}
      />
    </main>
  );
}
