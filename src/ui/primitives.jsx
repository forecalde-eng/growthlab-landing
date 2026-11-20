import { useRef } from "react";
import { motion } from "framer-motion";
import { Icon, WaIcon } from "./icons";

export const WA_NUMBER = "593963820234";
export const waLink = (msg = "Hola! Me interesa saber más de GrowthLab AI") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

/* Aparece al entrar en pantalla */
export function Reveal({ children, delay = 0, y = 28, className = "" }) {
  return (
    <motion.div className={className}
      initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function SectionHead({ eyebrow, title, sub, center = true }) {
  return (
    <Reveal className={`mb-12 md:mb-16 ${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      <p className="text-cy text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">{eyebrow}</p>
      <h2 className="font-heading font-bold text-[clamp(2rem,6vw,3.5rem)] text-white">{title}</h2>
      {sub && <p className="mt-5 text-tx2 text-base sm:text-lg leading-relaxed">{sub}</p>}
    </Reveal>
  );
}

/* Botones — texto azul profundo sobre cyan / verde WhatsApp (guía de contraste) */
export function Button({ href, variant = "cyan", children, className = "", icon, ...p }) {
  const base = "inline-flex items-center justify-center gap-2.5 rounded-2xl font-bold text-base px-6 min-h-[52px] transition-transform duration-200 active:scale-[.97] hover:-translate-y-0.5 select-none";
  const v = {
    cyan: "bg-cy text-surface shimmer shadow-[0_8px_30px_-8px_rgba(72,190,215,.6)]",
    wa: "bg-wa text-surface shimmer pulse-wa",
    ghost: "border border-cy/50 text-cy bg-ink/40 hover:bg-cy/10 backdrop-blur",
  }[variant];
  const external = href?.startsWith("http");
  return (
    <a href={href} className={`${base} ${v} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...p}>
      {icon === "wa" && <WaIcon size={20} />}
      {children}
      {icon === "arrow" && <Icon name="arrow" size={18} />}
    </a>
  );
}

/* Tarjeta con spotlight (Magic UI) */
export function SpotCard({ children, className = "", beam = false }) {
  const ref = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const t = e.touches ? e.touches[0] : e;
    ref.current.style.setProperty("--mx", `${t.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${t.clientY - r.top}px`);
  };
  return (
    <div ref={ref} onMouseMove={move} onTouchStart={(e) => { move(e); ref.current.classList.add("active"); }}
      onTouchEnd={() => ref.current.classList.remove("active")}
      className={`spot rounded-3xl border border-white/10 bg-surface/80 ${beam ? "beam" : ""} ${className}`}>
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

export function IconBadge({ name, tone = "cy" }) {
  const t = tone === "pu" ? "text-pu bg-pu/10 border-pu/25" : "text-cy bg-cy/10 border-cy/25";
  return (
    <span className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl border ${t}`}>
      <Icon name={name} size={22} />
    </span>
  );
}

export function Marquee({ children }) {
  return (
    <div className="marquee-wrap">
      <div className="marquee">
        <div className="flex shrink-0 items-center gap-4 pr-4">{children}</div>
        <div className="flex shrink-0 items-center gap-4 pr-4" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}

/* Marca */
export function FlaskLogo({ size = 28 }) {
  const gid = `gl-${size}`;
  const s = { stroke: `url(#${gid})`, strokeWidth: 3.5, strokeLinecap: "round", strokeLinejoin: "round" };
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" style={{ display: "block", flexShrink: 0 }} aria-hidden="true">
      <defs><linearGradient id={gid} x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#48BED7" /><stop offset="100%" stopColor="#C057D5" /></linearGradient></defs>
      <path d="M22 8 L42 8" {...s} /><path d="M24 8 L24 22" {...s} />
      <path d="M40 8 L40 18 L52 6" {...s} /><path d="M45 6 L52 6 L52 13" {...s} />
      <path d="M24 22 L10 50 Q10 58 18 58 L46 58 Q54 58 54 50 L40 22" {...s} />
      <path d="M38 36 A8 8 0 1 0 38 46 L38 41 L34 41" {...s} strokeWidth={3} />
    </svg>
  );
}
export function Wordmark({ size = 20 }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <FlaskLogo size={size * 1.5} />
      <span className="font-heading font-bold leading-none tracking-tight" style={{ fontSize: size }}>
        GrowthLab <span className="grad-text">AI</span>
      </span>
    </span>
  );
}
