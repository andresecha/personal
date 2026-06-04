# Sitio Personal y Académico — Andrés Felipe Echavarría Peláez

Este repositorio alberga el código fuente de mi sitio web personal y académico. Está diseñado para ser moderno, de alto impacto visual y fácil de mantener mediante la automatización de la recopilación de datos académicos.

**URL de producción:** `https://cachetown.fr` (o `https://www.cachetown.fr`)

---

## ✨ Características Principales

*   **Sincronización Automatizada (HAL Open Science):** Un script en Node.js descarga mis publicaciones científicas más recientes utilizando la API de HAL (idHAL: `andres-echavarria`), eliminando la necesidad de actualizar la sección de publicaciones manualmente.
*   **Mini Exposición Artística:** Galería interactiva (*lightbox*) para mis trabajos de diseño gráfico e ilustración, alojando los archivos directamente en el repositorio (superando la limitación de almacenamiento de 100 MB en OVH).
*   **Secciones Modulares:**
    *   **Sobre Mí:** Perfil profesional, filiación institucional (CNRS / Huma-Num) y enlaces a redes de investigación.
    *   **Diseño & Arte:** Muestra visual e interactiva de trabajos artísticos y cartografía lingüística.
    *   **Publicaciones:** Buscador y filtrado por categoría (tesis, artículos, conferencias, informes) en tiempo real.
    *   **Herramientas:** Enlaces a mis repositorios de código abierto, esquemas XML-TEI y modelos HTR.
    *   **CV:** Línea de tiempo académica y laboral interactiva.
*   **Modo Oscuro/Claro:** Selector visual para adaptar la estética del sitio según las preferencias del usuario.

---

## 🛠️ Tecnologías Utilizadas

*   **Core:** [React 19](https://react.dev/) + [Vite](https://vite.dev/) (para una compilación ultra-rápida y desarrollo interactivo).
*   **Iconos:** [Lucide React](https://lucide.dev/).
*   **Estilos:** CSS Vainilla personalizado (diseño responsivo, sombras suaves, efectos *glassmorphism* y gradientes).
*   **Despliegue y Automatización:** [GitHub Actions](https://github.com/features/actions).

---

## 💻 Desarrollo Local

Para ejecutar e interactuar con el sitio en tu ordenador:

### 1. Clonar el repositorio e instalar dependencias
```bash
cd personal
npm install
```

### 2. Descargar las últimas publicaciones científicas
Este comando realiza una consulta a la API de HAL y genera un archivo de datos local en `src/data/publications.json`:
```bash
node scripts/fetch-publications.js
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la web.

### 4. Compilar para producción
Genera el sitio estático compilado y optimizado en la carpeta `dist/`:
```bash
npm run build
```

---

## 🚀 Despliegue Automatizado con GitHub Actions

El despliegue está configurado en [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

### Flujo del Pipeline
Cada vez que subes cambios a la rama principal (`main` o `master`), GitHub Actions ejecuta:
1. Instalación limpia de dependencias (`npm ci`).
2. Sincronización automática de publicaciones de HAL (`node scripts/fetch-publications.js`).
3. Compilación del sitio web (`npm run build`).
4. Publicación automática de la carpeta `dist` en GitHub Pages.

> [!TIP]
> **Sincronización Semanal:** El workflow incluye un desencadenador cron (`schedule`) configurado para ejecutarse automáticamente todos los **lunes a las 00:00 UTC**. Esto significa que si depositas una nueva publicación en HAL, aparecerá en tu sitio web en un plazo máximo de una semana sin que tengas que hacer nada.

---

## 🌐 Configuración del Dominio Personal (OVH) con GitHub Pages

Para conectar tu dominio registrado en OVH con GitHub Pages:

### 1. Configurar en GitHub
1. Entra a tu repositorio en GitHub y ve a **Settings > Pages**.
2. En la sección **Build and deployment**, asegúrate de que la fuente esté configurada en `GitHub Actions`.
3. En la sección **Custom domain**, introduce tu dominio (`cachetown.fr` o `www.cachetown.fr`) y haz clic en **Save**.
4. GitHub creará automáticamente un archivo `CNAME` de confirmación en la rama de despliegue y te mostrará el estado de la verificación DNS.

### 2. Configurar la Zona DNS en OVH
Inicia sesión en OVH, selecciona tu dominio `cachetown.fr`, haz clic en la pestaña **Zona DNS** y configura los registros necesarios:

*   **Para el dominio raíz (`cachetown.fr`):** Crea registros de tipo **A** apuntando a las direcciones IP de GitHub Pages:
    *   `185.199.108.153`
    *   `185.199.109.153`
    *   `185.199.110.153`
    *   `185.199.111.153`
*   **Para el subdominio `www` (`www.cachetown.fr` - Recomendado):** Crea o edita el registro de tipo **CNAME** para que apunte a `[tu-usuario-de-github].github.io.`.

### 3. Habilitar HTTPS
Una vez que el dominio esté verificado por GitHub (puede tomar de 15 minutos a unas horas por la propagación de DNS), activa la casilla **Enforce HTTPS** en la configuración de GitHub Pages para habilitar el cifrado seguro (SSL/TLS).
