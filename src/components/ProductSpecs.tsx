type Spec = { label: string; value: string };
type Model = {
  code: string;
  name: string;
  badge?: string;
  specs: Spec[];
};

export default function ProductSpecs({
  title = "제품소개.",
  models,
}: {
  title?: string;
  models: Model[];
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
              <div className="relative aspect-[4/5] bg-white rounded-2xl mb-6 grid place-items-center overflow-hidden">
                <KioskIllustration code={m.code} />
                {m.badge && (
                  <span className="absolute top-4 right-4 z-10 w-20 h-20 rounded-full bg-[#0a0a0a] text-white text-xs font-bold grid place-items-center text-center leading-tight">
                    {m.badge}
                  </span>
                )}
              </div>
              <p className="text-xs tracking-widest text-neutral-500">{m.code}</p>
              <h3 className="mt-1 font-display font-black text-3xl">{m.name}</h3>
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

function KioskIllustration({ code }: { code: string }) {
  const isMini = code.includes("215IB");
  const isStand = code.includes("215IA");
  const isBooth = code.includes("215O");
  const isDID = code.includes("DID");
  const w = isBooth ? 220 : isStand ? 130 : isDID ? 150 : 110;
  const h = isBooth ? 280 : 290;
  return (
    <div className="relative" style={{ width: w, height: h }}>
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 to-neutral-200 rounded-md shadow-inner" />
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[20%] bg-neutral-800 rounded"
        style={{
          width: isBooth ? 110 : isDID ? 120 : 70,
          height: isBooth ? 130 : isDID ? 78 : 95,
        }}
      />
      {!isDID && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[18%] w-1/2 h-2 bg-neutral-400 rounded-sm" />
      )}
      <div className="absolute -bottom-1 left-2 w-3 h-3 bg-neutral-700 rounded-full" />
      <div className="absolute -bottom-1 right-2 w-3 h-3 bg-neutral-700 rounded-full" />
      {isBooth && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-700 rounded-full" />
      )}
    </div>
  );
}
