"use client";

import { useState } from "react";

export default function SearchStrip({ onQuery }: { onQuery: (q: string) => void }) {
  const [q, setQ] = useState("");
  return (
    <section className="border-b border-brand-parchment bg-brand-paper">
      <div className="container-xl py-4 flex flex-col sm:flex-row items-stretch gap-3">
        <input
          className="flex-1 rounded-md border border-brand-parchment px-4 py-2 outline-none focus:ring-2 focus:ring-brand-red/40"
          placeholder="Search trailers by SKU, type, or length…"
          value={q}
          onChange={(e) => {
            const v = e.target.value;
            setQ(v);
            onQuery(v);
          }}
        />
        <div className="flex gap-3">
          <a href="tel:+18605531034" className="btn btn-outline">860-553-1034</a>
          <a href="#inquire" className="btn btn-primary">Request a rental</a>
        </div>
      </div>
    </section>
  );
}
