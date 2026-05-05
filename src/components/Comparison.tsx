type Row = {
  label: string;
  ours: string;
  theirs: string;
};

const DEFAULT_ROWS: Row[] = [
  { label: "자체 개발 시스템", ours: "직접 개발", theirs: "외주 OEM" },
  { label: "제조 생산", ours: "자체 공장 직접 제조", theirs: "외주 의존" },
  { label: "실시간 A/S", ours: "원격 + 현장 즉시 대응", theirs: "지연 대응" },
  { label: "AI 필터", ours: "스케치·카툰·배경합성 등", theirs: "기본 필터만" },
  { label: "맞춤 UI/디자인", ours: "브랜드 풀 커스터마이징", theirs: "고정 템플릿" },
  { label: "다국어 지원", ours: "지원", theirs: "미지원" },
  { label: "결제 옵션", ours: "유료/무료/쿠폰 통합", theirs: "단일 옵션" },
  { label: "인증", ours: "KC · CE · PSE · FCC", theirs: "부분 인증" },
];

export default function Comparison({ rows = DEFAULT_ROWS }: { rows?: Row[] }) {
  return (
    <section className="py-24 lg:py-28 bg-white">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="font-display tracking-[0.4em] text-sm text-[#0a0a0a] font-bold">WHY US</p>
          <h2 className="mt-4 font-display font-black text-3xl md:text-5xl">자사 vs 타사 비교</h2>
        </div>
        <div className="overflow-hidden rounded-2xl border border-neutral-200">
          <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-neutral-50 text-sm font-bold">
            <div className="px-5 py-4 text-neutral-500">항목</div>
            <div className="px-5 py-4 text-[#0a0a0a]">우리투컷</div>
            <div className="px-5 py-4 text-neutral-500">타사 일반</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-[1.1fr_1fr_1fr] text-sm ${i % 2 === 1 ? "bg-neutral-50/50" : "bg-white"} border-t border-neutral-100`}
            >
              <div className="px-5 py-4 text-neutral-700 font-medium">{r.label}</div>
              <div className="px-5 py-4 text-[#0a0a0a] font-bold">✓ {r.ours}</div>
              <div className="px-5 py-4 text-neutral-500">{r.theirs}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
