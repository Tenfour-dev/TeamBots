import Link from "next/link";
import LogoMark from "./LogoMark";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 h-nav bg-brand-paper/90 backdrop-blur border-b border-brand-parchment">
      <div className="container-xl h-full flex items-center justify-between">
        <LogoMark />
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#fleet" className="hover:text-brand-red">Fleet</Link>
          <Link href="#yards" className="hover:text-brand-red">Yards</Link>
          <Link href="#how" className="hover:text-brand-red">How it works</Link>
          <Link href="#inquire" className="hover:text-brand-red">Request a rental</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+18605531034" className="btn btn-outline hidden sm:inline-flex" aria-label="Call 860-553-1034">
            860-553-1034
          </a>
          <Link href="#inquire" className="btn btn-primary">
            Request a rental
          </Link>
        </div>
      </div>
    </header>
  );
}
