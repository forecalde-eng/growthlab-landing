import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar({ waLink }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(10, 10, 15, 0.85)'
          : 'transparent',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.06)'
          : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
        boxShadow: scrolled
          ? '0 1px 40px rgba(0,0,0,0.4), 0 1px 0 rgba(93,202,165,0.04)'
          : 'none',
      }}
    >
      <div className="section-wrap h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="font-heading text-xl font-bold tracking-tight flex items-center gap-0.5">
          <span
            style={{
              background: 'linear-gradient(135deg, #5DCAA5, #8BDDC0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Growth
          </span>
          <span className="text-text">Lab</span>
          <span
            className="ml-1 text-sm font-light"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            AI
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-all duration-200 relative group"
              style={{ color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            >
              {l.label}
              {/* Underline on hover */}
              <span
                className="absolute -bottom-0.5 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                style={{ background: 'linear-gradient(90deg, #5DCAA5, transparent)' }}
              />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:scale-[1.04]"
          style={{
            background: scrolled
              ? 'linear-gradient(135deg, #5DCAA5, #4ab896)'
              : 'rgba(93,202,165,0.15)',
            color: scrolled ? '#04342C' : '#5DCAA5',
            border: scrolled ? 'none' : '1px solid rgba(93,202,165,0.3)',
            boxShadow: scrolled ? '0 0 16px rgba(93,202,165,0.25)' : 'none',
          }}
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Agendar demo
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-2 group"
          aria-label="Menu"
        >
          <span
            className="block w-5 h-0.5 rounded-full transition-all duration-300 origin-center"
            style={{
              background: 'rgba(255,255,255,0.7)',
              transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-5 h-0.5 rounded-full transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.7)',
              opacity: open ? 0 : 1,
              transform: open ? 'scaleX(0)' : 'scaleX(1)',
            }}
          />
          <span
            className="block w-5 h-0.5 rounded-full transition-all duration-300 origin-center"
            style={{
              background: 'rgba(255,255,255,0.7)',
              transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(10, 10, 15, 0.96)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              backdropFilter: 'blur(24px)',
            }}
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.06 }}
                  className="text-sm font-medium py-2.5 px-3 rounded-lg transition-all duration-200"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.9)'
                    e.currentTarget.style.background = 'rgba(93,202,165,0.06)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {l.label}
                </motion.a>
              ))}

              <div className="h-px my-2" style={{ background: 'rgba(255,255,255,0.06)' }} />

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 rounded-full mt-1 transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #5DCAA5, #4ab896)',
                  color: '#04342C',
                  boxShadow: '0 0 20px rgba(93,202,165,0.25)',
                }}
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
