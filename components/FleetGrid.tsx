import Image from "next/image";

type FleetItem = {
  sku: "DV-53" | "DV-48" | "FB-48" | "FB-53";
  name: string;
  type: "Dry Van" | "Flatbed";
  length: 48 | 53;
  sampleRate: string;
  notes?: string;
  heroSrc?: string; // path under /public
  heroAlt?: string;
  caption?: string; // short overlay line
  listingUrl?: string;
  listingLabel?: string;
  placeholderCaption?: string; // used when no heroSrc
};

const FLEET: FleetItem[] = [
  {
    sku: "DV-53",
    name: "53’ Dry Van",
    type: "Dry Van",
    length: 53,
    sampleRate: "$55 / day",
    notes: "Swing doors",
    heroSrc: "/fleet/dv53-great-dane-hero.jpg",
    heroAlt: "2021 Great Dane Champion 53’ dry van, 3/4 front view",
    caption:
      "Equipment example — not Tenfour fleet. Still at dealer. 2021 Great Dane Champion · Louisville KY",
    listingUrl:
      "https://www.interstatetrailer.com/inventory/2021-great-dane-champion-sheet-and-post-ut-3131-lou/",
    listingLabel: "Interstate Trailer listing (UT-3131-LOU)"
  },
  {
    sku: "DV-48",
    name: "48’ Dry Van",
    type: "Dry Van",
    length: 48,
    sampleRate: "$45 / day",
    placeholderCaption: "Equipment example (photo coming)"
  },
  {
    sku: "FB-48",
    name: "48’ Flatbed",
    type: "Flatbed",
    length: 48,
    sampleRate: "$40 / day",
    // STRICT per owner: only Transcraft 48' combo from Granite City; keep placeholder until photo added
    placeholderCaption:
      "Equipment example — 2023 Transcraft combo (photo coming) · Granite City IL",
    listingUrl:
      "https://www.truckpaper.com/listing/for-sale/258460883/2023-transcraft-48-ft-x-102-in-combination",
    listingLabel: "TruckPaper listing (River-Roads)"
  },
  {
    sku: "FB-53",
    name: "53’ Flatbed",
    type: "Flatbed",
    length: 53,
    sampleRate: "$50 / day",
    placeholderCaption: "Equipment example (photo coming)"
  }
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
            <div className="relative aspect-[16/9] bg-brand-parchment/40">
              {t.heroSrc ? (
                <>
                  <Image
                    src={t.heroSrc}
                    alt={t.heroAlt || t.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/50 text-white text-[11px] sm:text-xs px-2 py-1 leading-tight">
                    <div>{t.caption || "Equipment example — not Tenfour fleet. Still at dealer."}</div>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 grid place-items-center text-brand-stone">
                  <div className="text-center px-3">
                    <div className="heading-condensed text-base">{t.name}</div>
                    <div className="text-xs mt-1">{t.placeholderCaption || "Equipment example (photo coming)"}</div>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="heading-condensed text-lg">{t.sku}</span>
                <span className="text-sm text-brand-stone">{t.type}</span>
              </div>
              <div className="text-sm text-brand-stone">Sample rate: {t.sampleRate}</div>
              {t.notes && <div className="text-sm text-brand-stone">Notes: {t.notes}</div>}
              {t.listingUrl && (
                <div className="text-xs text-brand-stone">
                  Listing:{" "}
                  <a className="underline text-brand-red" href={t.listingUrl} target="_blank" rel="noreferrer">
                    {t.listingLabel || "View details"}
                  </a>
                </div>
              )}
              <div className="text-[11px] text-brand-stone">
                Photos are dealer listing examples; not in-stock fleet.
              </div>
              <a href="#inquire" className="btn btn-primary w-full mt-2">Request this</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
