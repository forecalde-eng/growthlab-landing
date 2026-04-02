import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const problems = [
  { stat: '67%', title: 'Respondes tarde', desc: 'de mensajes llegan fuera de horario. Cada minuto sin responder es un cliente que se va con tu competencia.' },
  { stat: '5 min', title: 'Marketing sin plan', desc: 'es lo maximo que espera un lead. Publicas contenido sin estrategia, sin metricas, sin retorno claro.' },
  { stat: '78%', title: 'Operaciones manuales', desc: 'compra con quien responde primero. Tu equipo pierde horas en tareas que una IA resuelve en segundos.' },
]

export default function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <section className="py-20 md:py-28 border-t border-dark-border" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <p className="text-xs tracking-[0.2em] text-coral font-medium mb-4 uppercase">El problema</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">Tu negocio pierde dinero de estas formas</h2>
          <p className="text-text-muted text-base mb-12 max-w-lg">La mayoria de negocios pierden ventas por problemas que tienen solucion.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.1 + i * 0.15 }}
              className="bg-coral-glow border border-coral/10 rounded-xl p-6 hover:border-coral/25 transition-colors duration-300">
              <p className="font-heading text-4xl font-bold text-coral mb-3">{p.stat}</p>
              <h3 className="font-heading text-lg font-medium text-text mb-2">{p.title}</h3>
              <p className="text-sm text-text-dim leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
