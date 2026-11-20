import { useRef, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Icon } from "../ui/icons";
import { Reveal, SectionHead, SpotCard, IconBadge, Marquee, Button, waLink } from "../ui/primitives";

/* ─── Las 3 partes ─────────────────────────────────────── */
const pillars = [
  { n: "01", icon: "megaphone", title: "Captación", text: "Estrategia, producción audiovisual y campañas en Meta para que más personas te escriban.", tone: "cy" },
  { n: "02", icon: "bot", title: "Atención", text: "Un agente de IA responde 24/7 por WhatsApp y cada contacto queda registrado en un CRM.", tone: "pu" },
  { n: "03", icon: "chart", title: "Medición", text: "Datos de consultas y citas: sabes de dónde llegan tus clientes y dónde se pierden.", tone: "cy" },
];

export function Pillars() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Cómo funciona el sistema" title={<>Tres partes. <span className="grad-text">Un solo sistema.</span></>}
          sub="Para que tu negocio no pierda clientes sin saberlo." />
        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1}>
              <SpotCard className="p-7 h-full">
                <div className="flex items-center justify-between mb-8">
                  <IconBadge name={p.icon} tone={p.tone} />
                  <span className="font-heading font-extrabold text-5xl grad-text opacity-70">{p.n}</span>
                </div>
                <h3 className="font-heading font-bold text-2xl mb-3">{p.title}</h3>
                <p className="text-tx2 leading-relaxed">{p.text}</p>
              </SpotCard>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}><p className="mt-8 text-center text-tx3 text-sm sm:text-base max-w-2xl mx-auto">
          Nosotros te damos el sistema; las ventas las cierra tu equipo. Sin promesas vacías: control, datos y seguimiento.</p></Reveal>
      </div>
    </section>
  );
}

/* ─── Servicios en detalle (bento) ─────────────────────── */
const services = [
  { span: "lg:col-span-2", icon: "bot", tone: "cy", tag: "Atención", title: "Agente de IA en WhatsApp 24/7",
    text: "Responde al instante, de día y de noche, con el tono de tu negocio. Resuelve dudas frecuentes, toma los datos del cliente y lo guía hacia una cita o una compra.",
    points: ["Atención inmediata a cualquier hora", "Cada contacto queda registrado", "Tú puedes intervenir cuando quieras"] },
  { icon: "users", tone: "pu", tag: "Atención", title: "CRM para tus clientes",
    text: "Todas las conversaciones y contactos en un solo lugar, ordenados y visibles.",
    points: ["Chatwoot, CRM visual", "CRM propio de GrowthLab: leads y pipeline por etapas", "Botón para prender o apagar el agente"] },
  { icon: "workflow", tone: "cy", tag: "Atención", title: "Automatizaciones",
    text: "Tareas repetitivas que se hacen solas, para que tu equipo se enfoque en vender.",
    points: ["Seguimiento a clientes", "Avisos y notificaciones", "Conexión con calendario y correo"] },
  { icon: "heart", tone: "pu", tag: "Captación", title: "Marketing digital y redes",
    text: "Planificación, textos y perfiles optimizados, con contenido constante para tus redes.",
    points: ["Posts, reels e historias cada mes", "Optimización de perfiles", "Reporte mensual"] },
  { icon: "megaphone", tone: "cy", tag: "Captación", title: "Campañas en Meta Ads",
    text: "Anuncios en Facebook e Instagram diseñados para que los interesados te escriban.",
    points: ["Campañas gestionadas por nosotros", "Optimización continua", "Pauta aparte, pagada directo a Meta"] },
  { icon: "video", tone: "pu", tag: "Captación", title: "Producción audiovisual",
    text: "Vamos a tu negocio con cámara Sony y equipos profesionales para grabar contenido que se ve premium.",
    points: ["Rodaje en tu local en Quito", "Reels editados", "Posts de imagen"] },
  { span: "lg:col-span-2", icon: "globe", tone: "cy", tag: "Web", title: "Páginas web y tienda online",
    text: "Sitios a medida de tu marca, rápidos y pensados para celular, con dominio y hosting del primer año.",
    chips: [["Landing page", "desde $400", "Una sola página"], ["Web completa", "~$800", "Varias secciones y menús"], ["Tienda online", "desde $1.200", "Catálogo y pagos"]] },
  { span: "lg:col-span-3", icon: "chart", tone: "pu", tag: "Medición", title: "Datos que sí puedes entender",
    text: "Mides consultas y citas para saber de dónde llegan tus clientes, qué funciona y en qué punto se enfrían. Decisiones con información, no con intuición.",
    points: ["Consultas recibidas", "Citas agendadas", "Dónde se pierden los clientes"], wide: true },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-20 md:py-28 bg-ink2">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Qué ofrecemos" title={<>Todo lo que tu negocio necesita <span className="grad-text">en un solo lugar</span></>}
          sub="IA, software y marketing trabajando juntos. Contrata un servicio o el sistema completo." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08} className={`${s.span || ""} ${s.span === "lg:col-span-2" ? "sm:col-span-2" : ""} ${s.span === "lg:col-span-3" ? "sm:col-span-2" : ""}`}>
              <SpotCard className="p-6 sm:p-7 h-full" beam={i === 0}>
                <div className={s.wide ? "grid md:grid-cols-[1.2fr_1fr] gap-6 items-center" : ""}>
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <IconBadge name={s.icon} tone={s.tone} />
                      <span className="text-xs font-bold tracking-widest uppercase text-tx3">{s.tag}</span>
                    </div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl mb-3">{s.title}</h3>
                    <p className="text-tx2 leading-relaxed">{s.text}</p>
                  </div>
                  <div className={s.wide ? "" : "mt-5"}>
                    {s.points && (
                      <ul className="space-y-2.5">
                        {s.points.map((p) => (
                          <li key={p} className="flex gap-2.5 text-[15px] text-tx2">
                            <Icon name="check" size={18} className="text-cy shrink-0 mt-0.5" />{p}
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.chips && (
                      <div className="grid sm:grid-cols-3 gap-3 mt-1">
                        {s.chips.map(([n, pr, d]) => (
                          <div key={n} className="rounded-2xl border border-white/10 bg-ink/60 p-4">
                            <p className="text-xs text-tx3 font-semibold">{n}</p>
                            <p className="font-heading font-bold text-xl grad-text my-1">{pr}</p>
                            <p className="text-xs text-tx3 leading-snug">{d}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CRM interactivo ──────────────────────────────────── */
const cols = [
  { name: "Nuevo", items: ["Ana · consulta limpieza", "Luis · precio consulta"] },
  { name: "En conversación", items: ["Marta · pide horarios"] },
  { name: "Cita agendada", items: ["Diego · mañana 10:00", "Sofía · jueves 16:00"] },
  { name: "Cliente", items: ["Paola · atendida"] },
];

export function Showcase() {
  const [on, setOn] = useState(true);
  return (
    <section id="agente" className="relative py-20 md:py-28 overflow-hidden">
      <div className="halo top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[320px] bg-pu/10" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Tu agente y tu CRM" title={<>Cada conversación, <span className="grad-text">a la vista</span></>}
          sub="Mira cómo se ordenan tus clientes por etapas. Prueba el botón: tú decides cuándo trabaja el agente." />
        <Reveal>
          <div className="beam rounded-3xl bg-surface p-4 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
              <p className="font-heading font-bold text-lg">Pipeline de clientes <span className="text-tx3 text-sm font-medium ml-2">ejemplo ilustrativo</span></p>
              <button onClick={() => setOn(!on)} role="switch" aria-checked={on}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-ink px-4 min-h-[44px] text-sm font-bold">
                Agente IA
                <span className={`relative w-12 h-7 rounded-full transition-colors ${on ? "bg-wa" : "bg-white/15"}`}>
                  <motion.span layout transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className={`absolute top-1 w-5 h-5 rounded-full bg-white ${on ? "right-1" : "left-1"}`} />
                </span>
                <span className={on ? "text-wa" : "text-tx3"}>{on ? "Activo" : "Pausado"}</span>
              </button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {cols.map((c, ci) => (
                <div key={c.name} className="rounded-2xl bg-ink/70 border border-white/5 p-3">
                  <p className="text-xs font-bold tracking-wide uppercase text-tx3 mb-3 flex justify-between">{c.name}<span className="text-cy">{c.items.length}</span></p>
                  <div className="space-y-2.5">
                    {c.items.map((it, k) => (
                      <motion.div key={it} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        transition={{ delay: 0.2 + ci * 0.12 + k * 0.1 }}
                        className="rounded-xl bg-surface border border-white/10 px-3 py-2.5 text-[13px] text-tx2 leading-snug">
                        {it}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.p key={String(on)} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className={`mt-5 text-sm rounded-xl px-4 py-3 border ${on ? "border-wa/30 bg-wa/10 text-tx2" : "border-white/10 bg-white/5 text-tx3"}`}>
                {on ? "El agente responde solo y registra cada contacto en el pipeline." : "Agente en pausa: tu equipo atiende los mensajes manualmente. Lo reactivas con un clic."}
              </motion.p>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Para quién ───────────────────────────────────────── */
const niches = ["Clínicas y especialistas de salud", "Spas y estética", "Inmobiliarias", "Veterinarias", "Cualquier negocio que reciba clientes por WhatsApp"];
export function Niches() {
  return (
    <section className="py-14 border-y border-white/5 bg-ink2">
      <p className="text-center text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-tx3 mb-7 px-5">Hecho para negocios como el tuyo</p>
      <Marquee>
        {niches.map((n) => (
          <span key={n} className="whitespace-nowrap rounded-full border border-white/10 bg-surface px-6 py-3 font-heading font-semibold text-base sm:text-lg text-tx2">
            <span className="grad-text mr-2">●</span>{n}
          </span>
        ))}
      </Marquee>
    </section>
  );
}

/* ─── Proceso (línea que se dibuja al hacer scroll) ────── */
const steps = [
  { t: "Hablamos contigo", d: "Una llamada con nuestro asesor para entender tu negocio y cómo llegan hoy tus clientes." },
  { t: "Armamos tu sistema", d: "Configuramos el agente de IA, el CRM y las automatizaciones a la medida de tu negocio." },
  { t: "Creamos y publicamos", d: "Producción en tu local, contenido para redes y campañas en Meta, según tu plan." },
  { t: "Medimos y ajustamos", d: "Revisas datos de consultas y citas, y mejoramos lo que haga falta mes a mes." },
];

export function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const h = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
  return (
    <section id="proceso" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHead eyebrow="Proceso" title={<>Cómo empezamos <span className="grad-text">contigo</span></>} sub="Sin complicarte: nosotros nos encargamos de lo técnico." />
        <div ref={ref} className="relative pl-12 sm:pl-16">
          <div className="absolute left-[19px] sm:left-[27px] top-2 bottom-2 w-0.5 bg-white/10" />
          <motion.div style={{ scaleY: h, transformOrigin: "top" }} className="absolute left-[19px] sm:left-[27px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-cy to-pu" />
          {steps.map((s, i) => (
            <Reveal key={s.t} className="relative pb-12 last:pb-0">
              <span className="absolute -left-12 sm:-left-16 top-0 w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-surface border border-cy/40 grid place-items-center font-heading font-extrabold text-lg sm:text-xl grad-text">{i + 1}</span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl mb-2 pt-1.5">{s.t}</h3>
              <p className="text-tx2 leading-relaxed">{s.d}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center"><Button href={waLink("Hola! Quiero agendar una llamada con un asesor")} variant="wa" icon="wa">Agendar mi llamada</Button></Reveal>
      </div>
    </section>
  );
}
