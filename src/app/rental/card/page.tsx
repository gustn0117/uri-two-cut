import type { Metadata } from "next";
import ProductSpecs from "@/components/ProductSpecs";
import ProcessSteps from "@/components/ProcessSteps";
import ProductFeatures from "@/components/ProductFeatures";
import ImageTextRow, { TabletVisual, PaletteVisual } from "@/components/ImageTextRow";
import CtaBar from "@/components/CtaBar";

export const metadata: Metadata = {
  title: "포토 카드 박스 키오스크 대여 - 우리투컷",
  description: "브랜드 굿즈, 이벤트 선물, 팬심 자극 아이템까지 현장에서 바로 촬영하고 출력되는 체험형 콘텐츠",
};

const MODELS = [
  {
    code: "PHOTO-S-215IA",
    name: "스탠드",
    badge: "렌탈가능 모델",
    specs: [
      { label: "모니터", value: "21.5인치 정전식 터치모니터" },
      { label: "프린터", value: "염료승화 카드프린터" },
      { label: "카메라", value: "캐논 DSLR / 4K 카메라" },
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
    badge: "렌탈가능 모델",
    specs: [
      { label: "모니터", value: "21.5인치 정전식 터치모니터" },
      { label: "프린터", value: "염료승화 카드프린터" },
      { label: "카메라", value: "캐논 DSLR / 4K 카메라" },
      { label: "결제", value: "무료, 지폐, 카드" },
      { label: "소비전력", value: "350W" },
      { label: "전원", value: "220V, 50/60HZ" },
      { label: "케이스", value: "스틸" },
      { label: "무게", value: "300kg" },
      { label: "규격", value: "W1400 x D1000 x H2015mm" },
    ],
  },
];

export default function RentalCardPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative pt-40 pb-32 text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg,#14532d 0%,#16a34a 60%,#86efac 120%)",
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
      <ProcessSteps variant="rental" />

      {/* CARD DESIGN */}
      <ImageTextRow
        eyebrow="CARD DESIGN"
        title={<>브랜드 아이덴티티를 담은</>}
        highlight="카드디자인"
        description={"기업/기관/팬덤 굿즈에 어울리는 카드 디자인을\n현장 콘셉트에 맞춰 풀커스텀으로 제작합니다."}
        ctas={[{ label: "카드디자인 바로가기", href: "/inquiry/rental" }]}
        visual={
          <div className="grid grid-cols-3 gap-3 max-w-[480px] mx-auto">
            {["#fde68a", "#fca5a5", "#a5b4fc", "#bbf7d0", "#fbcfe8", "#fcd34d"].map((c, i) => (
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

      {/* WRAPPING */}
      <ImageTextRow
        bg="#fafafa"
        reverse
        eyebrow="WRAPPING"
        title={<>눈에 띄는 카드 키오스크,<br />강력한 브랜딩 효과</>}
        highlight="랩핑디자인"
        description={"전면·측면·후면 모두 원하는 비주얼로 커스터마이징 가능해,\n포토존을 브랜드 홍보 매체로 탈바꿈시킵니다."}
        ctas={[{ label: "랩핑디자인 바로가기", href: "/inquiry/rental" }]}
        visual={<PaletteVisual colors={["#fda4af", "#bfdbfe", "#fde047", "#a7f3d0"]} />}
      />

      {/* USER INTERFACE */}
      <ImageTextRow
        eyebrow="USER INTERFACE"
        title={<>고객을 위한<br />직관적인 카드 키오스크 UI</>}
        highlight="우리투컷 UI"
        description={"심플한 화면 구성과 쉬운 흐름으로\n남녀노소 누구나 바로 사용할 수 있습니다."}
        ctas={[{ label: "프로세서 바로보기", href: "/inquiry/rental" }]}
        visual={
          <TabletVisual bg="#3f3f46">
            <div className="text-center p-6">
              <div className="font-display font-bold text-lg text-neutral-700">우리투컷</div>
              <div className="mt-2 text-xs text-neutral-400 tracking-widest">CARD KIOSK</div>
              <div className="mt-6 grid grid-cols-3 gap-1.5">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-[3/4] rounded bg-neutral-200" />
                ))}
              </div>
            </div>
          </TabletVisual>
        }
      />

      <CtaBar
        title="포토카드 렌탈 견적 문의"
        primary={{ label: "포토카드 렌탈문의", href: "/inquiry/rental" }}
      />
    </main>
  );
}
