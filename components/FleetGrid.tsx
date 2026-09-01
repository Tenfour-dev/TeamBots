type FleetItem = {
  sku: "DV-53" | "DV-48" | "FB-48" | "FB-53";
  name: string;
  type: "Dry Van" | "Flatbed";
  length: 48 | 53;
  sampleRate: string;
  notes?: string;
};

const FLEET: FleetItem[] = [
  { sku: "DV-53", name: "53’ Dry Van", type: "Dry Van", length: 53, sampleRate: "$55 / day", notes: "Swing doors" },
  { sku: "DV-48", name: "48’ Dry Van", type: "Dry Van", length: 48, sampleRate: "$45 / day" },
  { sku: "FB-48", name: "48’ Flatbed", type: "Flatbed", length: 48, sampleRate: "$40 / day" },
  { sku: "FB-53", name: "53’ Flatbed", type: "Flatbed", length: 53, sampleRate: "$50 / day" }
];

export default function FleetGrid({ query }: { query: string }) {
  const q = query.trim().toLowerCase();
  const items = FLEET.filter((t) =>
    [t.sku, t.name, t.type, String(t.length)].some((s) => s.toLowerCase().includes(q))
  );
  return (
    <section id="fleet" className="container-xl py-12 space-y-6">
      <h2 className="heading-condensed text-3xl">Fleet</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((t) => (
          <article key={t.sku} className="rounded-lg border border-brand-parchment bg-white shadow-sm overflow-hidden">
            <div className="aspect-[4/3] bg-brand-parchment/40 grid place-items-center text-brand-stone">
              <span className="heading-condensed text-xl">{t.name}</span>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="heading-condensed text-lg">{t.sku}</span>
                <span className="text-sm text-brand-stone">{t.type}</span>
              </div>
              <div className="text-sm text-brand-stone">Sample rate: {t.sampleRate}</div>
              {t.notes && <div className="text-sm text-brand-stone">Notes: {t.notes}</div>}
              <a href="#inquire" className="btn btn-primary w-full mt-2">Request this</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
