function CameraIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h3l2-3h8l2 3h3v12H3z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}
function CardIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="14" height="18" rx="2" />
      <rect x="7" y="6" width="8" height="6" />
      <path d="M7 15h8M7 18h5" />
    </svg>
  );
}
function GameIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8h12a3 3 0 0 1 3 3v4a3 3 0 0 1-5 2l-1-1H9l-1 1a3 3 0 0 1-5-2v-4a3 3 0 0 1 3-3z" />
      <path d="M8 12h2M9 11v2" />
      <circle cx="15" cy="11" r="0.7" fill="currentColor" />
      <circle cx="17" cy="13" r="0.7" fill="currentColor" />
    </svg>
  );
}
function MonitorIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

const CARDS = [
  {
    bg: "#0a0a0a",
    fg: "#ffffff",
    eyebrow: "프리미엄 키오스크",
    title: "우리투컷 포토부스",
    desc: "전시·행사 맞춤형 키오스크\n다양한 타입의 부스를 직접 제작·보유합니다.",
    Icon: CameraIcon,
  },
  {
    bg: "#171717",
    fg: "#ffffff",
    eyebrow: "브랜드에 딱 맞는",
    title: "차별화된 포토카드",
    desc: "단순한 사진을 넘어, 브랜드 아이덴티티를\n담은 특별한 기념품으로 완성됩니다.",
    Icon: CardIcon,
  },
  {
    bg: "#262626",
    fg: "#ffffff",
    eyebrow: "고객 참여율을 높이는",
    title: "게임 키오스크",
    desc: "즐거움으로 브랜드를 기억하게 하다.\n브랜드 메시지를 높이는 게임 키오스크",
    Icon: GameIcon,
  },
  {
    bg: "#404040",
    fg: "#ffffff",
    eyebrow: "직관적인 정보전달",
    title: "스탠드 키오스크",
    desc: "영상·정보·가이드까지 스탠드 키오스크로\n브랜드 경험을 확장하세요.",
    Icon: MonitorIcon,
  },
];

export default function FeatureCards() {
  return (
    <section id="about" className="bg-white text-neutral-900 py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl leading-tight">
            포토부스 · 포토카드 · 게임 · DID
            <br />
            <span className="text-[#0a0a0a]">키오스크의 새로운 기준</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-500">브랜드를 경험으로, 공간을 자산으로</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="group relative rounded-3xl overflow-hidden p-8 min-h-[420px] flex flex-col justify-between transition-transform hover:-translate-y-1.5 shadow-lg"
              style={{ background: c.bg, color: c.fg }}
            >
              <div className="opacity-95 group-hover:scale-110 transition-transform origin-top-left">
                <c.Icon className="w-20 h-20" />
              </div>
              <div>
                <p className="text-xs tracking-[0.18em] opacity-75 uppercase">{c.eyebrow}</p>
                <h3 className="font-display font-bold text-2xl md:text-[26px] mt-2">{c.title}</h3>
                <div className="my-5 h-px w-12 bg-white/40" />
                <p className="text-[15px] leading-relaxed opacity-90 whitespace-pre-line">{c.desc}</p>
              </div>
              <div
                className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-20"
                style={{ background: "white" }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
