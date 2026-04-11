import { motion } from 'framer-motion'

// Static maps — TW4 scanner requires full class strings to be statically visible
const msgStyles = {
  bot: 'bg-teal/10 text-text/90 rounded-tr-xl rounded-br-xl rounded-bl-xl border border-teal/10',
  user: 'bg-white/[0.07] text-text-muted rounded-tl-xl rounded-bl-xl rounded-br-xl border border-white/[0.06]',
}
const msgAlign = {
  bot: 'justify-start',
  user: 'justify-end',
}
const trustDot = {
  'text-teal': 'bg-teal',
  'text-purple': 'bg-purple',
  'text-amber': 'bg-amber',
}

const chatMessages = [
  { from: 'bot', text: 'Hola! Soy el asistente de GrowthLab. Cuentame, ¿que tipo de negocio tienes?' },
  { from: 'user', text: 'Vendo libros personalizados online' },
  { from: 'bot', text: '¡Que interesante! ¿Y cual es tu mayor dolor hoy, la captacion de clientes o la atencion postventa?' },
]

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 1.9 }}
      className="flex justify-start"
    >
      <div className="bg-teal/10 px-4 py-3 rounded-tr-xl rounded-br-xl rounded-bl-xl flex items-center gap-1.5">
        <span className="typing-dot" />
        <span className="typing-dot" />
        <span className="typing-dot" />
      </div>
    </motion.div>
  )
}

export default function Hero({ waLink }) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 md:pt-24 md:pb-20 bg-radial-teal bg-grid overflow-hidden">

      {/* ── Atmospheric orbs ── */}
      <div
        className="pointer-events-none absolute -top-32 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.07] animate-orb-drift"
        style={{ background: 'radial-gradient(circle, #5DCAA5 0%, transparent 70%)', filter: 'blur(80px)', animationDelay: '0s' }}
      />
      <div
        className="pointer-events-none absolute top-1/4 -right-48 w-[500px] h-[500px] rounded-full opacity-[0.06] animate-orb-drift"
        style={{ background: 'radial-gradient(circle, #AFA9EC 0%, transparent 70%)', filter: 'blur(90px)', animationDelay: '-4s' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-[0.05] animate-orb-drift"
        style={{ background: 'radial-gradient(circle, #FAC775 0%, transparent 70%)', filter: 'blur(100px)', animationDelay: '-8s' }}
      />

      <div className="section-wrap w-full">
        <div className="text-center max-w-4xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            <span className="text-xs tracking-[0.18em] text-teal font-medium uppercase">
              Growth marketing + inteligencia artificial
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
          >
            <span className="text-text block">Mas ventas.</span>
            <span className="text-text block">Menos costos.</span>
            <span className="text-gradient-teal block mt-1">Con IA y estrategia real.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base md:text-xl text-text-muted leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Somos tu equipo de growth marketing + automatizacion con IA.{' '}
            <span className="text-text/70">Contenido que atrae, bots que califican y un asistente dedicado que cierra.</span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal text-teal-dark font-semibold px-8 py-3.5 rounded-full text-base hover:brightness-110 transition-all duration-200 hover:scale-[1.03] animate-pulse-glow"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hablar por WhatsApp
            </a>
            <a
              href="#proceso"
              className="inline-flex items-center justify-center gap-2 border border-dark-border text-text-muted font-medium px-8 py-3.5 rounded-full text-base hover:border-teal/40 hover:text-text transition-all duration-300 hover:glow-teal-sm"
            >
              Ver como funciona
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Chat preview */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="max-w-xl mx-auto"
        >
          <div
            className="bg-dark-card border border-dark-border rounded-2xl p-5 relative"
            style={{ boxShadow: '0 0 0 1px rgba(93,202,165,0.08), 0 32px 64px rgba(0,0,0,0.5)' }}
          >
            {/* Top corner glow */}
            <div
              className="absolute -top-px left-8 right-8 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(93,202,165,0.4), transparent)' }}
            />

            {/* Header */}
            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-dark-border">
              <div className="w-10 h-10 rounded-full bg-teal/15 flex items-center justify-center glow-teal-sm shrink-0">
                <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.414 2.798H4.213c-1.444 0-2.414-1.798-1.414-2.798L4 15.3" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-text">GrowthLab Bot</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                  <p className="text-xs text-teal">En linea ahora</p>
                </div>
              </div>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
            </div>

            {/* Messages */}
            <div className="space-y-3">
              {chatMessages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.from === 'bot' ? -12 : 12, y: 4 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.8 + i * 0.35 }}
                  className={`flex ${msgAlign[msg.from]}`}
                >
                  <div className={`max-w-[82%] px-4 py-2.5 text-sm leading-relaxed ${msgStyles[msg.from]}`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <TypingIndicator />
            </div>

            {/* Bottom input bar */}
            <div className="mt-4 pt-3 border-t border-dark-border flex items-center gap-3">
              <div className="flex-1 bg-white/[0.04] border border-dark-border rounded-full px-4 py-2">
                <p className="text-xs text-text-dim">Escribe un mensaje…</p>
              </div>
              <button className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center shrink-0 hover:bg-teal/30 transition-colors">
                <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Trust signals below chat */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex items-center justify-center gap-6 mt-6"
          >
            {[
              { label: '+120 negocios', color: 'text-teal' },
              { label: 'Respuesta 24/7', color: 'text-purple' },
              { label: 'ROI garantizado', color: 'text-amber' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <span className={`w-1 h-1 rounded-full ${trustDot[item.color]}`} />
                <span className={`text-xs font-medium ${item.color}`}>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
