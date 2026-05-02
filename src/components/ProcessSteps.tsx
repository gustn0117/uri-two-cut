import {
  Headset,
  Handshake,
  Clipboard,
  Monitor,
  Package,
  Calendar,
  Wrench,
  Truck,
  CheckCircle,
} from "@/components/icons";

type Step = { n: string; title: string; desc: string; Icon: React.ComponentType<{ className?: string }> };

const RENTAL_STEPS: Step[] = [
  { n: "STEP 01", title: "상담진행", desc: "행사일정, 장소,\n전반적인 상담진행을 합니다.", Icon: Headset },
  { n: "STEP 02", title: "예약 및 계약 완료", desc: "예약 진행 후\n계약 완료합니다.", Icon: Handshake },
  { n: "STEP 03", title: "커스터마이징 협의", desc: "브랜드 컨셉에 맞는 템플릿,\n랩핑, UI를 맞춤 제작합니다.", Icon: Clipboard },
  { n: "STEP 04", title: "제작 및 세팅", desc: "현장 최적화 세팅 및 프로그램\n커스터마이징을 완료합니다.", Icon: Monitor },
  { n: "STEP 05", title: "설치 및 사용", desc: "행사장 또는 매장에 안전하고\n깔끔하게 설치 후 사용합니다.", Icon: Package },
  { n: "STEP 06", title: "정리 및 회수", desc: "행사 종료 후 장비를 안전하게\n회수 및 정리합니다.", Icon: Calendar },
];

const MAKE_STEPS: Step[] = [
  { n: "STEP 01", title: "상담진행", desc: "일정, 장소, 전반적인\n상담진행을 합니다.", Icon: Headset },
  { n: "STEP 02", title: "예약 및 계약완료", desc: "예약 진행 후\n계약 완료합니다.", Icon: Handshake },
  { n: "STEP 03", title: "커스터마이징 협의", desc: "현장 최적화 세팅 및\n프로그램 커스터마이징을 완료합니다.", Icon: Clipboard },
  { n: "STEP 04", title: "제작 및 세팅", desc: "브랜드 컨셉에 맞는 템플릿,\n랩핑, UI를 맞춤 제작합니다.", Icon: Wrench },
  { n: "STEP 05", title: "납품 및 설치", desc: "현장 환경에 맞춰\n안전하고 깔끔하게 설치합니다.", Icon: Truck },
  { n: "STEP 06", title: "사후 관리", desc: "납품 후에도 AS, 소모품,\n업데이트까지 지원합니다.", Icon: CheckCircle },
];

export default function ProcessSteps({
  variant = "rental",
  title,
}: {
  variant?: "rental" | "make";
  title?: string;
}) {
  const steps = variant === "rental" ? RENTAL_STEPS : MAKE_STEPS;
  const heading = title ?? (variant === "rental" ? "렌탈 프로세스." : "제작 프로세스.");

  return (
    <section className="py-24 lg:py-32" style={{ background: "#f5f5f5" }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="font-display tracking-[0.4em] text-sm text-[#0a0a0a] font-bold">OUR PROCESS</p>
          <h2 className="mt-4 font-display font-black text-4xl md:text-5xl">{heading}</h2>
        </div>
        <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((s) => (
            <li key={s.n} className="text-center">
              <div className="mx-auto mb-5 w-28 h-28 rounded-full bg-white grid place-items-center shadow-md ring-2 ring-[#0a0a0a]/20 text-[#0a0a0a]">
                <s.Icon className="w-12 h-12" />
              </div>
              <p className="text-xs tracking-widest text-[#0a0a0a] font-bold">{s.n}</p>
              <p className="mt-2 font-display font-bold text-lg">{s.title}</p>
              <p className="mt-3 text-xs text-neutral-600 leading-relaxed whitespace-pre-line">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
