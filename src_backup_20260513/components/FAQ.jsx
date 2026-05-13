import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'Necesito conocimientos tecnicos?', a: 'No. Nosotros configuramos todo por ti: el bot, las automatizaciones, el dashboard y la landing page.' },
  { q: 'Cuanto tarda la implementacion?', a: 'Entre 2 y 4 semanas dependiendo del plan. Desde la primera semana ya tendras componentes funcionando.' },
  { q: 'Puedo ver las conversaciones del bot?', a: 'Si. Dashboard en tiempo real donde ves todas las conversaciones y puedes intervenir cuando quieras.' },
  { q: 'Que pasa si el bot no sabe responder?', a: 'Se escala automaticamente a tu asistente humano dedicado. Nunca pierdes un lead.' },
  { q: 'Funciona con mi WhatsApp actual?', a: 'Si. Conectamos tu numero existente o creamos uno nuevo dedicado.' },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.3, delay: index * 0.08 }} className="border-b border-dark-border">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left group">
        <span className="font-heading text-base font-medium text-text group-hover:text-teal transition-colors duration-200 pr-4">{faq.q}</span>
        <span className={`text-text-dim shrink-0 transition-transform duration-200 text-xl ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
            className="overflow-hidden">
            <p className="pb-5 text-sm text-text-muted leading-relaxed max-w-2xl">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 border-t border-dark-border">
      <div className="section-wrap" style={{maxWidth:"48rem"}}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }} className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] text-purple font-medium mb-4 uppercase">FAQ</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">Preguntas frecuentes</h2>
        </motion.div>
        <div>
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
        </div>
      </div>
    </section>
  )
}
