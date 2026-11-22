# Preferencias

- Responder siempre en español, corto y resumido, sin relleno.

# Flujo de trabajo

- Se trabaja y se hace push directo a `main` (autorizado por el dueño).
- Colaborador: Jorge, también sube directo a `main`.
- Antes de cada cambio y antes de cada push: `git pull --rebase origin main`. Nunca force-push ni pisar cambios ajenos; si hay conflicto, resolverlo conservando ambos o preguntar.
- Deploy: manual, lo hace el dueño desde Coolify en su VPS. Un push a `main` no publica nada por sí solo.

# SEO (estado al 22-nov-2026)

- Hecho: sitemap (`public/sitemap.xml`), canonical por página (las legales se generan en `vite.config.js`), JSON-LD `Organization` en `index.html` con logo `public/logo.png` y redes en `sameAs`. Rich Results Test: válido.
- Si se agrega una ruta: sumarla a `sitemap.xml` y al plugin `legalPages` de `vite.config.js`.
- Pendiente (opcional): `og:image`, completar avisos no críticos del JSON-LD (horario, código postal, precios).
