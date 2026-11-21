import { Icon } from "../ui/icons";
import { Reveal, SectionHead, SpotCard, Button, waLink } from "../ui/primitives";

const plans = [
  { id: "Plan Agent", price: "$250", note: "+ $500 de implementación (pago único)", tag: "Solo atención",
    items: ["Agente de IA en WhatsApp 24/7", "Chatwoot (CRM visual)", "Sin contenido ni campañas"] },
  { id: "Plan Grow", price: "$500", note: "Sin costo de instalación", tag: "Contenido + agente",
    items: ["9 posts, 3 reels y 14 historias al mes", "2 campañas en Meta", "Producción en tu negocio: 2 h (hasta 3)", "Agente de IA 24/7 + Chatwoot", "Sin tablero personalizado"] },
  { id: "Plan Ecosystem", price: "$750", note: "Sin costo de instalación", tag: "Recomendado", featured: true,
    items: ["12 posts, 5 reels y 14 historias al mes", "3 campañas en Meta", "Producción 4 h (hasta 5), hasta 2 visitas al mes", "Agente de IA 24/7", "CRM propio de GrowthLab: leads, pipeline por etapas y botón para prender o apagar el agente"] },
  { id: "Plan Marketing", price: "$350", note: "Pauta aparte", tag: "Solo redes y campañas",
    items: ["Planificación, textos y optimización de perfiles", "2 h de producción: 9 diseños, 3 reels y 14 historias (7 animadas, 7 estáticas)", "2 campañas básicas en Meta", "Reporte mensual", "Sin agente ni CRM"] },
];

const oneTime = [
  { n: "Producción audiovisual", p: "$280", old: "$560", badge: "Promo −50%", d: "3 h de rodaje en tu negocio en Quito con cámara Sony y equipos profesionales · 4 reels editados de hasta 45 s + 6 posts de imagen.", f: "Sin mensualidad ni compromiso" },
  { n: "Landing page", p: "desde $400", d: "Una sola página, a medida de tu marca, adaptada a celular.", f: "Dominio y hosting del 1.er año incluidos" },
  { n: "Página web completa", p: "~$800", d: "Varias secciones y menús de navegación.", f: "Dominio y hosting del 1.er año incluidos" },
  { n: "Tienda online", p: "desde $1.200", d: "Catálogo de productos y pasarela de pagos; se cotiza por alcance.", f: "Mantenimiento posterior aparte" },
];

export default function Pricing() {
  return (
    <section id="planes" className="relative py-20 md:py-28 bg-ink2">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Planes y precios" title={<>Elige cómo quieres <span className="grad-text">crecer</span></>}
          sub="Planes mensuales con compromiso mínimo de 6 meses. Impuestos y alojamiento incluidos." />
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08} className="h-full">
              <SpotCard beam={p.featured} inner="flex flex-col" className={`p-6 h-full ${p.featured ? "!border-transparent bg-gradient-to-b from-surface to-ink" : ""}`}>
                <span className={`self-start text-xs font-bold rounded-full px-3 py-1 mb-5 ${p.featured ? "bg-gradient-to-r from-cy to-pu text-surface" : "bg-white/5 text-tx3"}`}>{p.tag}</span>
                <h3 className="font-heading font-bold text-xl">{p.id}</h3>
                <p className="mt-3 flex items-baseline gap-1.5"><span className="font-heading font-extrabold text-5xl grad-text">{p.price}</span><span className="text-tx3 font-semibold">/mes</span></p>
                <p className="text-sm text-tx3 mt-1 mb-6 min-h-[2.5rem]">{p.note}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.items.map((t) => (
                    <li key={t} className="flex gap-2.5 text-[15px] text-tx2 leading-snug"><Icon name="check" size={18} className="text-cy shrink-0 mt-0.5" />{t}</li>
                  ))}
                </ul>
                <Button href={waLink(`Hola! Me interesa el ${p.id}`)} variant={p.featured ? "wa" : "ghost"} icon={p.featured ? "wa" : undefined} className="w-full">Quiero este plan</Button>
              </SpotCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8"><ul className="grid sm:grid-cols-3 gap-3 text-sm text-tx3">
          {["Pago mensual por adelantado", "La pauta en Meta va aparte y se paga directo a Meta", "Producción en Quito y valles; fuera del Distrito Metropolitano se cotiza la movilización"].map((t) => (
            <li key={t} className="flex gap-2 rounded-2xl border border-white/10 bg-surface/60 p-4"><Icon name="pin" size={16} className="text-pu shrink-0 mt-0.5" />{t}</li>
          ))}</ul></Reveal>

        <div className="mt-20">
          <Reveal className="text-center mb-10">
            <h3 className="font-heading font-bold text-3xl sm:text-4xl">Servicios de <span className="grad-text">pago único</span></h3>
            <p className="text-tx2 mt-3">Sin mensualidad. Ideal para empezar.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {oneTime.map((o, i) => (
              <Reveal key={o.n} delay={i * 0.08} className="h-full">
                <SpotCard inner="flex flex-col" className="p-6 h-full">
                  {o.badge && <span className="self-start text-xs font-bold rounded-full px-3 py-1 mb-3 bg-pu/15 text-pu border border-pu/30">{o.badge}</span>}
                  <h4 className="font-heading font-bold text-lg">{o.n}</h4>
                  <p className="mt-2 mb-3 flex items-baseline gap-2"><span className="font-heading font-extrabold text-3xl grad-text">{o.p}</span>{o.old && <s className="text-tx3 text-sm">{o.old}</s>}</p>
                  <p className="text-[15px] text-tx2 leading-snug flex-1">{o.d}</p>
                  <p className="text-xs text-tx3 mt-4 pt-4 border-t border-white/10">{o.f}</p>
                  <a href={waLink(`Hola! Me interesa: ${o.n}`)} target="_blank" rel="noopener noreferrer" className="mt-4 text-cy font-bold text-sm inline-flex items-center gap-1.5 min-h-[44px]">Cotizar por WhatsApp <Icon name="arrow" size={16} /></a>
                </SpotCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
