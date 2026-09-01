export default function Footer() {
  return (
    <footer className="mt-16 border-t border-brand-parchment bg-brand-paper">
      <div className="container-xl py-8 text-sm text-brand-stone flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} TenFour LLC</div>
        <div className="flex items-center gap-4">
          <a href="tel:+18605531034" className="hover:text-brand-red">860-553-1034</a>
          <a href="#inquire" className="hover:text-brand-red">Request a rental</a>
        </div>
      </div>
    </footer>
  );
}
