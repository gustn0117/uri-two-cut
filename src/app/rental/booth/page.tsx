import type { Metadata } from "next";
import ProductSpecs from "@/components/ProductSpecs";
import ProcessSteps from "@/components/ProcessSteps";
import ProductFeatures from "@/components/ProductFeatures";
import ImageTextRow, { TabletVisual, PaletteVisual } from "@/components/ImageTextRow";
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
    specs: [
      { label: "모니터", value: "21.5인치 정전식 터치모니터" },
      { label: "프린터", value: "염료승화 포토프린터" },
      { label: "카메라", value: "캐논 DSLR / 4K 카메라" },
      { label: "결제", value: "무료, 카드" },
      { label: "소비전력", value: "350W" },
      { label: "전원", value: "220V, 50/60HZ" },
      { label: "케이스", value: "스틸" },
      { label: "무게", value: "80kg" },
      { label: "규격", value: "W670 x D460 x H1810mm(인화지출력구 포함)" },
    ],
  },
  {
    code: "PHOTO-B-215O",
    name: "부스",
    badge: "렌탈가능 모델",
    specs: [
      { label: "모니터", value: "21.5인치 정전식 터치모니터" },
      { label: "프린터", value: "염료승화 포토프린터" },
      { label: "카메라", value: "캐논 DSLR / 4K 카메라" },
      { label: "결제", value: "무료, 지폐, 카드" },
      { label: "소비전력", value: "350W" },
      { label: "전원", value: "220V, 50/60HZ" },
      { label: "케이스", value: "스틸" },
      { label: "무게", value: "300kg" },
      { label: "규격", value: "W1400 x D1000 x H2010mm" },
    ],
  },
];

export default function RentalBoothPage() {
  return (
    <main>
      {/* Hero - full bleed gradient */}
      <section
        className="relative pt-40 pb-32 text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg,#241248 0%,#5b21b6 60%,#a78bfa 120%)",
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

      <ProductSpecs models={MODELS} />
      <ProcessSteps variant="rental" />
      <ProductFeatures />

      {/* OUR CREATOR */}
      <section className="py-24 bg-[#f5f3ff] text-center">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <p className="font-display tracking-[0.4em] text-sm text-[#7c3aed] font-bold">
            OUR CREATOR
          </p>
          <h2 className="mt-5 font-display font-black text-4xl md:text-6xl">
            우리투컷은 가능합니다<span className="text-[#7c3aed]">.</span>
          </h2>
          <p className="mt-6 text-neutral-600 text-lg">
            행사에 감성을 더하는 단 하나의 선택, 우리투컷 포토부스 렌탈
          </p>
        </div>
      </section>

      {/* FRAME */}
      <ImageTextRow
        eyebrow="FRAME"
        title={<>브랜드 맞춤 프레임으로<br />행사 퀄리티 UP</>}
        highlight="프레임디자인"
        description={"다양한 컬러·디자인 프레임을 제공하여\n기업/기관의 행사 목적과 브랜드 아이덴티티에\n최적화된 촬영 경험을 제공합니다."}
        ctas={[
          { label: "프레임디자인 바로가기", href: "/inquiry/rental" },
          { label: "사이즈 자세히보기", href: "/inquiry/rental" },
        ]}
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

      {/* WRAPPING */}
      <ImageTextRow
        bg="#fafafa"
        reverse
        eyebrow="WRAPPING"
        title={<>눈에 띄는 포토부스,<br />강력한 브랜딩 효과</>}
        highlight="랩핑디자인"
        description={"전면·측면·후면 모두 원하는 비주얼로 커스터마이징 가능해,\n포토존을 브랜드 홍보 매체로 탈바꿈시킵니다."}
        ctas={[{ label: "랩핑디자인 바로가기", href: "/inquiry/rental" }]}
        visual={<PaletteVisual colors={["#fda4af", "#bfdbfe", "#fde047", "#a7f3d0"]} />}
      />

      {/* USER INTERFACE */}
      <ImageTextRow
        eyebrow="USER INTERFACE"
        title={<>고객을 위한<br />직관적인 포토키오스크 UI</>}
        highlight="우리투컷 UI"
        description={"심플한 화면 구성과 쉬운 흐름으로\n남녀노소 누구나 바로 사용할 수 있습니다."}
        ctas={[{ label: "프로세서 바로보기", href: "/inquiry/rental" }]}
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

      {/* SOLUTION */}
      <ImageTextRow
        bg="#fafafa"
        reverse
        eyebrow="SOLUTION"
        title={<>캠페인, 프로모션,<br />팝업스토어에 맞는<br />UI 커스터마이징</>}
        highlight="맞춤형 캠페인 솔루션"
        description={"MBTI·YES/NO 이벤트 등 사용자 참여를 유도하고\n선택 결과는 사진과 함께 인화되어 콘텐츠로 활용됩니다."}
        ctas={[{ label: "커스텀 UI디자인 바로가기", href: "/inquiry/rental" }]}
        visual={
          <TabletVisual bg="#0ea5e9">
            <div className="p-8 text-center">
              <div className="font-display font-black text-2xl text-[#0ea5e9]">MBTI</div>
              <p className="mt-2 text-xs text-neutral-500">나의 성격은 어떤 유형일까?</p>
              <div className="mt-6 grid grid-cols-4 gap-1.5">
                {["E/I", "S/N", "T/F", "J/P"].map((t) => (
                  <div key={t} className="aspect-square rounded bg-[#bae6fd] grid place-items-center text-xs font-bold">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </TabletVisual>
        }
      />

      {/* AI */}
      <ImageTextRow
        eyebrow="ARTIFICIAL INTELLIGENCE"
        title={<>원하는 배경으로<br />간편하게</>}
        highlight="AI 배경 변경 필터"
        description={"AI로 촬영한 사진의 배경을 제거하여\n원하는 배경으로 간편하게 교체가 가능합니다."}
        ctas={[{ label: "AI 배경 필터 바로가기", href: "/inquiry/rental" }]}
        visual={
          <div className="grid grid-cols-2 gap-3 max-w-[480px] mx-auto">
            {[
              { bg: "#dbeafe", label: "원본" },
              { bg: "linear-gradient(135deg,#fde047,#f97316)", label: "오늘의 주인공" },
              { bg: "linear-gradient(135deg,#bbf7d0,#0ea5e9)", label: "여행지" },
              { bg: "linear-gradient(135deg,#7c3aed,#ec4899)", label: "축제" },
            ].map((b, i) => (
              <div
                key={i}
                className="aspect-[4/5] rounded-2xl overflow-hidden relative"
                style={{ background: b.bg as string }}
              >
                <span className="absolute bottom-2 left-2 text-xs font-bold text-white bg-black/40 px-2 py-1 rounded">
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        }
      />

      {/* 배경 시트지 */}
      <ImageTextRow
        bg="#fafafa"
        reverse
        eyebrow="BACKGROUND SHEET"
        title={<>브랜드 감성을 살리는</>}
        highlight="배경 시트지"
        description={"브랜드 감성과 행사 분위기를 표현하는\n맞춤형 배경 시트지 디자인 (부스 타입만 가능)"}
        visual={
          <TabletVisual bg="#1f1f1f">
            <div className="grid grid-cols-2 w-full h-full">
              <div style={{ background: "linear-gradient(135deg,#a78bfa,#ec4899)" }} />
              <div style={{ background: "linear-gradient(135deg,#fde047,#f59e0b)" }} />
            </div>
          </TabletVisual>
        }
      />

      {/* PHOTH WALL */}
      <ImageTextRow
        eyebrow="PHOTO WALL"
        title={<>고객 맞춤 디자인<br />분위기를 바꿔주는</>}
        highlight="백월 · 현수막"
        description={"고객 맞춤 디자인으로 현장의 분위기를 바꿔주는\n백월 및 현수막을 제작해드립니다."}
        ctas={[{ label: "백월·현수막디자인 바로가기", href: "/inquiry/rental" }]}
        visual={
          <TabletVisual bg="#0ea5e9">
            <div className="w-full h-full p-6 grid place-items-center" style={{ background: "repeating-linear-gradient(45deg,#1A6DFF,#1A6DFF 20px,#3a7eff 20px,#3a7eff 40px)" }}>
              <div className="text-center text-white">
                <div className="flex justify-center gap-1 text-yellow-300">
                  {[0, 1, 2, 3].map((i) => (
                    <svg key={i} className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2v1.3h6V16.7c0-.8.4-1.5 1-2A7 7 0 0 0 12 2zM10 21h4v1H10z" />
                    </svg>
                  ))}
                </div>
                <div className="mt-3 font-bold">우리투컷</div>
              </div>
            </div>
          </TabletVisual>
        }
      />

      {/* LIVE VIEW */}
      <ImageTextRow
        bg="#fafafa"
        reverse
        eyebrow="LIVE VIEW"
        title={<>특별한 네컷을 원한다면<br />옆에 있는 듯 즐기는</>}
        highlight="라이브뷰 촬영"
        description={"스페셜한 프레임을 원한다면, 라이브뷰 촬영을 추천드립니다.\n마치 함께 있는 듯 자연스럽게 찰칵!"}
        visual={
          <TabletVisual bg="#0a0a0a">
            <div className="grid grid-cols-2 gap-1 p-3 w-full bg-red-900">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square rounded bg-neutral-300" />
              ))}
            </div>
          </TabletVisual>
        }
      />

      {/* BIGSIZE 4CUT */}
      <ImageTextRow
        eyebrow="BIGSIZE 4CUT"
        title={<>대세는 빅사이즈!</>}
        highlight="종류별로 다양하게~"
        description={"기존의 4컷 사이즈를 넘어, 더 크고 임팩트 있는\n빅사이즈 4컷으로 행사의 분위기를 한층 끌어올립니다."}
        visual={
          <div className="rounded-2xl bg-neutral-900 p-6 max-w-[480px] mx-auto">
            <div className="text-white">
              <p className="font-display font-black text-3xl">BIGSIZE</p>
              <p className="font-display font-black text-3xl">4CUT</p>
              <p className="mt-2 text-xs opacity-60">20cm</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-neutral-700 rounded" />
              ))}
            </div>
          </div>
        }
      />

      <CtaBar
        title="포토부스 렌탈, 지금 바로 견적 받기"
        primary={{ label: "포토부스 렌탈문의", href: "/inquiry/rental" }}
      />
    </main>
  );
}
