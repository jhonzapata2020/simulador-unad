# 📖 Manual Rápido de Administración — APEX Performance Agency

¡Bienvenida a la guía de administración de tu nuevo sitio web oficial en Netlify!

Tu sitio web y tu panel de control se encuentran alojados en las siguientes direcciones oficiales:
- **Página pública**: `https://apex-performance-agency.netlify.app/`
- **Panel administrativo**: `https://apex-performance-agency.netlify.app/admin/`

---

## 1. 🔑 Cómo ingresar al panel administrativo

1. Abre tu navegador de internet (Google Chrome o Microsoft Edge) e ingresa a:
   `https://apex-performance-agency.netlify.app/admin/`
2. Haz clic en el botón **"Login with GitHub"**.
3. Inicia sesión con tu cuenta de GitHub.
4. Una vez autenticada, accederás al panel de **Sveltia CMS** con todas las secciones editables.

---

## 2. ✍️ Cómo editar textos de la página

1. En el menú lateral izquierdo, selecciona la sección que deseas modificar (ejemplo: **Hero (Portada)**, **Oferta y Bonos**, **Mentoría**, **Preguntas Frecuentes**, etc.).
2. Haz clic sobre el campo de texto que deseas cambiar y escribe tu nuevo contenido.
3. Haz clic en el botón **Guardar** (*Save*) ubicado en la esquina superior derecha.

---

## 3. 🖼️ Cómo cambiar imágenes

1. En la sección que desees editar (ejemplo: **Logotipo**, **Testimonios** o **Mentoría**), busca el campo de imagen.
2. Haz clic en **Elegir imagen** o **Subir**.
3. Selecciona la foto desde tu computadora (formatos JPG, PNG o WebP, tamaño recomendado menor a 1.5 MB).
4. Haz clic en **Guardar**.

---

## 4. 💰 Cómo actualizar el precio y el enlace de compra

1. En el menú izquierdo, selecciona **Oferta y Bonos**.
2. Modifica los campos:
   - **Precio Actual (Oferta)**: Escribe el valor que pagará el cliente (ejemplo: `147.00`).
   - **Precio Original**: Escribe el precio regular tachado (ejemplo: `299.00`).
   - **Enlace de Compra (Checkout)**: Pega la URL directa de tu pasarela de pago (Stripe, Hotmart, Wompi, etc.).
3. Haz clic en **Guardar**.

---

## 5. 📚 Cómo agregar o modificar módulos del programa

1. En el menú izquierdo, selecciona **Módulos del Programa**.
2. Para editar un módulo existente, haz clic sobre su nombre, modifica el título o las lecciones y guarda los cambios.
3. Para agregar un nuevo módulo, haz clic en **Nuevo Módulo** (*New Módulo*), completa el título y lecciones, y guarda los cambios.

---

## 6. 💬 Cómo publicar o despublicar testimonios

1. En el menú izquierdo, selecciona **Testimonios**.
2. Haz clic en el testimonio que deseas administrar.
3. Activa o desactiva la casilla **Publicado**:
   - **Activado (true)**: El testimonio se mostrará de inmediato en la página pública.
   - **Desactivado (false)**: El testimonio quedará guardado pero invisible para los visitantes.
4. Haz clic en **Guardar**.

---

## 7. ⏱️ Cuánto tardan en publicarse tus cambios

1. Cada vez que haces clic en **Guardar**, Sveltia CMS registra automáticamente el cambio en tu repositorio.
2. Netlify detecta el cambio e inicia una compilación automática del sitio.
3. **Tu página web pública se actualizará automáticamente en 1 a 2 minutos**.

---

## ⚠️ Recomendaciones importantes: Lo que NO debes modificar

Para mantener la estabilidad de tu sitio web, evita cambiar:
- Los identificadores técnicos internos (`id` o `name`).
- Los archivos en la carpeta de configuración del sistema (`config.yml`).
- Los archivos fuente de código de la aplicación.
