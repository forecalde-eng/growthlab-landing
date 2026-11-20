# Preferencias

- Responder siempre en español, corto y resumido, sin relleno.

# Flujo de trabajo

- Se trabaja y se hace push directo a `main` (autorizado por el dueño).
- Colaborador: Jorge, también sube directo a `main`.
- Antes de cada cambio y antes de cada push: `git pull --rebase origin main`. Nunca force-push ni pisar cambios ajenos; si hay conflicto, resolverlo conservando ambos o preguntar.
- Deploy: manual, lo hace el dueño desde Coolify en su VPS. Un push a `main` no publica nada por sí solo.
