# Revisión de SEO y enlaces compartidos

Revisión del 14 de octubre de 2026 para https://cabanasmirsu.vercel.app/.
Los cambios de esta revisión están preparados en el proyecto; requieren publicar una nueva versión en Vercel.

## Diagnóstico y cambios

| Área | Estado anterior comprobado | Cambio |
| --- | --- | --- |
| Miniatura | Sin `og:image`; la aplicación podía elegir una imagen arbitraria | JPG de 1200 × 630 px, aproximadamente 212 KB, con foto real y marca |
| Redes sociales | Solo título y descripción Open Graph en inicio | Open Graph completo y Twitter Card en las cuatro páginas |
| URL principal | Sin canonical | Una URL canónica absoluta y propia para cada página |
| Descubrimiento | `/robots.txt` y `/sitemap.xml` respondían 404 | Robots abierto y sitemap con las cuatro URLs canónicas |
| Contenido | H1 genérico en inicio; misma descripción larga en ambas galerías | Ubicación y tipo de alojamiento en H1; textos diferenciados por espacio |
| SEO local | Sin datos estructurados | `LodgingBusiness` con dirección, contacto, imágenes y servicios existentes |
| Jerarquía | Sin datos estructurados de navegación | `BreadcrumbList` en las páginas de la cabaña y sus galerías |

Ya estaban bien: HTTPS, HTML en español argentino, páginas principales prerenderizadas, imágenes con `next/image`, foto principal prioritaria, mapa con carga diferida y enlaces internos rastreables. Se conservan estas características. `/turismo` continúa redirigiendo permanentemente a `/#ubicacion` y se excluye del sitemap.

## Búsquedas objetivo

Estas frases se eligieron por su relación con el alojamiento y sus servicios reales. No representan volúmenes de búsqueda medidos ni posiciones actuales.

| Página | Intención / frases objetivo |
| --- | --- |
| `/` | Cabañas en Villa General Belgrano; cabañas en Villa General Belgrano Córdoba; cabaña para 2 a 6 personas; Cabañas Mirsú |
| `/cabana` | Fotos de cabañas en Villa General Belgrano; alojamiento para 2 a 6 personas |
| `/cabanas/externa` | Cabaña con parque y asador en Villa General Belgrano; cabaña con cochera cubierta |
| `/cabanas/interior` | Cabaña con dos dormitorios en Villa General Belgrano; cabaña con cocina equipada |

No se añadió `meta keywords`: [Google no la usa para indexar ni posicionar](https://developers.google.com/search/docs/crawling-indexing/special-tags). Las frases están integradas en títulos, encabezados y contenido visible. No se agregaron servicios, tarifas, reseñas ni horarios sin confirmar.

## Después de publicar

1. Comprobar que `/img/mirsu-compartir-v1.jpg`, `/robots.txt` y `/sitemap.xml` respondan 200 en el dominio público, sin autenticación ni bloqueos para rastreadores.
2. Compartir el enlace en una conversación nueva y comprobar la tarjeta. La presentación final depende de cada aplicación. Las vistas anteriores pueden permanecer en caché; usar el [Sharing Debugger de Meta](https://developers.facebook.com/tools/debug/) para solicitar una nueva lectura en Facebook. Esto no garantiza limpiar la caché de WhatsApp.
3. Verificar la propiedad de prefijo URL `https://cabanasmirsu.vercel.app/` en [Google Search Console](https://search.google.com/search-console), enviar `sitemap.xml` e inspeccionar las cuatro URLs. Requiere acceso de la titular; no se configuró desde este proyecto. [Guía de sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=es).
4. Validar los datos estructurados publicados en [Rich Results Test](https://search.google.com/test/rich-results) y [Schema.org Validator](https://validator.schema.org/). La presencia del marcado no garantiza resultados enriquecidos. [Guía de Google para negocios locales](https://developers.google.com/search/docs/appearance/structured-data/local-business).
5. Revisar el Perfil de Empresa en Google: nombre, dirección y teléfono consistentes con la web, enlace al sitio, categoría adecuada, fotos actuales y respuestas a reseñas reales. Requiere acceso a esa cuenta. [Consejos oficiales de posicionamiento local](https://support.google.com/business/answer/7091?hl=es).
6. Medir consultas, impresiones, clics y CTR en Search Console tras acumular datos; ajustar los textos según búsquedas reales. No se evaluaron posiciones actuales, backlinks ni conversiones por falta de acceso a esas métricas.
7. Medir rendimiento móvil en [PageSpeed Insights](https://pagespeed.web.dev/) tras publicar y priorizar problemas reales de LCP, INP o CLS. No se atribuye una puntuación Lighthouse o Core Web Vitals a esta revisión.

## Mantenimiento

- Verificación realizada: `npm run build` correcto; `node scripts/check-seo.cjs` correcto contra el servidor de producción local; vistas de 1440 px y 390 px revisadas en Chrome sin desbordamiento horizontal. El chequeo comprueba HTML servido, metadatos únicos, JSON-LD parseable, sitemap, robots, imagen JPEG y dimensiones, redirección de turismo y 404. No sustituye la validación de Google del sitio publicado.
- Para repetir: compilar, iniciar con `node node_modules/next/dist/bin/next start -p 4174` y ejecutar `node scripts/check-seo.cjs`. Tras desplegar, ejecutar `node scripts/check-seo.cjs https://cabanasmirsu.vercel.app` para comprobar el dominio público.
- Metadatos compartidos: `Components/Seo.jsx`. Dominio, contacto y schema: `lib/seo.js`.
- Si cambia el dominio, actualizar también `public/robots.txt` y `public/sitemap.xml`.
- Si se agrega o elimina una página indexable, actualizar el sitemap. Se omite `lastmod` para no publicar fechas de modificación inventadas.
- Miniatura: `public/img/mirsu-compartir-v1.jpg`. Diseño reproducible: `design/social-card.html`; regenerar con `node scripts/build-social-card.cjs`. Usa Chrome instalado en Windows, o la ruta indicada por `CHROME_PATH`. No se ejecuta durante el build ni añade dependencias al sitio.
- Al reemplazar la tarjeta, usar un nuevo nombre de archivo y actualizar `socialImage` en `lib/seo.js` para diferenciar versiones en las cachés.
- El proyecto usa Next.js 12.1.6 y una base Browserslist antigua. La compilación muestra avisos de compatibilidad; conviene planificar la actualización del framework y dependencias con una revisión propia de regresiones. Esta tarea no cambia versiones.
