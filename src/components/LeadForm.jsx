import { useState } from "react";

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
  fontSize: 14,
  color: txt,
  outline: "none",
  fontFamily: "Inter, sans-serif",
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
  const [form, setForm] = useState({ nombre: "", whatsapp: "", email: "" });
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
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, fuente: "landing_page" }),
      });
      if (!res.ok) throw new Error("Error del servidor");
      setSuccess(true);
    } catch (err) {
      setError("Algo salió mal. Intenta de nuevo o escríbenos por WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section style={{ padding: "80px 24px", borderTop: `1px solid ${brd}`, background: `radial-gradient(ellipse 700px 500px at 50% 50%, rgba(72,190,215,0.05), transparent)` }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.2em", color: teal, fontWeight: 500, marginBottom: 12, textTransform: "uppercase" }}>
            Empezar ahora
          </p>
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, color: txt, marginBottom: 12, lineHeight: 1.2 }}>
            ¿Listo para automatizar tus ventas?
          </h2>
          <p style={{ fontSize: 15, color: muted, lineHeight: 1.6 }}>
            Déjanos tus datos y te contactamos en menos de 24h
          </p>
        </div>

        {/* Card */}
        <div style={{ background: card, border: `1px solid ${brd}`, borderRadius: 18, padding: "36px 32px", borderTop: `2px solid ${teal}` }}>
          {success ? (
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🚀</div>
              <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: 22, fontWeight: 600, color: teal, marginBottom: 10 }}>
                ¡Listo! Te contactamos pronto
              </h3>
              <p style={{ color: muted, fontSize: 14, lineHeight: 1.6 }}>
                Revisaremos tu información y te escribiremos en menos de 24 horas.
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

              {error && (
                <p style={{ fontSize: 13, color: "#FF6B6B", background: "rgba(255,107,107,0.08)", border: "1px solid rgba(255,107,107,0.2)", borderRadius: 8, padding: "10px 14px", lineHeight: 1.5 }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading ? "rgba(72,190,215,0.5)" : teal,
                  color: tealDark,
                  fontFamily: "Montserrat, sans-serif",
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
                {loading ? "Enviando..." : "Quiero mi demo gratis →"}
              </button>

              <p style={{ textAlign: "center", fontSize: 12, color: dim }}>
                Sin spam. Sin compromiso. Solo resultados.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
