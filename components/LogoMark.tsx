export default function LogoMark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className="grid place-items-center h-10 w-10 rounded-sm"
        style={{ backgroundColor: "#a01e1e" }}
        aria-hidden
      >
        <span className="font-barlowCondensed text-white font-extrabold leading-none">10-4</span>
      </div>
      <div className="leading-tight">
        <div className="heading-condensed text-xl">TENFOUR</div>
        <div className="text-xs tracking-wider text-brand-stone -mt-0.5">Trailer Rentals</div>
      </div>
    </div>
  );
}
