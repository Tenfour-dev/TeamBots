import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import RequestForm from "@/components/RequestForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TENFOUR — 2028 Alpha HD A80HDG-E Rental | $3,500/mo",
  description:
    "TenFour LLC specialized rental — 2028 Alpha HD A80HDG-E extendable hydraulic-detach RGN / lowboy. $3,500 per month. Call 860-553-1034."
};

export default function AlphaA80HDGEPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <Specs />
        <RequestForm />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="container-xl py-12 sm:py-16">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <div className="heading-condensed text-xs text-brand-stone">Specialized equipment</div>
          <h1 className="heading-condensed text-4xl sm:text-5xl leading-tight mt-1">
            2028 Alpha HD A80HDG-E
          </h1>
          <p className="mt-3 text-brand-stone">
            Extendable hydraulic-detach RGN / lowboy
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#inquire" className="btn btn-primary">Request a rental</a>
            <a href="tel:+18605531034" className="btn btn-outline">860-553-1034</a>
          </div>
        </div>
        <div className="rounded-lg border border-brand-parchment bg-white shadow-sm p-4 min-w-[240px]">
          <div className="heading-condensed text-xs text-brand-stone">Rent</div>
          <div className="heading-condensed text-3xl sm:text-4xl text-brand-ink mt-1">$3,500 / month</div>
          <div className="text-xs text-brand-stone mt-2">
            Eli · Tenfour LLC —{" "}
            <a className="underline text-brand-red" href="tel:+18605531034">860-553-1034</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Specs() {
  return (
    <section className="container-xl py-8 sm:py-10">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="heading-condensed text-2xl">Key specs</h2>
            <ul className="mt-3 space-y-2 text-brand-ink">
              <Spec>Type: Extendable hydraulic-detach RGN / lowboy</Spec>
              <Spec>Capacity: 80,000 lb open (2-point rigid); 80,000 lb in 16′ closed</Spec>
              <Spec>Overall: 48′ × 102″</Spec>
              <Spec>Main deck: 28′7″ extends to 50′</Spec>
              <Spec>Loaded deck height: 20″ · ~6″ ground clearance</Spec>
              <Spec>
                Gooseneck: 10′ mechanical detach, 49″ fifth-wheel ht, 15″ kingpin, 85″ swing, 3-position neck connector, 3′ flip neck, Honda pony motor w/ stainless lid
              </Spec>
              <Spec>Rear: 9′ rear deck, 40″ loaded ht, Apitong, reinforced for flip axle</Spec>
              <Spec>
                Axles: 24K on 54″ centers; Cush 25K air ride; 16.5×7 drum; 4S/2M ABS; raise/lower + manual ride height; Airweigh Quickweigh
              </Spec>
              <Spec>Tires: 255/70R22.5; 4 outer polished alum / 4 inner steel</Spec>
              <Spec>
                Other: toolbox front of main deck + rear of male deck; LED worklight; Alpha Black paint; front ramps tapered to 4″ w/ traction bars
              </Spec>
            </ul>
          </div>
          <div className="rounded-lg border border-brand-parchment bg-brand-rose/40 p-4">
            <div className="text-sm text-brand-stone">
              Availability: <span className="text-brand-ink">available spring 2027</span>. FOB Oelwein, IA.
            </div>
          </div>
        </div>
        <aside className="space-y-4">
          <div className="rounded-lg border border-brand-parchment bg-white p-4">
            <div className="heading-condensed text-sm">Contact</div>
            <div className="mt-2 text-sm text-brand-stone">
              Eli · Tenfour LLC
            </div>
            <div className="mt-1">
              <a href="tel:+18605531034" className="btn btn-outline w-full">Call 860-553-1034</a>
            </div>
            <div className="mt-2">
              <a href="#inquire" className="btn btn-primary w-full">Request a rental</a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Spec({ children }: { children: React.ReactNode }) {
  return (
    <li className="pl-5 relative">
      <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-brand-red" aria-hidden />
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

