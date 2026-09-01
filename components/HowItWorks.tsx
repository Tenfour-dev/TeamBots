export default function HowItWorks() {
  return (
    <section id="how" className="container-xl py-12 space-y-6">
      <h2 className="heading-condensed text-3xl">How it works</h2>
      <ol className="grid md:grid-cols-3 gap-6">
        <Step n={1} title="Tell us what you need">
          Dry van or flatbed, 48’ or 53’, dates, and yard.
        </Step>
        <Step n={2} title="We confirm availability">
          We line up the equipment and timeframe.
        </Step>
        <Step n={3} title="You pick up or we deliver">
          We can coordinate drop, live load, or yard storage.
        </Step>
      </ol>
    </section>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="rounded-lg border border-brand-parchment bg-white p-6">
      <div className="heading-condensed text-brand-red text-2xl">Step {n}</div>
      <div className="mt-1 heading-condensed text-xl">{title}</div>
      <p className="mt-2 text-sm text-brand-stone">{children}</p>
    </li>
  );
}
