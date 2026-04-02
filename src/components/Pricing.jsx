import { motion } from 'framer-motion'

const plans = [
  { name: 'Starter', price: '$X', period: '/mes', desc: 'Ideal para empezar a automatizar', features: ['Chatbot IA para WhatsApp (texto)', 'Dashboard de conversaciones', 'Landing page profesional', 'Soporte por email'], popular: false },
  { name: 'Growth', price: '$X', period: '/mes', desc: 'Todo para crecer de verdad', features: ['Todo de Starter', 'Bot con audio e imagenes', 'Gestion de redes sociales', 'Contenido y estrategia de marketing', 'Asistente virtual de ventas dedicado', 'Reportes mensuales'], popular: true },
  { name: 'Enterprise', price: 'Custom', period: '', desc: 'Soluciones a medida', features: ['Todo de Growth', 'Multi-bot (varios numeros)', 'Integraciones custom (CRM, ERP)', 'Estrategia dedicada', 'Soporte prioritario 24/7'], popular: false },
]

export default function Pricing({ waLink }) {
  return (
    <section id="pricing" className="py-20 md:py-28 border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }} className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] text-amber font-medium mb-4 uppercase">Pricing</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">Planes que se pagan solos</h2>
          <p className="text-text-muted text-base max-w-lg mx-auto">Elige el plan que mejor se adapte. Sin contratos de permanencia.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.12 }}
              className={`relative rounded-2xl p-6 transition-colors duration-300 ${plan.popular ? 'bg-teal-glow border-2 border-teal/30' : 'bg-white/[0.02] border border-dark-border hover:border-white/[0.12]'}`}>
              {plan.popular && <div className="absolute -top-3 right-5 bg-teal text-teal-dark text-xs font-semibold px-3 py-1 rounded-full">Popular</div>}
              <h3 className="font-heading text-xl font-medium mb-1">{plan.name}</h3>
              <p className="text-sm text-text-dim mb-5">{plan.desc}</p>
              <div className="mb-6">
                <span className={`font-heading text-4xl font-bold ${plan.popular ? 'text-teal' : 'text-amber'}`}>{plan.price}</span>
                <span className="text-text-dim text-sm">{plan.period}</span>
              </div>
              <div className="space-y-3 mb-7">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className={`mt-0.5 shrink-0 text-sm ${plan.popular ? 'text-teal' : 'text-text-dim'}`}>&#10003;</span>
                    <span className="text-sm text-text-muted">{f}</span>
                  </div>
                ))}
              </div>
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                className={`block text-center text-sm font-medium py-3 rounded-full transition-all duration-200 ${plan.popular ? 'bg-teal text-teal-dark hover:brightness-110' : 'border border-dark-border text-text-muted hover:border-text-muted hover:text-text'}`}>
                {plan.price === 'Custom' ? 'Contactar' : 'Empezar ahora'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
