# Guía de Ajuste y Especificación: Paleta de Colores
*Documento de consulta obligatoria para el diseño y desarrollo del sitio personal.*

Esta guía establece el sistema de diseño cromático para el sitio personal de **Andrés Felipe Echavarría Peláez**, basado en una gama natural y sofisticada de tonos oliva, musgo y tierra. Cada color tiene asignado un nombre representativo, un rol semántico específico y reglas estrictas de contraste para garantizar la legibilidad y la armonía visual.

---

## 1. Tabla de Colores y Asignaciones Semánticas

| Color Hex | Nombre Técnico | Rol en el Sistema de Diseño | Legibilidad del Texto Superior |
| :--- | :--- | :--- | :--- |
| **`#272915`** | **Sombra del Bosque (Forest Shadow)** | Color principal de textos (letras principales). Fondos ultra-oscuros. | Texto claro (`#f5f7ef` o blanco). |
| **`#5D6532`** | **Musgo Oliva (Olive Moss)** | Títulos principales (`h1`, `h2`, `h3`) y acentos de tipografía destacados. | Texto claro o fondo claro. |
| **`#f5f7ef`** | **Crema de Musgo (Moss Cream)** | Fondo general de la página. Reemplaza el gris claro actual. Fondo de tarjetas claras. | Letras oscuras (`#272915`). |
| **`#d2dcb3`** | **Verde Sage (Sage Green)** | Fondo de tarjetas medias y estados activos secundarios (ej. pestañas inactivas hover). | Letras oscuras (`#272915`). |
| **`#b6c687`** | **Hoja Seca Clara (Pale Leaf)** | Bordes decorativos, sombreados, etiquetas secundarias. | Letras oscuras (`#272915`). |
| **`#a0b362`** | **Brote de Trigo (Wheat Sprout)** | Acentos de efectos, gradientes secundarios y hovers suaves. | Letras oscuras (`#272915`). |
| **`#8b9d4d`** | **Musgo Seco (Dry Moss)** | Fondos de etiquetas activas y efectos de desvanecido de acento medio. | Letras blancas o Crema (`#f5f7ef`). |
| **`#75823d`** | **Oliva Medio (Medium Olive)** | Botones primarios en hover, bordes destacados. | Letras blancas o Crema (`#f5f7ef`). |
| **`#50552e`** | **Corteza de Árbol (Tree Bark)** | Botones principales en estado activo, acentos oscuros. | Letras blancas o Crema (`#f5f7ef`). |
| **`#474a2b`** | **Tierra Húmeda (Damp Soil)** | Encabezados de tarjetas, pie de página (footer) o fondos de destaque oscuro. | Letras blancas o Crema (`#f5f7ef`). |

---

## 2. Reglas de Contraste y Skill Visual

Para mantener un estándar de diseño premium, las combinaciones de fondo y texto deben seguir estas directrices:

### A. Grupo de Fondos Claros y Medios
Para los siguientes colores de fondo, el texto superpuesto **debe ser obligatoriamente `#272915`** (Forest Shadow) para asegurar un excelente contraste (WCAG AA):
*   `#f5f7ef` (Crema de Musgo)
*   `#d2dcb3` (Verde Sage)
*   `#b6c687` (Hoja Seca Clara)
*   `#a0b362` (Brote de Trigo)

*Ejemplo de uso:* Tarjetas de publicaciones o herramientas con fondo `#f5f7ef` y textos descriptivos en `#272915`.

### B. Grupo de Fondos Oscuros y de Efecto
Para los siguientes colores de fondo (usados en botones, banners o degradados), el texto superpuesto **debe ser blanco (`#ffffff`) o el verde crema más claro (`#f5f7ef`)**:
*   `#8b9d4d` (Musgo Seco)
*   `#75823d` (Oliva Medio)
*   `#50552e` (Corteza de Árbol)
*   `#474a2b` (Tierra Húmeda)
*   `#272915` (Sombra del Bosque)

*Ejemplo de uso:* Botones primarios con fondo `#50552e` y texto en `#f5f7ef` que al hacer hover cambian a fondo `#75823d`.

---

## 3. Implementación en Variables CSS (`index.css`)

El mapeo de estas variables en la hoja de estilos se configura de la siguiente manera:

```css
:root {
  --bg-main: #f5f7ef;       /* Crema de Musgo como fondo principal */
  --bg-card: #f5f7ef;       /* Crema de Musgo para tarjetas claras */
  --bg-card-medium: #d2dcb3;/* Verde Sage para tarjetas medianas y elementos activos */
  --border-color: #b6c687;  /* Hoja Seca Clara para bordes limpios */
  --text-primary: #272915;  /* Sombra del Bosque para todo el cuerpo de texto */
  --text-title: #5D6532;    /* Musgo Oliva para títulos h1, h2, h3 */
  --accent: #75823d;        /* Oliva Medio como acento general */
  --accent-dark: #50552e;   /* Corteza de Árbol para hovers/activos oscuros */
  --accent-glow: rgba(160, 179, 98, 0.15); /* Brote de Trigo con opacidad */
}
```

Este esquema de color brinda un aspecto orgánico, minimalista y de altísima gama, perfecto para portafolios académicos y de humanidades digitales.
