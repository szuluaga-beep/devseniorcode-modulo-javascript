# 🚀 Clase 2: Fundamentos de JavaScript I

<img width="598" height="577" alt="image" src="https://github.com/user-attachments/assets/34042598-5068-46c5-bd22-659593029be7" />

> **Bienvenido a la Clase 2** - En esta sesión exploraremos los conceptos fundamentales de JavaScript, el mundo de los algoritmos, bases de datos y las diferencias entre lenguajes tipados y débilmente tipados.

---

## 📚 Contenido de la Clase

Esta clase cubre cuatro pilares fundamentales para tu desarrollo como programador:

1. **MongoDB Atlas y Compass** - Configuración de bases de datos en la nube
2. **Algoritmos** - La lógica detrás de la programación
3. **Tipado en Lenguajes de Programación** - JavaScript vs Java
4. **Fundamentos de JavaScript** - El lenguaje que impulsa la web

---

## 🗄️ Parte 1: MongoDB Atlas y MongoDB Compass

### ¿Por Qué MongoDB?

MongoDB es una base de datos **NoSQL** basada en documentos JSON, perfecta para aplicaciones web modernas. Permite almacenar datos de forma flexible sin necesidad de esquemas rígidos.

### Paso 1: Registrarse en MongoDB Atlas

MongoDB Atlas es la plataforma en la nube oficial de MongoDB. Aquí te mostramos cómo registrarse:

#### 1.1 Crear una Cuenta

1. Accede a [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Haz clic en **"Try Free"** o **"Sign Up"**
3. Completa el formulario con tu correo electrónico, contraseña y nombre
4. Verifica tu correo electrónico haciendo clic en el enlace de confirmación

#### 1.2 Crear un Cluster

Una vez registrado:

1. En el dashboard, haz clic en **"Create Deployment"**
2. Selecciona **"M0 Free"** (opción gratuita para desarrollo)
3. Elige tu proveedor de nube (AWS, Azure o GCP) y región más cercana
4. Haz clic en **"Create Deployment"**
5. Espera a que el cluster se cree (2-3 minutos)

#### 1.3 Configurar Acceso

1. En la sección **"Security"**, ve a **"Database Access"**
2. Haz clic en **"Add New Database User"**
3. Crea un usuario y contraseña (guárdalos en un lugar seguro)
4. En **"Network Access"**, añade tu dirección IP (o permite acceso desde cualquier lugar: `0.0.0.0/0`)

#### 1.4 Obtener la Cadena de Conexión

1. Haz clic en **"Connect"** en tu cluster
2. Selecciona **"Drivers"**
3. Elige **"Node.js"** como driver
4. Copia la cadena de conexión (MongoDB URI)
5. Reemplaza `<username>` y `<password>` con tus credenciales

**Ejemplo de URI:**
```
mongodb+srv://usuario:contraseña@cluster.mongodb.net/miBaseDatos?retryWrites=true&w=majority
```

---

### Paso 2: Instalar MongoDB Compass

MongoDB Compass es un cliente gráfico que permite visualizar y gestionar tus datos de forma intuitiva.

#### 2.1 Descargar e Instalar

1. Accede a [https://www.mongodb.com/products/compass](https://www.mongodb.com/products/compass)
2. Descarga la versión para tu sistema operativo (Windows, macOS o Linux)
3. Ejecuta el instalador y sigue los pasos de instalación

#### 2.2 Conectar a Tu Cluster

1. Abre **MongoDB Compass**
2. Haz clic en **"New Connection"**
3. En el campo **"Connection String"**, pega tu MongoDB URI completa
4. Haz clic en **"Connect"**
5. ¡Listo! Ahora puedes explorar tus bases de datos, colecciones y documentos

#### 2.3 Interfaz de MongoDB Compass

```
┌─────────────────────────────────────────────────────────────┐
│  MongoDB Compass - Cliente Visual                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📁 Bases de Datos                                         │
│  ├── admin                                                 │
│  ├── config                                                │
│  └── miBaseDatos                                           │
│      ├── usuarios (Colección)                             │
│      ├── productos (Colección)                            │
│      └── ordenes (Colección)                              │
│                                                             │
│  [Visualización de Documentos]                            │
│  [Filtros]  [Agregaciones]  [Estadísticas]               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🧠 Parte 2: ¿Qué es un Algoritmo?

### Definición

Un **algoritmo** es un conjunto ordenado y finito de pasos (instrucciones) que resuelven un problema o alcanzan un objetivo específico.

### Estructura Fundamental: Entrada → Proceso → Salida

Todo algoritmo sigue este patrón fundamental:

```
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│   ENTRADA    │  ──> │   PROCESO    │  ──> │    SALIDA    │
│              │      │              │      │              │
│ Datos que    │      │ Operaciones  │      │ Resultado    │
│ recibimos    │      │ y cálculos   │      │ procesado    │
└──────────────┘      └──────────────┘      └──────────────┘
```

### Ejemplo Práctico: Calcular el Promedio de Tres Números

**ENTRADA:** Tres números (7, 8, 9)

**PROCESO:**
1. Sumar los tres números (7 + 8 + 9 = 24)
2. Dividir el resultado entre 3 (24 ÷ 3 = 8)

**SALIDA:** Promedio = 8

### Reglas Mnemotécnicas para Recordar Algoritmos

**ENTRADA-PROCESO-SALIDA (EPS)**

- **E** = Entrada (Input)
- **P** = Proceso (Operaciones lógicas)
- **S** = Salida (Output)

### Características de un Buen Algoritmo

| Característica | Descripción |
| :--- | :--- |
| **Precisión** | Cada paso debe ser claro y sin ambigüedades |
| **Finitud** | Debe terminar en un número finito de pasos |
| **Efectividad** | Cada operación debe ser ejecutable |
| **Generalidad** | Debe resolver el problema para cualquier entrada válida |
| **Eficiencia** | Debe consumir pocos recursos (tiempo y memoria) |

---

### Casos Reales: Algoritmos en la Vida Cotidiana

#### 1. 📍 Sistema de Navegación GPS

```
ENTRADA: Tu ubicación actual y destino
PROCESO: 
  - Obtener mapa de carreteras
  - Calcular rutas posibles
  - Seleccionar ruta más corta/rápida
  - Generar instrucciones paso a paso
SALIDA: Ruta optimizada con giros y distancias
```

**Aplicación Real:** Google Maps, Waze

#### 2. 🔐 Sistema de Autenticación

```
ENTRADA: Usuario y contraseña ingresados
PROCESO:
  - Verificar que el usuario exista
  - Encriptar la contraseña ingresada
  - Comparar con la contraseña almacenada
  - Validar que coincidan
SALIDA: Acceso permitido o denegado
```

**Aplicación Real:** Login en redes sociales

#### 3. 🛍️ Sistema de Recomendaciones (e-commerce)

```
ENTRADA: Historial de compras del usuario
PROCESO:
  - Analizar patrones de compra
  - Buscar productos similares
  - Calcular relevancia de cada producto
  - Ordenar por puntuación
SALIDA: Lista de productos recomendados
```

**Aplicación Real:** Amazon, Netflix, Spotify

#### 4. 📊 Algoritmo de Ordenamiento (Sorting)

```
ENTRADA: Lista de números desordenados [5, 2, 8, 1, 9]
PROCESO:
  - Comparar elementos adyacentes
  - Intercambiar si están en orden incorrecto
  - Repetir hasta que toda la lista esté ordenada
SALIDA: Lista ordenada [1, 2, 5, 8, 9]
```

**Aplicación Real:** Ordenar resultados de búsqueda

#### 5. 🏥 Diagnóstico Médico Inteligente

```
ENTRADA: Síntomas del paciente
PROCESO:
  - Comparar síntomas con base de datos médica
  - Calcular probabilidad de cada enfermedad
  - Aplicar reglas de diagnóstico
SALIDA: Posible diagnóstico y recomendaciones
```

**Aplicación Real:** Sistemas de diagnóstico con IA

---

## 💻 Parte 3: Tipado en Lenguajes de Programación

### Comparación: JavaScript vs Java

JavaScript y Java son dos lenguajes muy diferentes en cuanto a tipado de datos.

#### JavaScript: Lenguaje Débilmente Tipado

**Definición:** JavaScript es un lenguaje **débilmente tipado** (también llamado "dinámicamente tipado"), lo que significa que:

- Las variables pueden cambiar de tipo durante la ejecución
- No necesitas declarar el tipo de dato antes de usar la variable
- El tipo se determina en tiempo de ejecución (runtime)
- Es más flexible pero menos seguro

**Ejemplo de JavaScript Débilmente Tipado:**

```javascript
// JavaScript permite cambiar el tipo de una variable
let variable = 10;           // Tipo: Number
console.log(typeof variable); // Output: "number"

variable = "Hola";           // Ahora es String
console.log(typeof variable); // Output: "string"

variable = true;             // Ahora es Boolean
console.log(typeof variable); // Output: "boolean"

variable = { nombre: "Juan" }; // Ahora es Object
console.log(typeof variable); // Output: "object"

// Conversión implícita de tipos (coerción)
let resultado = 5 + "5";     // "55" (conversión automática)
console.log(resultado);       // Output: "55"
```

**Ventajas:**
- ✅ Mayor flexibilidad
- ✅ Código más conciso
- ✅ Prototipado rápido

**Desventajas:**
- ❌ Errores difíciles de detectar
- ❌ Menos optimización del compilador
- ❌ Comportamientos inesperados

---

#### Java: Lenguaje Fuertemente Tipado con Compilación

**Definición:** Java es un lenguaje **fuertemente tipado** (también llamado "estáticamente tipado"), lo que significa que:

- Debes declarar el tipo de cada variable explícitamente
- El tipo no puede cambiar una vez declarado
- Se verifica en tiempo de compilación (compile-time)
- Es más seguro pero menos flexible

**Ejemplo de Java Fuertemente Tipado:**

```java
// Java requiere declarar el tipo de cada variable
int numero = 10;
System.out.println(numero); // Output: 10

// Esto generaría ERROR - no puedes cambiar el tipo
numero = "Hola"; // ❌ ERROR: incompatible types

// Si necesitas otro tipo, debes crear otra variable
String texto = "Hola";
System.out.println(texto); // Output: Hola

// Conversión explícita de tipos (casting)
int resultado = 5 + Integer.parseInt("5"); // "10" (conversión manual)
System.out.println(resultado); // Output: 10

// Tipado desde el inicio
String nombre = "Juan";
int edad = 25;
double altura = 1.75;
boolean esEstudiante = true;
```

**Ventajas:**
- ✅ Errores detectados antes de ejecutar
- ✅ Mejor optimización del compilador
- ✅ Código más mantenible y predecible
- ✅ Mejor rendimiento

**Desventajas:**
- ❌ Código más verboso
- ❌ Menos flexibilidad
- ❌ Curva de aprendizaje más pronunciada

---

### Tabla Comparativa

| Aspecto | JavaScript | Java |
| :--- | :--- | :--- |
| **Tipado** | Débil (Dinámico) | Fuerte (Estático) |
| **Compilación** | Interpretado (Runtime) | Compilado (Compile-time) |
| **Declaración de Tipos** | Opcional | Obligatoria |
| **Cambio de Tipo** | Permitido | No permitido |
| **Detección de Errores** | En tiempo de ejecución | En tiempo de compilación |
| **Rendimiento** | Más lento | Más rápido |
| **Curva de Aprendizaje** | Suave | Pronunciada |
| **Uso Principal** | Web (Frontend/Backend) | Aplicaciones empresariales |

---

### TypeScript: Lo Mejor de Ambos Mundos

```typescript
// TypeScript permite tipado estático en JavaScript
let numero: number = 10;
numero = "Hola"; // ❌ ERROR en compilación

let texto: string = "Hola";
let esActivo: boolean = true;
let edad: number = 25;

// Tipos complejos
interface Usuario {
  nombre: string;
  edad: number;
  email: string;
}

const usuario: Usuario = {
  nombre: "Juan",
  edad: 25,
  email: "juan@example.com"
};
```

---

## 🎯 Parte 4: Fundamentos de JavaScript

### Historia: ¿Quién Creó JavaScript?

**Brendan Eich** creó JavaScript en **1995** en tan solo **10 días** mientras trabajaba en Netscape Communications Corporation.

#### Contexto Histórico

- **1995:** Brendan Eich crea Mocha (luego llamado LiveScript)
- **Diciembre 1995:** Se renombra a JavaScript como estrategia de marketing (Java estaba en auge)
- **1997:** Se estandariza como ECMAScript (ES1)
- **2009:** Surge ECMAScript 5 (ES5) con características modernas
- **2015:** ECMAScript 6 (ES6/ES2015) - la versión más importante con sintaxis moderna
- **Actualidad:** Nuevas características cada año

**Datos curiosos:**
- ❓ A pesar del nombre, JavaScript no tiene relación directa con Java
- ❓ Fue creado bajo presión de tiempo
- ❓ Hoy es el lenguaje más utilizado del mundo

---

### Fundamentos Esenciales de JavaScript

#### 1. Variables

Las variables son contenedores para almacenar valores.

**Formas de declarar variables:**

```javascript
// var - Declaración antigua (evitar en código moderno)
var nombre = "Juan";

// let - Declaración moderna con scope de bloque
let edad = 25;

// const - Constante (no puede reasignarse)
const ciudad = "Medellín";

// Diferencias principales
var x = 1;
let y = 2;
const z = 3;

// let y const respetan el scope de bloque
if (true) {
  var a = 1;    // Accesible fuera del bloque
  let b = 2;    // NO accesible fuera del bloque
  const c = 3;  // NO accesible fuera del bloque
}

console.log(a); // Output: 1
console.log(b); // ❌ ReferenceError
```

**Recomendación:** Usa `const` por defecto, `let` cuando necesites reasignar, evita `var`.

---

#### 2. Tipos de Datos

JavaScript tiene varios tipos de datos primitivos:

```javascript
// 1. String - Cadena de texto
let texto = "Hola, mundo";
let nombre = 'Juan';
let template = `Hola, ${nombre}`; // Template literal

console.log(template); // Output: Hola, Juan

// 2. Number - Números (enteros y decimales)
let entero = 42;
let decimal = 3.14;
let infinito = Infinity;
let noEsNumero = NaN; // Not a Number

// 3. Boolean - Verdadero o Falso
let esActivo = true;
let esAdmin = false;

// 4. Undefined - Variable declarada pero sin valor
let variable;
console.log(variable); // Output: undefined

// 5. Null - Ausencia intencional de valor
let valor = null;

// 6. Object - Colección de pares clave-valor
let usuario = {
  nombre: "Juan",
  edad: 25,
  email: "juan@example.com"
};

console.log(usuario.nombre); // Output: Juan

// 7. Array - Colección ordenada de valores
let numeros = [1, 2, 3, 4, 5];
let mezclado = ["texto", 42, true, null];

console.log(numeros[0]); // Output: 1

// Verificar tipo de dato
console.log(typeof texto);      // "string"
console.log(typeof 42);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof variable);   // "undefined"
console.log(typeof usuario);    // "object"
console.log(typeof numeros);    // "object" (los arrays son objetos)
```

---

#### 3. Operadores

Los operadores permiten realizar operaciones con variables y valores.

**Operadores Aritméticos:**

```javascript
let a = 10;
let b = 3;

console.log(a + b);   // 13 (suma)
console.log(a - b);   // 7  (resta)
console.log(a * b);   // 30 (multiplicación)
console.log(a / b);   // 3.333... (división)
console.log(a % b);   // 1  (módulo/residuo)
console.log(a ** 2);  // 100 (exponenciación)
```

**Operadores de Asignación:**

```javascript
let x = 5;

x += 2;   // x = x + 2 (suma y asigna)
x -= 1;   // x = x - 1 (resta y asigna)
x *= 2;   // x = x * 2 (multiplica y asigna)
x /= 2;   // x = x / 2 (divide y asigna)
x %= 3;   // x = x % 3 (módulo y asigna)
```

**Operadores de Comparación:**

```javascript
let a = 5;
let b = "5";

console.log(a == b);   // true  (igualdad - con coerción de tipos)
console.log(a === b);  // false (igualdad estricta - sin coerción)
console.log(a != b);   // false (desigualdad)
console.log(a !== b);  // true  (desigualdad estricta)
console.log(a > 3);    // true
console.log(a < 10);   // true
console.log(a >= 5);   // true
console.log(a <= 5);   // true
```

**Operadores Lógicos:**

```javascript
let esAdmin = true;
let esActivo = false;

console.log(esAdmin && esActivo);  // false (AND)
console.log(esAdmin || esActivo);  // true  (OR)
console.log(!esAdmin);             // false (NOT)

// Ejemplo práctico
if (esAdmin && esActivo) {
  console.log("Usuario puede acceder");
} else {
  console.log("Acceso denegado");
}
```

**Operadores de Incremento/Decremento:**

```javascript
let contador = 0;

contador++;   // Incrementa en 1
console.log(contador); // 1

contador--;   // Decrementa en 1
console.log(contador); // 0

// Pre-incremento vs Post-incremento
let a = 5;
console.log(++a); // 6 (incrementa antes de mostrar)
console.log(a++); // 6 (muestra antes de incrementar)
console.log(a);   // 7
```

---

#### 4. Funciones Básicas

Una función es un bloque de código reutilizable que realiza una tarea específica.

**Declaración de Función:**

```javascript
// Forma 1: Declaración tradicional
function saludar(nombre) {
  return `Hola, ${nombre}`;
}

console.log(saludar("Juan")); // Output: Hola, Juan

// Forma 2: Expresión de función
const sumar = function(a, b) {
  return a + b;
};

console.log(sumar(5, 3)); // Output: 8

// Forma 3: Arrow Function (Flecha) - Moderna
const multiplicar = (a, b) => {
  return a * b;
};

console.log(multiplicar(4, 5)); // Output: 20

// Arrow Function versión corta
const cuadrado = x => x * x;
console.log(cuadrado(5)); // Output: 25
```

**Parámetros por Defecto:**

```javascript
function crear Saludo(nombre = "Amigo", saludo = "Hola") {
  return `${saludo}, ${nombre}`;
}

console.log(crearSaludo());              // Hola, Amigo
console.log(crearSaludo("Juan"));        // Hola, Juan
console.log(crearSaludo("María", "Hi")); // Hi, María
```

**Parámetros Rest (Múltiples Argumentos):**

```javascript
function sumarTodos(...numeros) {
  let total = 0;
  for (let num of numeros) {
    total += num;
  }
  return total;
}

console.log(sumarTodos(1, 2, 3));        // 6
console.log(sumarTodos(1, 2, 3, 4, 5));  // 15
```

**Funciones que Retornan Valores:**

```javascript
function calcularEdad(anioNacimiento) {
  const anioActual = 2025;
  return anioActual - anioNacimiento;
}

const miEdad = calcularEdad(1999);
console.log(miEdad); // 26

// Función sin retorno explícito devuelve undefined
function mostrarMensaje(texto) {
  console.log(texto);
  // No hay return
}

let resultado = mostrarMensaje("Hola"); // Output: Hola
console.log(resultado); // Output: undefined
```

**Ejemplo Práctico: Calculadora**

```javascript
// Función para calcular el promedio
function calcularPromedio(nota1, nota2, nota3) {
  const promedio = (nota1 + nota2 + nota3) / 3;
  return promedio;
}

const miPromedio = calcularPromedio(85, 90, 88);
console.log(`Mi promedio es: ${miPromedio.toFixed(2)}`);
// Output: Mi promedio es: 87.67

// Función para validar si pasó
function hasPasado(promedio) {
  if (promedio >= 70) {
    return true;
  } else {
    return false;
  }
}

// Versión simplificada
function hasPasado2(promedio) {
  return promedio >= 70;
}

console.log(hasPasado(miPromedio)); // true
```

---

## 📝 Resumen de Conceptos Clave

| Concepto | Descripción |
| :--- | :--- |
| **MongoDB Atlas** | Base de datos en la nube, registra tu cuenta y crea un cluster |
| **MongoDB Compass** | Cliente visual para explorar tus datos |
| **Algoritmo** | Conjunto de pasos que resuelven un problema (Entrada → Proceso → Salida) |
| **Tipado Débil** | JavaScript permite cambiar tipos de datos dinámicamente |
| **Tipado Fuerte** | Java requiere declarar tipos y no cambiarlos |
| **Variables** | Contenedores de datos (const, let, var) |
| **Tipos de Datos** | String, Number, Boolean, Undefined, Null, Object, Array |
| **Operadores** | Herramientas para operar con datos (aritméticos, lógicos, etc.) |
| **Funciones** | Bloques de código reutilizable |

---

## 🎯 Ejercicios Propuestos

### Nivel 1: Básico

1. **Variables y Tipos**
   ```javascript
   // Crea variables de diferentes tipos y verifica su tipo con typeof
   let miNumero = 42;
   let miTexto = "JavaScript";
   let miBooleano = true;
   
   // Escribe el código aquí
   ```

2. **Operadores**
   ```javascript
   // Realiza las siguientes operaciones
   let a = 10;
   let b = 3;
   
   // Suma, resta, multiplicación, división
   ```

### Nivel 2: Intermedio

3. **Función de Calculadora**
   ```javascript
   // Crea una función que sume dos números
   function sumar(num1, num2) {
     // Tu código aquí
   }
   
   console.log(sumar(5, 3)); // Debe mostrar 8
   ```

4. **Algoritmo EPS**
   ```javascript
   // Crea una función que calcule el IMC
   // Entrada: peso (kg) y altura (m)
   // Proceso: imc = peso / (altura * altura)
   // Salida: IMC calculado
   ```

### Nivel 3: Avanzado

5. **MongoDB Atlas Setup**
   - Crea una cuenta en MongoDB Atlas
   - Crea un cluster gratuito
   - Instala MongoDB Compass
   - Conéctate a tu cluster

6. **Verificador de Tipos**
   ```javascript
   // Crea una función que reciba un valor y devuelva su tipo
   function identificarTipo(valor) {
     // Tu código aquí
   }
   ```

---

## 🔗 Recursos Adicionales

### Documentación Oficial
- [MDN - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [MongoDB Documentación](https://docs.mongodb.com/)
- [Java Official Documentation](https://docs.oracle.com/javase/)

### Herramientas Útiles
- [MongoDB Compass](https://www.mongodb.com/products/compass)
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
| **Clase 3** | Fundamentos de JavaScript II - Condicionales y Bucles |
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

**Última actualización:** Octubre 2025
