import type { Metadata } from "next";
import ProductSpecs from "@/components/ProductSpecs";
import ProcessSteps from "@/components/ProcessSteps";
import ProductFeatures from "@/components/ProductFeatures";
import ImageTextRow from "@/components/ImageTextRow";
import Comparison from "@/components/Comparison";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBar from "@/components/CtaBar";

export const metadata: Metadata = {
  title: "포토 카드 박스 키오스크 제작 - 우리투컷",
  description: "굿즈샵·팝업스토어 운영을 위한 포토카드 키오스크 제작·구매",
};

const MODELS = [
  {
    code: "PHOTO-S-215IA",
    name: "스탠드 (일자형)",
    badge: "구매가능 모델",
    image: "/products/stand.jpg",
    price: "별도 문의",
    specs: [
      { label: "모니터", value: "21.5인치 정전식 터치모니터" },
      { label: "프린터", value: "염료승화 카드프린터" },
      { label: "카메라", value: "캐논 DSLR / 캐논 Mirrorless" },
      { label: "결제", value: "무료 / 지폐 / 카드 / 쿠폰" },
      { label: "소비전력", value: "350W" },
      { label: "전원", value: "220V, 50/60Hz" },
      { label: "케이스", value: "스틸" },
      { label: "무게", value: "120kg" },
      { label: "규격", value: "W800 x D550 x H2025 (mm)" },
    ],
  },
  {
    code: "PHOTO-B-215O",
    name: "부스 (박스형)",
    badge: "구매가능 모델",
    image: "/products/booth.jpg",
    price: "별도 문의",
    specs: [
      { label: "모니터", value: "21.5인치 정전식 터치모니터" },
      { label: "프린터", value: "염료승화 카드프린터" },
      { label: "카메라", value: "캐논 DSLR / 캐논 Mirrorless" },
      { label: "결제", value: "무료 / 지폐 / 카드 / 쿠폰" },
      { label: "소비전력", value: "350W" },
      { label: "전원", value: "220V, 50/60Hz" },
      { label: "케이스", value: "스틸" },
      { label: "무게", value: "300kg" },
      { label: "규격", value: "W1400 x D1000 x H2015 (mm)" },
    ],
  },
];

export default function ManufactureCardPage() {
  return (
    <main>
      <section
        className="relative pt-40 pb-32 text-white overflow-hidden"
        style={{
          background: "linear-gradient(120deg, #0a0a0a 0%, #1f1f1f 60%, #404040 120%)",
        }}
      >
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="font-display tracking-[0.4em] text-sm opacity-80">PHOTO CARD</p>
          <h1 className="mt-5 font-display font-black text-5xl md:text-7xl lg:text-8xl">
            포토카드
          </h1>
          <p className="mt-7 text-lg md:text-2xl max-w-3xl leading-relaxed opacity-90">
            브랜드 굿즈, 이벤트 선물, 팬심 자극 아이템까지
            <br />
            현장에서 바로 촬영하고 출력되는 체험형 콘텐츠
          </p>
        </div>
      </section>

      <div id="pricing" className="scroll-mt-24" />
      <ProductSpecs models={MODELS} title="제품 라인업 · 구매" showPricing />

      <ProductFeatures />
      <ProcessSteps variant="make" title="제작 프로세스." />

      <ImageTextRow
        eyebrow="CARD DESIGN"
        title={<>브랜드 아이덴티티를 담은</>}
        highlight="카드디자인"
        description={"기업/기관/팬덤 굿즈에 어울리는 카드 디자인을\n매장 콘셉트에 맞춰 풀커스텀으로 제작합니다."}
        ctas={[{ label: "카드디자인 바로가기", href: "/inquiry/buy" }]}
        visual={
          <div className="rounded-2xl overflow-hidden bg-white shadow-lg max-w-[480px] mx-auto">
            <img src="/products/frames.jpg" alt="카드 디자인 샘플" className="w-full h-auto" />
          </div>
        }
      />

      <ImageTextRow
        bg="#fafafa"
        reverse
        eyebrow="WRAPPING"
        title={<>눈에 띄는 카드 키오스크,<br />강력한 브랜딩 효과</>}
        highlight="랩핑디자인"
        description={"전면·측면·후면 모두 원하는 비주얼로 커스터마이징 가능해\n매장을 브랜드 홍보 매체로 탈바꿈시킵니다."}
        ctas={[{ label: "랩핑디자인 바로가기", href: "/inquiry/buy" }]}
        visual={
          <div className="rounded-2xl overflow-hidden bg-white shadow-lg max-w-[480px] mx-auto">
            <img src="/products/wrapping.jpg" alt="랩핑 디자인 샘플" className="w-full h-auto" />
          </div>
        }
      />

      <ImageTextRow
        eyebrow="AI FILTER"
        title={<>SNS에서 확산되는<br />AI 필터 마케팅</>}
        highlight="AI 필터"
        description={"스케치, 카툰 스타일, 배경 합성 등 다양한 AI 필터로\nSNS 확산형 콘텐츠를 만들 수 있습니다."}
        ctas={[{ label: "AI 필터 바로가기", href: "/inquiry/buy" }]}
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
        title={<>고객을 위한<br />직관적인 카드 키오스크 UI</>}
        highlight="우리투컷 UI"
        description={"심플한 화면 구성과 쉬운 흐름으로\n남녀노소 누구나 바로 사용할 수 있습니다."}
        ctas={[{ label: "프로세스 바로보기", href: "/inquiry/buy" }]}
        visual={
          <div className="rounded-2xl overflow-hidden bg-white shadow-lg max-w-[480px] mx-auto">
            <img src="/products/ui.jpg" alt="UI 샘플" className="w-full h-auto" />
          </div>
        }
      />

      <Comparison />
      <FaqAccordion title="포토카드 구매 FAQ" />

      <CtaBar
        title="포토카드 키오스크 견적 문의"
        primary={{ label: "포토카드 구매문의", href: "/inquiry/buy" }}
      />
    </main>
  );
}
