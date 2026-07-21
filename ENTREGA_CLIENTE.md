# ENTREGA AL CLIENTE — APEX Performance Agency

> **Fecha de preparación:** Julio 2026  
> **Para:** Propietaria de APEX Performance Agency  
> **Estado:** 🔴 Pendiente de completar con datos reales

---

## ✅ Entregables Completados

- [x] Código fuente completo del sitio web
- [x] Landing page responsive (Hero, Problemas, Método, Beneficios, Módulos, Recursos, Audiencia, Testimonios, Mentoría, Oferta, Garantía, FAQ, CTA Final)
- [x] Panel CMS en `/admin` con Sveltia CMS
- [x] Páginas legales editables (Política de Privacidad y Términos y Condiciones)
- [x] Página 404 personalizada
- [x] Configuración de exportación estática
- [x] Configuración de Netlify (`netlify.toml`)
- [x] Documentación técnica (`README.md`)
- [x] Integración condicional de Google Analytics y Meta Pixel (inactiva hasta recibir IDs)

---

## 🔴 Datos Pendientes de Proporcionar

La propietaria debe completar estos datos antes del lanzamiento en producción:

### Identidad y Contacto

| Campo | Estado | Dónde actualizar |
|---|---|---|
| Logotipo oficial (SVG o PNG en alta resolución) | PENDIENTE | CMS → Configuración General |
| Nombre completo de la fundadora | PENDIENTE | CMS → Mentoría (bio) |
| Fotografía profesional de la fundadora (WebP, ≤1.5 MB) | PENDIENTE | CMS → Mentoría |
| Número de WhatsApp con código internacional (ej: +573001234567) | PENDIENTE | CMS → Configuración General |
| Correo electrónico de contacto/soporte | PENDIENTE | CMS → Configuración General |
| Razón social o nombre legal del negocio | PENDIENTE | CMS → Páginas Legales |

### Redes Sociales

| Red | Estado | Dónde actualizar |
|---|---|---|
| URL de Instagram | PENDIENTE | CMS → Configuración General → Redes |
| URL de LinkedIn | PENDIENTE | CMS → Configuración General → Redes |
| URL de Facebook | PENDIENTE (si aplica) | CMS → Configuración General → Redes |
| URL de YouTube | PENDIENTE (si aplica) | CMS → Configuración General → Redes |

### Oferta y Venta

| Campo | Estado | Dónde actualizar |
|---|---|---|
| Precio actual del programa | PENDIENTE | CMS → Oferta y Bonos |
| Precio de lista / tachado | PENDIENTE | CMS → Oferta y Bonos |
| Enlace externo de compra (checkout/procesador de pago) | PENDIENTE | CMS → Oferta y Bonos |
| Texto de cuotas/facilidades de pago | PENDIENTE | CMS → Oferta y Bonos |
| URL de agenda de llamadas de orientación | PENDIENTE | CMS → Mentoría |

### Contenido Real

| Campo | Estado | Dónde actualizar |
|---|---|---|
| Video de presentación del programa (URL de YouTube o Vimeo) | PENDIENTE | CMS → Hero |
| Testimonios reales de alumnos | PENDIENTE | CMS → Testimonios |
| Módulos completos del programa con lecciones detalladas | PENDIENTE | CMS → Módulos |
| Métricas verificables de resultados de alumnos | PENDIENTE | CMS → Testimonios |
| Foto y bio de la fundadora | PENDIENTE | CMS → Mentoría |
| Imagen de Open Graph para redes sociales | PENDIENTE | CMS → SEO y Analítica |

### Analítica

| Campo | Estado | Dónde actualizar |
|---|---|---|
| ID de Google Analytics (formato G-XXXXXXXXXX) | PENDIENTE | CMS → SEO y Analítica |
| ID de Meta Pixel (Facebook Ads) | PENDIENTE | CMS → SEO y Analítica |

### Legal

| Campo | Estado | Dónde actualizar |
|---|---|---|
| Revisión y aprobación de Política de Privacidad | PENDIENTE | CMS → Páginas Legales |
| Revisión y aprobación de Términos y Condiciones | PENDIENTE | CMS → Páginas Legales |

---

## 🔴 Cuentas y Accesos por Crear/Transferir

La propietaria debe asegurarse de tener control sobre las siguientes cuentas **a nombre de ella**:

### GitHub
- [ ] Cuenta de GitHub bajo el correo de la propietaria
- [ ] Repositorio del proyecto en esa cuenta (o con acceso de colaborador Owner)
- [ ] La propietaria debe ser Owner del repositorio para autenticarse en el CMS

**URL del repositorio:** `https://github.com/PENDIENTE_USUARIO/PENDIENTE_REPOSITORIO`

### Netlify
- [ ] Cuenta de Netlify a nombre de la propietaria
- [ ] Sitio creado y conectado al repositorio de GitHub
- [ ] Proveedor OAuth de GitHub configurado (ver README.md)

**URL del sitio en Netlify:** `PENDIENTE`

### Dominio
- [ ] Registrador del dominio `apexperformanceagency.digital` con acceso de la propietaria
- [ ] DNS apuntando a los nameservers de Netlify (una vez aprobado el deploy)

---

## ⚠️ Pasos para el Lanzamiento (Checklist Final)

1. [ ] Proporcionar todos los datos marcados como PENDIENTE en la tabla anterior
2. [ ] Crear repositorio de GitHub bajo la cuenta de la propietaria
3. [ ] Subir el código al repositorio
4. [ ] Crear cuenta de Netlify y conectar el repositorio
5. [ ] Configurar la aplicación OAuth en GitHub y conectarla a Netlify (ver README)
6. [ ] Verificar que el CMS en `/admin` funciona con la cuenta de la propietaria
7. [ ] Apuntar el dominio a Netlify (solo con aprobación explícita)
8. [ ] Verificar el sitio completo en el dominio definitivo
9. [ ] Activar Google Analytics y Meta Pixel desde el CMS
10. [ ] Revisión legal de los textos de Política y Términos
11. [ ] **GO LIVE** ✅

---

## 📞 Soporte Técnico

Para consultas técnicas durante el proceso de lanzamiento, contactar al desarrollador responsable de este proyecto antes de realizar cambios en producción.
