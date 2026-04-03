import { motion } from 'framer-motion'

const steps = [
  { num: '1', title: 'Diagnostico gratis', desc: 'Analizamos tu flujo de ventas y atencion actual. Identificamos fugas de dinero y oportunidades.' },
  { num: '2', title: 'Implementacion 2-4 sem', desc: 'Configuramos todo: contenido, bot, automatizaciones, dashboard. Tu sigues vendiendo.' },
  { num: '3', title: 'Resultados medibles', desc: 'Metricas reales desde la semana 1. Mas leads atendidos, mas ventas cerradas.' },
]

export default function Process() {
  return (
    <section id="proceso" className="py-20 md:py-28 border-t border-dark-border bg-grid">
      <div className="section-wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }} className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] text-amber font-medium mb-4 uppercase">Proceso</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">De cero a resultados en 3 pasos</h2>
          <p className="text-text-muted text-base max-w-lg mx-auto">Sin complicaciones. Nosotros hacemos el trabajo pesado.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.15 }} className="text-center">
              <div className="w-14 h-14 rounded-full bg-amber-glow border border-amber/20 flex items-center justify-center mx-auto mb-5">
                <span className="font-heading text-xl font-semibold text-amber">{s.num}</span>
              </div>
              <h3 className="font-heading text-lg font-medium text-text mb-3">{s.title}</h3>
              <p className="text-sm text-text-dim leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
