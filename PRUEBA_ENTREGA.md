# 🧪 Protocolo de Prueba de Entrega en Producción

Este documento establece el procedimiento de verificación funcional paso a paso que debe realizarse junto a la cliente una vez que el sitio esté publicado en el dominio final.

---

## 📋 Pasos del Protocolo de Verificación

1. **Acceso al Panel Administrativo**
   - La cliente ingresa a `https://tudominio.com/admin/`.
   - Se despliega la pantalla de autenticación de **Sveltia CMS**.

2. **Inicio de Sesión**
   - La cliente hace clic en **"Login with GitHub"**.
   - Autoriza el acceso mediante OAuth con su cuenta de GitHub asignada.

3. **Edición de Contenido**
   - Navega a la colección **Configuración Global** → **Configuración y SEO**.
   - Modifica un texto comercial (por ejemplo, el texto del pie de página o un titular).

4. **Guardar Cambios**
   - Hace clic en el botón **"Save" (Guardar)** en la esquina superior del editor del CMS.

5. **Registro Automático en GitHub**
   - Sveltia CMS realiza un commit automático directamente en la rama `main` del repositorio de GitHub de la cliente.

6. **Despliegue Automático en Netlify**
   - Netlify detecta el nuevo commit en GitHub e inicia un build automático del sitio estático (`npm run build`).
   - El proceso de compilación tarda aproximadamente 1 a 2 minutos.

7. **Verificación en la Página Pública**
   - La cliente abre `https://tudominio.com` en una ventana de incógnito o recarga la página.
   - Confirma que el nuevo texto editado se muestra correctamente en vivo.

8. **Cierre y Reingreso de Sesión**
   - La cliente cierra sesión en `/admin/`.
   - Vuelve a iniciar sesión para validar la persistencia de accesos y credenciales.
