import projectsData from "@/lib/projects.json";

type Project = {
  id: string;
  date: string | null;
  title: string;
  category: string;
  cover: string;
  photos: string[];
};

const ALL = projectsData as Project[];

// Pick 6 diverse recent projects (date desc) — already sorted in metadata
const PICKS = ALL.slice(0, 8);

export default function RecentProjects() {
  return (
    <section className="py-24 lg:py-32 bg-neutral-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <p className="font-display tracking-[0.4em] text-sm text-[#0a0a0a] font-bold">RECENT PROJECTS</p>
            <h2 className="mt-4 font-display font-black text-3xl md:text-5xl leading-tight">
              우리투컷이 함께한 현장
            </h2>
          </div>
          <p className="text-sm text-neutral-500 max-w-md">
            기업 행사부터 페스티벌, 학회, 팝업스토어까지. 현장에 어울리는 키오스크 솔루션을 직접 제작·운영했습니다.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {PICKS.map((p) => (
            <article key={p.id} className="group">
              <div className="aspect-[4/3] rounded-md overflow-hidden bg-neutral-200">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[10px] tracking-widest text-neutral-500 mt-3">{p.category}</p>
              <h3 className="text-sm font-bold leading-snug mt-1 line-clamp-2">{p.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
