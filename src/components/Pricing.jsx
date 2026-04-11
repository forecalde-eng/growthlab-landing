import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const plans = [
  {
    name: 'Starter',
    setup: '$300',
    price: '$200',
    period: '/mes',
    desc: 'Ideal para empezar a automatizar',
    features: [
      'Agente IA WhatsApp',
      'Dashboard de conversaciones',
      'Landing page profesional',
      'Soporte y monitoreo',
    ],
    popular: false,
    color: 'amber',
    cta: 'Empezar ahora',
  },
  {
    name: 'Growth',
    setup: '$500',
    price: '$750',
    period: '/mes',
    desc: 'Todo para crecer de verdad',
    features: [
      'Agente IA de ventas',
      'Automatización de procesos internos',
      'Gestión de redes sociales',
      'Estrategia de marketing',
      'Reportes mensuales',
    ],
    popular: true,
    color: 'teal',
    cta: 'Empezar ahora',
  },
  {
    name: 'Enterprise',
    setup: null,
    price: 'Custom',
    period: '',
    desc: 'Soluciones a medida',
    features: [
      'Todo de Growth',
      'Multi-bot varios números',
      'Integraciones CRM/ERP',
      'Estrategia dedicada',
      'Soporte prioritario 24/7',
    ],
    popular: false,
    color: 'purple',
    cta: 'Contactar',
  },
]

// Static class maps — full strings required for TW4 static scanner
const planStyles = {
  teal: {
    cardBorder: 'border-2 border-teal/35',
    nameText: 'text-teal',
    priceGrad: 'linear-gradient(135deg, #5DCAA5, #8BDDC0)',
    priceGlow: 'drop-shadow(0 0 12px rgba(93,202,165,0.35))',
    topLine: 'linear-gradient(90deg, transparent 0%, rgba(93,202,165,0.8) 50%, transparent 100%)',
    divider: 'linear-gradient(90deg, rgba(93,202,165,0.2), transparent)',
    checkColor: '#5DCAA5',
    cta: 'bg-teal text-teal-dark hover:brightness-110 hover:scale-[1.02] animate-pulse-glow',
  },
  amber: {
    cardBorder: 'border border-amber/20',
    nameText: 'text-amber',
    priceGrad: 'linear-gradient(135deg, #FAC775, #ffd9a0)',
    priceGlow: 'drop-shadow(0 0 12px rgba(250,199,117,0.3))',
    topLine: 'linear-gradient(90deg, transparent 0%, rgba(250,199,117,0.5) 50%, transparent 100%)',
    divider: 'linear-gradient(90deg, rgba(250,199,117,0.2), transparent)',
    checkColor: '#FAC775',
    cta: 'border border-amber/30 text-amber hover:bg-amber/10 hover:border-amber/60',
  },
  purple: {
    cardBorder: 'border border-purple/20',
    nameText: 'text-purple',
    priceGrad: 'linear-gradient(135deg, #AFA9EC, #cec9f5)',
    priceGlow: 'drop-shadow(0 0 10px rgba(175,169,236,0.3))',
    topLine: 'linear-gradient(90deg, transparent 0%, rgba(175,169,236,0.5) 50%, transparent 100%)',
    divider: 'linear-gradient(90deg, rgba(175,169,236,0.15), transparent)',
    checkColor: '#AFA9EC',
    cta: 'border border-purple/25 text-purple hover:bg-purple/10 hover:border-purple/50',
  },
}

const checkIcon = (
  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
)

function PlanCard({ plan, index, inView }) {
  const s = planStyles[plan.color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.14 }}
      className={`
        relative rounded-2xl overflow-hidden transition-all duration-500 flex flex-col
        ${s.cardBorder}
        ${plan.popular ? 'md:scale-[1.04] md:z-10' : ''}
      `}
      style={{
        background: plan.popular
          ? 'linear-gradient(160deg, rgba(93,202,165,0.08) 0%, rgba(12,18,15,0.95) 60%)'
          : 'rgba(18, 18, 26, 0.8)',
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: s.topLine }}
      />

      {/* Pulse glow overlay for popular */}
      {plan.popular && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none animate-pulse-glow"
          style={{ opacity: 0.4 }}
        />
      )}

      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2">
          <div
            className="flex items-center gap-1.5 px-5 py-1.5 rounded-b-xl font-semibold text-xs tracking-wide uppercase"
            style={{ background: '#5DCAA5', color: '#04342C', boxShadow: '0 4px 20px rgba(93,202,165,0.4)' }}
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Popular
          </div>
        </div>
      )}

      <div className={`p-7 flex flex-col flex-1 ${plan.popular ? 'pt-9' : ''}`}>

        {/* Plan name + desc */}
        <div className="mb-5">
          <h3 className={`font-heading text-xl font-bold mb-1 ${s.nameText}`}>{plan.name}</h3>
          <p className="text-sm text-text-dim">{plan.desc}</p>
        </div>

        {/* Price block */}
        <div className="mb-6">
          {plan.price === 'Custom' ? (
            <div>
              <span
                className="font-heading text-4xl font-black"
                style={{ background: s.priceGrad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >
                Custom
              </span>
              <p className="text-xs text-text-dim mt-1">Precio según tus necesidades</p>
            </div>
          ) : (
            <div>
              {/* Setup fee */}
              {plan.setup && (
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-text-dim bg-white/[0.05] border border-dark-border rounded-full px-2.5 py-0.5">
                    Setup {plan.setup} único
                  </span>
                </div>
              )}
              {/* Monthly price */}
              <div className="flex items-end gap-1">
                <span
                  className="font-heading text-5xl font-black leading-none"
                  style={{ background: s.priceGrad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: s.priceGlow }}
                >
                  {plan.price}
                </span>
                <span className="text-text-dim text-sm mb-1">{plan.period}</span>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-px mb-5" style={{ background: s.divider }} />

        {/* Features */}
        <div className="space-y-3 mb-8 flex-1">
          {plan.features.map((f, j) => (
            <motion.div
              key={j}
              initial={{ opacity: 0, x: -6 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.14 + j * 0.06 }}
              className="flex items-start gap-3 group/feat"
            >
              <span
                className="mt-0.5 shrink-0 transition-transform duration-200 group-hover/feat:scale-110"
                style={{ color: s.checkColor }}
              >
                {checkIcon}
              </span>
              <span className="text-sm text-text-muted leading-relaxed group-hover/feat:text-text/80 transition-colors duration-200">
                {f}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          className={`block text-center text-sm font-semibold py-3.5 rounded-full transition-all duration-300 ${s.cta}`}
        >
          {plan.cta}
        </a>
      </div>
    </motion.div>
  )
}

export default function Pricing({ waLink }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" className="py-20 md:py-28 border-t border-dark-border" ref={ref}>
      <div className="section-wrap">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-4 py-1.5 mb-6">
            <svg className="w-3.5 h-3.5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs tracking-[0.18em] text-teal font-medium uppercase">Pricing</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Planes que se{' '}
            <span className="text-gradient-teal">pagan solos</span>
          </h2>
          <p className="text-text-muted text-base max-w-lg mx-auto">
            Elige el plan que mejor se adapte. Sin contratos de permanencia.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-4 items-start">
          {plans.map((plan, i) => (
            <PlanCard key={i} plan={plan} index={i} inView={inView} />
          ))}
        </div>

        {/* VA add-on note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 bg-purple/8 border border-purple/20 rounded-xl px-5 py-3">
            <svg className="w-4 h-4 text-purple shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <p className="text-sm text-text-muted">
              <span className="text-purple font-semibold">VA disponible</span>
              {' '}desde{' '}
              <span className="text-text font-semibold">$200/mes adicionales</span>
              {' '}en cualquier plan
            </p>
          </div>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-8"
        >
          {[
            { icon: '🔒', label: 'Sin contrato de permanencia' },
            { icon: '⚡', label: 'Setup en 24–48 hs' },
            { icon: '💬', label: 'Soporte en español' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-sm">{item.icon}</span>
              <span className="text-xs text-text-dim font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
