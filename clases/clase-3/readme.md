# Clase 3 — Estructuras de control y bucles en JavaScript

Este README contiene el paso a paso para ejecutar los ejemplos interactivos y una guía completa y práctica sobre las estructuras de control y bucles en JavaScript.

## Paso a paso — cómo usar los ejemplos

1. Abre `clases/clase-3/ejercicios/index.html` en tu navegador (doble clic o con Live Server).
2. En la sección "If / Else — Par o impar" ingresa un número y haz clic en "Comprobar" para ver if/else en acción.
3. En la sección "Switch — Mensaje por día" selecciona un día y presiona "Mostrar" para ver un `switch`.
4. En "Bucle For / for...of — Lista dinámica" añade elementos, filtra o resetea para ver `for` y `for...of`.
5. En "for...in — Propiedades de un objeto" pulsa "Mostrar propiedades" para ver cómo `for...in` itera las claves de un objeto.
6. En "while / do...while — Contadores" prueba ambos botones para comparar `while` y `do...while`.
7. Abre `script.js` para leer el código detrás de cada ejemplo y experimentar modificándolo.

Sugerencia: abre la consola del navegador (F12) para ver posibles errores y experimentar con valores desde la consola.

## Guía completa: Estructuras de control

Las estructuras de control permiten dirigir el flujo de ejecución de un programa según condiciones y repeticiones.

### 1) Condicionales

- if / else if / else

  Uso: tomar decisiones basadas en condiciones booleanas.

  Ejemplo:

  ```javascript
  const n = 7;
  if (n > 0) {
    console.log('positivo');
  } else if (n < 0) {
    console.log('negativo');
  } else {
    console.log('cero');
  }
  ```

  Buenas prácticas:
  - Evitar condiciones complejas en una sola línea; extraer a funciones con nombre.
  - Preferir comparaciones estrictas (`===`) salvo que se requiera coerción.

- switch

  Uso: seleccionar entre múltiples casos discretos basados en un valor.

  Ejemplo:

  ```javascript
  const dia = 'viernes';
  switch (dia) {
    case 'lunes':
      console.log('inicia la semana');
      break;
    case 'viernes':
      console.log('fin de semana cerca');
      break;
    default:
      console.log('día normal');
  }
  ```

  Nota: recuerda `break` para evitar el "fall-through" si no es intencional.

### 2) Bucles (loops)

- for

  Uso: iteraciones donde conoces (o controlas) el índice.

  Ejemplo:

  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  ```

  Caso de uso: recorrer arrays con índice, construir elementos DOM con un contador.

- while

  Uso: repetir mientras una condición sea verdadera; la condición se evalúa antes de cada iteración.

  Ejemplo:

  ```javascript
  let i = 0;
  while (i < 3) {
    console.log(i);
    i++;
  }
  ```

  Peligro: asegúrate de que la condición termine para evitar bucles infinitos.

- do...while

  Uso: similar a `while` pero ejecuta el cuerpo al menos una vez antes de evaluar la condición.

  Ejemplo:

  ```javascript
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 3);
  ```

- for...of

  Uso: iterar directamente sobre los valores de un iterable (arrays, strings, Map iterators, etc.).

  Ejemplo:

  ```javascript
  const frutas = ['manzana', 'pera', 'uva'];
  for (const f of frutas) {
    console.log(f);
  }
  ```

  Ventaja: sintaxis limpia cuando no necesitas el índice.

- for...in

  Uso: iterar sobre las claves (propiedades enumerables) de un objeto.

  Ejemplo:

  ```javascript
  const obj = {a: 1, b: 2};
  for (const key in obj) {
    console.log(key, obj[key]);
  }
  ```

  Advertencia: `for...in` itera propiedades enumerables (incluyendo las heredadas); para arrays usar `for` o `for...of`.

## Patrones y buenas prácticas

- Evitar `for...in` en arrays. Usar `for`, `for...of` o métodos funcionales (`map`, `filter`, `forEach`).
- Cuando iteres grandes colecciones y necesites rendimiento, considera técnicas como chunking o requestIdleCallback en navegadores.

## Ejemplos rápidos (relacionados con los archivos de la clase)

- `index.html` / `script.js` incluyen:
  - Par o impar: `if (n % 2 === 0) ... else ...`.
  - Días: `switch(day) { ... }`.
  - Lista dinámica: `for` para renderizar, `for...of` para filtrar.
  - Propiedades de objeto: `for...in`.
  - Contadores: `while` y `do...while` con límites claros.

Abre `script.js` y compara cada sección con los ejemplos anteriores para ver cómo se aplican en el DOM.


## Recursos y lectura adicional

- MDN — Control flow: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
- MDN — Loops and iteration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

---

## 🔗 Recursos Adicionales

### Documentación Oficial
- [MDN - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

### Herramientas Útiles
- [VS Code](https://code.visualstudio.com/) - Editor de código
- [Node.js](https://nodejs.org/) - Runtime de JavaScript

### Plataformas de Práctica
- [Codepen](https://codepen.io/)
- [JSFiddle](https://jsfiddle.net/)
- [HackerRank](https://www.hackerrank.com/)

---

## 🎓 Próximas Clases

| Clase | Tema |
| :---: | :--- |
| **Clase 4** | Introducción a HTML y CSS |
| **Clase 5** | Interactividad con el DOM |

---

## 📞 Contacto y Soporte

| Recurso | Información |
| :--- | :--- |
| **Instructor** | Steven Zuluaga Cortés |
| **Web** | [www.devseniorcode.com](https://www.devseniorcode.com) |
| **Email** | Academy@devseniorcode.com |
| **Redes** | @devseniorcode |

---

> **Recuerda:** La programación es como un idioma - requiere práctica constante. ¡Sigue adelante! 🚀

