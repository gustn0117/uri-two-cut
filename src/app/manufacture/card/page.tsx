import type { Metadata } from "next";
import ProductSpecs from "@/components/ProductSpecs";
import ProcessSteps from "@/components/ProcessSteps";
import ProductFeatures from "@/components/ProductFeatures";
import ImageTextRow, { TabletVisual, PaletteVisual } from "@/components/ImageTextRow";
import CtaBar from "@/components/CtaBar";

export const metadata: Metadata = {
  title: "포토 카드 박스 키오스크 제작 - 우리투컷",
  description: "굿즈샵·팝업스토어 운영을 위한 포토카드 키오스크 제작·구매",
};

const MODELS = [
  {
    code: "PHOTO-S-215IA",
    name: "스탠드",
    badge: "구매가능 모델",
    specs: [
      { label: "모니터", value: "21.5인치 정전식 터치모니터" },
      { label: "프린터", value: "염료승화 카드프린터" },
      { label: "카메라", value: "캐논 DSLR / 캐논 Mirrorless" },
      { label: "결제", value: "무료, 지폐, 카드" },
      { label: "소비전력", value: "350W" },
      { label: "전원", value: "220V, 50/60HZ" },
      { label: "케이스", value: "스틸" },
      { label: "무게", value: "120kg" },
      { label: "규격", value: "W800 x D550 x H2025mm" },
    ],
  },
  {
    code: "PHOTO-B-215O",
    name: "부스",
    badge: "구매가능 모델",
    specs: [
      { label: "모니터", value: "21.5인치 정전식 터치모니터" },
      { label: "프린터", value: "염료승화 카드프린터" },
      { label: "카메라", value: "캐논 DSLR / 캐논 Mirrorless" },
      { label: "결제", value: "무료, 지폐, 카드" },
      { label: "소비전력", value: "350W" },
      { label: "전원", value: "220V, 50/60HZ" },
      { label: "케이스", value: "스틸" },
      { label: "무게", value: "300kg" },
      { label: "규격", value: "W1400 x D1000 x H2015mm" },
    ],
  },
];

export default function ManufactureCardPage() {
  return (
    <main>
      <section
        className="relative pt-40 pb-32 text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, #0a0a0a 0%, #1f1f1f 60%, #404040 120%)",
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

      <ProductFeatures />
      <ProductSpecs models={MODELS} />
      <ProcessSteps variant="make" title="제작 프로세스." />

      <ImageTextRow
        eyebrow="CARD DESIGN"
        title={<>브랜드 아이덴티티를 담은</>}
        highlight="카드디자인"
        description={"기업/기관/팬덤 굿즈에 어울리는 카드 디자인을\n매장 콘셉트에 맞춰 풀커스텀으로 제작합니다."}
        ctas={[{ label: "카드디자인 바로가기", href: "/inquiry/buy" }]}
        visual={
          <div className="grid grid-cols-3 gap-3 max-w-[480px] mx-auto">
            {["#ffffff", "#fca5a5", "#a5b4fc", "#bbf7d0", "#fbcfe8", "#fcd34d"].map((c, i) => (
              <div
                key={i}
                className="aspect-[3/4] rounded-md shadow-md grid place-items-center"
                style={{ background: c }}
              >
                <div className="w-3/4 h-3/4 rounded-sm bg-white/40" />
              </div>
            ))}
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
        visual={<PaletteVisual colors={["#fda4af", "#bfdbfe", "#fde047", "#a7f3d0"]} />}
      />

      <CtaBar
        title="포토카드 키오스크 견적 문의"
        primary={{ label: "포토카드 구매문의", href: "/inquiry/buy" }}
      />
    </main>
  );
}
