import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBar from "@/components/CtaBar";

export const metadata: Metadata = {
  title: "행사렌탈 · 우리투컷",
  description: "우리투컷의 포토부스 / 포토카드 / 게임키오스크 행사 렌탈 서비스",
};

const ITEMS = [
  {
    href: "/rental/booth",
    title: "포토부스 렌탈",
    desc: "공간·브랜드·예산에 맞춘 맞춤형 포토부스를 단·중·장기 렌탈합니다.",
    color: "#0a0a0a",
    chip: "BOOTH",
  },
  {
    href: "/rental/card",
    title: "포토카드 렌탈",
    desc: "현장에서 즉석 인쇄되는 브랜드 굿즈형 포토카드 키오스크.",
    color: "#16a34a",
    chip: "CARD",
  },
  {
    href: "/rental/game",
    title: "게임키오스크 렌탈",
    desc: "룰렛·미니게임 등 인터랙티브 콘텐츠로 참여율을 끌어올립니다.",
    color: "#7c3aed",
    chip: "GAME",
  },
];

export default function RentalHubPage() {
  return (
    <main>
      <PageHero
        variant="blue"
        eyebrow="EVENT RENTAL"
        title="행사 · 축제 · 팝업을 위한 렌탈 서비스"
        subtitle="기업 행사부터 지역 축제, 학교·기관 행사, 팝업스토어까지. 공간과 일정에 꼭 맞는 키오스크를 빌려드립니다."
        breadcrumb={[{ label: "행사렌탈" }]}
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-3 gap-6">
          {ITEMS.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="group relative rounded-3xl overflow-hidden p-10 min-h-[360px] flex flex-col justify-between text-white transition-transform hover:-translate-y-1.5 shadow-lg"
              style={{ background: it.color }}
            >
              <div>
                <span className="inline-block text-xs tracking-widest bg-white/15 px-3 py-1 rounded-full">
                  {it.chip}
                </span>
                <h3 className="mt-4 font-display font-bold text-2xl">{it.title}</h3>
              </div>
              <div>
                <p className="text-[15px] leading-relaxed opacity-90">{it.desc}</p>
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
            렌탈 진행 프로세스
          </h2>
          <ol className="mt-12 grid md:grid-cols-5 gap-3 text-sm">
            {[
              { n: "01", t: "문의 접수", d: "온라인 폼 또는 전화" },
              { n: "02", t: "견적 제안", d: "예산·일정 맞춤 견적" },
              { n: "03", t: "계약 체결", d: "옵션 확정·계약" },
              { n: "04", t: "설치 운영", d: "현장 셋업·운영" },
              { n: "05", t: "회수·정산", d: "회수 후 후기 안내" },
            ].map((s) => (
              <li
                key={s.n}
                className="bg-white rounded-2xl p-6 border border-neutral-100 text-center"
              >
                <p className="font-display text-[#1A6DFF] font-bold">{s.n}</p>
                <p className="mt-2 font-semibold">{s.t}</p>
                <p className="mt-1 text-xs text-neutral-500">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBar />
    </main>
  );
}
