import { Share, Printer, Gear, Card, Sliders, Code } from "@/components/icons";

const FEATURES = [
  { Icon: Share, titleStrong: "SNS", titleNormal: "홍보", desc: "카카오톡 전송 기능,\nQR전송으로 바이럴 홍보 가능" },
  { Icon: Printer, title: "사진 즉석 인화", desc: "염료승화 포토프린터를 사용하여\n고품질의 사진 인화" },
  { Icon: Gear, title: "관리자 기능", desc: "실시간 매출, 프린터 용지\n잔량 확인 가능" },
  { Icon: Card, title: "유료, 무료, 쿠폰 촬영", desc: "결제 프로그램을 유료, 무료, 쿠폰 옵션으로 변경 가능" },
  { Icon: Sliders, title: "필터", desc: "흑백, 세피아 등 포함한\n다양한 색상의 필터 지원" },
  { Icon: Code, title: "S/W 커스텀", desc: "브랜드 컨셉에 맞는 이미지적용\n프로그램 커스터마이징 가능" },
];

export default function ProductFeatures({
  title = "주요기능.",
  subtitle = "타업체와 차별화된 손쉽고 다채로운 기능",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="text-center mb-20">
          <p className="font-display tracking-[0.4em] text-sm text-[#0a0a0a] font-bold">OUR FUNCTION</p>
          <h2 className="mt-4 font-display font-black text-4xl md:text-5xl">{title}</h2>
          <p className="mt-5 text-neutral-500">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {FEATURES.map((f, i) => (
            <article key={i} className="text-center">
              <div className="mx-auto w-28 h-28 rounded-full bg-[#f5f5f5] grid place-items-center text-[#0a0a0a] mb-5">
                <f.Icon className="w-12 h-12" />
              </div>
              <h3 className="font-display font-bold text-base">
                {f.titleStrong ? (
                  <>
                    <strong>{f.titleStrong}</strong> {f.titleNormal}
                  </>
                ) : (
                  f.title
                )}
              </h3>
              <p className="mt-3 text-xs text-neutral-600 leading-relaxed whitespace-pre-line">
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
