import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar({ waLink }) {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-dark-border bg-dark/80 backdrop-blur-xl">
      <div className="section-wrap h-16 flex items-center justify-between">
        <a href="#" className="font-heading text-xl font-semibold tracking-tight">
          <span className="text-teal">Growth</span><span className="text-text">Lab</span>
          <span className="text-text-muted font-light ml-1">AI</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-text-muted hover:text-text transition-colors duration-200">{l.label}</a>
          ))}
        </div>
        <a href={waLink} target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-teal text-teal-dark text-sm font-medium px-5 py-2 rounded-full hover:brightness-110 transition-all duration-200">
          Agendar demo
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
          <span className={`block w-5 h-0.5 bg-text transition-transform duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-text transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-text transition-transform duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-dark-border bg-dark/95 backdrop-blur-xl">
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-text-muted hover:text-text transition-colors">{l.label}</a>
              ))}
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal text-teal-dark text-sm font-medium px-5 py-2.5 rounded-full">
                Agendar demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
