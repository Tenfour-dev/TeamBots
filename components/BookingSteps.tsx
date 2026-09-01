export default function BookingSteps() {
  return (
    <section className="container-xl py-12 space-y-6">
      <h2 className="heading-condensed text-3xl">Book in three steps</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Search the fleet">Filter by type and length. Pick an SKU.</Card>
        <Card title="Request a rental">Submit the form with dates and yard.</Card>
        <Card title="We confirm and schedule">We’ll call you to finalize.</Card>
      </div>
    </section>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-brand-parchment bg-white p-6">
      <div className="heading-condensed text-xl">{title}</div>
      <p className="mt-2 text-sm text-brand-stone">{children}</p>
    </div>
  );
}
