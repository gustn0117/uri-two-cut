import type { Metadata } from "next";
import ProductSpecs from "@/components/ProductSpecs";
import ProcessSteps from "@/components/ProcessSteps";
import ImageTextRow, { TabletVisual, PaletteVisual } from "@/components/ImageTextRow";
import CtaBar from "@/components/CtaBar";

export const metadata: Metadata = {
  title: "게임 키오스크 렌탈 비용 - 우리투컷",
  description: "즐거움으로 브랜드를 기억하게 하다. 고객 참여율을 높이는 인터랙티브 콘텐츠.",
};

const MODELS = [
  {
    code: "DID",
    name: "게임 키오스크",
    badge: "렌탈가능 모델",
    specs: [
      { label: "모니터", value: "43인치 터치모니터" },
      { label: "소비전력", value: "350W" },
      { label: "전원", value: "220V, 50/60HZ" },
      { label: "케이스", value: "스틸" },
      { label: "무게", value: "100kg" },
      { label: "규격", value: "W650 x D500 x H1860mm(바퀴포함)" },
    ],
  },
];

export default function RentalGamePage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative pt-40 pb-32 text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, #0a0a0a 0%, #1f1f1f 60%, #404040 120%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(50% 60% at 80% 30%, rgba(253,224,71,0.5) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="font-display tracking-[0.4em] text-sm opacity-80">GAME KIOSK</p>
          <h1 className="mt-5 font-display font-black text-5xl md:text-7xl lg:text-8xl">
            게임키오스크
          </h1>
          <p className="mt-7 text-lg md:text-2xl max-w-3xl leading-relaxed opacity-90">
            즐거움으로 브랜드를 기억하게 하다.
            <br />
            고객 참여율을 높이는 인터랙티브 콘텐츠
          </p>
        </div>
      </section>

      <ProductSpecs models={MODELS} />
      <ProcessSteps variant="rental" />

      {/* OUR CREATOR */}
      <section className="py-24 bg-[#f5f5f5] text-center">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <p className="font-display tracking-[0.4em] text-sm text-[#0a0a0a] font-bold">
            OUR CREATOR
          </p>
          <h2 className="mt-5 font-display font-black text-4xl md:text-6xl">
            게임 커스터마이즈
            <br />
            <span className="text-[#0a0a0a]">기획 단계부터 함께.</span>
          </h2>
          <p className="mt-6 text-neutral-600 text-lg leading-relaxed">
            즐거움과 참여를 더하는
            <br />
            단 하나의 완벽한 솔루션
          </p>
        </div>
      </section>

      {/* WRAPPING */}
      <ImageTextRow
        eyebrow="WRAPPING"
        title={<>눈에 띄는 키오스크,<br />강력한 브랜딩 효과</>}
        highlight="랩핑디자인"
        description={"제품 외관에 브랜드 컬러와 메시지를 입혀\n현장에서도 강력한 브랜딩 효과를 누릴 수 있습니다."}
        ctas={[{ label: "랩핑디자인 바로가기", href: "/inquiry/rental" }]}
        visual={<PaletteVisual colors={["#0a0a0a", "#fde047", "#f97316", "#0ea5e9"]} />}
      />

      {/* CUSTOMIZATION */}
      <ImageTextRow
        bg="#fafafa"
        reverse
        eyebrow="CUSTOMIZATION"
        title={<>기획 단계부터 함께<br />완벽한 솔루션</>}
        highlight="커스터 마이즈"
        description={"협력사의 필요를 파악하고 세심하게 분석하여\n전문적인 솔루션을 제공해 드립니다."}
        ctas={[{ label: "커스텀 UI 바로가기", href: "/inquiry/rental" }]}
        visual={
          <TabletVisual bg="#0a0a0a">
            <div className="p-8 text-center w-full">
              <div className="font-display font-black text-2xl text-[#0a0a0a]">SPIN!</div>
              <div className="mt-4 mx-auto w-40 h-40 rounded-full bg-gradient-conic from-yellow-300 via-pink-400 to-purple-500" style={{ background: "conic-gradient(#fde047 0 25%, #fda4af 25% 50%, #737373 50% 75%, #ffffff 75% 100%)" }} />
              <p className="mt-4 text-xs text-neutral-500">룰렛 미니게임</p>
            </div>
          </TabletVisual>
        }
      />

      {/* USER INTERFACE */}
      <ImageTextRow
        eyebrow="USER INTERFACE"
        title={<>누구나 손쉽게</>}
        highlight="간편한 인터페이스"
        description={"단계별 흐름이 쉬운 설계로\n사용자 교육 없이도 바로 사용할 수 있어\n현장 운영자의 부담을 줄여드립니다."}
        ctas={[{ label: "프로세서 바로보기", href: "/inquiry/rental" }]}
        visual={
          <TabletVisual bg="#3f3f46">
            <div className="text-center p-8 w-full">
              <div className="font-display font-bold text-lg text-neutral-700">우리투컷 GAME</div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {["룰렛", "뽑기", "퀴즈", "AR"].map((g) => (
                  <button
                    key={g}
                    className="py-6 rounded-2xl bg-gradient-to-br from-[#0a0a0a] to-[#737373] text-white font-bold"
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </TabletVisual>
        }
      />

      <CtaBar
        title="게임 키오스크로 행사를 살리세요"
        primary={{ label: "게임키오스크 문의", href: "/inquiry/rental" }}
      />
    </main>
  );
}
