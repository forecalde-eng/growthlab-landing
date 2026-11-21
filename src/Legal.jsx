import { useEffect } from "react";
import { Wordmark, Button, waLink } from "./ui/primitives";
import { Icon } from "./ui/icons";

const UPDATED = "21 de noviembre de 2026";
const CONTACT = { ruc: "1712517885001",  mail: "growthlabaiec@gmail.com", tel: "0963 820 234", addr: "Shyris N31-35 y Suecia, Edificio Iqon, piso 6, Quito, Ecuador", web: "www.growthlab-ai.space" };

const pages = {
  privacidad: {
    title: "Política de privacidad",
    intro: "En GrowthLab AI cuidamos tus datos personales. Aquí te explicamos qué datos recogemos en este sitio, para qué los usamos y cuáles son tus derechos, conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador.",
    sections: [
      ["1. Quién es el responsable", [`GrowthLab AI, RUC ${CONTACT.ruc}, con domicilio en ${CONTACT.addr}. Puedes escribirnos a ${CONTACT.mail} o al ${CONTACT.tel}.`]],
      ["2. Qué datos recogemos", [
        "Los que tú nos das en el formulario de contacto: nombre, número de WhatsApp, correo electrónico (opcional) y el mensaje sobre lo que necesitas (opcional).",
        "Los datos que nos envíes por WhatsApp cuando nos escribas.",
        "Mientras llenas el formulario, tu navegador guarda un borrador en tu propio dispositivo para que no pierdas lo escrito; se borra al enviar y nosotros no lo recibimos.",
      ]],
      ["3. Para qué los usamos", [
        "Responder tu consulta y contactarte por WhatsApp o correo.",
        "Enviarte información y cotizaciones de nuestros servicios (agente de IA, CRM, marketing, producción audiovisual y páginas web).",
        "Llevar un registro interno de contactos para dar seguimiento a tu solicitud.",
        "No vendemos tus datos ni los usamos para fines distintos a los indicados.",
      ]],
      ["4. Base legal", ["Tu consentimiento, que nos das al marcar la casilla y enviar el formulario, y la necesidad de atender la solicitud que nos haces."]],
      ["5. Con quién los compartimos", [
        "Proveedores que nos ayudan a operar, como el servicio de automatización donde se registran los contactos, WhatsApp (Meta) y el hosting de este sitio. Solo reciben lo necesario para prestar su servicio.",
        "Este sitio carga tipografías desde Google Fonts, por lo que Google puede recibir tu dirección IP al visitarlo.",
        "Podremos entregar datos si una autoridad competente lo exige legalmente.",
      ]],
      ["6. Cuánto tiempo los conservamos", ["Mientras sea necesario para atender tu solicitud y la relación comercial, y durante los plazos que exija la ley. Puedes pedirnos que los eliminemos antes."]],
      ["7. Tus derechos", [
        "Puedes solicitar acceso, rectificación, actualización, eliminación, oposición y portabilidad de tus datos, así como retirar tu consentimiento en cualquier momento.",
        `Escríbenos a ${CONTACT.mail} indicando tu nombre y qué quieres hacer. Te responderemos dentro de los plazos legales.`,
      ]],
      ["8. Seguridad", ["Aplicamos medidas razonables para proteger tu información. Ningún sistema es 100% infalible, pero trabajamos para reducir riesgos."]],
      ["9. Cambios", ["Podemos actualizar esta política. Publicaremos la versión vigente en esta página con su fecha."]],
    ],
  },
  terminos: {
    title: "Términos y condiciones",
    intro: "Estos términos explican cómo funcionan nuestros servicios y el uso de este sitio. Al contratar con GrowthLab AI o usar el sitio, aceptas estas condiciones. Lo acordado en cada propuesta o contrato por escrito prevalece sobre este texto.",
    sections: [
      ["1. Servicios", ["GrowthLab AI ofrece agente de IA en WhatsApp, CRM, automatizaciones, marketing digital y gestión de campañas, producción audiovisual, páginas web y tiendas online. El alcance exacto de cada servicio es el descrito en el plan o la propuesta que aceptes."]],
      ["2. Planes mensuales", [
        "Los planes mensuales tienen un compromiso mínimo de 6 meses, con pago mensual por adelantado.",
        "Los precios publicados incluyen impuestos y alojamiento.",
        "La instalación se cobra solo en el Plan Agent (pago único); los planes Grow y Ecosystem no la cobran.",
        "Terminación anticipada: si el cliente da por terminado el servicio antes de cumplir el compromiso mínimo de 6 meses, deberá pagar como penalidad el 50% del valor restante del compromiso.",
      ]],
      ["3. Servicios de pago único", ["Producción audiovisual, landing page, página web completa y tienda online se contratan sin mensualidad. Landing y web completa incluyen dominio y hosting del primer año. La tienda online se cotiza por alcance y su mantenimiento posterior se cobra aparte."]],
      ["4. Publicidad (pauta)", ["La inversión en publicidad no está incluida y se paga directamente a Meta. Nosotros gestionamos las campañas según el plan contratado."]],
      ["5. Producción en sitio", ["Las visitas de producción se realizan en Quito y sus valles. Fuera del Distrito Metropolitano, la movilización se cotiza aparte."]],
      ["6. Resultados", ["No garantizamos resultados específicos de ventas, clientes ni porcentajes. Entregamos el sistema (atención, CRM, contenido, campañas y datos); el cierre de ventas lo realiza el equipo del cliente."]],
      ["7. Responsabilidades del cliente", ["Proporcionar información, accesos y materiales a tiempo, y contar con las autorizaciones necesarias sobre marcas, imágenes y datos que nos entregue. Los mensajes que reciba tu negocio a través del agente son tratados bajo tu responsabilidad como titular del negocio."]],
      ["8. Propiedad intelectual", ["Nuestras marcas, diseños y software propio siguen siendo de GrowthLab AI. Los contenidos producidos para el cliente se entregan según lo acordado en cada propuesta. Los materiales y marcas del cliente siguen siendo del cliente."]],
      ["9. Precios y cambios", ["Los precios son los vigentes a la fecha de publicación y pueden cambiar; los que valen para ti son los confirmados en tu propuesta. Podemos actualizar estos términos publicando la versión vigente."]],
      ["10. Uso del sitio", ["Este sitio es informativo. Puedes usarlo y compartir su contenido sin alterarlo; no está permitido el uso indebido ni intentar vulnerar su seguridad."]],
      ["11. Privacidad", ["El tratamiento de tus datos se explica en nuestra Política de privacidad."]],
      ["12. Ley aplicable y contacto", [`Estos términos se rigen por las leyes de la República del Ecuador. GrowthLab AI, RUC ${CONTACT.ruc}. Para cualquier consulta: ${CONTACT.mail} o ${CONTACT.tel}.`]],
    ],
  },
};

export default function Legal({ page }) {
  const d = pages[page];
  useEffect(() => { document.title = `${d.title} — GrowthLab AI`; window.scrollTo(0, 0); }, [d]);
  const other = page === "privacidad" ? ["/terminos", "Términos y condiciones"] : ["/privacidad", "Política de privacidad"];
  return (
    <div className="min-h-screen bg-ink text-white font-body">
      <header className="border-b border-white/10 bg-ink/90 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-3xl px-5 h-16 flex items-center justify-between">
          <a href="/" aria-label="Volver al inicio"><Wordmark size={18} /></a>
          <a href="/" className="text-sm font-semibold text-cy inline-flex items-center gap-1.5 min-h-[44px]">Volver al sitio <Icon name="arrow" size={16} /></a>
        </div>
        <div className="grad-line" />
      </header>
      <main className="mx-auto max-w-3xl px-5 py-14 md:py-20">
        <p className="text-cy text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">Legal</p>
        <h1 className="font-heading font-extrabold text-[clamp(2rem,6vw,3.25rem)]">{d.title}</h1>
        <p className="mt-3 text-tx3 text-sm">Última actualización: {UPDATED}</p>
        <p className="mt-6 text-tx2 text-lg leading-relaxed">{d.intro}</p>
        <div className="mt-10 space-y-9">
          {d.sections.map(([h, ps]) => (
            <section key={h}>
              <h2 className="font-heading font-bold text-xl sm:text-2xl mb-3">{h}</h2>
              <div className="space-y-3 text-tx2 leading-relaxed">{ps.map((t) => <p key={t}>{t}</p>)}</div>
            </section>
          ))}
        </div>
        <div className="mt-14 rounded-3xl border border-white/10 bg-surface p-6">
          <p className="font-heading font-bold text-lg mb-1">¿Tienes dudas?</p>
          <p className="text-tx2 mb-5">Escríbenos y te ayudamos.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href={waLink("Hola! Tengo una consulta")} variant="wa" icon="wa">Escribir por WhatsApp</Button>
            <Button href={other[0]} variant="ghost" target="_blank" rel="noopener noreferrer">{other[1]}</Button>
          </div>
        </div>
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-tx3">© 2026 GrowthLab AI · Quito, Ecuador</footer>
    </div>
  );
}
