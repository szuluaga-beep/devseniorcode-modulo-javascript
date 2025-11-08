# 🚀 Clase 7: Introducción a TypeScript

## 📚 Objetivos de la Clase

- Comprender qué es TypeScript y sus ventajas sobre JavaScript
- Aprender el sistema de tipos de TypeScript
- Configurar un entorno de desarrollo con TypeScript
- Trabajar con interfaces, clases y tipos personalizados
- Migrar código JavaScript existente a TypeScript
- Usar TypeScript con el DOM y APIs del navegador

---

## 🧠 ¿Qué es TypeScript?

**TypeScript** es un **superset** de JavaScript desarrollado por Microsoft que añade **tipado estático opcional** y otras características avanzadas al lenguaje.

### Ventajas de TypeScript

| Beneficio | Descripción |
|-----------|-------------|
| **Detección temprana de errores** | Los errores de tipo se detectan en tiempo de compilación, no en runtime |
| **Mejor IntelliSense** | Autocompletado más preciso y documentación en línea |
| **Refactoring seguro** | Cambios de código más seguros con detección automática de dependencias |
| **Escalabilidad** | Ideal para proyectos grandes y equipos de desarrollo |
| **Compatibilidad** | Todo código JavaScript válido es código TypeScript válido |

### El Flujo de TypeScript

```
Código TypeScript (.ts) → Compilador (tsc) → JavaScript (.js) → Ejecución
```

---

## 🔧 Configuración del Entorno

### Instalación Global

```bash
# Instalar TypeScript globalmente
npm install -g typescript

# Verificar instalación
tsc --version

# Compilar un archivo
tsc archivo.ts

# Modo watch (compilación automática)
tsc archivo.ts --watch
```

### Configuración de Proyecto

```bash
# Inicializar proyecto TypeScript
npm init -y
npm install -D typescript @types/node

# Crear archivo de configuración
tsc --init

# Instalar ts-node para desarrollo
npm install -D ts-node
```

### Archivo `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020", "DOM"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "sourceMap": true,
    "removeComments": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

## 📝 Sistema de Tipos

### Tipos Primitivos

```typescript
// Tipos básicos
let nombre: string = "Juan";
let edad: number = 25;
let esActivo: boolean = true;

// Arrays
let numeros: number[] = [1, 2, 3, 4];
let nombres: Array<string> = ["Ana", "Luis", "María"];

// Tuplas
let coordenada: [number, number] = [10, 20];
let persona: [string, number] = ["Juan", 25];

// Any (evitar su uso)
let cualquierCosa: any = "texto";
cualquierCosa = 42;
cualquierCosa = true;

// Unknown (alternativa más segura a any)
let valorDesconocido: unknown = "algo";
if (typeof valorDesconocido === "string") {
    console.log(valorDesconocido.toUpperCase());
}

// Void (para funciones que no retornan nada)
function saludar(): void {
    console.log("¡Hola!");
}

// Never (para funciones que nunca terminan)
function error(mensaje: string): never {
    throw new Error(mensaje);
}

// Null y Undefined
let valorNulo: null = null;
let valorIndefinido: undefined = undefined;
```

### Union Types

```typescript
// Permitir múltiples tipos
let id: string | number;
id = "abc123";
id = 12345;

// Con arrays
let mixto: (string | number)[] = ["texto", 42, "otro"];

// Función con union types
function formatearId(id: string | number): string {
    if (typeof id === "string") {
        return id.toUpperCase();
    } else {
        return id.toString();
    }
}
```

### Literal Types

```typescript
// Tipos literales
let direccion: "norte" | "sur" | "este" | "oeste";
direccion = "norte"; // ✅ Válido
// direccion = "arriba"; // ❌ Error

// Con números
let dados: 1 | 2 | 3 | 4 | 5 | 6;

// Combinado con otros tipos
let estado: "cargando" | "éxito" | "error" | number;
```

---

## 🏗️ Interfaces y Types

### Interfaces

```typescript
// Definir estructura de objetos
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    edad?: number; // Propiedad opcional
    readonly fechaCreacion: Date; // Solo lectura
}

// Uso de la interfaz
const usuario: Usuario = {
    id: 1,
    nombre: "Ana García",
    email: "ana@email.com",
    fechaCreacion: new Date()
};

// Extender interfaces
interface Admin extends Usuario {
    permisos: string[];
    nivel: "básico" | "avanzado" | "super";
}

const admin: Admin = {
    id: 2,
    nombre: "Carlos Admin",
    email: "carlos@admin.com",
    fechaCreacion: new Date(),
    permisos: ["leer", "escribir", "eliminar"],
    nivel: "super"
};

// Interfaces para funciones
interface CalculadoraFn {
    (a: number, b: number): number;
}

const sumar: CalculadoraFn = (a, b) => a + b;
const multiplicar: CalculadoraFn = (a, b) => a * b;
```

### Type Aliases

```typescript
// Crear alias para tipos complejos
type Estado = "cargando" | "éxito" | "error";
type ID = string | number;

// Tipos de objeto
type Producto = {
    id: ID;
    nombre: string;
    precio: number;
    categoria: string;
    disponible: boolean;
};

// Tipos de función
type EventoCallback = (evento: string, datos: any) => void;

// Tipos condicionales
type EsString<T> = T extends string ? true : false;
type Resultado1 = EsString<string>; // true
type Resultado2 = EsString<number>; // false
```

### Diferencias entre Interface y Type

```typescript
// Las interfaces se pueden extender y fusionar
interface Vehículo {
    marca: string;
}

interface Vehículo {
    modelo: string; // Se fusiona con la anterior
}

// Los types son más flexibles para union types
type FormaDePago = "efectivo" | "tarjeta" | "transferencia";

// Ambos pueden usarse para objetos
interface ConfigInterface {
    apiUrl: string;
    timeout: number;
}

type ConfigType = {
    apiUrl: string;
    timeout: number;
};
```

---

## 🎯 Clases en TypeScript

### Clases Básicas

```typescript
class Animal {
    // Propiedades
    protected nombre: string;
    private edad: number;
    public especie: string;

    // Constructor
    constructor(nombre: string, edad: number, especie: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
    }

    // Métodos
    public hacerSonido(): void {
        console.log(`${this.nombre} hace un sonido`);
    }

    // Getter
    get Edad(): number {
        return this.edad;
    }

    // Setter
    set Edad(nuevaEdad: number) {
        if (nuevaEdad > 0) {
            this.edad = nuevaEdad;
        }
    }

    // Método estático
    static crearAnimalGenerico(): Animal {
        return new Animal("Sin nombre", 0, "Desconocida");
    }
}

// Herencia
class Perro extends Animal {
    private raza: string;

    constructor(nombre: string, edad: number, raza: string) {
        super(nombre, edad, "Canino");
        this.raza = raza;
    }

    // Override
    public hacerSonido(): void {
        console.log(`${this.nombre} ladra: ¡Guau!`);
    }

    public buscar(): void {
        console.log(`${this.nombre} está buscando la pelota`);
    }
}

// Uso
const miPerro = new Perro("Max", 3, "Golden Retriever");
miPerro.hacerSonido(); // Max ladra: ¡Guau!
miPerro.buscar(); // Max está buscando la pelota
```

### Clases Abstractas

```typescript
abstract class Forma {
    protected color: string;

    constructor(color: string) {
        this.color = color;
    }

    // Método abstracto (debe implementarse en clases hijas)
    abstract calcularArea(): number;

    // Método concreto
    public describir(): string {
        return `Una forma de color ${this.color}`;
    }
}

class Círculo extends Forma {
    private radio: number;

    constructor(color: string, radio: number) {
        super(color);
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio ** 2;
    }
}

class Rectángulo extends Forma {
    private ancho: number;
    private alto: number;

    constructor(color: string, ancho: number, alto: number) {
        super(color);
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea(): number {
        return this.ancho * this.alto;
    }
}
```

---

## 🌐 TypeScript con DOM

### Tipado del DOM

```typescript
// Selección de elementos con tipos específicos
const botón = document.getElementById('miBoton') as HTMLButtonElement;
const input = document.querySelector('#miInput') as HTMLInputElement;
const lista = document.getElementsByClassName('lista')[0] as HTMLUListElement;

// Verificación de tipos
const elemento = document.getElementById('elemento');
if (elemento instanceof HTMLInputElement) {
    // TypeScript sabe que elemento es un HTMLInputElement
    console.log(elemento.value);
}

// Event listeners tipados
botón.addEventListener('click', (evento: MouseEvent) => {
    evento.preventDefault();
    console.log('Botón clickeado');
});

input.addEventListener('input', (evento: Event) => {
    const target = evento.target as HTMLInputElement;
    console.log('Valor:', target.value);
});

// Custom Event
interface DatoPersonalizado {
    mensaje: string;
    timestamp: number;
}

const eventoPersonalizado = new CustomEvent<DatoPersonalizado>('miEvento', {
    detail: {
        mensaje: 'Hola desde TypeScript',
        timestamp: Date.now()
    }
});

document.dispatchEvent(eventoPersonalizado);

document.addEventListener('miEvento', (evento: CustomEvent<DatoPersonalizado>) => {
    console.log(evento.detail.mensaje);
});
```

### Manejo de APIs

```typescript
// Interfaz para respuesta de API
interface Usuario {
    id: number;
    name: string;
    email: string;
    phone: string;
}

interface RespuestaAPI<T> {
    data: T;
    success: boolean;
    message: string;
}

// Función async con tipos
async function obtenerUsuario(id: number): Promise<Usuario | null> {
    try {
        const respuesta = await fetch(`/api/usuarios/${id}`);
        const datos: RespuestaAPI<Usuario> = await respuesta.json();
        
        if (datos.success) {
            return datos.data;
        } else {
            console.error(datos.message);
            return null;
        }
    } catch (error) {
        console.error('Error al obtener usuario:', error);
        return null;
    }
}

// Uso
async function mostrarUsuario() {
    const usuario = await obtenerUsuario(1);
    if (usuario) {
        console.log(`Usuario: ${usuario.name} (${usuario.email})`);
    }
}
```

---

## 🛠️ Generics

```typescript
// Función genérica
function identidad<T>(arg: T): T {
    return arg;
}

const número = identidad<number>(42);
const texto = identidad<string>("Hola");

// Clase genérica
class Contenedor<T> {
    private elementos: T[] = [];

    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }

    obtener(índice: number): T | undefined {
        return this.elementos[índice];
    }

    obtenerTodos(): T[] {
        return [...this.elementos];
    }

    get longitud(): number {
        return this.elementos.length;
    }
}

// Uso
const númeroContenedor = new Contenedor<number>();
númeroContenedor.agregar(1);
númeroContenedor.agregar(2);

const textoContenedor = new Contenedor<string>();
textoContenedor.agregar("Hola");
textoContenedor.agregar("Mundo");

// Interface genérica
interface Repository<T> {
    obtenerTodos(): Promise<T[]>;
    obtenerPorId(id: string): Promise<T | null>;
    crear(item: Omit<T, 'id'>): Promise<T>;
    actualizar(id: string, item: Partial<T>): Promise<T>;
    eliminar(id: string): Promise<boolean>;
}

// Implementación
class UsuarioRepository implements Repository<Usuario> {
    async obtenerTodos(): Promise<Usuario[]> {
        // Implementación
        return [];
    }

    async obtenerPorId(id: string): Promise<Usuario | null> {
        // Implementación
        return null;
    }

    async crear(usuario: Omit<Usuario, 'id'>): Promise<Usuario> {
        // Implementación
        return { id: 1, ...usuario } as Usuario;
    }

    async actualizar(id: string, usuario: Partial<Usuario>): Promise<Usuario> {
        // Implementación
        return {} as Usuario;
    }

    async eliminar(id: string): Promise<boolean> {
        // Implementación
        return true;
    }
}
```

---

## 💻 Ejercicios Prácticos

### Ejercicio 1: Sistema de Gestión de Biblioteca
Crear un sistema con interfaces para libros, usuarios y préstamos.

### Ejercicio 2: Calculadora Tipada
Implementar una calculadora con tipos estrictos y manejo de errores.

### Ejercicio 3: Lista de Tareas con TypeScript
Migrar el ejercicio de lista de tareas a TypeScript con tipos apropiados.

### Ejercicio 4: API Client Tipado
Crear un cliente para consumir una API REST con tipos TypeScript.

---

## 🎯 Proyecto de Clase: Aplicación de Notas

Desarrollaremos una aplicación de notas completa que incluya:

- Interfaces para modelos de datos
- Clases para lógica de negocio
- Tipado del DOM y eventos
- Manejo de LocalStorage tipado
- Validaciones de tipos en tiempo de ejecución

---

## 📖 Recursos Adicionales

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Definitely Typed](https://definitelytyped.org/) - Tipos para librerías JavaScript
- [TSConfig Reference](https://www.typescriptlang.org/tsconfig)

---

## 🏠 Tareas para Casa

1. **Migración Gradual**: Tomar un proyecto JavaScript anterior y migrarlo gradualmente a TypeScript.

2. **Sistema de E-commerce**: Crear interfaces y clases para un sistema de comercio electrónico (productos, carrito, usuarios).

3. **API Client**: Desarrollar un cliente para la API de JSONPlaceholder con tipos completos.

4. **Componente Reutilizable**: Crear un componente de formulario genérico y reutilizable.

---

## ✅ Checklist de Conceptos

- [ ] Entiendo qué es TypeScript y sus ventajas
- [ ] Puedo configurar un proyecto TypeScript desde cero
- [ ] Conozco los tipos primitivos y cómo usarlos
- [ ] Sé crear y usar interfaces y types
- [ ] Puedo trabajar con clases y herencia en TypeScript
- [ ] Entiendo los generics y cuándo usarlos
- [ ] Puedo tipar correctamente el DOM y eventos
- [ ] Sé manejar APIs con tipos apropiados
- [ ] Entiendo la diferencia entre interface y type
- [ ] Puedo migrar código JavaScript a TypeScript

---

## 🔧 Utilidades de Tipos Avanzadas

```typescript
// Utility Types útiles
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    contraseña: string;
    fechaCreacion: Date;
}

// Partial - hace todas las propiedades opcionales
type UsuarioParcial = Partial<Usuario>;

// Pick - selecciona propiedades específicas
type UsuarioPublico = Pick<Usuario, 'id' | 'nombre' | 'email'>;

// Omit - excluye propiedades específicas
type UsuarioSinPassword = Omit<Usuario, 'contraseña'>;

// Required - hace todas las propiedades requeridas
type UsuarioCompleto = Required<Usuario>;

// Record - crea un objeto con claves específicas
type EstadosUsuario = Record<'activo' | 'inactivo' | 'suspendido', boolean>;

// Mapped Types personalizados
type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
};

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
```

---

> **Próxima clase**: Proyecto Integrador - Desarrollo de aplicación web completa con todos los conceptos aprendidos