type Row = {
  label: string;
  /** length 1 = merged across model columns; length 2 = per-model */
  values: string[];
  /** small gray sub-line below the main value */
  sub?: string;
  /** muted style for the row */
  muted?: boolean;
};

export type PricingTableProps = {
  title: string;
  /** up to 2 models */
  models: { name: string; code: string }[];
  rows: Row[];
  footnote?: string;
};

export default function PricingTable({ title, models, rows, footnote }: PricingTableProps) {
  const colCount = models.length;
  return (
    <section className="bg-white pb-10">
      <div className="mx-auto max-w-[860px] px-6 lg:px-10">
        <h3 className="font-display font-bold text-lg md:text-xl mb-5 pl-3 border-l-4 border-[#0a0a0a]">
          {title}
        </h3>
        <div className="overflow-x-auto rounded-xl border border-neutral-200">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-neutral-50">
                <th className="w-28 md:w-36 px-4 py-4 text-left text-xs text-neutral-500 font-medium">
                  {/* corner */}
                </th>
                {models.map((m) => (
                  <th key={m.code} className="px-4 py-4 text-center">
                    <div className="font-bold text-[#0a0a0a]">{m.name}</div>
                    <div className="text-[11px] text-neutral-500 font-normal mt-0.5">{m.code}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-neutral-100">
                  <td
                    className={`px-4 py-3.5 align-middle text-neutral-700 ${r.muted ? "font-medium" : "font-bold"}`}
                  >
                    {r.label.split("\n").map((line, j) => (
                      <div key={j} className={j === 0 ? "" : "text-[11px] text-[#0a0a0a] mt-0.5"}>
                        {line}
                      </div>
                    ))}
                  </td>
                  {r.values.length === 1 ? (
                    <td
                      colSpan={colCount}
                      className="px-4 py-3.5 text-center font-bold"
                    >
                      <div className="whitespace-pre-line">{r.values[0]}</div>
                      {r.sub && (
                        <div className="text-[11px] text-neutral-500 font-normal mt-1">
                          {r.sub}
                        </div>
                      )}
                    </td>
                  ) : (
                    r.values.map((v, j) => (
                      <td key={j} className="px-4 py-3.5 text-center font-bold whitespace-pre-line">
                        {v}
                      </td>
                    ))
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {footnote && (
          <p className="mt-3 text-xs text-neutral-500 text-right">{footnote}</p>
        )}
      </div>
    </section>
  );
}
