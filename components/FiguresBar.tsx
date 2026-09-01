export default function FiguresBar() {
  return (
    <section className="bg-brand-rose border-y border-brand-parchment">
      <div className="container-xl py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        <Figure label="Dry Vans" value="48’ / 53’" />
        <Figure label="Flatbeds" value="48’ / 53’" />
        <Figure label="Sample daily rate" value="$35–$55" />
        <Figure label="Sample yard count" value="75–125" />
      </div>
    </section>
  );
}

function Figure({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <div className="heading-condensed text-sm text-brand-stone">{label}</div>
      <div className="heading-condensed text-2xl text-brand-ink">{value}</div>
    </div>
  );
}
