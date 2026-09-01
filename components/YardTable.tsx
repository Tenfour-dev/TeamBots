type Yard = {
  code: string;
  city: string;
  state: string;
  sampleCount: number;
};

const YARDS: Yard[] = [
  { code: "HFD", city: "Hartford", state: "CT", sampleCount: 45 },
  { code: "BPT", city: "Bridgeport", state: "CT", sampleCount: 30 },
  { code: "NHV", city: "New Haven", state: "CT", sampleCount: 28 },
  { code: "SPG", city: "Springfield", state: "MA", sampleCount: 20 }
];

export default function YardTable() {
  return (
    <section id="yards" className="container-xl py-12 space-y-6">
      <h2 className="heading-condensed text-3xl">Yard availability (sample)</h2>
      <div className="overflow-x-auto rounded-lg border border-brand-parchment bg-white">
        <table className="min-w-full text-left">
          <thead className="bg-brand-rose">
            <tr>
              <Th>Yard</Th>
              <Th>City</Th>
              <Th>State</Th>
              <Th>Sample trailers on hand</Th>
            </tr>
          </thead>
          <tbody>
            {YARDS.map((y) => (
              <tr key={y.code} className="border-t border-brand-parchment">
                <Td className="heading-condensed">{y.code}</Td>
                <Td>{y.city}</Td>
                <Td>{y.state}</Td>
                <Td>{y.sampleCount}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 text-sm text-brand-stone font-semibold">{children}</th>;
}
function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-3 text-sm text-brand-ink ${className}`}>{children}</td>;
}
