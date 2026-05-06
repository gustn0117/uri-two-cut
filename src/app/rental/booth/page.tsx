import type { Metadata } from "next";
import ProductSpecs from "@/components/ProductSpecs";
import PricingTable from "@/components/PricingTable";
import ProcessSteps from "@/components/ProcessSteps";
import ProductFeatures from "@/components/ProductFeatures";
import ImageTextRow from "@/components/ImageTextRow";
import Comparison from "@/components/Comparison";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBar from "@/components/CtaBar";

export const metadata: Metadata = {
  title: "인생네컷 포토부스 대여 - 우리투컷",
  description: "필요한 순간, 공간, 브랜드에 딱 맞는 맞춤형 포토부스 대여",
};

const MODELS = [
  {
    code: "PHOTO-S-215IB",
    name: "미니스탠드",
    badge: "렌탈가능 모델",
    image: "/products/mini-stand.jpg",
    specs: [
      { label: "모니터", value: "21.5인치 정전식 터치모니터" },
      { label: "프린터", value: "염료승화 포토프린터" },
      { label: "카메라", value: "캐논 DSLR / 4K 카메라" },
      { label: "결제", value: "무료 / 카드 / 쿠폰" },
      { label: "소비전력", value: "350W" },
      { label: "전원", value: "220V, 50/60Hz" },
      { label: "케이스", value: "스틸" },
      { label: "무게", value: "100kg" },
      { label: "규격", value: "W570 x D460 x H1710 (mm)" },
    ],
  },
  {
    code: "PHOTO-B-215O",
    name: "부스",
    badge: "렌탈가능 모델",
    image: "/products/booth.jpg",
    specs: [
      { label: "모니터", value: "21.5인치 정전식 터치모니터" },
      { label: "프린터", value: "염료승화 포토프린터" },
      { label: "카메라", value: "캐논 DSLR / 4K 카메라" },
      { label: "결제", value: "무료 / 지폐 / 카드 / 쿠폰" },
      { label: "소비전력", value: "350W" },
      { label: "전원", value: "220V, 50/60Hz" },
      { label: "케이스", value: "스틸" },
      { label: "무게", value: "300kg" },
      { label: "규격", value: "W1400 x D1000 x H2010 (mm)" },
    ],
  },
];

const PRICING_MODELS = [
  { name: "미니스탠드", code: "PHOTO-S-215IB" },
  { name: "부스", code: "PHOTO-B-215O" },
];

const NORMAL_PRICING_ROWS = [
  {
    label: "4시간\n(1~4월, 6~8월만 가능)",
    values: ["500,000", "600,000"],
  },
  { label: "1일", values: ["800,000", "1,000,000"] },
  { label: "2일", values: ["1,300,000", "1,500,000"] },
  { label: "3일", values: ["1,800,000", "2,000,000"] },
  { label: "4일", values: ["2,300,000", "2,500,000"] },
  { label: "5일", values: ["2,800,000", "3,000,000"] },
  { label: "6일~1개월", values: ["3,300,000", "3,500,000"] },
  { label: "랩핑", values: ["400,000", "500,000"] },
  {
    label: "인화지",
    values: ["700장 기본 제공"],
    sub: "추가 시 700장 140,000",
  },
  {
    label: "백월",
    values: ["흰색, 검정, 분홍색 (택1) 50,000\n현수막 100,000", "X"],
  },
  {
    label: "소품",
    values: ["50,000 / 15종"],
    sub: "머리띠, 모자, 안경, 가발 외 랜덤",
  },
];

const AI_PRICING_ROWS = [
  { label: "1일", values: ["1,200,000"] },
  { label: "2일", values: ["1,700,000"] },
  { label: "3일", values: ["2,200,000"] },
  { label: "4일", values: ["2,750,000"] },
  { label: "5일", values: ["3,250,000"] },
  { label: "6일", values: ["3,750,000"] },
  {
    label: "1개월",
    values: ["5,000,000"],
    sub: "1컷으로 진행시 4,200,000",
  },
  { label: "랩핑", values: ["400,000", "500,000"] },
  {
    label: "인화지",
    values: ["700장 기본 제공"],
    sub: "추가 시 700장 140,000",
  },
  {
    label: "백월",
    values: ["흰색, 검정, 분홍색 (택1) 50,000\n현수막 100,000", "X"],
  },
  {
    label: "소품",
    values: ["50,000 / 15종"],
    sub: "머리띠, 모자, 안경, 가발 외 랜덤",
  },
];

export default function RentalBoothPage() {
  return (
    <main>
      <section
        className="relative pt-40 pb-32 text-white overflow-hidden"
        style={{
          background: "linear-gradient(120deg, #0a0a0a 0%, #1f1f1f 60%, #404040 120%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(50% 60% at 80% 30%, rgba(253,224,71,0.5) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="font-display tracking-[0.4em] text-sm opacity-80">PHOTO BOOTH</p>
          <h1 className="mt-5 font-display font-black text-5xl md:text-7xl lg:text-8xl">
            포토부스
          </h1>
          <p className="mt-7 text-lg md:text-2xl max-w-3xl leading-relaxed opacity-90">
            필요한 순간, 공간, 브랜드에 딱 맞는
            <br />
            맞춤형 키오스크를 만나보세요.
          </p>
        </div>
      </section>

      {/* PRODUCT + SPECS */}
      <div id="pricing" className="scroll-mt-24" />
      <ProductSpecs models={MODELS} title="제품 라인업" />

      {/* PRICING TABLES */}
      <PricingTable
        title="일반 포토부스 렌탈비용"
        models={PRICING_MODELS}
        rows={NORMAL_PRICING_ROWS}
        footnote="* 모든금액 vat별도"
      />
      <PricingTable
        title="AI 포토부스 렌탈비용"
        models={PRICING_MODELS}
        rows={AI_PRICING_ROWS}
        footnote="* 모든금액 vat별도"
      />
      <div className="h-12 bg-white" />

      <ProductFeatures />
      <ProcessSteps variant="rental" />

      {/* OUR CREATOR */}
      <section className="py-24 bg-[#f5f5f5] text-center">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <p className="font-display tracking-[0.4em] text-sm text-[#0a0a0a] font-bold">
            OUR CREATOR
          </p>
          <h2 className="mt-5 font-display font-black text-4xl md:text-6xl">
            우리투컷은 가능합니다<span className="text-[#0a0a0a]">.</span>
          </h2>
          <p className="mt-6 text-neutral-600 text-lg">
            행사에 감성을 더하는 단 하나의 선택, 우리투컷 포토부스 렌탈
          </p>
        </div>
      </section>

      <ImageTextRow
        eyebrow="FRAME"
        title={<>브랜드 맞춤 프레임으로<br />행사 퀄리티 UP</>}
        highlight="프레임디자인"
        description={"다양한 컬러·디자인 프레임을 제공하여\n기업/기관의 행사 목적과 브랜드 아이덴티티에\n최적화된 촬영 경험을 제공합니다."}
        ctas={[{ label: "프레임디자인 바로가기", href: "/inquiry/rental" }]}
        visual={
          <div className="rounded-2xl overflow-hidden bg-white shadow-lg max-w-[480px] mx-auto">
            <img src="/products/frames.jpg" alt="프레임 디자인 샘플" className="w-full h-auto" />
          </div>
        }
      />

      <ImageTextRow
        bg="#fafafa"
        reverse
        eyebrow="WRAPPING"
        title={<>눈에 띄는 포토부스,<br />강력한 브랜딩 효과</>}
        highlight="랩핑디자인"
        description={"전면·측면·후면 모두 원하는 비주얼로 커스터마이징 가능해,\n포토존을 브랜드 홍보 매체로 탈바꿈시킵니다."}
        ctas={[{ label: "랩핑디자인 바로가기", href: "/inquiry/rental" }]}
        visual={
          <div className="rounded-2xl overflow-hidden bg-white shadow-lg max-w-[480px] mx-auto">
            <img src="/products/wrapping.jpg" alt="랩핑 디자인 샘플" className="w-full h-auto" />
          </div>
        }
      />

      <ImageTextRow
        eyebrow="AI FILTER"
        title={<>SNS에서 확산되는<br />AI 필터 마케팅</>}
        highlight="AI 필터 / 배경 합성"
        description={"스케치, 카툰 스타일, 배경 제거·합성 등 다양한 AI 필터로\n참여형 콘텐츠를 만들어 SNS 확산을 유도합니다."}
        ctas={[{ label: "AI 필터 바로가기", href: "/inquiry/rental" }]}
        visual={
          <div className="rounded-2xl overflow-hidden bg-white shadow-lg max-w-[480px] mx-auto">
            <img src="/products/ai-filter.jpg" alt="AI 필터 예시" className="w-full h-auto" />
          </div>
        }
      />

      <ImageTextRow
        bg="#fafafa"
        reverse
        eyebrow="USER INTERFACE"
        title={<>고객을 위한<br />직관적인 포토키오스크 UI</>}
        highlight="우리투컷 UI"
        description={"심플한 화면 구성과 쉬운 흐름으로\n남녀노소 누구나 바로 사용할 수 있습니다.\n색상·디자인·다국어까지 풀 커스터마이징 가능합니다."}
        ctas={[{ label: "프로세스 바로보기", href: "/inquiry/rental" }]}
        visual={
          <div className="rounded-2xl overflow-hidden bg-white shadow-lg max-w-[480px] mx-auto">
            <img src="/products/ui.jpg" alt="UI 샘플" className="w-full h-auto" />
          </div>
        }
      />

      <ImageTextRow
        eyebrow="CAMPAIGN"
        title={<>이벤트·캠페인에 맞춘<br />맞춤형 미니게임</>}
        highlight="캠페인 솔루션"
        description={"MBTI·룰렛·뽑기·퀴즈 등 참여형 미니게임을 결합해\n브랜드 메시지를 자연스럽게 전달합니다."}
        ctas={[{ label: "캠페인 솔루션 바로가기", href: "/inquiry/rental" }]}
        visual={
          <div className="rounded-2xl overflow-hidden bg-white shadow-lg max-w-[480px] mx-auto">
            <img src="/products/campaign.jpg" alt="캠페인 솔루션" className="w-full h-auto" />
          </div>
        }
      />

      <ImageTextRow
        bg="#fafafa"
        reverse
        eyebrow="AI BACKGROUND"
        title={<>원하는 배경으로<br />간편하게</>}
        highlight="AI 배경 변경 필터"
        description={"AI로 촬영한 사진의 배경을 제거하여\n원하는 배경으로 간편하게 교체할 수 있습니다."}
        ctas={[{ label: "AI 배경 필터 바로가기", href: "/inquiry/rental" }]}
        visual={
          <div className="rounded-2xl overflow-hidden bg-white shadow-lg max-w-[480px] mx-auto">
            <img src="/products/ai-bg.jpg" alt="AI 배경 합성" className="w-full h-auto" />
          </div>
        }
      />

      <ImageTextRow
        eyebrow="BACKGROUND SHEET"
        title={<>브랜드 감성을 살리는</>}
        highlight="배경 시트지"
        description={"브랜드 감성과 행사 분위기를 표현하는\n맞춤형 배경 시트지 디자인 (부스 타입만 가능)"}
        visual={
          <div className="rounded-2xl overflow-hidden bg-white shadow-lg max-w-[480px] mx-auto">
            <img src="/products/background-sheet.jpg" alt="배경 시트지" className="w-full h-auto" />
          </div>
        }
      />

      <ImageTextRow
        bg="#fafafa"
        reverse
        eyebrow="PHOTO WALL"
        title={<>고객 맞춤 디자인<br />분위기를 바꿔주는</>}
        highlight="백월 · 현수막"
        description={"고객 맞춤 디자인으로 현장의 분위기를 바꿔주는\n백월 및 현수막을 제작해드립니다."}
        ctas={[{ label: "백월·현수막 바로가기", href: "/inquiry/rental" }]}
        visual={
          <div className="rounded-2xl overflow-hidden bg-white shadow-lg max-w-[480px] mx-auto">
            <img src="/products/photo-wall.jpg" alt="백월 / 현수막" className="w-full h-auto" />
          </div>
        }
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10 text-center">
          <p className="font-display tracking-[0.4em] text-sm text-[#0a0a0a] font-bold">BIGSIZE 4CUT</p>
          <h2 className="mt-4 font-display font-black text-4xl md:text-5xl">대세는 빅사이즈!</h2>
          <p className="mt-5 text-neutral-600 leading-relaxed">
            기존의 4컷 사이즈를 넘어, 더 크고 임팩트 있는<br />
            빅사이즈 4컷으로 행사의 분위기를 한층 끌어올립니다.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[700px] mx-auto">
            {["10cm", "15cm", "20cm", "25cm"].map((s) => (
              <div key={s} className="aspect-[3/4] rounded-md bg-neutral-900 grid place-items-end p-4">
                <span className="text-white font-display font-bold">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Comparison />
      <FaqAccordion title="포토부스 렌탈 FAQ" />

      <CtaBar
        title="포토부스 렌탈, 지금 바로 견적 받기"
        primary={{ label: "포토부스 렌탈문의", href: "/inquiry/rental" }}
      />
    </main>
  );
}
