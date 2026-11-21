import { useRef, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Icon } from "../ui/icons";
import { FlaskLogo, Reveal, SectionHead, SpotCard, IconBadge, Marquee, Button, Meteors, waLink } from "../ui/primitives";
import { WaIcon } from "../ui/icons";

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

/* ─── Mini visuales decorativos para las tarjetas ─────── */
function Visual({ kind }) {
  if (kind === "bars") return (
    <div className="flex items-end gap-2 h-16 mt-5" aria-hidden="true">
      {[40, 70, 55, 90, 65, 100].map((h, i) => (
        <span key={i} className="bar flex-1 rounded-md bg-gradient-to-t from-cy/30 to-pu/80" style={{ height: `${h}%`, animationDelay: `${i * 0.25}s` }} />
      ))}
    </div>
  );
  if (kind === "film") return (
    <div className="flex gap-2 mt-5" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <span key={i} className="frame flex-1 aspect-video rounded-lg border border-white/10 bg-gradient-to-br from-cy/20 to-pu/25 grid place-items-center" style={{ animationDelay: `${i * 0.6}s` }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" opacity=".85"><path d="M7 4l13 8-13 8z" /></svg>
        </span>
      ))}
    </div>
  );
  if (kind === "posts") return (
    <div className="grid grid-cols-6 gap-1.5 mt-5" aria-hidden="true">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <span key={i} className="frame aspect-square rounded-lg bg-gradient-to-br from-pu/25 to-cy/20 border border-white/10" style={{ animationDelay: `${i * 0.35}s` }} />
      ))}
    </div>
  );
  if (kind === "line") return (
    <svg viewBox="0 0 300 110" className="w-full mb-5" aria-hidden="true">
      <defs><linearGradient id="lg" x1="0" x2="1"><stop offset="0" stopColor="#48BED7" /><stop offset="1" stopColor="#C057D5" /></linearGradient></defs>
      {[25, 55, 85].map((y) => <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="rgba(255,255,255,.07)" />)}
      <path className="draw" d="M0 95 C40 90 50 60 90 64 S140 30 180 40 S240 20 300 8" fill="none" stroke="url(#lg)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
  return null;
}

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
    points: ["Posts, reels e historias cada mes", "Optimización de perfiles", "Reporte mensual"], visual: "posts" },
  { icon: "megaphone", tone: "cy", tag: "Captación", title: "Campañas en Meta Ads",
    text: "Anuncios en Facebook e Instagram diseñados para que los interesados te escriban.",
    points: ["Campañas gestionadas por nosotros", "Optimización continua", "Pauta aparte, pagada directo a Meta"], visual: "bars" },
  { icon: "video", tone: "pu", tag: "Captación", title: "Producción audiovisual",
    text: "Vamos a tu negocio con cámara Sony y equipos profesionales para grabar contenido que se ve premium.",
    points: ["Rodaje en tu local en Quito", "Reels editados", "Posts de imagen"], visual: "film" },
  { span: "lg:col-span-2", icon: "globe", tone: "cy", tag: "Web", title: "Páginas web y tienda online",
    text: "Sitios a medida de tu marca, rápidos y pensados para celular, con dominio y hosting del primer año.",
    chips: [["Landing page", "desde $400", "Una sola página"], ["Web completa", "~$800", "Varias secciones y menús"], ["Tienda online", "desde $1.200", "Catálogo y pagos"]] },
  { span: "lg:col-span-3", icon: "chart", tone: "pu", tag: "Medición", title: "Datos que sí puedes entender",
    text: "Mides consultas y citas para saber de dónde llegan tus clientes, qué funciona y en qué punto se enfrían. Decisiones con información, no con intuición.",
    points: ["Consultas recibidas", "Citas agendadas", "Dónde se pierden los clientes"], wide: true, visual: "line" },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Qué ofrecemos" title={<>Todo lo que tu negocio necesita <span className="grad-text">en un solo lugar</span></>}
          sub="IA, software y marketing trabajando juntos. Contrata un servicio o el sistema completo." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08} className={`${s.span || ""} ${s.span === "lg:col-span-2" ? "sm:col-span-2" : ""} ${s.span === "lg:col-span-3" ? "sm:col-span-2" : ""}`}>
              <SpotCard className="p-6 sm:p-7 h-full" beam={i === 0}>
                {i === 0 && <Meteors />}
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
                    {s.wide && <Visual kind={s.visual} />}
                    {s.points && (
                      <ul className="space-y-2.5">
                        {s.points.map((p) => (
                          <li key={p} className="flex gap-2.5 text-[15px] text-tx2">
                            <Icon name="check" size={18} className="text-cy shrink-0 mt-0.5" />{p}
                          </li>
                        ))}
                      </ul>
                    )}
                    {!s.wide && s.visual && <Visual kind={s.visual} />}
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


/* ─── Sin sistema vs Con GrowthLab ─────────────────────── */
const sin = ["Mensajes que llegan de noche y nadie responde", "Contactos perdidos entre chats y notas", "No sabes de dónde llegan tus clientes", "Redes sin plan ni constancia"];
const con = ["Respuesta inmediata, las 24 horas", "Cada contacto ordenado en tu CRM", "Datos de consultas y citas a la mano", "Contenido y campañas con estrategia"];

export function Contrast() {
  return (
    <section className="relative py-20 md:py-28 bg-ink2">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHead eyebrow="El cambio" title={<>Del caos al <span className="grad-text">control</span></>} sub="Lo que pasa hoy en muchos negocios, y cómo se ve con GrowthLab." />
        <div className="grid md:grid-cols-2 gap-5">
          <Reveal>
            <div className="h-full rounded-3xl border border-white/10 bg-surface/50 p-7">
              <p className="font-heading font-bold text-xl text-tx3 mb-6">Sin un sistema</p>
              <ul className="space-y-4">
                {sin.map((t, i) => (
                  <motion.li key={t} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                    className="flex gap-3 text-tx3 leading-snug">
                    <Icon name="x" size={20} className="shrink-0 mt-0.5 opacity-60" /><span className="line-through decoration-white/25">{t}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="beam h-full rounded-3xl bg-gradient-to-br from-surface to-ink p-7">
              <p className="font-heading font-bold text-xl mb-6 grad-text inline-block">Con GrowthLab AI</p>
              <ul className="space-y-4">
                {con.map((t, i) => (
                  <motion.li key={t} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.12 }}
                    className="flex gap-3 text-white font-semibold leading-snug">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-cy/15 text-cy grid place-items-center mt-0.5"><Icon name="check" size={14} stroke={2.6} /></span>{t}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Ecosistema en órbita ─────────────────────────────── */
const inner = [["wa", "WhatsApp"], ["users", "CRM"], ["calendar", "Agenda"]];
const outer = [["megaphone", "Meta Ads"], ["globe", "Web"], ["video", "Video"], ["chart", "Datos"], ["workflow", "Automatización"]];

function OrbitIcon({ k, label, a, r, tone }) {
  return (
    <div className="orbit-item" style={{ "--a": `${a}deg`, "--r": r }}>
      <div className="orbit-unrot">
        <div className="orbit-icon">
          <span title={label} className={`w-full h-full rounded-2xl grid place-items-center border bg-surface shadow-lg ${k === "wa" ? "border-wa/50 text-wa" : tone === "pu" ? "border-pu/40 text-pu" : "border-cy/40 text-cy"}`}>
            {k === "wa" ? <WaIcon size={24} /> : <Icon name={k} size={22} />}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Ecosystem() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-ink2">
      <div className="halo top-1/2 right-0 w-[420px] h-[420px] bg-cy/10" />
      <div className="relative mx-auto max-w-6xl px-5 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHead center={false} eyebrow="Ecosistema" title={<>Todo conectado, <span className="grad-text">nada suelto</span></>}
            sub="WhatsApp, CRM, agenda, campañas, contenido y datos trabajan como un solo sistema alrededor de tu negocio." />
          <ul className="grid sm:grid-cols-2 gap-3">
            {["Atiendes por WhatsApp", "Registras en el CRM", "Agendas citas", "Captas con Meta Ads", "Produces contenido", "Mides resultados"].map((t, i) => (
              <Reveal key={t} delay={i * 0.06}><li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-surface/60 px-4 py-3 text-tx2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cy to-pu" />{t}</li></Reveal>
            ))}
          </ul>
        </div>
        <Reveal>
          <div className="orbit-box" style={{ "--r1": "22cqw", "--r2": "40cqw" }}>
            <span className="orbit-ring" style={{ width: "44cqw", height: "44cqw" }} />
            <span className="orbit-ring" style={{ width: "80cqw", height: "80cqw" }} />
            <div className="absolute inset-0 grid place-items-center z-10">
              <div className="beam w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-surface grid place-items-center shadow-[0_0_60px_-10px_rgba(72,190,215,.5)]"><FlaskLogo size={52} /></div>
            </div>
            <div className="orbit-spin">{inner.map(([k, l], i) => <OrbitIcon key={k} k={k} label={l} a={(360 / inner.length) * i} r="22cqw" tone="cy" />)}</div>
            <div className="orbit-spin slow">{outer.map(([k, l], i) => <OrbitIcon key={k} k={k} label={l} a={(360 / outer.length) * i + 20} r="40cqw" tone="pu" />)}</div>
          </div>
        </Reveal>
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


/* ─── Video (TikTok) con carga diferida ───────────────── */
const TIKTOK_ID = "7710071056249261333";
const TIKTOK_PROFILE = "https://www.tiktok.com/@growthlab_ai";

export function VideoSection() {
  const [play, setPlay] = useState(false);
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-ink2">
      <div className="halo top-1/3 left-0 w-[380px] h-[380px] bg-pu/10" />
      <div className="relative mx-auto max-w-6xl px-5 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <SectionHead center={false} eyebrow="En acción" title={<>Míranos <span className="grad-text">trabajar</span></>}
            sub="Mira un video de GrowthLab AI y síguenos en TikTok para ver más ideas para tu negocio." />
          <Button href={TIKTOK_PROFILE} variant="ghost" icon="arrow">@growthlab_ai en TikTok</Button>
        </div>
        <Reveal>
          <div className="beam mx-auto w-[min(100%,300px)] rounded-[2.2rem] bg-surface p-2 shadow-[0_30px_80px_-20px_rgba(192,87,213,.35)]">
            <div className="relative rounded-[1.8rem] overflow-hidden bg-ink" style={{ aspectRatio: "325 / 578" }}>
              {play ? (
                <iframe title="Video de GrowthLab AI en TikTok" src={`https://www.tiktok.com/embed/v2/${TIKTOK_ID}`}
                  className="absolute inset-0 w-full h-full border-0" allow="autoplay; fullscreen; encrypted-media" allowFullScreen loading="lazy" />
              ) : (
                <button onClick={() => setPlay(true)} aria-label="Reproducir video"
                  className="absolute inset-0 w-full h-full grid place-items-center bg-gradient-to-br from-cy/20 via-ink to-pu/25 group">
                  <span className="absolute inset-0 bg-grid opacity-60" />
                  <span className="relative flex flex-col items-center gap-4">
                    <span className="w-20 h-20 rounded-full bg-cy text-surface grid place-items-center shimmer shadow-[0_10px_40px_-6px_rgba(72,190,215,.7)] group-active:scale-95 transition-transform">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5l12 7-12 7z" /></svg>
                    </span>
                    <span className="font-heading font-bold text-lg">Ver video</span>
                  </span>
                </button>
              )}
            </div>
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
      <div className="mt-4"><Marquee rev>
        {["Agente IA 24/7", "CRM", "Automatizaciones", "Meta Ads", "Producción audiovisual", "Páginas web", "Tienda online", "Reportes"].map((n) => (
          <span key={n} className="whitespace-nowrap rounded-full border border-cy/20 bg-cy/5 px-5 py-2 text-sm font-semibold text-cy">{n}</span>
        ))}
      </Marquee></div>
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
              <span className="absolute -left-12 sm:-left-16 top-0 z-10 w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-ink border border-cy/40 ring-8 ring-ink grid place-items-center font-heading font-extrabold text-lg sm:text-xl"><span className="grad-text">{i + 1}</span></span>
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
