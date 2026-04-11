import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const problems = [
  {
    stat: 67,
    suffix: '%',
    title: 'Respondes tarde',
    desc: 'de mensajes llegan fuera de horario. Cada minuto sin responder es un cliente que se va con tu competencia.',
    label: 'de mensajes perdidos',
  },
  {
    stat: 5,
    suffix: ' min',
    title: 'Marketing sin plan',
    desc: 'es lo máximo que espera un lead. Publicas contenido sin estrategia, sin métricas, sin retorno claro.',
    label: 'tolerancia del lead',
  },
  {
    stat: 78,
    suffix: '%',
    title: 'Operaciones manuales',
    desc: 'compra con quien responde primero. Tu equipo pierde horas en tareas que una IA resuelve en segundos.',
    label: 'compra por velocidad',
  },
]

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}

function StatCard({ p, index, inView }) {
  const count = useCountUp(p.stat, 1600 + index * 200, inView)

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.15 }}
      className="group relative bg-coral-glow border border-coral/10 rounded-2xl p-7 overflow-hidden
                 hover:border-coral/40 transition-all duration-400 cursor-default"
      style={{ transition: 'border-color 0.4s ease, box-shadow 0.4s ease' }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 0 32px rgba(240,149,149,0.18), 0 0 80px rgba(240,149,149,0.07), inset 0 0 0 1px rgba(240,149,149,0.15)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Background number watermark */}
      <div
        className="absolute -bottom-4 -right-2 font-heading font-black text-[120px] leading-none select-none pointer-events-none
                   text-coral/[0.04] group-hover:text-coral/[0.07] transition-colors duration-500"
        aria-hidden="true"
      >
        {p.stat}{p.suffix}
      </div>

      {/* Top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(240,149,149,0.5), transparent)' }}
      />

      {/* Stat */}
      <div className="mb-4">
        <span
          className="font-heading font-black leading-none tabular-nums"
          style={{
            fontSize: 'clamp(3rem, 5vw, 4rem)',
            background: 'linear-gradient(135deg, #F09595, #f5b8b8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 12px rgba(240,149,149,0.4))',
          }}
        >
          {count}{p.suffix}
        </span>
        <p className="text-xs text-coral/60 mt-1 font-medium tracking-wide">{p.label}</p>
      </div>

      <div
        className="w-8 h-px mb-4 bg-coral/30 group-hover:bg-coral/60 transition-colors duration-300"
      />

      <h3 className="font-heading text-base font-semibold text-text mb-2">{p.title}</h3>
      <p className="text-sm text-text-dim leading-relaxed">{p.desc}</p>
    </motion.div>
  )
}

export default function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 md:py-28 border-t border-dark-border" ref={ref}>
      <div className="section-wrap">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-coral/10 border border-coral/20 rounded-full px-4 py-1.5 mb-6">
            <svg className="w-3.5 h-3.5 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="text-xs tracking-[0.18em] text-coral font-medium uppercase">El problema</span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Tu negocio pierde dinero{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #F09595, #f5b8b8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              de estas formas
            </span>
          </h2>
          <p className="text-text-muted text-base max-w-lg">
            La mayoría de negocios pierden ventas por problemas que tienen solución. ¿Cuántos te identifican?
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <StatCard key={i} p={p} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 p-5 rounded-xl border border-dark-border bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full bg-coral/10 border border-coral/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-heading font-semibold text-text text-sm">La buena noticia:</span>
          </div>
          <p className="text-sm text-text-muted leading-relaxed">
            Todos estos problemas tienen solución con la combinación correcta de{' '}
            <span className="text-teal font-medium">estrategia humana</span> +{' '}
            <span className="text-purple font-medium">automatización con IA</span>.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
