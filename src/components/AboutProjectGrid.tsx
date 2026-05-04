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

// Pick 12 spread across the catalog (every Nth) so we get diversity
const STEP = Math.max(1, Math.floor(ALL.length / 12));
const PICKS = Array.from({ length: 12 }, (_, i) => ALL[i * STEP]).filter(Boolean).slice(0, 12);

export default function AboutProjectGrid() {
  return (
    <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {PICKS.map((p) => (
        <div
          key={p.id}
          className="aspect-[4/5] rounded-2xl relative overflow-hidden bg-neutral-100"
        >
          <img
            src={p.cover}
            alt={p.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <span className="absolute bottom-2 left-2 right-2 text-white/95 font-display font-bold text-[11px] leading-tight line-clamp-2">
            {p.title}
          </span>
        </div>
      ))}
    </div>
  );
}
