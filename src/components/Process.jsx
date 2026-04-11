import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Diagnóstico gratis',
    desc: 'Analizamos tu flujo de ventas y atención actual. Identificamos fugas de dinero y oportunidades reales.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    tag: 'Semana 0',
  },
  {
    num: '02',
    title: 'Implementación 2–4 sem',
    desc: 'Configuramos todo: contenido, bot, automatizaciones, dashboard. Tú sigues vendiendo mientras trabajamos.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tag: 'Semanas 1–4',
  },
  {
    num: '03',
    title: 'Resultados medibles',
    desc: 'Métricas reales desde la semana 1. Más leads atendidos, más ventas cerradas, menos tiempo operativo.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    tag: 'Semana 5+',
  },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="proceso" className="py-20 md:py-28 border-t border-dark-border bg-grid overflow-hidden" ref={ref}>
      <div className="section-wrap">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 rounded-full px-4 py-1.5 mb-6">
            <svg className="w-3.5 h-3.5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs tracking-[0.18em] text-amber font-medium uppercase">Proceso</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            De cero a resultados{' '}
            <span className="text-gradient-amber">en 3 pasos</span>
          </h2>
          <p className="text-text-muted text-base max-w-lg mx-auto">
            Sin complicaciones. Nosotros hacemos el trabajo pesado.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-6 md:gap-8">

          {/* Dashed connector line — desktop only */}
          <div className="hidden md:block absolute top-[3.25rem] left-[calc(16.666%+2rem)] right-[calc(16.666%+2rem)] pointer-events-none z-0">
            <svg width="100%" height="2" className="overflow-visible">
              <line
                x1="0" y1="1" x2="100%" y2="1"
                stroke="rgba(250,199,117,0.25)"
                strokeWidth="1.5"
                strokeDasharray="6 5"
              />
              {/* Arrow right */}
              <polygon
                points="100%,1 calc(100% - 8px),-3 calc(100% - 8px),5"
                fill="rgba(250,199,117,0.35)"
              />
            </svg>
            {/* Animated travel dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber"
              style={{ left: 0, boxShadow: '0 0 8px rgba(250,199,117,0.8)' }}
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
            />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.18 }}
              className="relative group text-center"
            >
              {/* Decorative large number — background */}
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 font-heading font-black select-none pointer-events-none
                           text-amber/[0.05] group-hover:text-amber/[0.09] transition-colors duration-500 leading-none"
                style={{ fontSize: '7rem' }}
                aria-hidden="true"
              >
                {s.num}
              </div>

              {/* Icon circle */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-2xl bg-amber-glow border border-amber/25 flex items-center justify-center mx-auto mb-5
                           group-hover:border-amber/55 transition-all duration-300"
                style={{
                  boxShadow: '0 0 0 0 rgba(250,199,117,0)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(250,199,117,0.3), 0 0 50px rgba(250,199,117,0.1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 0 0 0 rgba(250,199,117,0)'
                }}
              >
                <span className="text-amber">{s.icon}</span>

                {/* Step badge */}
                <div className="absolute -top-2.5 -right-2.5 bg-dark border border-amber/30 rounded-full w-6 h-6 flex items-center justify-center">
                  <span className="font-heading text-[10px] font-bold text-amber">{i + 1}</span>
                </div>
              </motion.div>

              {/* Tag */}
              <div className="inline-flex items-center gap-1.5 bg-amber/8 border border-amber/15 rounded-full px-3 py-0.5 mb-3 relative z-10">
                <span className="w-1 h-1 rounded-full bg-amber/60" />
                <span className="text-[10px] font-semibold text-amber/70 tracking-widest uppercase">{s.tag}</span>
              </div>

              <h3 className="font-heading text-lg font-bold text-text mb-2.5 relative z-10">{s.title}</h3>
              <p className="text-sm text-text-dim leading-relaxed max-w-xs mx-auto relative z-10">{s.desc}</p>

              {/* Mobile connector */}
              {i < steps.length - 1 && (
                <div className="md:hidden flex flex-col items-center mt-6 mb-2 gap-1">
                  {[0, 1, 2].map(d => (
                    <div
                      key={d}
                      className="w-px h-2 bg-amber/25"
                      style={{ opacity: 1 - d * 0.25 }}
                    />
                  ))}
                  <div className="w-1.5 h-1.5 rounded-full bg-amber/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-14"
        >
          <p className="text-sm text-text-dim">
            ¿Listo para comenzar?{' '}
            <span className="text-amber font-medium">El diagnóstico es completamente gratis.</span>
          </p>
        </motion.div>

      </div>
    </section>
  )
}
