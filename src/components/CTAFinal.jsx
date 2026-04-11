import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTAFinal({ waLink }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-36 border-t border-dark-border overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 900px 600px at 50% 40%, rgba(175,169,236,0.14) 0%, transparent 70%)',
      }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Orb — purple, top-left */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 520,
          height: 520,
          top: '-120px',
          left: '-160px',
          background: 'radial-gradient(circle, rgba(175,169,236,0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
        animate={{ x: [0, 24, -12, 0], y: [0, -18, 14, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orb — teal, bottom-right */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 440,
          height: 440,
          bottom: '-100px',
          right: '-120px',
          background: 'radial-gradient(circle, rgba(93,202,165,0.10) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{ x: [0, -20, 16, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Orb — amber, center */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 300,
          height: 300,
          top: '30%',
          left: '60%',
          background: 'radial-gradient(circle, rgba(250,199,117,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ x: [0, 30, -15, 0], y: [0, -25, 20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Horizontal glow line — top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(175,169,236,0.35), rgba(93,202,165,0.2), transparent)' }}
      />

      {/* Content */}
      <div className="section-wrap text-center relative z-10" style={{ maxWidth: '52rem' }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-purple/10 border border-purple/25 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple animate-pulse" />
          <span className="text-xs tracking-[0.18em] text-purple font-medium uppercase">Demo gratuita</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-black leading-[0.92] tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 4.75rem)' }}
        >
          <span className="text-text block">¿Listo para crecer</span>
          <span
            className="block mt-1"
            style={{
              background: 'linear-gradient(135deg, #AFA9EC 0%, #5DCAA5 60%, #FAC775 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(175,169,236,0.3))',
            }}
          >
            con IA?
          </span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-muted text-base md:text-xl mb-10 max-w-md mx-auto leading-relaxed"
        >
          Agenda una demo gratuita de 15 minutos.{' '}
          <span className="text-text/60">Sin compromiso, sin tarjeta de crédito.</span>
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: 'linear-gradient(135deg, #5DCAA5, #4ab896)',
              color: '#04342C',
              boxShadow: '0 0 28px rgba(93,202,165,0.4), 0 0 70px rgba(93,202,165,0.15)',
              animation: 'pulse-glow 3s ease-in-out infinite',
            }}
          >
            <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar demo por WhatsApp
          </a>
        </motion.div>

        {/* Social proof row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          <p className="text-xs text-text-dim flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Respondemos en menos de 5 minutos
          </p>
          <span className="hidden sm:block w-px h-3 bg-dark-border" />
          <p className="text-xs text-text-dim flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            +120 negocios creciendo
          </p>
          <span className="hidden sm:block w-px h-3 bg-dark-border" />
          <p className="text-xs text-text-dim flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            ROI medible desde semana 1
          </p>
        </motion.div>

      </div>
    </section>
  )
}
