"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import FiguresBar from "@/components/FiguresBar";
import SearchStrip from "@/components/SearchStrip";
import FleetGrid from "@/components/FleetGrid";
import YardTable from "@/components/YardTable";
import HowItWorks from "@/components/HowItWorks";
import BookingSteps from "@/components/BookingSteps";
import Footer from "@/components/Footer";
import RequestForm from "@/components/RequestForm";

export default function HomePage() {
  const [q, setQ] = useState("");
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <FiguresBar />
        <SearchStrip onQuery={setQ} />
        <FleetGrid query={q} />
        <YardTable />
        <HowItWorks />
        <BookingSteps />
        <RequestForm />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="container-xl py-16 sm:py-24">
      <h1 className="heading-condensed text-5xl sm:text-6xl leading-tight">
        Dry van & flatbed trailer rentals
      </h1>
      <p className="mt-4 max-w-2xl text-brand-stone">
        Reliable 48’ and 53’ equipment across Connecticut and New England. Fast scheduling,
        straightforward terms, and responsive service.
      </p>
      <div className="mt-6 flex gap-3">
        <a href="#inquire" className="btn btn-primary">Request a rental</a>
        <a href="tel:+18605531034" className="btn btn-outline">860-553-1034</a>
      </div>
    </section>
  );
}
