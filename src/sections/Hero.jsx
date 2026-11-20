import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Icon } from "../ui/icons";
import { Button, Wordmark, waLink } from "../ui/primitives";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Agente IA", href: "#agente" },
  { label: "Planes", href: "#planes" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 16);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className={`transition-all duration-300 ${scrolled || open ? "bg-ink/85 backdrop-blur-xl [-webkit-backdrop-filter:blur(20px)]" : ""}`}>
        <nav className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between" aria-label="Principal">
          <a href="#inicio" aria-label="GrowthLab AI"><Wordmark size={19} /></a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-semibold text-tx2 hover:text-cy transition-colors py-3">{l.label}</a>
            ))}
            <Button href={waLink("Hola! Quiero agendar una llamada con un asesor")} variant="cyan" className="!min-h-[42px] !px-5 !text-sm !rounded-xl">Agendar llamada</Button>
          </div>
          <button onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}
            className="md:hidden w-11 h-11 -mr-2 flex items-center justify-center text-white">
            <Icon name={open ? "x" : "menu"} size={26} />
          </button>
        </nav>
        <div className={`h-px transition-opacity ${scrolled || open ? "opacity-100" : "opacity-0"} grad-line`} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className="md:hidden bg-ink/95 backdrop-blur-xl border-b border-white/10 px-5 pb-6 pt-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block py-4 text-lg font-heading font-semibold text-white border-b border-white/5">{l.label}</a>
            ))}
            <Button href={waLink()} variant="wa" icon="wa" className="w-full mt-5">Escribir por WhatsApp</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* Chat de WhatsApp animado (demo del agente) */
const script = [
  { from: "user", text: "Hola, ¿tienen cita para mañana?" },
  { from: "bot", text: "¡Hola! Claro 😊 ¿Para qué servicio y en qué horario te queda mejor?" },
  { from: "user", text: "Limpieza dental, en la tarde" },
  { from: "bot", text: "Perfecto. Te reservo mañana a las 16:00. ¿Me confirmas tu nombre?" },
];

function PhoneChat() {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? script.length : 0);
  const [typing, setTyping] = useState(false);
  useEffect(() => {
    if (reduce) return;
    let t;
    const step = (i) => {
      if (i >= script.length) { t = setTimeout(() => { setN(0); step(0); }, 4200); return; }
      const isBot = script[i].from === "bot";
      setTyping(isBot);
      t = setTimeout(() => { setTyping(false); setN(i + 1); t = setTimeout(() => step(i + 1), 900); }, isBot ? 1300 : 1000);
    };
    step(0);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <div className="relative mx-auto w-[280px] sm:w-[310px] mt-12 sm:mt-0">
      <div className="beam rounded-[2.4rem] bg-surface p-2 shadow-[0_30px_80px_-20px_rgba(72,190,215,.35)]">
        <div className="rounded-[2rem] bg-ink overflow-hidden border border-white/5">
          <div className="flex items-center gap-3 px-4 py-3.5 bg-surface border-b border-white/5">
            <span className="w-9 h-9 rounded-full bg-cy/15 text-cy grid place-items-center"><Icon name="bot" size={18} /></span>
            <div className="leading-tight">
              <p className="text-sm font-bold">Agente GrowthLab</p>
              <p className="text-xs text-wa flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-wa" />en línea 24/7</p>
            </div>
          </div>
          <div className="h-[330px] px-3 py-4 flex flex-col justify-end gap-2.5 overflow-hidden">
            <AnimatePresence initial={false}>
              {script.slice(0, n).map((m, i) => (
                <motion.div key={i} layout initial={{ opacity: 0, y: 14, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  className={`max-w-[84%] px-3.5 py-2.5 rounded-2xl text-[14px] leading-snug ${m.from === "bot"
                    ? "self-start bg-white/[.07] text-tx2 rounded-tl-md"
                    : "self-end bg-cy text-surface font-semibold rounded-tr-md"}`}>
                  {m.text}
                </motion.div>
              ))}
              {typing && (
                <motion.div key="typing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="self-start bg-white/[.07] rounded-2xl rounded-tl-md px-4 py-3 flex gap-1.5">
                  <span className="dot" /><span className="dot" /><span className="dot" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="px-3 pb-3"><div className="rounded-full bg-white/[.05] border border-white/5 px-4 py-2.5 text-xs text-tx3">Escribe un mensaje…</div></div>
        </div>
      </div>

      <div className="float-a absolute -left-1 sm:-left-20 -top-12 sm:-top-5 rounded-2xl bg-surface/95 border border-cy/30 px-3.5 py-2.5 flex items-center gap-2.5 shadow-xl backdrop-blur">
        <span className="w-8 h-8 rounded-xl bg-cy/15 text-cy grid place-items-center"><Icon name="users" size={16} /></span>
        <span className="text-xs font-bold leading-tight">Contacto<br /><span className="text-tx3 font-medium">registrado en CRM</span></span>
      </div>
      <div className="float-b absolute -right-3 sm:-right-16 -bottom-5 rounded-2xl bg-surface/95 border border-pu/30 px-3.5 py-2.5 flex items-center gap-2.5 shadow-xl backdrop-blur">
        <span className="w-8 h-8 rounded-xl bg-pu/15 text-pu grid place-items-center"><Icon name="calendar" size={16} /></span>
        <span className="text-xs font-bold leading-tight">Cita agendada<br /><span className="text-tx3 font-medium">sin intervención</span></span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 min-h-[100svh] flex items-center">
      <div className="absolute inset-0 bg-grid" />
      <div className="halo -top-24 -left-24 w-[420px] h-[420px] bg-cy/15" />
      <div className="halo top-1/3 -right-24 w-[380px] h-[380px] bg-pu/15" style={{ animationDelay: "-6s" }} />
      <span className="ray left-[14%]" /><span className="ray p left-[46%]" style={{ animationDelay: "-3s" }} /><span className="ray left-[80%]" style={{ animationDelay: "-5s" }} />

      <div className="relative z-10 mx-auto max-w-6xl px-5 w-full grid lg:grid-cols-[1.1fr_.9fr] gap-14 lg:gap-8 items-center">
        <div className="text-center lg:text-left">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-cy/30 bg-cy/10 px-4 py-1.5 text-xs sm:text-sm font-bold text-cy mb-7">
            <Icon name="spark" size={14} /> IA, software y marketing para tu negocio
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
            className="font-heading font-extrabold text-[clamp(2rem,8.4vw,3.9rem)]">
            Más conversaciones.<br /><span className="grad-anim">Más oportunidades.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-6 text-lg sm:text-xl text-tx2 max-w-xl mx-auto lg:mx-0">
            Un agente de IA atiende tu WhatsApp las 24 horas, cada contacto queda en tu CRM y tú sabes dónde llegan y dónde se pierden tus clientes.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-9 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
            <Button href={waLink("Hola! Quiero agendar una llamada con un asesor")} variant="wa" icon="wa">Hablar por WhatsApp</Button>
            <Button href="#servicios" variant="ghost" icon="arrow">Ver servicios</Button>
          </motion.div>
          <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-tx3 font-medium">
            {["Agente IA 24/7", "CRM incluido", "Marketing y producción", "Páginas web"].map((t) => (
              <li key={t} className="flex items-center gap-1.5"><Icon name="check" size={16} className="text-cy" />{t}</li>
            ))}
          </motion.ul>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="px-2">
          <PhoneChat />
        </motion.div>
      </div>
    </section>
  );
}
