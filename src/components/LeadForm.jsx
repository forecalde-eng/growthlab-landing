import { useState, useEffect } from "react";

const WA_NUMBER = "593963820234";
const DRAFT_KEY = "gl_lead_draft";

const WEBHOOK_URL = "https://n8n.dreamcode.space/webhook/leads-growthlab";

const bg = "#0F1423";
const teal = "#48BED7";
const tealDark = "#0A1424";
const purple = "#C057D5";
const txt = "#F0F2F8";
const muted = "rgba(255,255,255,0.5)";
const dim = "rgba(255,255,255,0.35)";
const brd = "rgba(255,255,255,0.08)";
const card = "rgba(255,255,255,0.03)";

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: `1px solid ${brd}`,
  borderRadius: 10,
  padding: "13px 16px",
  fontSize: 16,
  color: txt,
  outline: "none",
  fontFamily: "Manrope, sans-serif",
  boxSizing: "border-box",
};

const labelStyle = {
  display: "block",
  fontSize: 12,
  color: muted,
  marginBottom: 6,
  letterSpacing: "0.04em",
};

export default function LeadForm() {
  const [form, setForm] = useState({ nombre: "", whatsapp: "", email: "", mensaje: "" });

  // Recupera / guarda borrador para que no se pierda lo escrito
  useEffect(() => {
    try { const d = JSON.parse(localStorage.getItem(DRAFT_KEY) || "null"); if (d) setForm(f => ({ ...f, ...d })); } catch {}
  }, []);
  useEffect(() => {
    try { localStorage.setItem(DRAFT_KEY, JSON.stringify(form)); } catch {}
  }, [form]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const texto =
      `Hola! Soy ${form.nombre}.\n` +
      (form.mensaje ? `Me interesa: ${form.mensaje}\n` : "") +
      `Mi WhatsApp: ${form.whatsapp}` +
      (form.email ? `\nEmail: ${form.email}` : "");
    const wa = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(texto)}`;
    // 1) Guardar el lead (si falla, igual seguimos a WhatsApp)
    try {
      await Promise.race([
        fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, fuente: "landing_page" }),
          keepalive: true,
        }),
        new Promise(r => setTimeout(r, 2000)),
      ]);
    } catch {}
    // 2) Ir a WhatsApp con el mensaje armado
    try { localStorage.removeItem(DRAFT_KEY); } catch {}
    setSuccess(true);
    setLoading(false);
    window.location.href = wa;
  }

  return (
    <section style={{ padding: "80px 20px", background: "#050814" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.2em", color: teal, fontWeight: 500, marginBottom: 12, textTransform: "uppercase" }}>
            Empezar ahora
          </p>
          <h2 style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, color: txt, marginBottom: 12, lineHeight: 1.2 }}>
            Déjanos tus datos
          </h2>
          <p style={{ fontSize: 15, color: muted, lineHeight: 1.6 }}>
            Llena el formulario y te llevamos directo a WhatsApp con tu mensaje listo.
          </p>
        </div>

        {/* Card */}
        <div style={{ background: card, border: `1px solid ${brd}`, borderRadius: 18, padding: "32px 22px", borderTop: `2px solid ${teal}` }}>
          {success ? (
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🚀</div>
              <h3 style={{ fontFamily: "Outfit, sans-serif", fontSize: 22, fontWeight: 600, color: teal, marginBottom: 10 }}>
                ¡Listo! Abriendo WhatsApp…
              </h3>
              <p style={{ color: muted, fontSize: 14, lineHeight: 1.6 }}>
                Si no se abre automáticamente, escríbenos desde el botón de WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label style={labelStyle} htmlFor="nombre">Nombre *</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  value={form.nombre}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle} htmlFor="whatsapp">WhatsApp *</label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  placeholder="+593 99 999 9999"
                  value={form.whatsapp}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle} htmlFor="email">Email <span style={{ color: dim }}>(opcional)</span></label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle} htmlFor="mensaje">¿Qué necesitas? <span style={{ color: dim }}>(opcional)</span></label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={3}
                  placeholder="Ej: agente de IA para mi clínica, página web, marketing…"
                  value={form.mensaje}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: "vertical", minHeight: 90 }}
                />
              </div>

              <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, color: muted, lineHeight: 1.5, cursor: "pointer" }}>
                <input type="checkbox" required style={{ width: 20, height: 20, marginTop: 1, flexShrink: 0, accentColor: teal }} />
                <span>Acepto la <a href="/privacidad" target="_blank" rel="noopener noreferrer" style={{ color: teal }}>política de privacidad</a> y el uso de mis datos para que me contacten.</span>
              </label>

              {error && (
                <p style={{ fontSize: 13, color: "#FF6B6B", background: "rgba(255,107,107,0.08)", border: "1px solid rgba(255,107,107,0.2)", borderRadius: 8, padding: "10px 14px", lineHeight: 1.5 }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading ? "rgba(72,190,215,0.5)" : teal, minHeight: 52,
                  color: tealDark,
                  fontFamily: "Outfit, sans-serif",
                  fontSize: 15,
                  fontWeight: 700,
                  padding: "14px 28px",
                  borderRadius: 28,
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "opacity 0.2s",
                  letterSpacing: "0.01em",
                }}
              >
                {loading ? "Abriendo WhatsApp..." : "Enviar y abrir WhatsApp →"}
              </button>

              <p style={{ textAlign: "center", fontSize: 12, color: dim }}>
                Sin spam. Sin compromiso.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
