# 🚀 Clase 7: Introducción a TypeScript

## 📚 Objetivos de la Clase

- Entender qué es TypeScript y cómo mejora JavaScript
- Aprender a usar interfaces y tipos personalizados
- Crear clases tipadas con TypeScript
- Comprender los beneficios del tipado estático
- Construir una aplicación práctica: Tienda Online Tipada

---

## 🧠 ¿Qué es TypeScript?

**TypeScript** es un **superset** de JavaScript desarrollado por Microsoft que añade **tipado estático** al lenguaje. Es decir, te permite especificar qué tipo de dato debe tener cada variable, parámetro de función, etc.

### ¿Por qué TypeScript?

Imagina que tienes una función que suma dos números:

```javascript
// JavaScript
function sumar(a, b) {
    return a + b;
}

sumar(5, 3);        // ✅ Funciona: 8
sumar("5", "3");    // ✅ Funciona pero suma strings: "53"
sumar(5, "3");      // ❌ Comportamiento impredecible
```

Con TypeScript puedes especificar exactamente qué esperas:

```typescript
// TypeScript
function sumar(a: number, b: number): number {
    return a + b;
}

sumar(5, 3);        // ✅ Correcto
sumar("5", "3");    // ❌ Error en compilación
sumar(5, "3");      // ❌ Error en compilación
```

### Ventajas Principales

| Beneficio | Ejemplo |
|-----------|---------|
| **Errores antes de ejecutar** | TypeScript detecta errores durante el desarrollo, no cuando ejecutas el código |
| **Autocompletado inteligente** | El editor sabe exactamente qué propiedades tiene cada objeto |
| **Documentación automática** | Los tipos sirven como documentación del código |
| **Refactoring seguro** | Cambiar un tipo automaticamente actualiza todo el código que lo usa |
| **Compatible con JavaScript** | Todo código JavaScript válido es válido en TypeScript |

### El Flujo de TypeScript

```
Código TypeScript (.ts) 
    ↓
Compilador (tsc) - Verifica tipos
    ↓
JavaScript (.js) - Código limpio
    ↓
Ejecución en navegador o Node.js
```

---

## 🔧 Configuración Básica

### Instalación

```bash
# Instalar TypeScript globalmente
npm install -g typescript

# Verificar instalación
tsc --version
```

### Compilar un archivo TypeScript

```bash
# Compilar un archivo
tsc archivo.ts

# Ver el resultado en JavaScript
cat archivo.js

# Modo watch (compila automáticamente cuando cambias el archivo)
tsc archivo.ts --watch
```

### Proyecto TypeScript

```bash
# Inicializar un proyecto
npm init -y

# Instalar TypeScript como dependencia de desarrollo
npm install -D typescript

# Crear configuración (tsconfig.json)
tsc --init
```

---

## 📝 Tipos Básicos en TypeScript

### Tipos Primitivos

```typescript
// String
let nombre: string = "Juan";

// Number
let edad: number = 25;
let precio: number = 19.99;

// Boolean
let esActivo: boolean = true;

// Array
let numeros: number[] = [1, 2, 3];
let nombres: Array<string> = ["Ana", "Luis"];

// Tupla (array con tipos específicos en cada posición)
let coordenada: [number, number] = [10, 20];
let usuario: [string, number] = ["Juan", 25];

// Union (puede ser uno de varios tipos)
let id: string | number;
id = "abc123";    // ✅ OK
id = 12345;       // ✅ OK
// id = true;     // ❌ Error
```

### Type Literals

Restringir un valor a opciones específicas:

```typescript
// Solo permite estos valores exactos
let direccion: "norte" | "sur" | "este" | "oeste";
direccion = "norte";     // ✅ OK
// direccion = "arriba"; // ❌ Error

// Con números
let nivel: 1 | 2 | 3 | 4 | 5;
nivel = 3;  // ✅ OK
```

---

## 🏗️ Interfaces y Types

### ¿Qué es una Interfaz?

Una interfaz es un contrato que especifica qué propiedades y métodos debe tener un objeto.

```typescript
// Definir una interfaz
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    enStock: boolean;    // Propiedad requerida
    descripcion?: string; // Propiedad opcional (con ?)
}

// Usar la interfaz
const laptop: Producto = {
    id: 1,
    nombre: "Laptop Dell",
    precio: 1200,
    enStock: true,
    descripcion: "Laptop de alta performance"
};

// Sin descripción también es válido
const mouse: Producto = {
    id: 2,
    nombre: "Mouse Inalámbrico",
    precio: 25,
    enStock: true
    // descripcion no es obligatoria
};
```

### Type vs Interface

Ambos son muy similares, pero la interfaz es mejor para estructuras de objetos:

```typescript
// Interface (para estructuras de objetos)
interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

// Type (para alias más simples o uniones)
type Rol = 'admin' | 'usuario' | 'moderador';

type Estado = 'activo' | 'inactivo';

// Puedes combinarlos
interface UsuarioConRol extends Usuario {
    rol: Rol;
    estado: Estado;
}
```

### Interfaces Extensibles

```typescript
// Interfaz base
interface Vehículo {
    marca: string;
    modelo: string;
    año: number;
}

// Extender una interfaz
interface Auto extends Vehículo {
    puertas: number;
    combustible: 'gasolina' | 'diesel' | 'eléctrico';
}

const miAuto: Auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2023,
    puertas: 4,
    combustible: 'gasolina'
};
```

---

## 🎯 Clases en TypeScript

Las clases en TypeScript son como en JavaScript, pero con tipos:

```typescript
// Clase simple
class Coche {
    // Propiedades con tipos
    marca: string;
    modelo: string;
    velocidad: number = 0;

    // Constructor
    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    // Métodos
    acelerar(): void {
        this.velocidad += 10;
        console.log(`${this.marca} ${this.modelo} acelerando a ${this.velocidad} km/h`);
    }

    obtenerVelocidad(): number {
        return this.velocidad;
    }
}

// Usar la clase
const miCoche = new Coche("Toyota", "Corolla");
miCoche.acelerar(); // Toyota Corolla acelerando a 10 km/h
```

### Modificadores de Acceso

```typescript
class Persona {
    // public - accesible desde cualquier lado (por defecto)
    public nombre: string;

    // private - solo accesible dentro de la clase
    private edad: number;

    // protected - accesible en la clase y subclases
    protected direccion: string;

    constructor(nombre: string, edad: number, direccion: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }

    private calcularAñoNacimiento(): number {
        return new Date().getFullYear() - this.edad;
    }

    protected cambiarDireccion(nueva: string): void {
        this.direccion = nueva;
    }
}

const persona = new Persona("Juan", 30, "Calle Principal 123");
console.log(persona.nombre);        // ✅ OK (public)
// console.log(persona.edad);       // ❌ Error (private)
// console.log(persona.direccion);  // ❌ Error (protected)
```

### Herencia

```typescript
// Clase base
class Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    hacerSonido(): void {
        console.log(`${this.nombre} hace un sonido`);
    }
}

// Clase derivada
class Perro extends Animal {
    raza: string;

    constructor(nombre: string, raza: string) {
        super(nombre);  // Llamar al constructor padre
        this.raza = raza;
    }

    // Sobrescribir método
    hacerSonido(): void {
        console.log(`${this.nombre} (${this.raza}) ladra: ¡Guau!`);
    }
}

const miPerro = new Perro("Max", "Golden Retriever");
miPerro.hacerSonido(); // Max (Golden Retriever) ladra: ¡Guau!
```

---

## 💻 Ejercicio Práctico: Tienda Online Tipada

En este ejercicio construiremos una tienda online usando TypeScript con interfaces, clases y tipos.

### Estructura del Ejercicio

```
Tienda Online
├── Catálogo (gestiona productos)
├── Carrito (gestiona items del cliente)
└── Gestor de Órdenes (procesa y registra órdenes)
```

### Conceptos TypeScript Utilizados

✅ **Interfaces**: `Producto`, `CarritoItem`, `Orden`  
✅ **Types**: `Categoria`, tipos para estados  
✅ **Clases**: `Catalogo`, `Carrito`, `GestorOrdenes`  
✅ **Métodos tipados**: Cada método especifica parámetros y retorno  
✅ **Arrays tipados**: Arrays que solo contienen el tipo correcto  

### Pasos del Ejercicio

1. **Definir los tipos** (`types.ts`)
   - Crear interfaces para productos, carrito y órdenes
   - Definir tipos para categorías

2. **Crear las clases** (`types.ts`)
   - `Catalogo`: Agregar, buscar y filtrar productos
   - `Carrito`: Agregar/eliminar items, calcular total
   - `GestorOrdenes`: Crear y procesar órdenes

3. **Conectar con el DOM** (`index.ts`)
   - Mostrar productos en HTML
   - Manejar eventos de botones
   - Actualizar carrito en tiempo real

4. **Ver el resultado**
   - Abrir `index.html` en el navegador
   - Probar agregar productos al carrito
   - Procesar una orden

---

## 🛠️ Generics (Genéricos)

Los genéricos permiten crear código reutilizable que funciona con cualquier tipo:

```typescript
// Función genérica
function obtenerPrimero<T>(array: T[]): T | undefined {
    return array[0];
}

const numeros = obtenerPrimero([1, 2, 3]);           // T es number
const textos = obtenerPrimero(["a", "b", "c"]);     // T es string

// Clase genérica
class Caja<T> {
    private contenido: T;

    constructor(contenido: T) {
        this.contenido = contenido;
    }

    obtener(): T {
        return this.contenido;
    }

    cambiar(nuevo: T): void {
        this.contenido = nuevo;
    }
}

const cajaNumeros = new Caja<number>(42);
const cajaTexto = new Caja<string>("Hola");

console.log(cajaNumeros.obtener()); // 42
console.log(cajaTexto.obtener());   // "Hola"
```

---

## 💻 Ejercicios Prácticos

### 1. Tienda Online (Incluido en el proyecto)
Crear un sistema de e-commerce con catálogo, carrito y gestión de órdenes.

**Conceptos**: Interfaces, clases, tipos, métodos tipados

### 2. Sistema de Contactos
Crear una aplicación para gestionar contactos con TypeScript.

```typescript
interface Contacto {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
}

class GestorContactos {
    private contactos: Contacto[] = [];
    private siguiente_id = 1;

    agregar(nombre: string, email: string, telefono: string): Contacto {
        const contacto: Contacto = {
            id: this.siguiente_id++,
            nombre,
            email,
            telefono
        };
        this.contactos.push(contacto);
        return contacto;
    }

    obtenerTodos(): Contacto[] {
        return [...this.contactos];
    }

    buscar(termino: string): Contacto[] {
        return this.contactos.filter(c =>
            c.nombre.includes(termino) ||
            c.email.includes(termino)
        );
    }

    eliminar(id: number): boolean {
        const indice = this.contactos.findIndex(c => c.id === id);
        if (indice !== -1) {
            this.contactos.splice(indice, 1);
            return true;
        }
        return false;
    }
}
```

### 3. Carrera de Maratón
Registrar y gestionar participantes de una maratón.

```typescript
interface Participante {
    id: number;
    nombre: string;
    edad: number;
    tiempo: number | null; // en minutos
}

type Categoría = 'menores' | 'adultos' | 'mayores';

function obtenerCategoría(edad: number): Categoría {
    if (edad < 18) return 'menores';
    if (edad < 60) return 'adultos';
    return 'mayores';
}
```

---

## 🎯 Proyecto de Clase: Tienda Online Tipada

### Descripción
En este proyecto construimos una tienda online completa usando TypeScript. Aprenderemos a:

- Definir interfaces para productos, carrito y órdenes
- Crear clases para gestionar la lógica de negocio
- Tipar correctamente todas las funciones
- Conectar TypeScript con el DOM
- Manejar eventos con tipos

### Estructura del Proyecto

```
ejercicios/
├── index.html           # Interfaz web
├── styles.css          # Estilos
├── tsconfig.json       # Configuración de TypeScript
├── package.json        # Dependencias
└── src/
    ├── index.ts        # Lógica principal
    └── types.ts        # Tipos e interfaces
```

### Cómo Usar

```bash
# 1. Compilar TypeScript
npm run build

# 2. Abrir en navegador
npm run serve

# 3. Modo desarrollo (recompila automáticamente)
npm run dev
```

### Características

✅ Catálogo de productos filtrable por categoría  
✅ Carrito de compras funcional  
✅ Procesamiento de órdenes  
✅ Búsqueda de productos  
✅ Historial de órdenes  
✅ 100% tipado con TypeScript

---

## 📖 Recursos Adicionales

- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Documentación oficial
- [TypeScript Playground](https://www.typescriptlang.org/play) - Prueba TypeScript online
- [Definitely Typed](https://definitelytyped.org/) - Tipos para librerías populares

---

## 🏠 Tareas para Casa

### 1. Ampliar la Tienda Online
- Agregar un sistema de descuentos
- Implementar filtro por precio
- Agregar más categorías y productos

### 2. Crear un Sistema de Biblioteca
```typescript
interface Libro {
    id: number;
    titulo: string;
    autor: string;
    isbn: string;
    disponible: boolean;
}

// Implementar: agregar libro, prestar, devolver, buscar
```

### 3. Gestor de Tareas Tipado
Crear una app de tareas con TypeScript que incluya:
- Crear tarea
- Marcar como completada
- Filtrar por estado
- Eliminar tarea

### 4. Desafío Extra: Sistema de Calificaciones
Crear un sistema para gestionar calificaciones de estudiantes:
- Registrar estudiantes
- Agregar calificaciones
- Calcular promedio
- Identificar estudiantes en riesgo (promedio < 60)

---

## ✅ Checklist de Conceptos

- [ ] Entiendo qué es TypeScript y sus ventajas
- [ ] Puedo usar tipos primitivos correctamente
- [ ] Sé crear y usar interfaces
- [ ] Entiendo la diferencia entre interface y type
- [ ] Puedo crear clases con TypeScript
- [ ] Sé usar herencia en clases
- [ ] Entiendo los modificadores: public, private, protected
- [ ] Puedo crear funciones con tipos específicos
- [ ] Sé trabajar con arrays tipados
- [ ] Puedo usar types literal para restricciones
- [ ] Entiendo los generics básicos
- [ ] Puedo tipar correctamente elementos del DOM

---

## 💡 Tips Importantes

1. **Compila antes de ejecutar**: Siempre compila el código TypeScript a JavaScript antes de ejecutarlo en el navegador.

2. **Lee los errores**: Los mensajes de error de TypeScript son muy descriptivos, ayúdate de ellos.

3. **Usa tipos específicos**: Evita usar `any` - TypeScript pierde su valor si usas `any`.

4. **Las interfaces documentan**: Las interfaces sirven como documentación del código, especifica bien sus propiedades.

5. **Practica con ejercicios reales**: La mejor forma de aprender TypeScript es usándolo en proyectos reales.

---

> **Próxima clase**: Proyecto Integrador - Combinaremos todo lo aprendido en un proyecto web completo