import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const WA_LINK = "https://wa.me/593963820234?text=Hola%21%20Me%20interesa%20automatizar%20mi%20negocio%20con%20IA%20%F0%9F%A4%96"

function StarterIcon({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 018 0v4" />
      <circle cx="9" cy="16" r="1" fill={color} stroke="none" />
      <circle cx="15" cy="16" r="1" fill={color} stroke="none" />
      <path d="M12 3v8M9 3h6" />
    </svg>
  )
}

function GrowthIcon({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}

function ProIcon({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function ScaleIcon({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15L9 18" />
      <path d="M22 2L11 13" />
      <path d="M22 2L16 8l-4-4 6-6z" />
    </svg>
  )
}

function CheckIcon({ color }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  )
}

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Automatiza tu atención',
    setup: '$400',
    price: '$600',
    recommended: false,
    accent: '#48BED7',
    accentRgb: '72,190,215',
    priceGrad: 'linear-gradient(135deg, #48BED7, #7AD4E8)',
    Icon: StarterIcon,
    features: [
      'Agente IA para WhatsApp',
      '1 flujo de automatización n8n',
      'Hosting del ecosistema incluido',
      'Estrategia digital inicial',
      'Pack de creativos básicos',
    ],
    cta: 'Empezar ahora',
    ctaClass: 'pricing-cta pricing-cta-teal',
    href: WA_LINK,
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Todo para crecer de verdad',
    setup: '$400',
    price: '$750',
    recommended: false,
    accent: '#48BED7',
    accentRgb: '72,190,215',
    priceGrad: 'linear-gradient(135deg, #48BED7, #7AD4E8)',
    Icon: GrowthIcon,
    features: [
      'Bot IA con memoria conversacional (Supabase)',
      'CRM Chatwoot + transferencia a agente humano',
      '2 flujos de automatización n8n',
      'Pack creativos + estrategia digital ajustada',
      'Reporte mensual de desempeño',
    ],
    cta: 'Empezar ahora',
    ctaClass: 'pricing-cta pricing-cta-teal',
    href: WA_LINK,
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'El ecosistema completo',
    setup: '$600',
    price: '$950',
    recommended: true,
    accent: '#C057D5',
    accentRgb: '192,87,213',
    priceGrad: 'linear-gradient(135deg, #C057D5, #E07EF0)',
    Icon: ProIcon,
    features: [
      'Todo lo del plan Growth',
      'Hasta 3 flujos n8n (leads, agendamiento, notificaciones)',
      'Gestión de pauta digital activa (Meta/Google Ads)',
      'Creativos y contenido semanal para redes',
      'Reportes de métricas publicitarias',
    ],
    cta: 'Empezar ahora',
    ctaClass: 'pricing-cta pricing-cta-solid',
    href: WA_LINK,
  },
  {
    id: 'scale',
    name: 'Scale',
    tagline: 'Máxima potencia',
    setup: '$600',
    price: '$1,150',
    recommended: false,
    accent: '#C057D5',
    accentRgb: '192,87,213',
    priceGrad: 'linear-gradient(135deg, #C057D5, #E07EF0)',
    Icon: ScaleIcon,
    features: [
      'Bot premium con voz (ElevenLabs)',
      '5+ flujos n8n con lógica compleja',
      'Dashboard interactivo en vivo (ventas y leads)',
      'Integraciones con APIs externas',
      'Producción audiovisual VIP',
    ],
    cta: 'Contactar',
    ctaClass: 'pricing-cta pricing-cta-solid-teal',
    href: WA_LINK,
  },
]

function PlanCard({ plan, index, inView }) {
  const { Icon } = plan

  const cardInner = (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: plan.recommended ? 26 : 24 }}>

      {/* Icon + name row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18 }}>
        <div>
          <div style={{
            width: 42, height: 42,
            borderRadius: 11,
            background: `rgba(${plan.accentRgb}, 0.12)`,
            border: `1px solid rgba(${plan.accentRgb}, 0.22)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 14,
          }}>
            <Icon color={plan.accent} />
          </div>
          <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 18, fontWeight: 700, color: '#F0F2F8', marginBottom: 3, lineHeight: 1 }}>
            {plan.name}
          </h3>
          <p style={{ fontSize: 12.5, color: plan.accent, fontWeight: 500 }}>{plan.tagline}</p>
        </div>

        {/* Recomendado badge */}
        {plan.recommended && (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            background: 'linear-gradient(135deg, rgba(192,87,213,0.25), rgba(123,92,240,0.2))',
            border: '1px solid rgba(192,87,213,0.45)',
            borderRadius: 50, padding: '5px 11px',
            flexShrink: 0,
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#C057D5" stroke="none">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#C057D5', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.04em' }}>
              Recomendado
            </span>
          </div>
        )}
      </div>

      {/* Price block */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, marginBottom: 6 }}>
          <span style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 46,
            fontWeight: 800,
            lineHeight: 1,
            background: plan.priceGrad,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {plan.price}
          </span>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 6 }}>/mes</span>
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
          <span style={{ fontSize: 11, color: '#48BED7', fontWeight: 600, letterSpacing: '0.02em' }}>
            Setup {plan.setup} único
          </span>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>·</span>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>sin contrato</span>
        </div>
      </div>

      {/* Divider */}
      <div style={{
        height: 1,
        marginBottom: 18,
        background: `linear-gradient(90deg, rgba(${plan.accentRgb}, 0.25), rgba(${plan.accentRgb}, 0.05), transparent)`,
      }} />

      {/* Features */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 24, flex: 1 }}>
        {plan.features.map((feat, j) => (
          <motion.div
            key={j}
            initial={{ opacity: 0, x: -6 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.15 + index * 0.1 + j * 0.055 }}
            style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}
          >
            <CheckIcon color={plan.accent} />
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.45 }}>{feat}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <a href={plan.href} target="_blank" rel="noopener noreferrer" className={plan.ctaClass}>
        {plan.cta}
      </a>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 + index * 0.11 }}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {plan.recommended ? (
        <div className="pricing-pro-card" style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          {/* Subtle glow inside */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 180,
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(192,87,213,0.12), transparent)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>{cardInner}</div>
        </div>
      ) : (
        <div style={{
          flex: 1,
          position: 'relative',
          borderRadius: 18,
          border: `1px solid rgba(${plan.accentRgb}, 0.16)`,
          background: 'rgba(15, 20, 35, 0.85)',
          overflow: 'hidden',
        }}>
          {/* Top accent line */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 2,
            background: `linear-gradient(90deg, transparent, rgba(${plan.accentRgb}, 0.55), transparent)`,
          }} />
          {cardInner}
        </div>
      )}
    </motion.div>
  )
}

export default function PricingSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-70px' })
  const brd = 'rgba(255,255,255,0.08)'

  return (
    <section id="pricing" ref={ref} style={{ padding: '80px 24px', borderTop: `1px solid ${brd}` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 52 }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: 'rgba(72,190,215,0.08)', border: '1px solid rgba(72,190,215,0.2)',
            borderRadius: 50, padding: '6px 16px', marginBottom: 20,
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#48BED7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span style={{ fontSize: 11, letterSpacing: '0.18em', color: '#48BED7', fontWeight: 500, textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif' }}>
              Pricing
            </span>
          </div>

          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(26px, 4vw, 42px)',
            fontWeight: 700,
            marginBottom: 12,
            lineHeight: 1.15,
            color: '#F0F2F8',
          }}>
            Planes que se{' '}
            <span style={{
              background: 'linear-gradient(135deg, #48BED7, #7AD4E8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              pagan solos
            </span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, maxWidth: 440, margin: '0 auto', lineHeight: 1.6 }}>
            Elige el plan que mejor se adapte a tu negocio.
          </p>
        </motion.div>

        {/* 2x2 grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 18,
          alignItems: 'stretch',
        }}
          className="pricing-grid"
        >
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} inView={inView} />
          ))}
        </div>

        {/* Add-on note */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{ textAlign: 'center', marginTop: 28, fontSize: 13, color: 'rgba(255,255,255,0.32)', letterSpacing: '0.01em' }}
        >
          ✦ Asistente Virtual VIP disponible como add-on — cotización personalizada
        </motion.p>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24, marginTop: 20 }}
        >
          {[
            { icon: '🔒', label: 'Sin contratos de permanencia' },
            { icon: '⚡', label: 'Setup en 24–48 hs' },
            { icon: '💬', label: 'Soporte en español' },
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <span style={{ fontSize: 13 }}>{item.icon}</span>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>{item.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
