# 🎯 Clase 5: Interactividad con el DOM

## 📚 Objetivos de la Clase

- Comprender qué es el DOM (Document Object Model)
- Aprender a seleccionar elementos HTML con JavaScript
- Modificar contenido y atributos de elementos
- Gestionar eventos del usuario
- Crear páginas web interactivas y dinámicas

---
//TODO: https://resend.com/onboarding
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

---

## 🏠 Tareas para Casa

1. **Práctica de Selectors**: Crear una página con 10 elementos diferentes y practicar todos los métodos de selección.

2. **Event Playground**: Implementar una página que responda a al menos 5 eventos diferentes (click, mouseover, keydown, etc.).

3. **Mini Proyecto**: Crear un formulario de contacto que valide los datos en tiempo real y muestre mensajes de error/éxito.

---

## ✅ Checklist de Conceptos

- [ ] Entiendo qué es el DOM y cómo funciona
- [ ] Puedo seleccionar elementos usando diferentes métodos
- [ ] Sé cómo modificar contenido y atributos
- [ ] Puedo agregar y manejar eventos
- [ ] Entiendo el flujo de eventos (event bubbling)
- [ ] Puedo crear interacciones básicas en una página web

---

> **Próxima clase**: Maquetación Avanzada con CSS - Flexbox y Grid para layouts complejos