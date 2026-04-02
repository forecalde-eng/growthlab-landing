import { motion } from 'framer-motion'

const pillarT = ['Gestion de redes sociales y contenido', 'Estrategia de marketing digital', 'Asistente virtual de ventas dedicado', 'Monitoreo y revision de chats del bot', 'Reportes de rendimiento mensuales']
const pillarO = ['Chatbots IA para WhatsApp (texto, audio, imagenes)', 'Automatizaciones de procesos internos', 'Dashboard de conversaciones en tiempo real', 'Landing pages profesionales', 'Integraciones con CRM, calendario, email']

function PillarCard({ color, label, subtitle, items, initial, delay }) {
  const isTeal = color === 'teal'
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay }}
      className={`${isTeal ? 'bg-teal-glow border-teal/15 hover:border-teal/30' : 'bg-purple-glow border-purple/15 hover:border-purple/30'} border rounded-2xl p-7 transition-colors duration-300`}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-full ${isTeal ? 'bg-teal/15 border-teal/25' : 'bg-purple/15 border-purple/25'} border flex items-center justify-center font-heading text-lg font-medium ${isTeal ? 'text-teal' : 'text-purple'}`}>
          {initial}
        </div>
        <div>
          <h3 className={`font-heading text-lg font-medium ${isTeal ? 'text-teal' : 'text-purple'}`}>{label}</h3>
          <p className="text-xs text-text-dim">{subtitle}</p>
        </div>
      </div>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className={`w-1.5 h-1.5 rounded-full ${isTeal ? 'bg-teal' : 'bg-purple'} mt-2 shrink-0`} />
            <p className="text-sm text-text-muted leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Solution() {
  return (
    <section id="servicios" className="py-20 md:py-28 border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }} className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] text-teal font-medium mb-4 uppercase">La solucion</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">Dos fuerzas, un solo equipo</h2>
          <p className="text-text-muted text-base max-w-xl mx-auto">Marketing humano + automatizacion inteligente trabajando juntos para que tu negocio venda mas y gaste menos.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          <PillarCard color="purple" label="Growth & Customer Service" subtitle="El lado humano" items={pillarT} initial="T" delay={0.1} />
          <PillarCard color="teal" label="Automatizacion con IA" subtitle="El lado inteligente" items={pillarO} initial="O" delay={0.25} />
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-dark-border rounded-full px-6 py-2.5">
            <span className="text-purple text-sm font-medium">Estrategia</span>
            <span className="text-text-dim text-sm">+</span>
            <span className="text-teal text-sm font-medium">Tecnologia</span>
            <span className="text-text-dim text-sm">=</span>
            <span className="text-text text-sm font-medium">Resultados reales</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
