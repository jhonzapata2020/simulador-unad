# PROMPT MAESTRO PARA GOOGLE ANTIGRAVITY - APEX PERFORMANCE AGENCY

Actúa como arquitecto de software, diseñador UX/UI senior, especialista en conversión y desarrollador frontend senior.

Antes de escribir código:
1. Lee por completo el archivo `Especificacion_Apex_Antigravity.pdf` y todas las imágenes de referencia disponibles en el workspace.
2. Crea un Artifact de tipo Implementation Plan con fases, estructura de archivos, decisiones técnicas, riesgos y criterios de verificación.
3. No copies literalmente la página actual. Conserva la identidad oscura, morada y dorada, pero crea una propuesta más moderna, clara, confiable, rápida y orientada a conversión.
4. No inventes cifras, testimonios, certificaciones, nombres de clientes ni resultados comerciales. Usa marcadores visibles `PENDIENTE` o contenido de demostración claramente identificado cuando falten datos reales.
5. Después del plan, implementa el proyecto completo salvo que exista un bloqueo real. Evita preguntas innecesarias; usa placeholders editables cuando falten enlaces o recursos.

## Objetivo del proyecto
Construir una nueva web administrable para Apex Performance Agency, propiedad de la cliente, que pueda mantenerse sin depender de un programador y sin pagar backend, base de datos ni servidor. La propietaria debe poder actualizar textos, imágenes, precio, módulos, testimonios, preguntas frecuentes, botones, enlaces y SEO desde `/admin`.

## Restricciones obligatorias
- Usar Next.js con App Router, TypeScript y Tailwind CSS.
- Configurar exportación completamente estática con `output: "export"`.
- El resultado debe compilar en la carpeta `out` y poder desplegarse gratuitamente en Netlify.
- No usar API Routes, Route Handlers dinámicos, Server Actions, SSR, ISR, middleware dependiente de servidor, base de datos, Firebase, Supabase ni backend propio.
- No almacenar secretos en el repositorio.
- No construir checkout, CRM, área de alumnos ni autenticación de estudiantes.
- Los botones de compra deben apuntar a un enlace externo editable.
- El contacto principal debe ser WhatsApp mediante enlace editable.
- Los videos deben incrustarse desde YouTube, Vimeo u otra URL externa; no alojar videos pesados en el repositorio.
- Mantener el proyecto ligero y compatible con el plan gratuito de Netlify.

## CMS administrable
Implementar Sveltia CMS en `/admin` como CMS Git-based, con contenido almacenado en archivos JSON y Markdown dentro del repositorio.

Configurar como mínimo estas colecciones editables:
1. Configuración general: logo, nombre comercial, WhatsApp, correo, redes, enlaces, aviso legal.
2. SEO global: title, description, canonical, Open Graph, imagen social y keywords.
3. Portada: etiqueta, título, texto destacado, descripción, CTA principal, CTA secundario, imagen o video y métricas.
4. Problemas del cliente.
5. Método o sistema Apex.
6. Módulos del programa: crear, editar, ordenar, ocultar y eliminar.
7. Herramientas, plantillas y recursos incluidos.
8. Público objetivo y criterios de no aplicación.
9. Testimonios y casos de éxito, con opción de imagen, video, nombre, cargo y métricas verificables.
10. Mentoría personalizada.
11. Programa de afiliados.
12. Oferta y precio: moneda, precio anterior, precio actual, cuotas, bonos, texto del botón y enlace externo.
13. Garantía.
14. Preguntas frecuentes.
15. Footer y páginas legales.

Usar el backend de GitHub y preparar la autenticación mediante OAuth de GitHub con Netlify como proveedor. Documentar claramente en README los pasos que debe realizar el propietario del repositorio. No usar Git Gateway como dependencia principal. Si Sveltia CMS presenta una incompatibilidad bloqueante, documentarla y usar Decap CMS con el mismo modelo de contenido como fallback, sin cambiar la arquitectura estática.

## Alcance de interfaz
Crear:
- `/`: landing principal completa.
- `/politica-de-privacidad/`: plantilla legal editable.
- `/terminos-y-condiciones/`: plantilla legal editable.
- `/admin/`: panel CMS.
- Página 404 personalizada.

La landing debe incluir, en este orden recomendado:
1. Barra superior o aviso promocional editable.
2. Header sticky con logo y navegación por anclas.
3. Hero con propuesta de valor, prueba de confianza y CTA.
4. Bloque de problema/transformación.
5. Método Apex.
6. Resultados o beneficios esperados sin promesas engañosas.
7. Currículum de módulos en acordeón o tarjetas.
8. Recursos y plantillas.
9. Para quién es / para quién no es.
10. Testimonios y casos de éxito.
11. Mentoría y acompañamiento.
12. Oferta, bonos, precio y CTA.
13. Garantía.
14. Preguntas frecuentes.
15. CTA final.
16. Footer legal y redes.
17. Botón flotante de WhatsApp discreto y accesible.

## Dirección visual
- Marca premium de formación y performance marketing.
- Base oscura elegante, morados profundos, violeta eléctrico y acentos dorados/naranja.
- Evitar exceso de neón, brillos y mayúsculas.
- Tipografía moderna y muy legible.
- Mucho espacio visual, jerarquía clara y secciones diferenciadas.
- Tarjetas con bordes sutiles, sombras suaves y degradados controlados.
- Animaciones pequeñas y respetuosas con `prefers-reduced-motion`.
- Usar iconos de `lucide-react`; no usar emojis como iconografía principal.
- Diseñar primero para móvil y después para escritorio.
- No usar fotografías genéricas de personas sin aprobación. Preparar espacios para fotos y videos reales de la fundadora.

## Arquitectura de contenido
Centralizar todos los contenidos editables. Los componentes no deben contener textos comerciales importantes escritos directamente en JSX. Crear tipos TypeScript para cada modelo de contenido y validación defensiva de datos.

Estructura sugerida:
- `src/app/`
- `src/components/sections/`
- `src/components/ui/`
- `src/content/`
- `src/lib/content/`
- `src/types/`
- `public/admin/index.html`
- `public/admin/config.yml`
- `public/uploads/`
- `netlify.toml`
- `README.md`

## Calidad obligatoria
- HTML semántico.
- Navegación completa con teclado.
- Contraste accesible.
- Alt text editable en imágenes.
- Focus visible.
- Formularios y controles con labels.
- No usar texto pequeño ilegible.
- Evitar saltos de diseño y assets pesados.
- Optimizar imágenes a WebP/AVIF cuando sea viable.
- Añadir sitemap, robots.txt, metadata, Open Graph, favicon y JSON-LD de Organization/Course when los datos sean reales.
- Preparar Google Analytics y Meta Pixel mediante IDs opcionales editables; no ejecutar scripts si el ID está vacío.
- Meta objetivo: excelente experiencia móvil, carga rápida y cero errores de compilación.

## Verificación
Antes de terminar:
1. Ejecuta instalación, lint y build.
2. Confirma que se genera `out/` correctamente.
3. Levanta la versión estática local y prueba todas las rutas.
4. Prueba la landing en anchos aproximados de 375 px, 768 px, 1024 px y 1440 px.
5. Verifica enlaces, acordeones, navegación, CTA, 404 y páginas legales.
6. Verifica que `/admin` carga y que `config.yml` apunta a rutas reales.
7. Genera capturas de escritorio y móvil como Artifacts.
8. Revisa consola del navegador y corrige errores.
9. Añade un `README.md` completo con instalación, edición de contenidos, configuración de GitHub OAuth, despliegue en Netlify, dominio personalizado, recuperación de accesos y mantenimiento.
10. Crea un archivo `ENTREGA_CLIENTE.md` con la lista de cuentas y accesos que deben quedar a nombre de la cliente.

## Reglas de propiedad y despliegue
- El repositorio, Netlify y dominio deben quedar bajo cuentas de la cliente.
- No despliegues en producción ni cambies DNS sin aprobación explícita.
- Prepara `netlify.toml` con comando de build y directorio de publicación.
- Incluye `.env.example` solo si hay IDs públicos opcionales; no incluyas secretos.
- Mantén commits claros y pequeños.

## Entregables finales
- Código completo y funcional.
- Landing responsive.
- CMS en `/admin`.
- Contenido inicial migrado y organizado.
- Configuración de exportación estática.
- Configuración de Netlify.
- README técnico y manual breve de la propietaria.
- Lista de datos pendientes.
- Capturas de verificación.
- Informe final con archivos creados, pruebas ejecutadas y pasos manuales restantes.
