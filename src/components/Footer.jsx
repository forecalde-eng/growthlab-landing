export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-heading text-lg font-semibold tracking-tight">
          <span className="text-teal">Growth</span><span className="text-text">Lab</span>
          <span className="text-text-muted font-light ml-1">AI</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-text-dim">
          <a href="#servicios" className="hover:text-text transition-colors">Servicios</a>
          <a href="#proceso" className="hover:text-text transition-colors">Proceso</a>
          <a href="#pricing" className="hover:text-text transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-text transition-colors">FAQ</a>
        </div>
        <span className="text-text-dim text-xs">Quito, Ecuador — 2026</span>
      </div>
    </footer>
  )
}
