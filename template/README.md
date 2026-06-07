# Plantilla de Portafolio Académico y Científico

Esta es una plantilla de sitio web personal y académico diseñada específicamente para investigadores, profesores, doctorandos y científicos. Ha sido construida con **React, Vite y Vanilla CSS** para lograr una experiencia moderna, responsiva y de alto rendimiento.

---

## 🛠️ Tecnologías Utilizadas

* **React 19**
* **Vite 8** (Compilación y desarrollo rápidos)
* **Vanilla CSS** (Estilos optimizados y variables CSS)
* **Lucide React** (Iconos modernos y vectoriales)

---

## 🚀 Inicio Rápido

### 1. Requisitos Previos
Asegúrate de tener instalado **Node.js** (versión 18 o superior).

### 2. Instalar Dependencias
Clona o descarga esta carpeta y ejecuta:
```bash
npm install
```

### 3. Ejecutar Servidor de Desarrollo
Para ver el sitio ejecutándose en tu máquina local con recarga en vivo (hot reload):
```bash
npm run dev
```
Abre en tu navegador la dirección indicada en la terminal (usualmente `http://localhost:5173`).

### 4. Compilar para Producción
Para empaquetar el sitio y prepararlo para subir a tu servidor web, GitHub Pages o GitLab Pages:
```bash
npm run build
```
Los archivos de distribución se generarán en la carpeta `dist`.

---

## ✍️ Cómo Personalizar la Plantilla

Toda la información del sitio está estructurada para que sea fácil de personalizar sin necesidad de tocar la lógica interna de React.

### 1. Datos Personales, Biografía y CV
Edita los archivos de idiomas ubicados en `src/locales/`:
* `es.js` (Español)
* `en.js` (Inglés)
* `fr.js` (Francés)

En estos archivos podrás modificar variables como:
* Tu nombre y cargo.
* Tus textos biográficos.
* Tu historial de educación, docencia y experiencia profesional (Timeline).
* Las herramientas o tecnologías que utilizas.

### 2. Foto de Perfil
Reemplaza la imagen por defecto en `public/images/profile.jpg` con tu propia fotografía (se recomienda formato cuadrado u optimizado para recortar en círculo).

### 3. Cargar Publicaciones Automáticamente
La plantilla cuenta con un script automatizado para descargar tus publicaciones directamente desde repositorios académicos abiertos (como HAL) usando tu identificador.
* Edita el script `scripts/fetch-publications.js` y reemplaza el ID de autor por tu identificador de HAL.
* Ejecuta:
  ```bash
  node scripts/fetch-publications.js
  ```
  Esto actualizará el archivo `src/data/publications.json` de forma automática.

---

## ⚖️ Licencia y Uso de Marcas

El código de esta plantilla está licenciado bajo la licencia **WTFPL (Do What The Fuck You Want To Public License)**. Puedes copiar, modificar, distribuir comercialmente y renombrar este código sin restricciones.

> [!WARNING]
> **Aviso de Marcas Registradas:** Los logotipos incluidos en `public/logos/` (Sorbonne Nouvelle, HAL, Zenodo, GitHub, GitLab, etc.) son propiedad exclusiva y marcas comerciales de sus respectivas instituciones. La licencia WTFPL solo se aplica a la estructura y estilos del código fuente de la plantilla, no al uso libre o indebido de logotipos e identidades corporativas de terceros. Sustituye o documenta los logotipos de acuerdo a tus afiliaciones institucionales correspondientes.
