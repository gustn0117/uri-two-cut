import type { Metadata } from "next";
import ProductSpecs from "@/components/ProductSpecs";
import ProcessSteps from "@/components/ProcessSteps";
import ImageTextRow from "@/components/ImageTextRow";
import PricingTable from "@/components/PricingTable";
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
    image: "/products/game/kiosk.jpg",
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

const PRICING_MODELS = [{ name: "게임 키오스크", code: "DID 43\"" }];

const PRICING_ROWS = [
  { label: "1일", values: ["1,000,000"] },
  { label: "2일", values: ["1,200,000"] },
  { label: "3일", values: ["1,400,000"] },
  { label: "4일", values: ["1,600,000"] },
  { label: "5일", values: ["1,800,000"] },
  { label: "6일~1개월", values: ["2,000,000"] },
  {
    label: "랩핑",
    values: ["300,000"],
    sub: "랩핑 없을 시 기본 화이트 색상",
  },
  {
    label: "포토부스 동반 렌탈",
    values: ["게임키오스크 총액의 30% 할인"],
    muted: true,
  },
];

function PhotoVisual({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl max-w-[480px] bg-white">
      <img src={src} alt={alt} className="w-full h-auto block" />
    </div>
  );
}

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

      <div id="pricing" className="scroll-mt-24" />
      <ProductSpecs models={MODELS} wrappable imageAspect="3/4" />

      {/* PRICING */}
      <PricingTable
        title="게임키오스크 렌탈비용"
        models={PRICING_MODELS}
        rows={PRICING_ROWS}
        footnote="* 모든금액 vat별도 / 타업체 대비 착한 가격"
      />
      <div className="h-12 bg-white" />

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
        visual={<PhotoVisual src="/products/game/wrapping.jpg" alt="게임키오스크 랩핑디자인" />}
      />

      {/* CUSTOMIZATION */}
      <ImageTextRow
        bg="#fafafa"
        reverse
        eyebrow="CUSTOMIZATION"
        title={<>기획 단계부터 함께<br />완벽한 솔루션</>}
        highlight="커스터 마이즈"
        description={"협력사의 필요를 파악하고 세심하게 분석하여\n전문적인 솔루션을 제공해 드립니다."}
        visual={<PhotoVisual src="/products/game/customize.jpg" alt="게임키오스크 커스터마이즈" />}
      />

      {/* USER INTERFACE */}
      <ImageTextRow
        eyebrow="USER INTERFACE"
        title={<>누구나 손쉽게</>}
        highlight="간편한 인터페이스"
        description={"단계별 흐름이 쉬운 설계로\n사용자 교육 없이도 바로 사용할 수 있어\n현장 운영자의 부담을 줄여드립니다."}
        visual={<PhotoVisual src="/products/game/interface.jpg" alt="게임키오스크 간편한 인터페이스" />}
      />

      <CtaBar
        title="게임 키오스크로 행사를 살리세요"
        primary={{ label: "게임키오스크 문의", href: "/inquiry/rental" }}
      />
    </main>
  );
}
