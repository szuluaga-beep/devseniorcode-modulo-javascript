# 🎨 Clase 6: Maquetación Avanzada con CSS

## 📚 Objetivos de la Clase

- Dominar **CSS Flexbox** para layouts flexibles y responsivos
- Aprender **CSS Grid** para layouts complejos y bidimensionales
- Crear diseños modernos y adaptativos
- Combinar Flexbox y Grid para soluciones óptimas
- Desarrollar interfaces profesionales y responsivas

---

## 🧠 Conceptos Clave

### CSS Flexbox: Layout Unidimensional

**Flexbox** es ideal para organizar elementos en una sola dimensión (fila o columna).

#### Contenedor Flex (Parent)
```css
.flex-container {
    display: flex;
    
    /* Dirección principal */
    flex-direction: row | row-reverse | column | column-reverse;
    
    /* Envoltura de elementos */
    flex-wrap: nowrap | wrap | wrap-reverse;
    
    /* Alineación en eje principal */
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
    
    /* Alineación en eje cruzado */
    align-items: stretch | flex-start | flex-end | center | baseline;
    
    /* Alineación de múltiples líneas */
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
    
    /* Espacio entre elementos */
    gap: 1rem;
}
```

#### Elementos Flex (Children)
```css
.flex-item {
    /* Crecimiento */
    flex-grow: 1;
    
    /* Encogimiento */
    flex-shrink: 1;
    
    /* Base */
    flex-basis: auto;
    
    /* Shorthand */
    flex: 1 1 auto;
    
    /* Alineación individual */
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
    
    /* Orden */
    order: 0;
}
```

### CSS Grid: Layout Bidimensional

**CSS Grid** es perfecto para layouts complejos que requieren control sobre filas y columnas.

#### Contenedor Grid (Parent)
```css
.grid-container {
    display: grid;
    
    /* Definir columnas */
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-columns: repeat(3, 1fr);
    grid-template-columns: 200px auto 100px;
    
    /* Definir filas */
    grid-template-rows: 100px auto 50px;
    
    /* Áreas de template */
    grid-template-areas: 
        "header header header"
        "sidebar main main"
        "footer footer footer";
    
    /* Espaciado */
    gap: 1rem;
    grid-gap: 1rem 2rem; /* fila columna */
    
    /* Alineación */
    justify-items: start | end | center | stretch;
    align-items: start | end | center | stretch;
    justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
    align-content: start | end | center | stretch | space-around | space-between | space-evenly;
}
```

#### Elementos Grid (Children)
```css
.grid-item {
    /* Posicionamiento por líneas */
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    
    /* Shorthand */
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    grid-area: 1 / 1 / 2 / 3;
    
    /* Uso de áreas nombradas */
    grid-area: header;
    
    /* Alineación individual */
    justify-self: start | end | center | stretch;
    align-self: start | end | center | stretch;
}
```

---

## 🏗️ Patrones de Layout Comunes

### 1. Layout de Página Típica
```css
.page-layout {
    display: grid;
    grid-template-areas: 
        "header header"
        "sidebar main"
        "footer footer";
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

### 2. Cards con Flexbox
```css
.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.card {
    flex: 1 1 300px; /* grow shrink basis */
    min-width: 0; /* Previene overflow */
}
```

### 3. Grid Responsivo
```css
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}
```

### 4. Centrado Perfecto
```css
.center-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.center-grid {
    display: grid;
    place-items: center;
    min-height: 100vh;
}
```

---

## 📱 Responsive Design

### Mobile First Approach
```css
/* Móvil por defecto */
.container {
    display: flex;
    flex-direction: column;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        flex-direction: row;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}
```

### Breakpoints Comunes
```css
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}
```

---

## 💻 Ejercicios Prácticos

### Ejercicio 1: Layout de Blog
Crear un layout de blog con header, sidebar, contenido principal y footer.

### Ejercicio 2: Galería de Fotos Responsiva
Implementar una galería que se adapte a diferentes tamaños de pantalla.

### Ejercicio 3: Dashboard con Grid
Crear un dashboard con widgets organizados en un grid complejo.

### Ejercicio 4: Navbar Responsiva
Desarrollar una barra de navegación que se adapte a móvil y desktop.

### Ejercicio 5: Card Layout
Crear un sistema de cards flexibles y responsivas.

---

## 🎯 Proyecto de Clase: Landing Page Moderna

Desarrollaremos una landing page completa que combine:

- Grid para el layout general
- Flexbox para componentes internos
- Diseño completamente responsivo
- Animaciones y transiciones
- Mejores prácticas de CSS moderno

---

## 🔧 Herramientas y Recursos

### Firefox DevTools Grid Inspector
- Visualización de grid lines
- Debugging de áreas de grid

### Chrome DevTools Flexbox Inspector
- Visualización de flex containers
- Debugging de alineación

### Generadores Útiles
- [CSS Grid Generator](https://cssgrid-generator.netlify.app/)
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [Grid Garden](https://cssgridgarden.com/)

---

## 📖 Recursos Adicionales

- [MDN - CSS Flexbox](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [MDN - CSS Grid](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

---

## 🏠 Tareas para Casa

1. **Recrear Layouts Famosos**: Implementar el layout de sitios conocidos (Twitter, GitHub, etc.)

2. **Galería Artística**: Crear una galería con diferentes tamaños de imágenes usando CSS Grid.

3. **Dashboard Personal**: Desarrollar un dashboard personal con widgets informativos.

4. **Portfolio Responsivo**: Crear un portfolio personal completamente responsivo.

---

## ✅ Checklist de Conceptos

- [ ] Entiendo los conceptos de eje principal y cruzado en Flexbox
- [ ] Puedo usar todas las propiedades de Flexbox correctamente
- [ ] Comprendo el sistema de líneas y áreas en CSS Grid
- [ ] Sé cuándo usar Flexbox vs Grid
- [ ] Puedo crear layouts completamente responsivos
- [ ] Entiendo y aplico el enfoque Mobile First
- [ ] Conozco las mejores prácticas de CSS moderno

---

## 🎨 Trucos y Tips Avanzados

### 1. Sticky Footer con Grid
```css
.page {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}
```

### 2. Aspect Ratio con Grid
```css
.square-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.square-item {
    aspect-ratio: 1;
}
```

### 3. Overflow Horizontal con Flexbox
```css
.horizontal-scroll {
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    padding: 1rem;
}

.scroll-item {
    flex: 0 0 250px;
}
```

---

> **Próxima clase**: Introducción a TypeScript - Tipado estático para JavaScript