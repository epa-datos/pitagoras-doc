# Pitágoras: documentación

Sitio de documentación de **Pitágoras**, el add-on de Google Sheets de EPA Digital que descarga información de plataformas publicitarias y de analítica.

Publicado en https://epa-datos.github.io/pitagoras-doc

> El sitio es **público** (GitHub Pages). No incluir en él nombres de secretos, credenciales, identificadores de proyectos, ni detalles de seguridad internos.

## Qué contiene

| Sección | Archivo |
|---|---|
| Sobre Pitágoras | `src/components/doc/AboutPitagoras.jsx` |
| Cómo funciona (incluye Newton) | `src/components/doc/HowItWorks.jsx` |
| Primeros pasos | `src/components/doc/FirstSteps.jsx` |
| Accesos y seguridad | `src/components/doc/Access.jsx` |
| Un archivo por plataforma | `src/components/doc/providers/*.jsx` (listados en `AllProviders.jsx`) |
| FAQs y Pro Tips | `src/components/doc/Faqs.jsx`, `Tips.jsx` |
| Menú lateral | `src/components/layout/Sidebar.jsx` |

## Cómo agregar una plataforma nueva

1. Crear `src/components/doc/providers/<Plataforma>.jsx` con un `Space` cuyo `id` sea el ancla.
2. Importarlo y agregarlo en `providers/AllProviders.jsx`.
3. Agregar el enlace en `layout/Sidebar.jsx`.
4. Si cambian los accesos, actualizar la tabla de `Access.jsx` y la FAQ de cuentas que no aparecen en `Faqs.jsx`.

Las plataformas disponibles en el add-on están en `pitagoras-add-on/src/client/utils/constants.js` (`PROVIDERS`).

## Desarrollo

```bash
npm install
npm start        # http://localhost:3000
npm test
npm run build
```

## Publicar

El sitio se publica en la rama `gh-pages`:

```bash
npm run deploy
```

Publicar solo tras fusionar los cambios a `main`.

## Documentación relacionada

- Referencia interna de endpoints: `mextractor/INTERNAL_DOCS.md`.
- Add-on: repo `pitagoras-add-on`.
- Panel de administración: `epa-dashboard` (en uso) y `epa-newton`.
