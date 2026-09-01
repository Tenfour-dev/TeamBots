"use client";

import { useState } from "react";

type State =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

export default function RequestForm() {
  const [state, setState] = useState<State>({ status: "idle" });

  async function submit(formData: FormData) {
    setState({ status: "submitting" });
    try {
      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      });
      if (!res.ok) throw new Error(await res.text());
      setState({ status: "success" });
    } catch (err: any) {
      setState({ status: "error", message: err?.message ?? "Failed to submit" });
    }
  }

  return (
    <section id="inquire" className="container-xl py-12 space-y-6">
      <h2 className="heading-condensed text-3xl">Request a rental</h2>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg border border-brand-parchment bg-white p-6"
        action={async (fd) => submit(fd)}
      >
        <Field label="Name">
          <input name="name" required className="input" placeholder="Your name" />
        </Field>
        <Field label="Company">
          <input name="company" className="input" placeholder="Company (optional)" />
        </Field>
        <Field label="Email">
          <input type="email" name="email" required className="input" placeholder="you@example.com" />
        </Field>
        <Field label="Phone">
          <input name="phone" className="input" placeholder="860-553-1034" />
        </Field>
        <Field label="Trailer type">
          <select name="type" className="input">
            <option>Dry Van</option>
            <option>Flatbed</option>
          </select>
        </Field>
        <Field label="Length">
          <select name="length" className="input">
            <option>53</option>
            <option>48</option>
          </select>
        </Field>
        <Field label="Preferred SKU">
          <input name="sku" className="input" placeholder="e.g. DV-53" />
        </Field>
        <Field label="Yard">
          <input name="yard" className="input" placeholder="e.g. Hartford, CT" />
        </Field>
        <div className="md:col-span-2">
          <label className="block text-sm text-brand-stone mb-1">Notes</label>
          <textarea name="notes" className="input min-h-24" placeholder="Dates, counts, delivery, etc." />
        </div>
        <div className="md:col-span-2 flex items-center gap-3">
          <button type="submit" className="btn btn-primary" disabled={state.status === "submitting"}>
            {state.status === "submitting" ? "Submitting…" : "Send request"}
          </button>
          <a href="tel:+18605531034" className="btn btn-outline">Or call 860-553-1034</a>
          {state.status === "success" && <span className="text-brand-red">Got it — we’ll be in touch.</span>}
          {state.status === "error" && <span className="text-red-700">{state.message}</span>}
        </div>
      </form>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm text-brand-stone mb-1">{label}</label>
      {children}
    </div>
  );
}
