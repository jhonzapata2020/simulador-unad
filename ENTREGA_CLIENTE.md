# 📖 Manual de Administración para la Propietaria

¡Bienvenida a la guía de administración de tu nuevo sitio web para **APEX Performance Agency**!

Este sitio web fue diseñado para que puedas mantenerlo y actualizarlo tú misma sin necesidad de saber programación y sin pagar mensualidades de plataforma.

---

## 1. 🔑 Cómo entrar al panel administrativo

1. Abre tu navegador de internet e ingresa a:
   `https://tudominio.com/admin/`
2. Haz clic en el botón **"Login with GitHub"**.
3. Inicia sesión con tu cuenta de GitHub.
4. ¡Listo! Verás el panel visual con todas las secciones de tu página web.

---

## 2. ✍️ Cómo cambiar textos de la página

1. En el menú de la izquierda del panel, selecciona la sección que deseas editar (por ejemplo: **Hero (Portada)**, **Oferta y Bonos**, **Mentoría**, etc.).
2. Haz clic sobre el texto que quieres modificar y escribe el nuevo contenido.
3. Al finalizar, haz clic en el botón **Guardar** (o *Save*) en la parte superior derecha.

---

## 3. 🖼️ Cómo cambiar imágenes

1. En la sección correspondiente (por ejemplo: **Logotipo**, **Testimonios** o **Mentoría**), busca el campo de imagen.
2. Haz clic en **Elegir imagen** o **Subir**.
3. Selecciona la foto desde tu computadora.
   - *Nota importante:* Procura utilizar imágenes de buena calidad en formato JPG, PNG o WebP, con un tamaño menor a 1.5 MB para mantener la página rápida.

---

## 4. 💰 Cómo modificar el precio y la oferta

1. Entra a la colección **Oferta y Bonos**.
2. Modifica los campos:
   - **Precio Actual (Oferta)**: El precio que pagará el cliente (ej: `147.00`).
   - **Precio Original**: El precio regular tachado (ej: `299.00`).
   - **Enlace de Compra (Checkout)**: Pega la URL directa de tu pasarela de pago (Stripe, Hotmart, Wompi, etc.).
3. Haz clic en **Guardar**.

---

## 5. 📚 Cómo editar o agregar módulos del curso

1. Entra a la colección **Módulos del Programa**.
2. Para editar un módulo existente, haz clic sobre su nombre y cambia el título, descripción o lecciones.
3. Para agregar un nuevo módulo, haz clic en el botón **Nuevo Módulo** (*New Módulo*), completa el título y orden, y guarda los cambios.

---

## 6. 💬 Cómo publicar o despublicar testimonios

1. Entra a la colección **Testimonios**.
2. Haz clic en el testimonio que deseas gestionar.
3. Activa o desactiva la casilla **Publicado**:
   - **Activado (true)**: El testimonio se mostrará públicamente en la página web.
   - **Desactivado (false)**: El testimonio quedará oculto sin borrar la información.
4. Haz clic en **Guardar**.

---

## 7. 💾 Cómo guardar cambios y cuánto tarda en actualizarse

1. Cada vez que realices una edición, haz clic en el botón **Guardar** (*Save*) en la esquina superior del editor.
2. Una vez guardado, el sistema enviará los cambios de forma automática a tu alojamiento en Netlify.
3. **Tiempo de actualización:** La página web pública se actualizará automáticamente en **1 a 2 minutos**.

---

## ⚠️ Lo que NO debes modificar

Para evitar interrupciones en el funcionamiento del sitio web, por favor **NO edites ni borres**:
- Los nombres técnicos de las secciones o campos identificadores (como `id` o `name`).
- Los archivos en la carpeta de configuración del sistema (`config.yml`).
- Los archivos de estructura de código fuente (`next.config.ts`, `netlify.toml`, `package.json`).
- Si en algún momento necesitas un cambio estructural o de diseño avanzado, consulta con tu desarrollador.
