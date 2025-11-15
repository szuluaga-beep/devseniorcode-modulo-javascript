# 🎯 Clase 5: Interactividad con el DOM

## � Cronograma de Actividades

| Fase | Descripción | Objetivo |
|------|-------------|----------|
| **Fase 1** | Actualización del Portafolio | Implementar Dark Mode y Light Mode en el portafolio existente |
| **Fase 2** | Conceptos de DOM | Aprender los conceptos fundamentales de manipulación del DOM |
| **Fase 3** | Ejercicios Prácticos | Implementar 4 ejercicios interactivos: cambio de color, toggle, texto dinámico y contador |
| **Fase 4** | Proyecto Integrador Módulo 1 | Proyecto: aplicación web interactiva integrando todos los conceptos del módulo |

---

## �📚 Objetivos de la Clase

- Comprender qué es el DOM (Document Object Model)
- Aprender a seleccionar elementos HTML con JavaScript
- Modificar contenido y atributos de elementos
- Gestionar eventos del usuario
- Crear páginas web interactivas y dinámicas
- Implementar temas oscuro y claro en aplicaciones web

---
## 🧠 Conceptos Clave

### ¿Qué es el DOM?

El **DOM (Document Object Model)** es una representación estructurada del documento HTML que permite a JavaScript interactuar con los elementos de la página web.

```javascript
// El DOM representa la página como un árbol de objetos
document
  ├── html
      ├── head
      │   ├── title
      │   └── meta
      └── body
          ├── h1
          ├── p
          └── button
```

### Selección de Elementos

#### Métodos principales para seleccionar elementos:

```javascript
// Por ID
const elemento = document.getElementById('miId');

// Por clase (devuelve el primero)
const elemento = document.querySelector('.miClase');

// Por clase (devuelve todos)
const elementos = document.querySelectorAll('.miClase');

// Por etiqueta
const elementos = document.getElementsByTagName('p');

// Selector CSS avanzado
const elemento = document.querySelector('#contenedor .item:first-child');
```

### Modificación de Contenido

```javascript
// Cambiar texto
elemento.textContent = 'Nuevo texto';

// Cambiar HTML interno
elemento.innerHTML = '<strong>Texto en negrita</strong>';

// Modificar atributos
elemento.setAttribute('class', 'nueva-clase');
elemento.src = 'nueva-imagen.jpg';

// Modificar estilos
elemento.style.color = 'red';
elemento.style.fontSize = '20px';
```

### Gestión de Eventos

```javascript
// Agregar event listener
button.addEventListener('click', function() {
    console.log('¡Botón clickeado!');
});

// Event listener con arrow function
button.addEventListener('click', () => {
    console.log('¡Botón clickeado!');
});

// Eventos comunes
elemento.addEventListener('mouseover', manejarMouseOver);
elemento.addEventListener('keydown', manejarTecla);
formulario.addEventListener('submit', manejarEnvio);
```

### Manipulación de Clases CSS

```javascript
// Agregar una clase
elemento.classList.add('activo');

// Eliminar una clase
elemento.classList.remove('inactivo');

// Alternar una clase
elemento.classList.toggle('visible');

// Verificar si tiene una clase
if (elemento.classList.contains('especial')) {
    console.log('Tiene la clase especial');
}

// Reemplazar una clase por otra
elemento.classList.replace('viejo-estilo', 'nuevo-estilo');
```

### Creación y Eliminación de Elementos

```javascript
// Crear un nuevo elemento
const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = 'Contenido del nuevo elemento';
nuevoDiv.classList.add('mi-clase');

// Agregar al DOM
contenedor.appendChild(nuevoDiv);
contenedor.insertBefore(nuevoDiv, elemento);

// Clonar un elemento
const clon = elemento.cloneNode(true); // true = copia profunda

// Eliminar un elemento
elemento.remove();
elemento.parentNode.removeChild(elemento);
```

### Navegación por el DOM (DOM Traversal)

```javascript
// Acceder a elementos relacionados
elemento.parentElement;          // Elemento padre
elemento.children;               // Hijos directos
elemento.firstChild;             // Primer hijo (puede ser nodo de texto)
elemento.lastChild;              // Último hijo
elemento.nextElementSibling;     // Siguiente elemento hermano
elemento.previousElementSibling; // Elemento hermano anterior

// Ejemplo práctico
const padre = elemento.parentElement;
const hermanos = padre.children;
```

### Manipulación de Atributos

```javascript
// Obtener atributo
const valor = elemento.getAttribute('data-id');

// Establecer atributo
elemento.setAttribute('data-id', '123');
elemento.setAttribute('disabled', 'disabled');

// Eliminar atributo
elemento.removeAttribute('disabled');

// Verificar si tiene atributo
if (elemento.hasAttribute('data-especial')) {
    console.log('Tiene atributo data-especial');
}

// Acceso directo a atributos comunes
elemento.id = 'nuevo-id';
elemento.title = 'Información';
elemento.href = 'https://ejemplo.com';
```

### Propiedades y Métodos Útiles del DOM

```javascript
// Propiedades de dimensiones y posición
elemento.offsetWidth;      // Ancho total (incluye border)
elemento.offsetHeight;     // Alto total
elemento.clientWidth;      // Ancho sin border
elemento.clientHeight;     // Alto sin border
elemento.scrollTop;        // Desplazamiento vertical
elemento.scrollLeft;       // Desplazamiento horizontal

// Obtener información
elemento.innerHTML;        // HTML interno
elemento.textContent;      // Texto sin HTML
elemento.outerHTML;        // HTML del elemento incluido

// Métodos de búsqueda avanzada
elemento.querySelector('selector');      // Primer coincidencia
elemento.querySelectorAll('selector');   // Todas coincidencias
```

### Dark Mode y Light Mode

```javascript
// Detectar preferencia del sistema
const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Cambiar tema
const root = document.documentElement;
root.style.setProperty('--color-fondo', '#1a1a1a');
root.style.setProperty('--color-texto', '#ffffff');

// Guardar preferencia en localStorage
localStorage.setItem('tema', 'oscuro');
const temaSguardado = localStorage.getItem('tema');

// Cambio dinámico de tema
function cambiarTema(tema) {
    document.body.classList.remove('claro', 'oscuro');
    document.body.classList.add(tema);
    localStorage.setItem('tema-activo', tema);
}
```

---

## 💻 Ejemplos Prácticos

### Ejemplo 1: Contador Interactivo
Crear un contador que incremente y decremente con botones.

### Ejemplo 2: Cambio de Colores
Crear una página que cambie de color al hacer clic en botones.

### Ejemplo 3: Lista de Tareas
Implementar una lista de tareas donde se puedan agregar y eliminar elementos.

### Ejemplo 4: Galería de Imágenes
Crear una galería que muestre diferentes imágenes al hacer clic en miniaturas.

---

## 🎯 Proyecto de Clase: Calculadora Interactiva

Desarrollaremos una calculadora funcional que combine todos los conceptos aprendidos:

- Selección de elementos del DOM
- Gestión de eventos de clic
- Modificación dinámica del contenido
- Validación de entrada del usuario

---

## 📖 Recursos Adicionales

- [MDN - Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
- [MDN - Eventos](https://developer.mozilla.org/es/docs/Web/Events)
- [JavaScript DOM Manipulation](https://www.w3schools.com/js/js_htmldom.asp)

----

## ✅ Checklist de Conceptos

- [ ] Entiendo qué es el DOM y cómo funciona
- [ ] Puedo seleccionar elementos usando diferentes métodos (getElementById, querySelector, querySelectorAll, etc.)
- [ ] Sé cómo modificar contenido y atributos (innerHTML, textContent, setAttribute)
- [ ] Puedo agregar y manejar eventos (addEventListener)
- [ ] Entiendo el flujo de eventos (event bubbling y capturing)
- [ ] Domino la manipulación de clases CSS (classList.add, remove, toggle)
- [ ] Puedo crear y eliminar elementos dinámicamente (createElement, appendChild, remove)
- [ ] Sé navegar por el DOM (parentElement, children, nextElementSibling)
- [ ] Entiendo cómo trabajar con atributos (getAttribute, setAttribute, removeAttribute)
- [ ] Puedo implementar un sistema de Dark Mode/Light Mode
- [ ] Conozco localStorage para persistir datos del usuario
- [ ] Puedo crear interacciones complejas en una página web

---

> **Próxima clase**: Maquetación Avanzada con CSS - Flexbox y Grid para layouts complejos