# 🎨 Clase 6: CSS Avanzado - Flexbox, Grid, JSON y APIs

## 📚 Objetivos de la Clase

- Dominar **CSS Flexbox** para layouts flexibles y responsivos
- Aprender **CSS Grid** para layouts complejos y bidimensionales
- Crear diseños modernos y adaptativos
- Combinar Flexbox y Grid para soluciones óptimas
- Desarrollar interfaces profesionales y responsivas
- Comprender **JSON** como formato de datos
- Consumir **APIs** y trabajar con datos externos
- Integrar layouts responsivos con datos dinámicos

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

## 📊 JSON: Formato de Datos Estructurado

### ¿Qué es JSON?

**JSON** (JavaScript Object Notation) es un formato ligero para intercambiar datos. Es el estándar en las APIs modernas.

#### Estructura Básica
```json
{
  "nombre": "Juan",
  "edad": 25,
  "activo": true,
  "habilidades": ["JavaScript", "CSS", "HTML"],
  "usuario": {
    "id": 1,
    "email": "juan@example.com"
  }
}
```

#### Tipos de Datos en JSON
- **String**: `"hola"` (siempre entre comillas dobles)
- **Number**: `42`, `3.14`
- **Boolean**: `true`, `false`
- **Array**: `[1, 2, 3]`
- **Object**: `{ "clave": "valor" }`
- **Null**: `null`

#### Validar JSON
```javascript
// Convertir JSON string a objeto
const datos = JSON.parse(jsonString);

// Convertir objeto a JSON string
const jsonString = JSON.stringify(objeto);

// Con espacios para legibilidad
const jsonPretty = JSON.stringify(objeto, null, 2);
```

### Ejemplo Práctico
```javascript
// JSON de una API
const respuestaJSON = `
{
  "personajes": [
    {
      "id": 1,
      "nombre": "Rick Sanchez",
      "especie": "Humano",
      "estado": "Vivo",
      "imagen": "https://..."
    },
    {
      "id": 2,
      "nombre": "Morty Smith",
      "especie": "Humano",
      "estado": "Vivo",
      "imagen": "https://..."
    }
  ]
`;

// Parsear y usar
const datos = JSON.parse(respuestaJSON);
console.log(datos.personajes[0].nombre); // Rick Sanchez
```

---

## 🌐 APIs: Consumiendo Datos Externos

### ¿Qué es una API?

Una **API** (Application Programming Interface) es un conjunto de reglas que permite a diferentes aplicaciones comunicarse. Las APIs REST usan HTTP para obtener datos.

### Fetch API: Obtener Datos

#### Fetch Básico
```javascript
// Obtener datos de una API
fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json()) // Convertir response a JSON
  .then(data => console.log(data))   // Usar los datos
  .catch(error => console.error(error)); // Manejar errores
```

#### Con Async/Await
```javascript
async function obtenerPersonajes() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

obtenerPersonajes();
```

#### Con Parámetros
```javascript
// API con filtros
const id = 1;
fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

#### Manejo Completo de Errores
```javascript
async function fetchConErrores() {
  try {
    // Mostrar loading
    console.log('Cargando...');
    
    const response = await fetch('https://api.example.com/datos');
    
    // Verificar si la respuesta es OK (status 200-299)
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('Datos recibidos:', data);
    return data;
    
  } catch (error) {
    console.error('Error en la búsqueda:', error.message);
    // Mostrar mensaje al usuario
  }
}
```

### APIs Recomendadas para Practicar

| API | URL Base | Descripción |
| :--- | :--- | :--- |
| **Rick and Morty** | `https://rickandmortyapi.com/api` | Personajes de la serie |
| **PokeAPI** | `https://pokeapi.co/api/v2` | Datos de Pokémon |
| **API Colombia** | `https://api-colombia.com` | Datos de Colombia |
| **JSONPlaceholder** | `https://jsonplaceholder.typicode.com` | Datos de prueba |

### Estructura Típica de Respuesta API
```javascript
{
  "info": {
    "count": 826,
    "pages": 42,
    "next": "https://rickandmortyapi.com/api/character?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "image": "https://..."
    }
  ]
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

## ✅ Checklist de Conceptos

### CSS Flexbox y Grid
- [ ] Entiendo los conceptos de eje principal y cruzado en Flexbox
- [ ] Puedo usar todas las propiedades de Flexbox correctamente
- [ ] Comprendo el sistema de líneas y áreas en CSS Grid
- [ ] Sé cuándo usar Flexbox vs Grid
- [ ] Puedo crear layouts completamente responsivos
- [ ] Entiendo y aplico el enfoque Mobile First
- [ ] Conozco las mejores prácticas de CSS moderno

### JSON y APIs
- [ ] Comprendo la estructura y sintaxis de JSON
- [ ] Puedo parsear JSON con JSON.parse()
- [ ] Entiendo cómo funcionan las APIs REST
- [ ] Puedo usar Fetch API correctamente
- [ ] Implemento manejo de errores con try-catch
- [ ] Sé cómo procesar respuestas de APIs
- [ ] Puedo renderizar datos dinámicos en el DOM
- [ ] Entiendo Promises y Async/Await

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

## 📝 Resumen de Conceptos Clave

### CSS Flexbox
✅ Layout unidimensional (fila o columna)  
✅ Perfecto para componentes  
✅ Fácil alineación y distribución  
✅ Responsive por defecto

### CSS Grid
✅ Layout bidimensional (filas y columnas)  
✅ Ideal para layouts complejos  
✅ Control fino sobre posicionamiento  
✅ Excelente para pages

### JSON
✅ Formato ligero de intercambio de datos  
✅ Fácil de parsear en JavaScript  
✅ Estándar en todas las APIs modernas  
✅ Tipos: strings, numbers, booleans, arrays, objects, null

### APIs
✅ Permiten obtener datos externos  
✅ Fetch API es el estándar moderno  
✅ Require manejo de errores  
✅ Async/Await hace código más limpio

---

> **Próxima clase**: Introducción a TypeScript - Tipado estático para JavaScript