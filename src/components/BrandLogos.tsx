const LOGOS = [
  "숭실대학교",
  "반려동물한마당",
  "KNPU",
  "Y-STAR",
  "COSS",
  "하나은행",
  "어린이재단",
  "niv.",
  "Columbia",
  "SPAO",
  "맥도날드",
  "BELOTERO",
  "Reva·K",
  "UNIST",
  "LG TECH",
  "샤넬",
  "버버리",
  "갤럭시",
  "카카오페이",
  "농심",
  "쿠키런",
  "달바",
  "Tik Tok",
  "코닥",
];

export default function BrandLogos() {
  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="font-display tracking-[0.4em] text-sm text-neutral-500">OUR VALUE</p>
          <h2 className="mt-5 font-display font-bold text-2xl md:text-4xl lg:text-5xl leading-snug">
            우리는 국내외 브랜드와 협력하여
            <br />총{" "}
            <span className="text-[#1A6DFF]">5,000개 이상</span>의 프로젝트를
            성공적으로 진행하였습니다.
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-8">
          {LOGOS.map((l) => (
            <div
              key={l}
              className="h-20 rounded-xl border border-neutral-200 bg-neutral-50 grid place-items-center grayscale hover:grayscale-0 transition"
            >
              <span className="font-display font-bold text-sm md:text-base text-neutral-700">
                {l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
