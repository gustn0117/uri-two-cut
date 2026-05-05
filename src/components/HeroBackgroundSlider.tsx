import projectsData from "@/lib/projects.json";

type Project = { cover: string };

// Take a recent slice with valid covers — too many = slow first paint
const COVERS = (projectsData as Project[])
  .filter((p) => p.cover)
  .slice(0, 24)
  .map((p) => p.cover);

// Duplicate so the marquee loop is seamless when translated by -50%
const TRACK = [...COVERS, ...COVERS];

export default function HeroBackgroundSlider() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-neutral-950">
      <div className="hero-marquee flex h-full">
        {TRACK.map((src, i) => (
          <div
            key={i}
            className="h-full shrink-0 w-[60vw] sm:w-[42vw] lg:w-[28vw]"
            aria-hidden
          >
            <img
              src={src}
              alt=""
              loading={i < 4 ? "eager" : "lazy"}
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
