# 📚 Clase 4: Introducción a HTML y CSS

## 🎯 Objetivos de la Clase

Al finalizar esta clase, serás capaz de:

- ✅ Comprender la estructura básica de un documento HTML
- ✅ Utilizar las etiquetas HTML más comunes para estructurar contenido
- ✅ Aplicar selectores CSS para estilizar elementos
- ✅ Implementar propiedades CSS esenciales para el diseño
- ✅ Crear interfaces básicas combinando HTML y CSS

---

## 📋 Contenido de la Clase

### 1. Fundamentos de HTML

#### 🔍 Anatomía de un Tag HTML

Antes de profundizar en las etiquetas, es importante entender la estructura de un tag HTML:

```html
<a href="https://escuelanew.com">Visita mi Web</a>
```

**Componentes de un tag HTML:**

- 🏷️ **Elemento**: La etiqueta completa (`<a>...</a>`)
- 🚀 **Etiqueta de Apertura**: `<a href="https://escuelanew.com">`
  - **Nombre del Atributo**: `href`
  - **Valor del Atributo**: `"https://escuelanew.com"`
- 📝 **Contenido**: `Visita mi Web` (texto visible)
- 🔚 **Etiqueta de Cierre**: `</a>`

**Tipos de etiquetas:**
- **Etiquetas con contenido**: `<p>Texto</p>`, `<h1>Título</h1>`
- **Etiquetas auto-cerradas**: `<img src="imagen.jpg" />`, `<br />`, `<hr />`

#### 📋 Atributos Comunes

| Atributo | Descripción | Ejemplo |
|----------|-------------|---------|
| `id` | Identificador único | `<div id="contenedor">` |
| `class` | Clase CSS para estilos | `<p class="destacado">` |
| `style` | Estilos CSS inline | `<span style="color: red;">` |
| `title` | Tooltip informativo | `<img title="Descripción">` |

- **Estructura básica de un documento HTML**
  - DOCTYPE, html, head, body
  - Meta etiquetas esenciales
  - Charset y viewport

- **Etiquetas HTML principales**
  - Encabezados: `h1`, `h2`, `h3`, etc.
  - Párrafos y texto: `p`, `span`, `strong`, `em`
  - Listas: `ul`, `ol`, `li`
  - Enlaces: `a`
  - Imágenes: `img`
  - Contenedores: `div`, `section`, `article`, `header`, `footer`

### 2. Fundamentos de CSS
- **Sintaxis básica de CSS**
  - Reglas, selectores, propiedades y valores
  - Comentarios en CSS

- **Tipos de selectores**
  - Selectores de elemento
  - Selectores de clase (`.clase`)
  - Selectores de ID (`#id`)
  - Selectores descendientes

- **Propiedades CSS esenciales**
  - Colores: `color`, `background-color`
  - Tipografía: `font-family`, `font-size`, `font-weight`
  - Espaciado: `margin`, `padding`
  - Dimensiones: `width`, `height`
  - Bordes: `border`

### 3. Integración HTML + CSS
- **Formas de incluir CSS**
  - CSS inline
  - CSS interno (`<style>`)
  - CSS externo (`<link>`)
  - Mejores prácticas

- **Creación de interfaces básicas**
  - Estructura semántica
  - Aplicación de estilos
  - Organización del código

---

## 💻 Ejercicios Prácticos

### Ejercicio 1: Estructura HTML Básica
Crear un documento HTML con:
- Encabezado principal
- Párrafos de contenido
- Lista de elementos
- Enlaces

### Ejercicio 2: Aplicación de Estilos CSS
Estilizar el documento anterior con:
- Colores personalizados
- Tipografía diferenciada
- Espaciado apropiado
- Bordes y efectos visuales

### Ejercicio 3: Página Web Completa
Desarrollar una página web básica que integre:
- HTML semántico
- CSS externo
- Diseño coherente y atractivo

---

## 🛠 Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **HTML5** | Estándar | Estructura de contenido |
| **CSS3** | Estándar | Presentación y diseño |

---

## 📁 Estructura de Archivos

```
clase-4/
├── readme.md           # Este archivo
├── ejercicios/         # Ejercicios prácticos
│   ├── index.html     # Página principal de ejercicios
│   ├── script.js      # Scripts JavaScript (si necesario)
│   └── styles.css     # Estilos CSS
└── ejemplos/          # Ejemplos demostrativos
    ├── basico.html    # Ejemplo HTML básico
    └── estilos.css    # Ejemplo CSS básico
```

---

## 🔗 Recursos Adicionales

### Documentación Oficial
- [MDN Web Docs - HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/es/docs/Web/CSS)

### Herramientas Útiles
- [HTML Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [Can I Use](https://caniuse.com/) - Compatibilidad de navegadores

### Práctica Online
- [Codepen](https://codepen.io/) - Editor online
- [JSFiddle](https://jsfiddle.net/) - Playground web

---

## 📝 Notas Importantes

> **💡 Tip:** La semántica en HTML es crucial. Utiliza las etiquetas apropiadas para cada tipo de contenido, no solo por su apariencia visual.

> **⚠️ Recordatorio:** Siempre incluye el atributo `alt` en las imágenes para mejorar la accesibilidad.

> **🎨 Buena práctica:** Separa siempre la estructura (HTML) de la presentación (CSS) para mantener un código limpio y mantenible.

---

## 🏆 Evaluación

Al completar esta clase, deberías poder:

1. **Crear documentos HTML válidos** con estructura semántica
2. **Aplicar estilos CSS** de forma efectiva y organizada
3. **Integrar HTML y CSS** para crear interfaces atractivas
4. **Seguir mejores prácticas** de desarrollo web

---

## 🚀 Preparación para la Siguiente Clase

En la **Clase 5** abordaremos:
- Manipulación del DOM con JavaScript
- Eventos y interactividad
- Conexión entre JavaScript y HTML/CSS

¡Asegúrate de practicar los conceptos de esta clase antes de continuar!

---

**Formador:** Steven Zuluaga Cortés  
**Módulo:** JavaScript Junior Developer - Web Foundations & Coding Skills  
**Academia:** DevSeniorCode