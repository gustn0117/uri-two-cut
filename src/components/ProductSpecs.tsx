type Spec = { label: string; value: string };
type Model = {
  code: string;
  name: string;
  badge?: string;
  image?: string;
  price?: string;
  specs: Spec[];
};

export default function ProductSpecs({
  title = "제품소개.",
  models,
  showPricing = false,
  wrappable = false,
  imageAspect = "4/3",
}: {
  title?: string;
  models: Model[];
  showPricing?: boolean;
  wrappable?: boolean;
  imageAspect?: "4/3" | "3/4" | "1/1";
}) {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="font-display tracking-[0.4em] text-sm text-[#0a0a0a] font-bold">OUR PRODUCT</p>
          <h2 className="mt-4 font-display font-black text-4xl md:text-5xl">{title}</h2>
        </div>

        <div className={`grid gap-8 ${models.length === 1 ? "max-w-[640px] mx-auto" : models.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
          {models.map((m) => (
            <article
              key={m.code}
              className="bg-[#fafafa] rounded-3xl p-8 border border-neutral-100"
            >
              <div
                className="relative bg-white rounded-2xl mb-6 grid place-items-center overflow-hidden"
                style={{
                  aspectRatio:
                    imageAspect === "3/4" ? "3 / 4" : imageAspect === "1/1" ? "1 / 1" : "4 / 3",
                }}
              >
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-32 h-56 bg-neutral-100 rounded-md" />
                )}
                {m.badge && (
                  <span
                    className="absolute top-4 right-4 z-10 w-20 h-20 rounded-full bg-[#0a0a0a] text-xs font-bold grid place-items-center text-center leading-tight"
                    style={{ color: "#ffffff" }}
                  >
                    {m.badge}
                  </span>
                )}
              </div>
              {wrappable && (
                <p
                  className="-mt-2 mb-3 text-center font-bold text-sm tracking-tight"
                  style={{ color: "#dc2626" }}
                >
                  (포토부스 랩핑가능)
                </p>
              )}
              <p className="text-xs tracking-widest text-neutral-500">{m.code}</p>
              <h3 className="mt-1 font-display font-black text-3xl">{m.name}</h3>
              {showPricing && m.price && (
                <p className="mt-3 inline-flex items-baseline gap-2">
                  <span className="text-xs text-neutral-500">렌탈 비용</span>
                  <span className="font-display font-bold text-xl text-[#0a0a0a]">{m.price}</span>
                </p>
              )}
              <table className="mt-6 w-full text-sm">
                <tbody>
                  {m.specs.map((s) => (
                    <tr key={s.label} className="border-b border-neutral-200 last:border-0">
                      <th className="py-3 text-left text-neutral-500 font-normal w-24 align-top">
                        {s.label}
                      </th>
                      <td className="py-3 font-bold text-neutral-900">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
