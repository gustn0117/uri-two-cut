const PROJECTS = [
  { name: "Dplus KIA 팬미팅 행사", color: "#0a0e2c", tag: "팬미팅" },
  { name: "코닥 롯데백화점 중동점", color: "#ffd200", tag: "백화점" },
  { name: "하림 본사 포토부스", color: "#e94e1b", tag: "기업" },
  { name: "오리온 정타임 사내팝업행사", color: "#f59e0b", tag: "팝업" },
  { name: "달바 (d'Alba)", color: "#facc15", tag: "뷰티" },
  { name: "쿠키런", color: "#ff8a3d", tag: "게임" },
  { name: "갤럭시 AI", color: "#1f3a8a", tag: "테크" },
  { name: "샤넬 (CHANEL)", color: "#000000", tag: "럭셔리" },
  { name: "농심", color: "#dc2626", tag: "F&B" },
  { name: "대전 현대아울렛 나이키", color: "#0c4a6e", tag: "스포츠" },
  { name: "안랩 Developer Conference", color: "#0f172a", tag: "컨퍼런스" },
  { name: "Tik Tok", color: "#000000", tag: "SNS" },
  { name: "판교 카카오페이", color: "#ffe600", tag: "핀테크" },
  { name: "블루아카이브 2.5주년 페스티벌", color: "#3b82f6", tag: "게임" },
  { name: "2023 Worlds 롤파크", color: "#7e22ce", tag: "e스포츠" },
  { name: "GQ Night", color: "#111111", tag: "매거진" },
  { name: "서울 버버리 (Burberry)", color: "#9a4a1a", tag: "럭셔리" },
  { name: "쎄라하우스 도산", color: "#525252", tag: "팝업" },
];

export default function ProjectsGallery() {
  return (
    <section className="relative py-28 lg:py-36 bg-neutral-950 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(60% 50% at 30% 20%, rgba(26,109,255,0.4) 0%, transparent 70%), radial-gradient(60% 50% at 80% 80%, rgba(124,58,237,0.35) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] opacity-70">OUR WORK</p>
          <h2 className="mt-4 font-display font-bold text-2xl md:text-4xl lg:text-5xl leading-snug">
            우리는 클라이언트들만의{" "}
            <span className="text-[#7dd3fc]">&apos;특별한 가치&apos;</span>를 전달합니다.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
              style={{ background: p.color }}
            >
              <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity"
                   style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(0,0,0,0.4))" }} />
              <div className="absolute inset-0 grid place-items-center">
                <div className="w-3/4 aspect-[3/4] rounded-md border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white/90 text-xs tracking-wider font-display">PHOTO</span>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 to-transparent">
                <p className="text-[10px] tracking-widest opacity-70">{p.tag}</p>
                <h4 className="font-semibold text-sm leading-snug mt-1">{p.name}</h4>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center max-w-3xl mx-auto leading-relaxed text-[15px] md:text-base opacity-90">
          <p>
            국내납품, 해외수출(미국·호주·캐나다·일본·대만·베트남 외), 기업 행사, 지역 축제,
            <br className="hidden md:block" />
            기관 및 학교 행사, 팝업스토어 등 업체 브랜드에 맞는 커스텀 개발을 진행합니다.
          </p>
          <p className="mt-3 opacity-80">
            부스 외부 랩핑 / 인화지 디자인 / 상단 간판 디자인 / <strong>AI를 활용한 버츄얼캐릭터</strong> /
            포토카드 / 백월 / 필터 / 다양한 디자인 및 기능 추가 개발로 브랜딩 효과를 높입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
