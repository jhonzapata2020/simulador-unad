# APEX Performance Agency — Manual Técnico y del Propietario

## Descripción del Proyecto

Sitio web estático y autoadministrable para **APEX Performance Agency**, construido con:

| Tecnología | Uso |
|---|---|
| **Next.js 16** + App Router | Framework de React y SSG |
| **TypeScript** | Tipado estricto del código |
| **Tailwind CSS v4** | Sistema de diseño y estilos |
| **Sveltia CMS** | Panel de administración visual sin backend |
| **Netlify** | Alojamiento gratuito con CI/CD automático |
| **GitHub** | Control de versiones y backend del CMS |

El sitio se exporta **100% estático** en la carpeta `out/` — no hay servidor en ejecución, no hay base de datos y no hay gastos recurrentes obligatorios.

---

## Instalación Local (Desarrolladores)

### Requisitos previos
- Node.js v20 o superior
- npm v8 o superior

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/PENDIENTE_USUARIO/PENDIENTE_REPOSITORIO.git
cd PENDIENTE_REPOSITORIO

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# → http://localhost:3000
```

---

## Estructura de Carpetas

```
├── public/
│   ├── admin/
│   │   ├── index.html          # Interfaz de Sveltia CMS
│   │   └── config.yml          # Configuración de colecciones del CMS
│   ├── uploads/                # Imágenes subidas por el CMS (≤1.5 MB)
│   └── robots.txt
├── src/
│   ├── app/                    # Rutas de Next.js (App Router)
│   ├── components/
│   │   ├── sections/           # Secciones de la landing
│   │   └── ui/                 # Componentes reutilizables
│   ├── content/                # ← Los datos que edita el CMS
│   │   ├── site.json           # Configuración global y SEO
│   │   ├── hero.json           # Sección Hero
│   │   ├── problems.json       # Sección de Problemas
│   │   ├── method.json         # El Método Apex
│   │   ├── benefits.json       # Resultados/Beneficios
│   │   ├── resources.json      # Recursos y Plantillas
│   │   ├── audience.json       # Para quién es / no es
│   │   ├── mentorship.json     # Mentoría
│   │   ├── offer.json          # Oferta y Precio
│   │   ├── warranty.json       # Garantía
│   │   ├── modules/            # Módulos del programa (1 archivo JSON por módulo)
│   │   ├── testimonials/       # Testimonios (1 archivo JSON por testimonio)
│   │   ├── faq/                # FAQs (1 archivo JSON por pregunta)
│   │   ├── politica-de-privacidad.md
│   │   └── terminos-y-condiciones.md
│   ├── lib/content/loader.ts   # Lógica de carga de contenidos
│   └── types/index.ts          # Interfaces TypeScript
├── netlify.toml                # Configuración de Netlify
└── next.config.ts              # Configuración de Next.js (static export)
```

---

## Editar Contenido desde el Panel CMS

### Acceso local (para desarrollo/pruebas)

1. Ejecutar `npm run dev`
2. Abrir `http://localhost:3000/admin/` en Chrome o Edge
3. En Sveltia CMS hacer clic en **"Work with Local Repository"**
4. Conceder permisos de acceso a la carpeta del proyecto cuando el navegador los solicite
5. Los cambios guardados se escriben directamente en los archivos JSON/Markdown de `src/content/`

> ⚠️ Esta opción solo funciona en Chrome/Edge. No funciona en Firefox ni en Safari.

### Acceso en producción (Netlify)

Una vez el sitio esté desplegado en Netlify, la propietaria accede a:
```
https://tudominio.com/admin/
```
Y se autentica con su cuenta de **GitHub** (explicado en la siguiente sección).

---

## Configuración de GitHub OAuth para el CMS en Producción

### Paso 1: Crear la Aplicación OAuth en GitHub

1. Ir a [GitHub Settings → Developer settings → OAuth Apps](https://github.com/settings/developers)
2. Clic en **"New OAuth App"**
3. Completar el formulario:
   - **Application name**: `APEX CMS`
   - **Homepage URL**: `https://tudominio.com`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
4. Clic en **"Register application"**
5. Copiar el **Client ID** y generar un **Client Secret**

### Paso 2: Configurar en Netlify

1. Ir al panel de Netlify del sitio → **Site configuration** → **Access control** → **OAuth**
2. Clic en **"Install provider"**
3. Seleccionar **GitHub**
4. Pegar el **Client ID** y **Client Secret** obtenidos en el paso anterior
5. Guardar

### Paso 3: Actualizar `public/admin/config.yml`

Reemplazar los valores `PENDIENTE`:
```yaml
backend:
  name: github
  repo: usuario-real/nombre-repositorio
  branch: main
```

### Paso 4: Confirmar permisos del repositorio

La propietaria debe tener acceso de **escritura** (Write access) al repositorio de GitHub para poder guardar cambios desde el CMS.

---

## Compilación y Despliegue

### Compilar localmente

```bash
npm run build
# Genera la carpeta out/ con todos los archivos estáticos
```

### Servir localmente para pruebas

```bash
npx serve out
# Abre http://localhost:3000
```

### Despliegue en Netlify (automático)

Una vez conectado el repositorio de GitHub a Netlify:

| Campo | Valor |
|---|---|
| Build command | `npm run build` |
| Publish directory | `out` |
| Node version | `20` |

Cada `git push` a la rama `main` dispara un build automático en Netlify.

> **🔴 IMPORTANTE**: No conectar el dominio ni publicar en producción sin aprobación explícita del propietario.

---

## Conectar Dominio Personalizado

1. En Netlify → **Site configuration** → **Domain management** → **Add custom domain**
2. Ingresar `apexperformanceagency.digital`
3. En el registrador del dominio, cambiar los nameservers a los que indique Netlify:
   - `dns1.p02.nsone.net`
   - `dns2.p02.nsone.net`
   - `dns3.p02.nsone.net`
   - `dns4.p02.nsone.net`
4. Esperar propagación DNS (puede tardar hasta 48 horas)
5. Netlify activará SSL automáticamente vía Let's Encrypt

> ⚠️ No modificar los DNS sin confirmación de la propietaria.

---

## Activar Google Analytics y Meta Pixel

Ambas integraciones están **desactivadas por defecto** y no se ejecutan si el ID está vacío.

Para activarlas:
1. Ir al panel CMS → **Configuración Global** → **SEO y Analítica**
2. Ingresar el ID en el campo correspondiente:
   - `ID de Google Analytics` → ejemplo: `G-XXXXXXXXXX`
   - `ID de Meta Pixel` → ejemplo: `123456789012345`
3. Guardar los cambios → el sitio se recompilará automáticamente en Netlify

---

## Guía Rápida para la Propietaria

### ¿Cómo actualizar el precio?
→ CMS → **Oferta y Bonos** → Cambiar "Precio Actual" → Guardar

### ¿Cómo agregar un nuevo módulo?
→ CMS → **Módulos del Programa** → **Nuevo módulo** → Completar campos → Guardar

### ¿Cómo agregar un testimonio?
→ CMS → **Testimonios** → **Nuevo testimonio** → Completar nombre, texto, cargo → Guardar

### ¿Cómo ocultar una sección sin borrarla?
→ CMS → ir a la sección → desactivar el campo **"Mostrar Sección"** → Guardar

### ¿Cómo subir una imagen?
- Solo se aceptan archivos de hasta **1.5 MB**
- Formatos recomendados: WebP, PNG o JPG
- El CMS pedirá el archivo al hacer clic en el campo de imagen

---

## Recuperación de Accesos

| Servicio | Acceso perdido | Solución |
|---|---|---|
| GitHub | Contraseña | Usar "Forgot password" con el email de la cuenta |
| Netlify | Contraseña | Usar "Forgot password" o iniciar sesión con GitHub |
| CMS (`/admin`) | Sin acceso a GitHub | Recuperar acceso a GitHub primero |
| Dominio | Credenciales del registrador | Contactar al soporte del registrador con documento de identidad |

---

## Mantenimiento

### Actualizar dependencias (Desarrollador)
```bash
npm update
npm audit fix
npm run build  # Verificar que el build sigue funcionando
```

### Hacer un backup del contenido
El contenido está en los archivos JSON/Markdown del repositorio de GitHub. Con un simple `git pull` o descargando el repositorio como ZIP se tiene un backup completo.

---

## Comandos de Referencia

```bash
npm run dev     # Servidor de desarrollo local
npm run build   # Compilación de producción (genera out/)
npm run lint    # Validación de código
```

---

## Datos Pendientes de Completar

Ver el archivo `ENTREGA_CLIENTE.md` para la lista completa de datos y accesos pendientes.
