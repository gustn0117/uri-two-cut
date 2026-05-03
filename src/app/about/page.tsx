import type { Metadata } from "next";
import Link from "next/link";
import AboutStats from "@/components/AboutStats";
import { Store, Laptop, Tools } from "@/components/icons";
import FlagBadge from "@/components/FlagBadge";

export const metadata: Metadata = {
  title: "회사 소개 · 우리투컷 | 포토부스·포토키오스크 제작·대여",
  description: "포토부스·포토카드·게임·DID 키오스크의 새로운 기준 우리투컷",
};

const COUNTRIES: { code: string; name: string }[] = [
  { code: "AU", name: "Australia" }, { code: "AT", name: "Austria" }, { code: "BE", name: "Belgium" }, { code: "BR", name: "Brazil" },
  { code: "BG", name: "Bulgaria" }, { code: "CA", name: "Canada" }, { code: "HR", name: "Croatia" }, { code: "CY", name: "Cyprus" },
  { code: "CZ", name: "Czech Republic" }, { code: "DK", name: "Denmark" }, { code: "EE", name: "Estonia" }, { code: "FI", name: "Finland" },
  { code: "FR", name: "France" }, { code: "DE", name: "Germany" }, { code: "GI", name: "Gibraltar" }, { code: "GR", name: "Greece" },
  { code: "HK", name: "Hong Kong" }, { code: "HU", name: "Hungary" }, { code: "IN", name: "India" }, { code: "ID", name: "Indonesia" },
  { code: "IE", name: "Ireland" }, { code: "IT", name: "Italy" }, { code: "JP", name: "Japan" }, { code: "LV", name: "Latvia" },
  { code: "LI", name: "Liechtenstein" }, { code: "LT", name: "Lithuania" }, { code: "LU", name: "Luxembourg" }, { code: "MY", name: "Malaysia" },
  { code: "MT", name: "Malta" }, { code: "MX", name: "Mexico" }, { code: "NL", name: "Netherlands" }, { code: "NZ", name: "New Zealand" },
  { code: "NO", name: "Norway" }, { code: "PL", name: "Poland" }, { code: "PT", name: "Portugal" }, { code: "RO", name: "Romania" },
  { code: "SG", name: "Singapore" }, { code: "SK", name: "Slovakia" }, { code: "SI", name: "Slovenia" }, { code: "ES", name: "Spain" },
  { code: "SE", name: "Sweden" }, { code: "CH", name: "Switzerland" }, { code: "TH", name: "Thailand" }, { code: "AE", name: "United Arab Emirates" },
  { code: "GB", name: "United Kingdom" }, { code: "US", name: "United States" },
];

const CERTS = [
  { name: "KC", desc: "한국 전기·전자기기 인증" },
  { name: "CE", desc: "유럽 인증" },
  { name: "FCC", desc: "미국 연방통신위원회 인증" },
  { name: "PSE", desc: "일본 전기용품 안전법 인증" },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative pt-40 pb-32 text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1f1f1f 60%, #404040 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(40% 40% at 70% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="text-xs tracking-[0.4em] opacity-80">ABOUT</p>
          <h1 className="mt-5 font-display font-black text-3xl md:text-5xl lg:text-6xl leading-tight">
            포토부스 · 포토카드 · 게임 · DID
            <br />
            키오스크의 새로운 기준
          </h1>
        </div>
      </section>

      {/* OUR SERVICE */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="text-xs tracking-[0.4em] text-[#0a0a0a] font-bold">OUR SERVICE</p>
          <h2 className="mt-5 font-display font-black text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
            브랜드를 경험으로, 공간을 자산으로
            <br />
            맞춤형 포토 키오스크
          </h2>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {[
              {
                img: "linear-gradient(135deg, #404040, #0a0a0a)",
                Icon: Store,
                title: "다양한 종류의 부스 및 기계 보유",
                desc: "전시·행사 맞춤형 키오스크\n다양한 타입의 부스를 직접 제작·보유합니다.",
              },
              {
                img: "linear-gradient(135deg, #525252, #171717)",
                Icon: Laptop,
                title: "자체 프로그램 개발",
                desc: "AI·필터·기능 등 업체 브랜드에 맞는 커스텀 개발로\n브랜딩 효과를 높입니다.",
              },
              {
                img: "linear-gradient(135deg, #737373, #262626)",
                Icon: Tools,
                title: "포토부스 제작부터 관리까지",
                desc: "랩핑·백월·배경시트지까지 전부 제작해드립니다.",
              },
            ].map((c) => (
              <article key={c.title}>
                <div
                  className="aspect-[4/3] rounded-2xl grid place-items-center text-white mb-6"
                  style={{ background: c.img }}
                >
                  <c.Icon className="w-24 h-24" />
                </div>
                <h3 className="font-display font-bold text-xl">{c.title}</h3>
                <p className="mt-4 text-neutral-600 leading-relaxed whitespace-pre-line">
                  {c.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 기술개발 및 안전성 */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <h2 className="font-display font-black text-3xl md:text-4xl text-[#0a0a0a]">
            기술개발 및 안전성
          </h2>
          <p className="mt-5 text-neutral-700 max-w-3xl">
            우리투컷은 엄격한 품질 기준을 적용해 제품의 신뢰성을 높이고,{" "}
            <strong className="text-[#0a0a0a]">까다로운 검증을 통해 전자기기 인증을 통과</strong>
            하여 고객 만족을 보장합니다.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {CERTS.map((c) => (
              <div
                key={c.name}
                className="bg-white rounded-2xl p-8 text-center border border-[#0a0a0a]/10"
              >
                <div className="font-display font-black text-5xl text-neutral-900">
                  {c.name}
                </div>
                <p className="mt-3 text-xs text-neutral-500">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 국가별 카드결제 모듈 개발 */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <h2 className="font-display font-black text-3xl md:text-4xl text-[#0a0a0a]">
            국가별 카드결제 모듈 개발
          </h2>
          <p className="mt-5 text-neutral-700 max-w-3xl">
            우리투컷은 국가별 결제 플랫폼 구축,{" "}
            <strong className="text-[#0a0a0a]">전세계 46개국의 기업에서 사용 가능</strong> 합니다.
          </p>

          <div className="mt-12 rounded-3xl border border-neutral-200 p-8 md:p-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
            {COUNTRIES.map((c) => (
              <div key={c.name} className="flex items-center gap-3 text-sm">
                <FlagBadge code={c.code} className="w-6 h-4" />
                <span className="text-neutral-700">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROJECT (dark with stats) */}
      <section className="relative py-28 text-white overflow-hidden">
        <div className="absolute inset-0 bg-neutral-900" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),linear-gradient(45deg,#1a1a1a 25%,transparent 25%,transparent 75%,#1a1a1a 75%,#1a1a1a),linear-gradient(45deg,#1a1a1a 25%,transparent 25%,transparent 75%,#1a1a1a 75%,#1a1a1a)",
            backgroundSize: "100% 100%, 60px 60px, 60px 60px",
            backgroundPosition: "0 0, 0 0, 30px 30px",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <p className="font-display tracking-[0.4em] text-sm text-white/70 font-bold">OUR PROJECT</p>
          <h2 className="mt-5 font-display font-black text-3xl md:text-4xl lg:text-5xl leading-tight">
            우리투컷과 함께한
            <br />
            프로젝트 <span className="text-white/70">5000+</span>건의 노하우를 만나보세요.
          </h2>
        </div>
        <AboutStats />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 mt-16">
          <div className="border-t border-white/10 pt-10 text-center">
            <p className="font-display font-bold text-lg md:text-2xl tracking-wide opacity-90">
              PHOTO, DESIGN, EXPERIENCE!{" "}
              <span className="text-white/70">URI TWO CUT SELF PHOTO STUDIO</span>
            </p>
          </div>
        </div>
      </section>

      {/* OUR WORK */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="font-display tracking-[0.4em] text-sm text-[#0a0a0a] font-bold text-right">
            OUR WORK
          </p>
          <h2 className="mt-4 font-display font-black text-3xl md:text-5xl text-right leading-tight">
            우리투컷은 브랜드별 요구에 맞춰
            <br />
            국내 · 해외로 커스텀 키오스크를 개발합니다.
          </h2>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { c: "#0a0a0a", t: "코닥" }, { c: "#171717", t: "Galaxy AI" },
              { c: "#262626", t: "PHOTO BOOTH" }, { c: "#404040", t: "쿠키런" },
              { c: "#525252", t: "EVENT" }, { c: "#737373", t: "DPlus KIA" },
              { c: "#0a0a0a", t: "Tik Tok" }, { c: "#262626", t: "카카오페이" },
              { c: "#171717", t: "페스티벌" }, { c: "#404040", t: "버버리" },
              { c: "#525252", t: "농심" }, { c: "#171717", t: "안랩" },
            ].map((p, i) => (
              <div
                key={i}
                className="aspect-[4/5] rounded-2xl relative overflow-hidden grid place-items-center"
                style={{ background: p.c }}
              >
                <span className="text-white/90 font-display font-bold text-xs tracking-wider text-center px-2">
                  {p.t}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.4em] opacity-80">CONTACT</p>
            <h2 className="mt-3 font-display font-black text-2xl md:text-3xl">
              지금 바로 우리투컷에 문의하세요
            </h2>
          </div>
          <div className="flex gap-3">
            <Link
              href="/inquiry/rental"
              className="px-6 py-3 rounded-full bg-white font-bold"
              style={{ color: "#0a0a0a" }}
            >
              렌탈 문의
            </Link>
            <Link
              href="/inquiry/buy"
              className="px-6 py-3 rounded-full border border-white/40 hover:bg-white/10 font-bold"
            >
              구매 문의
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
