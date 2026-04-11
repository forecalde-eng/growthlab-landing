import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const WA_LINK = "https://wa.me/593XXXXXXXXX?text=Hola%2C%20quiero%20una%20demo%20de%20GrowthLab%20AI";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const chatMsgs = [
  { from: "bot", text: "Hola! Soy el asistente de GrowthLab. Cuéntame, qué tipo de negocio tienes?" },
  { from: "user", text: "Vendo libros personalizados online" },
  { from: "bot", text: "Qué interesante! Y cuál es tu mayor dolor hoy, la captación de clientes o la atención postventa?" },
];

const problems = [
  { title: "Respondés tarde", desc: "67% de mensajes llegan fuera de horario. Cada minuto sin responder es un cliente que se va con tu competencia.", stat: "67%" },
  { title: "Marketing sin plan", desc: "Publicás contenido sin estrategia. Sin métricas. Sin retorno claro de inversión.", stat: "5 min" },
  { title: "Operaciones manuales", desc: "Tu equipo pierde horas en tareas repetitivas que una IA resuelve en segundos.", stat: "78%" },
];

const pillarT = ["Gestión de redes sociales y contenido", "Estrategia de marketing digital", "Asistente virtual de ventas dedicado", "Monitoreo y revisión de chats del bot", "Reportes de rendimiento mensuales"];
const pillarO = ["Chatbots IA para WhatsApp (texto, audio, imágenes)", "Automatizaciones de procesos internos", "Dashboard de conversaciones en tiempo real", "Landing pages profesionales", "Integraciones con CRM, calendario, email"];

const steps = [
  { num: "1", title: "Diagnóstico gratis", desc: "Analizamos tu flujo de ventas y atención actual. Identificamos fugas de dinero." },
  { num: "2", title: "Implementación 2-4 sem", desc: "Configuramos todo: contenido, bot, automatizaciones, dashboard." },
  { num: "3", title: "Resultados medibles", desc: "Métricas reales desde la semana 1. Más leads, más ventas cerradas." },
];

const plans = [
  { name: "Starter", setup: "$300 único", price: "$200", period: "/mes", desc: "Automatiza tu atención", features: ["Agente IA para WhatsApp", "Dashboard de conversaciones", "Landing page profesional", "Soporte y monitoreo"], popular: false },
  { name: "Growth", setup: "$500 único", price: "$750", period: "/mes", desc: "Todo para crecer de verdad", features: ["Agente IA de ventas", "Automatización de procesos internos", "Gestión de redes sociales", "Estrategia de marketing", "Reportes mensuales"], popular: true },
  { name: "Enterprise", setup: "A convenir", price: "Custom", period: "", desc: "Soluciones a medida", features: ["Todo de Growth", "Multi-bot (varios números)", "Integraciones custom (CRM, ERP)", "Estrategia dedicada", "Soporte prioritario 24/7"], popular: false },
];

const faqs = [
  { q: "¿Necesito conocimientos técnicos?", a: "No. Nosotros configuramos todo por ti: el bot, las automatizaciones, el dashboard y la landing page." },
  { q: "¿Cuánto tarda la implementación?", a: "Entre 2 y 4 semanas dependiendo del plan. Desde la primera semana ya tendrás componentes funcionando." },
  { q: "¿Puedo ver las conversaciones del bot?", a: "Sí. Dashboard en tiempo real donde ves todas las conversaciones y puedes intervenir cuando quieras." },
  { q: "¿Qué pasa si el bot no sabe responder?", a: "Se escala automáticamente a tu asistente humano dedicado. Nunca pierdes un lead." },
  { q: "¿Funciona con mi WhatsApp actual?", a: "Sí. Conectamos tu número existente o creamos uno nuevo dedicado." },
];

function WaIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
}

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
        <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 15, fontWeight: 500, color: "#e8e8ec", paddingRight: 16 }}>{faq.q}</span>
        <span style={{ color: "rgba(255,255,255,0.35)", transform: open ? "rotate(45deg)" : "none", transition: "transform 0.2s", fontSize: 20, flexShrink: 0 }}>+</span>
      </button>
      {open && <p style={{ paddingBottom: 18, fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, maxWidth: 560 }}>{faq.a}</p>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const probRef = useRef(null);
  const probInView = useInView(probRef, { once: true, margin: "-80px" });

  const bg = "#0a0a0f";
  const card = "#12121a";
  const teal = "#5DCAA5";
  const tealDark = "#04342C";
  const purple = "#AFA9EC";
  const amber = "#FAC775";
  const coral = "#F09595";
  const txt = "#e8e8ec";
  const muted = "rgba(255,255,255,0.5)";
  const dim = "rgba(255,255,255,0.35)";
  const brd = "rgba(255,255,255,0.08)";

  useState(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  });

  return (
    <div style={{ minHeight: "100vh", background: bg, color: txt, fontFamily: "Manrope, sans-serif", WebkitFontSmoothing: "antialiased" }}>
      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, borderBottom: scrolled ? `1px solid ${brd}` : "1px solid transparent", background: scrolled ? "rgba(10,10,15,0.9)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", transition: "all 0.4s ease" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 20, fontWeight: 600 }}><span style={{ color: teal }}>Growth</span>Lab <span style={{ color: muted, fontWeight: 300 }}>AI</span></span>
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {navLinks.map(l => <a key={l.href} href={l.href} style={{ fontSize: 13, color: muted, textDecoration: "none" }}>{l.label}</a>)}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ background: teal, color: tealDark, fontSize: 13, fontWeight: 600, padding: "7px 18px", borderRadius: 20, textDecoration: "none" }}>Agendar demo</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 24px", position: "relative", overflow: "hidden", background: "radial-gradient(ellipse 800px 600px at 60% 40%, rgba(93,202,165,0.06), transparent)" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "15%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "rgba(93,202,165,0.07)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", top: "40%", right: "8%", width: 350, height: 350, borderRadius: "50%", background: "rgba(175,169,236,0.07)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", bottom: "10%", left: "35%", width: 300, height: 300, borderRadius: "50%", background: "rgba(250,199,117,0.05)", filter: "blur(80px)" }} />
        </div>
        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", color: teal, fontWeight: 500, marginBottom: 20, textTransform: "uppercase" }}>Growth Marketing + Inteligencia Artificial</p>
            <h1 style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 700, lineHeight: 1.05, marginBottom: 20, maxWidth: 700 }}>
              Más ventas.<br />Menos costos.<br /><span style={{ color: teal }}>Con IA y estrategia real.</span>
            </h1>
            <p style={{ fontSize: 16, color: muted, maxWidth: 460, marginBottom: 32, lineHeight: 1.6 }}>Somos tu equipo de growth marketing + automatización con IA. Contenitente dedicado que cierra.</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: teal, color: tealDark, fontWeight: 700, fontSize: 15, padding: "12px 24px", borderRadius: 24, textDecoration: "none" }}>
                <WaIcon style={{ width: 18, height: 18 }} /> Hablar por WhatsApp
              </a>
              <a href="#proceso" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${brd}`, color: muted, fontSize: 15, padding: "12px 24px", borderRadius: 24, textDecoration: "none" }}>Ver cómo funciona →</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${brd}`, borderRadius: 16, padding: 20, maxWidth: 420, backdropFilter: "blur(10px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(93,202,165,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: teal }}>AI</div>
              <div><p style={{ fontSize: 13, fontWeight: 500 }}>GrowthLab Bot</p><p style={{ fontSize: 11, color: teal }}>En línea</p></div>
            </div>
            {chatMsgs.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: m.from === "bot" ? -10 : 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.3 }}
                style={{ marginBottom: 8, display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start" }}>
                <span style={{ fontSize: 13, padding: "8px 12px", borderRadius: 10, maxWidth: "80%", background: m.from === "bot" ? "rgba(255,255,255,0.05)" : `rgba(93,202,165,0.15)`, color: m.from === "bot" ? muted : teal, lineHeight: 1.4 }}>{m.text}</span>
              </motion.div>
            ))}
            <div style={{ display: "flex", gap: 16, marginTop: 14, paddingTop: 14, borderTop: `1px solid ${brd}` }}>
              {[["⚡", "+120 negocios"], ["🕐", "24/7"], ["📈", "ROI medible"]].map(([icon, label]) => (
                <span key={label} style={{ fontSize: 11, color: dim }}>{icon} {label}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="servicios" ref={probRef} style={{ padding: "80px 24px", borderTop: `1px solid ${brd}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4 }} style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", color: coral, fontWeight: 500, marginBottom: 12, textTransform: "uppercase" }}>El Problema</p>
            <h2 style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 600 }}>Tu negocio pierde dinero <span style={{ color: coral }}>de estas formas</span></h2>
            <p style={{ color: muted, marginTop: 10, maxWidth: 480 }}>La mayoría de negocios pierden ventas por problemas que tienen solución.</p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {problems.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.35, delay: i * 0.1 }}
                style={{ padding: 24, background: "rgba(255,255,255,0.02)", border: `1px solid ${brd}`, borderRadius: 12 }}>
                <p style={{ fontFamily: "Outfit", fontSize: "clamp(36px,5vw,52px)", fontWeight: 700, color: coral, marginBottom: 8, lineHeight: 1 }}>{p.stat}</p>
                <h3 style={{ fontFamily: "Outfit", fontSize: 16, fontWeight: 500, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: dim, lineHeight: 1.5 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section style={{ padding: "80px 24px", borderTop: `1px solid ${brd}`, background: "radial-gradient(ellipse 700px 500px at 50% 50%, rgba(175,169,236,0.04), transparent)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", color: purple, fontWeight: 500, marginBottom: 12, textTransform: "uppercase" }}>La Solución</p>
            <h2 style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 600, marginBottom: 10 }}>Dos fuerzas, <span style={{ color: purple }}>un solo equipo</span></h2>
            <p style={{ color: muted, maxWidth: 440, margin: "0 auto" }}>Marketing humano + automatización inteligente trabajando juntos para que tu negocio venda más y gaste menos.</p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[{ label: "T", title: "Growth & Customer Service", sub: "El lado humano", items: pillarT, accent: purple },
              { label: "O", title: "Automatización con IA", sub: "El lado inteligente", items: pillarO, accent: teal }].map((col, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: i * 0.15 }}
                style={{ padding: 28, background: "rgba(255,255,255,0.02)", border: `1px solid rgba(255,255,255,0.08)`, borderRadius: 14, borderTop: `2px solid ${col.accent}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: `rgba(${i===0?"175,169,236":"93,202,165"},0.15)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: col.accent }}>{col.label}</div>
                  <div><p style={{ fontFamily: "Outfit", fontSize: 15, fontWeight: 500 }}>{col.title}</p><p style={{ fontSize: 11, color: col.accent }}>{col.sub}</p></div>
                </div>
                {col.items.map((item, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
                    <span style={{ color: col.accent, fontSize: 12, marginTop: 2 }}>◆</span>
                    <span style={{ fontSize: 13, color: muted }}>{item}</span>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 24, display: "flex", justifyContent: "center", gap: 8, alignItems: "center" }}>
            {[["Estrategia", purple], ["Tecnología", teal], ["Resultados reales", amber]].map(([label, color], i) => (
              <span key={i} style={{ fontSize: 12, color, padding: "4px 14px", borderRadius: 20, background: `rgba(${color === purple ? "175,169,236" : color === teal ? "93,202,165" : "250,199,117"},0.08)`, border: `1px solid ${color}30` }}>{label}{i < 2 ? " +" : ""}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="proceso" style={{ padding: "72px 24px", borderTop: `1px solid ${brd}`, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", color: amber, fontWeight: 500, marginBottom: 12, textTransform: "uppercase" }}>Proceso</p>
            <h2 style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 600, marginBottom: 10 }}>De cero a resultados en 3 pasos</h2>
            <p style={{ color: muted, maxWidth: 420, margin: "0 auto" }}>Sin complicaciones. Nosotros hacemos el trabajo pesado.</p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.35, delay: i * 0.12 }}
                style={{ textAlign: "center", padding: 24, background: "rgba(255,255,255,0.02)", borderRadius: 12 }}>
                <div style={{ width: 50, height: 50, borderRadius: "50%", background: "rgba(250,199,117,0.1)", border: "1px solid rgba(250,199,117,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontFamily: "Outfit", fontSize: 20, fontWeight: 600, color: amber }}>{s.num}</div>
                <h3 style={{ fontFamily: "Outfit", fontSize: 16, fontWeight: 500, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: dim, lineHeight: 1.5, maxWidth: 260, margin: "0 auto" }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: "72px 24px", borderTop: `1px solid ${brd}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", color: amber, fontWeight: 500, marginBottom: 12, textTransform: "uppercase" }}>Pricing</p>
            <h2 style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 600, marginBottom: 10 }}>Planes que se pagan solos</h2>
            <p style={{ color: muted, maxWidth: 460, margin: "0 auto" }}>Sin contratos de permanencia. Elige el que mejor se adapte.</p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, alignItems: "start" }}>
            {plans.map((pl, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.35, delay: i * 0.1 }}
                style={{ position: "relative", borderRadius: 16, padding: 24, background: pl.popular ? "rgba(93,202,165,0.06)" : "rgba(255,255,255,0.02)", border: pl.popular ? `2px solid rgba(93,202,165,0.3)` : `1px solid ${brd}` }}>
                {pl.popular && <div style={{ position: "absolute", top: -11, right: 18, background: teal, color: tealDark, fontSize: 11, fontWeight: 600, padding: "3px 12px", borderRadius: 12 }}>Popular</div>}
                <h3 style={{ fontFamily: "Outfit", fontSize: 20, fontWeight: 500, marginBottom: 4 }}>{pl.name}</h3>
                <p style={{ fontSize: 13, color: dim, marginBottom: 12 }}>{pl.desc}</p>
                <p style={{ fontSize: 12, color: amber, marginBottom: 8 }}>Setup: {pl.setup}</p>
                <div style={{ marginBottom: 22 }}>
                  <span style={{ fontFamily: "Outfit", fontSize: 36, fontWeight: 700, color: pl.popular ? teal : amber }}>{pl.price}</span>
                  <span style={{ fontSize: 13, color: dim }}>{pl.period}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                  {pl.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span style={{ color: pl.popular ? teal : dim, marginTop: 2, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 13, color: muted }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  style={{ display: "block", textAlign: "center", fontSize: 14, fontWeight: 600, padding: "11px 0", borderRadius: 24, textDecoration: "none",
                    ...(pl.popular ? { background: teal, color: tealDark } : { border: `1px solid ${brd}`, color: muted }) }}>
                  {pl.price === "Custom" ? "Contactar" : "Empezar ahora"}
                </a>
              </motion.div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: dim }}>👤 VA (Asistente Virtual) disponible desde <span style={{ color: amber }}>$200/mes adicionales</span> en cualquier plan</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "72px 24px", borderTop: `1px solid ${brd}` }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4 }} style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", color: purple, fontWeight: 500, marginBottom: 12, textTransform: "uppercase" }}>FAQ</p>
            <h2 style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 600 }}>Preguntas frecuentes</h2>
          </motion.div>
          {faqs.map((f, i) => <FAQItem key={i} faq={f} />)}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: "80px 24px", borderTop: `1px solid ${brd}`, textAlign: "center", background: "radial-gradient(ellipse 600px 400px at 50% 0%, rgba(93,202,165,0.06), transparent)" }}>
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4 }} style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 600, marginBottom: 12, lineHeight: 1.15 }}>¿Listo para crecer con IA?</h2>
          <p style={{ color: muted, fontSize: 16, marginBottom: 28 }}>Agenda una demo gratuita de 15 minutos. Sin compromiso.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: teal, color: tealDark, fontWeight: 700, fontSize: 17, padding: "14px 36px", borderRadius: 28, textDecoration: "none" }}>
            <WaIcon style={{ width: 22, height: 22 }} />
            Agendar demo por WhatsApp
          </a>
          <p style={{ marginTop: 18, fontSize: 12, color: dim }}>Respondemos en menos de 5 minutos</p>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${brd}`, padding: "32px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <span style={{ fontFamily: "Outfit", fontSize: 16, fontWeight: 600 }}><span style={{ color: teal }}>Growth</span>Lab <span style={{ color: muted, fontWeight: 300 }}>AI</span></span>
          <div style={{ display: "flex", gap: 20, fontSize: 13, color: dim }}>
            <a href="#servicios" style={{ color: dim, textDecoration: "none" }}>Servicios</a>
            <a href="#proceso" style={{ color: dim, textDecoration: "none" }}>Proceso</a>
            <a href="#pricing" style={{ color: dim, textDecoration: "none" }}>Pricing</a>
            <a href="#faq" style={{ color: dim, textDecoration: "none" }}>FAQ</a>
          </div>
          <span style={{ fontSize: 12, color: dim }}>Quito, Ecuador — 2026</span>
        </div>
      </footer>
    </div>
  );
}
