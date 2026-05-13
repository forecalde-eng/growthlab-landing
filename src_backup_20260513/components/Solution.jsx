import { motion } from 'framer-motion'

// SVG icons per item — human side (purple)
const humanIcons = [
  // Social media / content
  <svg key="1" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
  </svg>,
  // Strategy
  <svg key="2" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>,
  // Virtual assistant
  <svg key="3" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>,
  // Monitor chats
  <svg key="4" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>,
  // Reports
  <svg key="5" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
]

// SVG icons per item — AI side (teal)
const aiIcons = [
  // Chatbot / WhatsApp
  <svg key="1" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.414 2.798H4.213c-1.444 0-2.414-1.798-1.414-2.798L4 15.3" />
  </svg>,
  // Automations
  <svg key="2" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>,
  // Dashboard
  <svg key="3" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 13a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z" />
  </svg>,
  // Landing pages
  <svg key="4" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>,
  // Integrations
  <svg key="5" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
  </svg>,
]

const pillarT = [
  'Gestión de redes sociales y contenido',
  'Estrategia de marketing digital',
  'Asistente virtual de ventas dedicado',
  'Monitoreo y revisión de chats del bot',
  'Reportes de rendimiento mensuales',
]

const pillarO = [
  'Chatbots IA para WhatsApp (texto, audio, imágenes)',
  'Automatizaciones de procesos internos',
  'Dashboard de conversaciones en tiempo real',
  'Landing pages profesionales',
  'Integraciones con CRM, calendario, email',
]

// Static class maps — full strings required for TW4 static scanner
const pillarStyles = {
  teal: {
    card: 'bg-teal-glow border-teal/20 hover:border-teal/40',
    iconWrap: 'bg-teal/15 border-teal/25 text-teal hover:glow-teal-sm',
    iconColor: 'text-teal/60 group-hover/item:text-teal',
    topLine: 'linear-gradient(90deg, transparent 0%, rgba(93,202,165,0.7) 50%, transparent 100%)',
    divider: 'linear-gradient(90deg, rgba(93,202,165,0.25), transparent)',
    titleGrad: 'linear-gradient(135deg, #5DCAA5, #8BDDC0)',
    iconGlow: '0 0 16px rgba(93,202,165,0.15)',
  },
  purple: {
    card: 'bg-purple-glow border-purple/15 hover:border-purple/30',
    iconWrap: 'bg-purple/15 border-purple/25 text-purple hover:glow-purple-sm',
    iconColor: 'text-purple/60 group-hover/item:text-purple',
    topLine: 'linear-gradient(90deg, transparent 0%, rgba(175,169,236,0.5) 50%, transparent 100%)',
    divider: 'linear-gradient(90deg, rgba(175,169,236,0.2), transparent)',
    titleGrad: 'linear-gradient(135deg, #AFA9EC, #cec9f5)',
    iconGlow: '0 0 16px rgba(175,169,236,0.15)',
  },
}

function PillarCard({ color, label, subtitle, items, icons, initial, delay, featured }) {
  const s = pillarStyles[color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay }}
      className={`
        relative rounded-2xl border overflow-hidden transition-all duration-500
        ${s.card}
        ${featured ? 'md:scale-[1.03] md:z-10' : ''}
      `}
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: s.topLine }}
      />

      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4">
          <span className="text-[10px] font-semibold tracking-widest uppercase text-teal/70 bg-teal/10 border border-teal/20 rounded-full px-2.5 py-0.5">
            Core
          </span>
        </div>
      )}

      <div className="p-7 pt-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-7">
          <div
            className={`w-12 h-12 rounded-xl border flex items-center justify-center font-heading text-lg font-bold shrink-0 transition-all duration-300 ${s.iconWrap}`}
            style={{ boxShadow: s.iconGlow }}
          >
            {initial}
          </div>
          <div>
            <h3
              className="font-heading text-xl font-bold"
              style={{
                background: s.titleGrad,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {label}
            </h3>
            <p className="text-xs text-text-dim mt-0.5 font-medium tracking-wide uppercase">{subtitle}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: s.divider }} />

        {/* Items */}
        <div className="space-y-3.5">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: delay + 0.1 + i * 0.07 }}
              className="flex items-start gap-3 group/item"
            >
              <div className={`mt-0.5 flex items-center justify-center shrink-0 transition-all duration-200 group-hover/item:scale-110 ${s.iconColor}`}>
                {icons[i]}
              </div>
              <p className="text-sm text-text-muted leading-relaxed group-hover/item:text-text/80 transition-colors duration-200">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Solution() {
  return (
    <section id="servicios" className="py-20 md:py-28 border-t border-dark-border overflow-hidden">
      <div className="section-wrap">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-4 py-1.5 mb-6">
            <svg className="w-3.5 h-3.5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-xs tracking-[0.18em] text-teal font-medium uppercase">La solución</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Dos fuerzas,{' '}
            <span className="text-gradient-teal">un solo equipo</span>
          </h2>
          <p className="text-text-muted text-base max-w-xl mx-auto leading-relaxed">
            Marketing humano + automatización inteligente trabajando juntos para que tu negocio venda más y gaste menos.
          </p>
        </motion.div>

        {/* Cards + glowing connector */}
        <div className="relative grid md:grid-cols-2 gap-6 md:gap-8 items-start">

          {/* Glowing connector line — visible on md+ */}
          <div className="hidden md:flex absolute inset-y-0 left-1/2 -translate-x-1/2 flex-col items-center justify-center pointer-events-none z-20 gap-3">
            {/* Line top */}
            <div
              className="w-px flex-1 max-h-32"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.08))' }}
            />
            {/* Center node */}
            <div className="relative flex items-center justify-center">
              <div
                className="w-9 h-9 rounded-full border border-dark-border bg-dark flex items-center justify-center"
                style={{ boxShadow: '0 0 20px rgba(93,202,165,0.2), 0 0 40px rgba(175,169,236,0.15)' }}
              >
                <svg className="w-4 h-4 text-text-dim" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              {/* Glow rings */}
              <div
                className="absolute w-16 h-16 rounded-full animate-ping"
                style={{ background: 'radial-gradient(circle, rgba(93,202,165,0.08), transparent)', animationDuration: '3s' }}
              />
            </div>
            {/* Line bottom */}
            <div
              className="w-px flex-1 max-h-32"
              style={{ background: 'linear-gradient(to top, transparent, rgba(255,255,255,0.08))' }}
            />
          </div>

          <PillarCard
            color="purple"
            label="Growth & Customer Service"
            subtitle="El lado humano"
            items={pillarT}
            icons={humanIcons}
            initial="H"
            delay={0.1}
            featured={false}
          />
          <PillarCard
            color="teal"
            label="Automatización con IA"
            subtitle="El lado inteligente"
            items={pillarO}
            icons={aiIcons}
            initial="IA"
            delay={0.25}
            featured={true}
          />
        </div>

        {/* Bottom equation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="text-center mt-10"
        >
          <div
            className="inline-flex items-center gap-3 md:gap-5 bg-white/[0.03] border border-dark-border rounded-2xl px-7 py-4"
            style={{ boxShadow: '0 0 40px rgba(93,202,165,0.05)' }}
          >
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-lg bg-purple/15 border border-purple/20 flex items-center justify-center mb-1">
                <svg className="w-4 h-4 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-purple text-xs font-semibold">Estrategia</span>
            </div>

            <span className="text-text-dim text-xl font-light">+</span>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-lg bg-teal/15 border border-teal/20 flex items-center justify-center mb-1">
                <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082" />
                </svg>
              </div>
              <span className="text-teal text-xs font-semibold">Tecnología</span>
            </div>

            <span className="text-text-dim text-xl font-light">=</span>

            <div className="flex flex-col items-center">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center mb-1"
                style={{ background: 'linear-gradient(135deg, rgba(93,202,165,0.2), rgba(175,169,236,0.2))', border: '1px solid rgba(93,202,165,0.25)' }}
              >
                <svg className="w-4 h-4 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="text-text text-xs font-semibold">Resultados reales</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
