import { motion } from 'framer-motion'

const chatMessages = [
  { from: 'bot', text: 'Hola! Soy el asistente de GrowthLab. Cuentame, que tipo de negocio tienes?' },
  { from: 'user', text: 'Vendo libros personalizados online' },
  { from: 'bot', text: 'Que interesante! Y cual es tu mayor dolor hoy, la captacion de clientes o la atencion postventa?' },
]

export default function Hero({ waLink }) {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-radial-teal bg-grid overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.2em] text-teal font-medium mb-6 uppercase">
            Growth marketing + inteligencia artificial
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Mas ventas. Menos costos.{' '}
            <span className="text-gradient-teal">Con IA y estrategia real.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-text-muted leading-relaxed mb-8 max-w-xl mx-auto">
            Somos tu equipo de growth marketing + automatizacion con IA. Contenido que atrae, bots que califican y un asistente dedicado que cierra.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal text-teal-dark font-medium px-7 py-3 rounded-full text-base hover:brightness-110 transition-all duration-200 hover:scale-[1.02]">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Hablar por WhatsApp
            </a>
            <a href="#proceso" className="inline-flex items-center justify-center gap-2 border border-dark-border text-text-muted font-medium px-7 py-3 rounded-full text-base hover:border-text-muted hover:text-text transition-all duration-200">
              Ver como funciona
            </a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 max-w-md mx-auto">
          <div className="bg-dark-card border border-dark-border rounded-2xl p-5">
            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-dark-border">
              <div className="w-9 h-9 rounded-full bg-teal/20 flex items-center justify-center">
                <span className="text-teal text-xs font-semibold">AI</span>
              </div>
              <div>
                <p className="text-sm font-medium text-text">GrowthLab Bot</p>
                <p className="text-xs text-teal">En linea</p>
              </div>
            </div>
            <div className="space-y-3">
              {chatMessages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: msg.from === 'bot' ? -10 : 10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.3 }}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed ${
                    msg.from === 'bot' ? 'bg-teal/10 text-text/90 rounded-tr-xl rounded-br-xl rounded-bl-xl'
                      : 'bg-white/[0.06] text-text-muted rounded-tl-xl rounded-bl-xl rounded-br-xl'}`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
