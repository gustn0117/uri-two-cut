import type { Metadata } from "next";
import ProductSpecs from "@/components/ProductSpecs";
import ProcessSteps from "@/components/ProcessSteps";
import ProductFeatures from "@/components/ProductFeatures";
import ImageTextRow, { TabletVisual, PaletteVisual } from "@/components/ImageTextRow";
import CtaBar from "@/components/CtaBar";

export const metadata: Metadata = {
  title: "인생네컷 포토부스 기계 제작 가격 - 우리투컷",
  description: "필요한 순간, 공간, 브랜드에 딱 맞는 맞춤형 키오스크 제작·구매",
};

const MODELS = [
  {
    code: "PHOTO-S-215IB",
    name: "미니스탠드",
    badge: "구매가능 모델",
    specs: [
      { label: "모니터", value: "21.5인치 정전식 터치모니터" },
      { label: "프린터", value: "염료승화 포토프린터" },
      { label: "카메라", value: "캐논 DSLR / 캐논 Mirrorless" },
      { label: "결제", value: "무료, 지폐, 카드" },
      { label: "소비전력", value: "350W" },
      { label: "전원", value: "220V, 50/60HZ" },
      { label: "케이스", value: "스틸" },
      { label: "무게", value: "80kg" },
      { label: "규격", value: "W670 x D460 x H1810mm(인화지출력구 포함)" },
    ],
  },
  {
    code: "PHOTO-S-215IA",
    name: "스탠드",
    badge: "구매가능 모델",
    specs: [
      { label: "모니터", value: "21.5인치 정전식 터치모니터" },
      { label: "프린터", value: "염료승화 포토프린터" },
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
      { label: "프린터", value: "염료승화 포토프린터" },
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

export default function ManufactureBoothPage() {
  return (
    <main>
      <section
        className="relative pt-40 pb-32 text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg,#0a0a0a 0%,#1f1f1f 50%,#3f3f46 120%)",
        }}
      >
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

      <ProductSpecs models={MODELS} />
      <ProductFeatures />
      <ProcessSteps variant="make" title="제작 프로세스." />

      <ImageTextRow
        eyebrow="FRAME"
        title={<>브랜드 맞춤 프레임으로<br />매장 퀄리티 UP</>}
        highlight="프레임디자인"
        description={"다양한 컬러·디자인 프레임을 제공하여\n매장 콘셉트와 브랜드 아이덴티티에\n최적화된 촬영 경험을 제공합니다."}
        ctas={[{ label: "프레임디자인 바로가기", href: "/inquiry/buy" }]}
        visual={
          <TabletVisual>
            <div className="grid grid-cols-3 gap-1 p-3 w-full">
              {["#1A6DFF", "#fde047", "#7c3aed", "#fda4af", "#34d399", "#f97316"].map((c, i) => (
                <div key={i} className="aspect-[3/4] rounded" style={{ background: c }} />
              ))}
            </div>
          </TabletVisual>
        }
      />

      <ImageTextRow
        bg="#fafafa"
        reverse
        eyebrow="WRAPPING"
        title={<>눈에 띄는 매장,<br />강력한 브랜딩 효과</>}
        highlight="랩핑디자인"
        description={"전면·측면·후면 모두 원하는 비주얼로 커스터마이징 가능해\n매장을 브랜드 홍보 매체로 탈바꿈시킵니다."}
        ctas={[{ label: "랩핑디자인 바로가기", href: "/inquiry/buy" }]}
        visual={<PaletteVisual colors={["#fda4af", "#bfdbfe", "#fde047", "#a7f3d0"]} />}
      />

      <ImageTextRow
        eyebrow="USER INTERFACE"
        title={<>고객을 위한<br />직관적인 포토키오스크 UI</>}
        highlight="우리투컷 UI"
        description={"심플한 화면 구성과 쉬운 흐름으로\n남녀노소 누구나 바로 사용할 수 있습니다."}
        ctas={[{ label: "프로세서 바로보기", href: "/inquiry/buy" }]}
        visual={
          <TabletVisual bg="#3f3f46">
            <div className="text-center p-6">
              <div className="font-display font-bold text-lg text-neutral-700">우리투컷</div>
              <div className="mt-2 text-xs text-neutral-400 tracking-widest">TOUCH ME</div>
              <div className="mt-6 grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded bg-neutral-200" />
                ))}
              </div>
            </div>
          </TabletVisual>
        }
      />

      <CtaBar
        title="포토부스 구매 견적 받기"
        primary={{ label: "포토부스 구매문의", href: "/inquiry/buy" }}
      />
    </main>
  );
}
