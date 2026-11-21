import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon, WaIcon } from "../ui/icons";
import { Reveal, SectionHead, Button, Wordmark, Meteors, waLink } from "../ui/primitives";
import LeadForm from "../components/LeadForm";

const faqs = [
  { q: "¿Necesito conocimientos técnicos?", a: "No. Nosotros configuramos el agente, el CRM y las automatizaciones. Tú solo ves los resultados." },
  { q: "¿Me aseguran más ventas?", a: "No prometemos resultados garantizados. Te damos el sistema: atención inmediata, cada contacto registrado y datos claros. Las ventas las cierra tu equipo." },
  { q: "¿Puedo ver las conversaciones del agente?", a: "Sí. Todo queda en tu CRM y puedes intervenir cuando quieras. En el Plan Ecosystem además tienes un botón para prender o apagar el agente." },
  { q: "¿Cuánto dura el compromiso?", a: "Los planes mensuales tienen un mínimo de 6 meses, con pago mensual por adelantado. Si terminas antes, se paga el 50% del valor restante del compromiso. Los servicios de pago único no tienen mensualidad ni compromiso." },
  { q: "¿La publicidad en Meta está incluida?", a: "La gestión de campañas sí, según tu plan. La inversión en pauta va aparte y se paga directo a Meta." },
  { q: "¿Dónde hacen la producción de contenido?", a: "En tu negocio, en Quito y sus valles. Fuera del Distrito Metropolitano cotizamos la movilización aparte." },
  { q: "¿Trabajan con mi tipo de negocio?", a: "Nuestro foco son clínicas y especialistas de salud, spas y estética, inmobiliarias y veterinarias, pero el sistema sirve para cualquier negocio." },
];

function Item({ f }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="w-full flex items-center justify-between gap-4 py-5 text-left min-h-[56px]">
        <span className="font-heading font-semibold text-lg">{f.q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-cy shrink-0"><Icon name="plus" size={22} /></motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="pb-5 text-tx2 leading-relaxed">{f.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHead eyebrow="Preguntas frecuentes" title={<>Resolvemos tus <span className="grad-text">dudas</span></>} />
        <Reveal>{faqs.map((f) => <Item key={f.q} f={f} />)}</Reveal>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section id="contacto" className="relative py-20 md:py-28 overflow-hidden bg-ink2">
      <div className="halo top-0 left-1/4 w-[380px] h-[380px] bg-cy/10" />
      <div className="halo bottom-0 right-1/4 w-[380px] h-[380px] bg-pu/10" style={{ animationDelay: "-7s" }} />
      <div className="relative mx-auto max-w-4xl px-5">
        <Reveal>
          <div className="beam relative overflow-hidden rounded-[2rem] bg-surface px-6 py-14 sm:px-14 text-center">
            <Meteors n={8} />
            <h2 className="font-heading font-extrabold text-[clamp(2rem,6.5vw,3.75rem)]">Que ningún cliente <span className="grad-anim">se quede sin respuesta.</span></h2>
            <p className="mt-5 text-tx2 text-lg max-w-xl mx-auto">Escríbenos por WhatsApp o agenda una llamada con nuestro asesor.</p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3.5 justify-center">
              <Button href={waLink("Hola! Quiero agendar una llamada con un asesor")} variant="wa" icon="wa">Escribir por WhatsApp</Button>
              <Button href="#planes" variant="ghost" icon="arrow">Ver planes</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pt-14 pb-28 md:pb-12">
      <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-[1.3fr_1fr_1fr] gap-10">
        <div>
          <Wordmark size={20} />
          <p className="mt-4 text-tx2 max-w-xs">Tecnología clara. Crecimiento visible.</p>
        </div>
        <div>
          <p className="font-heading font-bold mb-4">Secciones</p>
          <ul className="space-y-2.5 text-tx2">
            {[["Servicios", "#servicios"], ["Agente IA", "#agente"], ["Planes", "#planes"], ["Proceso", "#proceso"], ["FAQ", "#faq"]].map(([l, h]) => (
              <li key={h}><a href={h} className="hover:text-cy transition-colors inline-block py-1">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-heading font-bold mb-4">Contacto</p>
          <ul className="space-y-3 text-tx2 text-[15px]">
            <li><a href="tel:+593963820234" className="flex gap-2.5 hover:text-cy"><Icon name="phone" size={18} className="text-cy shrink-0 mt-0.5" />0963 820 234</a></li>
            <li><a href="mailto:growthlabaiec@gmail.com" className="flex gap-2.5 hover:text-cy break-all"><Icon name="mail" size={18} className="text-cy shrink-0 mt-0.5" />growthlabaiec@gmail.com</a></li>
            <li className="flex gap-2.5"><Icon name="pin" size={18} className="text-cy shrink-0 mt-0.5" />Shyris N31-35 y Suecia, Edificio Iqon, piso 6, Quito</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 mt-12 pt-6 border-t border-white/5 text-sm text-tx3 flex flex-wrap justify-between gap-2">
        <span>© 2026 GrowthLab AI · Quito, Ecuador</span>
        <span className="flex gap-5"><a href="/privacidad" target="_blank" rel="noopener noreferrer" className="hover:text-cy py-2">Política de privacidad</a><a href="/terminos" target="_blank" rel="noopener noreferrer" className="hover:text-cy py-2">Términos y condiciones</a></span>
      </div>
    </footer>
  );
}

export function FloatingWA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > 700);
    h(); window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  if (!show) return null;
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp"
      className="safe-b fixed z-40 inline-flex items-center gap-2.5 rounded-full bg-wa text-surface font-bold min-h-[56px] px-5 shadow-[0_10px_30px_-6px_rgba(37,211,102,.6)] pulse-wa active:scale-95 transition-transform">
      <WaIcon size={24} /><span className="hidden sm:inline">Escríbenos</span>
    </a>
  );
}

export { LeadForm };
