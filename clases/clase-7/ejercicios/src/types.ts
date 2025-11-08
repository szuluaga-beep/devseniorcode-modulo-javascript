// ===== INTERFACES Y TIPOS =====

// Interfaz para Usuario
export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    edad?: number;
    rol: 'usuario' | 'admin' | 'moderador';
    fechaCreacion: Date;
}

// Interfaz extendida para Admin
export interface Admin extends Usuario {
    permisos: string[];
    nivel: 'básico' | 'avanzado' | 'super';
}

// Tipos para análisis de tipos
export type TipoJS = 'string' | 'number' | 'boolean' | 'object' | 'undefined' | 'function' | 'symbol';

export interface AnalisisTipo {
    valor: any;
    tipo: TipoJS;
    esValido: boolean;
    mensaje: string;
}

// Interfaz para Vehículo
export interface IVehiculo {
    marca: string;
    modelo: string;
    año: number;
    encendido: boolean;
    encender(): void;
    apagar(): void;
    obtenerInfo(): string;
}

// Tipo para categorías de notas
export type CategoriaNota = 'personal' | 'trabajo' | 'ideas' | 'recordatorios';

// Interfaz para Nota
export interface Nota {
    id: string;
    titulo: string;
    contenido: string;
    categoria: CategoriaNota;
    fechaCreacion: Date;
    fechaModificacion: Date;
    etiquetas: string[];
}

// Tipos utilitarios
export type CrearNota = Omit<Nota, 'id' | 'fechaCreacion' | 'fechaModificacion'>;
export type ActualizarNota = Partial<Pick<Nota, 'titulo' | 'contenido' | 'categoria' | 'etiquetas'>>;

// ===== CLASES =====

// Clase abstracta base para Vehículo
export abstract class Vehiculo implements IVehiculo {
    protected _encendido: boolean = false;

    constructor(
        public marca: string,
        public modelo: string,
        public año: number
    ) {}

    get encendido(): boolean {
        return this._encendido;
    }

    encender(): void {
        if (!this._encendido) {
            this._encendido = true;
            this.onEncender();
        }
    }

    apagar(): void {
        if (this._encendido) {
            this._encendido = false;
            this.onApagar();
        }
    }

    obtenerInfo(): string {
        const estado = this._encendido ? '🟢 Encendido' : '🔴 Apagado';
        return `${this.marca} ${this.modelo} (${this.año}) - ${estado}`;
    }

    // Métodos abstractos que deben implementar las clases hijas
    abstract onEncender(): void;
    abstract onApagar(): void;
    abstract obtenerTipo(): string;
    abstract obtenerSonido(): string;
}

// Clase Coche
export class Coche extends Vehiculo {
    onEncender(): void {
        console.log(`🚗 ${this.marca} ${this.modelo}: Motor arrancado`);
    }

    onApagar(): void {
        console.log(`🚗 ${this.marca} ${this.modelo}: Motor apagado`);
    }

    obtenerTipo(): string {
        return 'Coche';
    }

    obtenerSonido(): string {
        return 'Vroooom!';
    }
}

// Clase Motocicleta
export class Motocicleta extends Vehiculo {
    onEncender(): void {
        console.log(`🏍️ ${this.marca} ${this.modelo}: ¡Motor rugiendo!`);
    }

    onApagar(): void {
        console.log(`🏍️ ${this.marca} ${this.modelo}: Motor silenciado`);
    }

    obtenerTipo(): string {
        return 'Motocicleta';
    }

    obtenerSonido(): string {
        return 'Braaap!';
    }
}

// Clase Bicicleta
export class Bicicleta extends Vehiculo {
    onEncender(): void {
        console.log(`🚴 ${this.marca} ${this.modelo}: Lista para pedalear`);
    }

    onApagar(): void {
        console.log(`🚴 ${this.marca} ${this.modelo}: Estacionada`);
    }

    obtenerTipo(): string {
        return 'Bicicleta';
    }

    obtenerSonido(): string {
        return 'Ring ring!';
    }
}

// ===== GENERICS =====

// Clase genérica Contenedor
export class Contenedor<T> {
    private elementos: T[] = [];

    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }

    obtener(indice: number): T | undefined {
        return this.elementos[indice];
    }

    obtenerTodos(): T[] {
        return [...this.elementos];
    }

    obtenerPrimero(): T | undefined {
        return this.elementos[0];
    }

    obtenerUltimo(): T | undefined {
        return this.elementos[this.elementos.length - 1];
    }

    eliminar(indice: number): T | undefined {
        return this.elementos.splice(indice, 1)[0];
    }

    limpiar(): void {
        this.elementos = [];
    }

    get longitud(): number {
        return this.elementos.length;
    }

    // Método genérico para ordenar
    ordenar(compareFn?: (a: T, b: T) => number): void {
        this.elementos.sort(compareFn);
    }

    // Método genérico para filtrar
    filtrar(predicado: (elemento: T) => boolean): T[] {
        return this.elementos.filter(predicado);
    }

    // Método genérico para mapear
    mapear<U>(transformador: (elemento: T) => U): U[] {
        return this.elementos.map(transformador);
    }

    // Método genérico para buscar
    buscar(predicado: (elemento: T) => boolean): T | undefined {
        return this.elementos.find(predicado);
    }

    // Método para obtener estadísticas
    obtenerEstadisticas(): { longitud: number; tipos: { [key: string]: number } } {
        const tipos: { [key: string]: number } = {};
        
        this.elementos.forEach(elemento => {
            const tipo = typeof elemento;
            tipos[tipo] = (tipos[tipo] || 0) + 1;
        });

        return {
            longitud: this.elementos.length,
            tipos
        };
    }
}

// ===== UTILIDADES DE TIPOS =====

// Función para validar tipos
export function validarTipo<T>(valor: any, validador: (v: any) => v is T): AnalisisTipo {
    const tipo = typeof valor as TipoJS;
    const esValido = validador(valor);
    
    let mensaje = '';
    if (esValido) {
        mensaje = `✅ Tipo ${tipo} válido`;
    } else {
        mensaje = `❌ Tipo ${tipo} no válido para el validador`;
    }

    return {
        valor,
        tipo,
        esValido,
        mensaje
    };
}

// Validadores de tipo
export const esString = (valor: any): valor is string => typeof valor === 'string';
export const esNumber = (valor: any): valor is number => typeof valor === 'number' && !isNaN(valor);
export const esBoolean = (valor: any): valor is boolean => typeof valor === 'boolean';
export const esArray = (valor: any): valor is any[] => Array.isArray(valor);
export const esObject = (valor: any): valor is object => typeof valor === 'object' && valor !== null && !Array.isArray(valor);

// Factory para crear usuarios
export class UsuarioFactory {
    private static contadorId = 1;

    static crearUsuario(datos: Omit<Usuario, 'id' | 'fechaCreacion'>): Usuario {
        return {
            id: this.contadorId++,
            ...datos,
            fechaCreacion: new Date()
        };
    }

    static crearAdmin(datos: Omit<Admin, 'id' | 'fechaCreacion'>): Admin {
        return {
            id: this.contadorId++,
            ...datos,
            fechaCreacion: new Date()
        };
    }

    static validarEmail(email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    static validarEdad(edad: number): boolean {
        return edad >= 0 && edad <= 120;
    }
}

// Gestor de vehículos
export class GestorVehiculos {
    private vehiculos: Vehiculo[] = [];

    agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    obtenerVehiculos(): Vehiculo[] {
        return [...this.vehiculos];
    }

    encenderTodos(): void {
        this.vehiculos.forEach(vehiculo => vehiculo.encender());
    }

    apagarTodos(): void {
        this.vehiculos.forEach(vehiculo => vehiculo.apagar());
    }

    obtenerEstadisticas(): {
        total: number;
        encendidos: number;
        apagados: number;
        porTipo: { [tipo: string]: number };
    } {
        const encendidos = this.vehiculos.filter(v => v.encendido).length;
        const porTipo: { [tipo: string]: number } = {};

        this.vehiculos.forEach(vehiculo => {
            const tipo = vehiculo.obtenerTipo();
            porTipo[tipo] = (porTipo[tipo] || 0) + 1;
        });

        return {
            total: this.vehiculos.length,
            encendidos,
            apagados: this.vehiculos.length - encendidos,
            porTipo
        };
    }

    crearVehiculo(tipo: string, marca: string, modelo: string, año: number): Vehiculo | null {
        switch (tipo.toLowerCase()) {
            case 'coche':
                return new Coche(marca, modelo, año);
            case 'moto':
            case 'motocicleta':
                return new Motocicleta(marca, modelo, año);
            case 'bicicleta':
                return new Bicicleta(marca, modelo, año);
            default:
                return null;
        }
    }
}

// ===== MANEJO DE LOCAL STORAGE TIPADO =====

export class LocalStorageManager<T> {
    constructor(private clave: string) {}

    guardar(datos: T): void {
        try {
            const datosString = JSON.stringify(datos);
            localStorage.setItem(this.clave, datosString);
        } catch (error) {
            console.error('Error al guardar en localStorage:', error);
        }
    }

    cargar(): T | null {
        try {
            const datosString = localStorage.getItem(this.clave);
            return datosString ? JSON.parse(datosString) : null;
        } catch (error) {
            console.error('Error al cargar desde localStorage:', error);
            return null;
        }
    }

    eliminar(): void {
        localStorage.removeItem(this.clave);
    }

    existe(): boolean {
        return localStorage.getItem(this.clave) !== null;
    }
}

// ===== GESTOR DE NOTAS =====

export class GestorNotas {
    private notas: Nota[] = [];
    private storage = new LocalStorageManager<Nota[]>('app-notas');
    private contadorId = 1;

    constructor() {
        this.cargarNotas();
    }

    private cargarNotas(): void {
        const notasGuardadas = this.storage.cargar();
        if (notasGuardadas) {
            this.notas = notasGuardadas;
            this.contadorId = Math.max(...this.notas.map(n => parseInt(n.id))) + 1;
        }
    }

    private guardarNotas(): void {
        this.storage.guardar(this.notas);
    }

    private generarId(): string {
        return `nota-${this.contadorId++}`;
    }

    crearNota(datos: CrearNota): Nota {
        const nuevaNota: Nota = {
            id: this.generarId(),
            ...datos,
            fechaCreacion: new Date(),
            fechaModificacion: new Date()
        };

        this.notas.push(nuevaNota);
        this.guardarNotas();
        return nuevaNota;
    }

    obtenerNotas(): Nota[] {
        return [...this.notas];
    }

    obtenerNotaPorId(id: string): Nota | undefined {
        return this.notas.find(nota => nota.id === id);
    }

    actualizarNota(id: string, actualizaciones: ActualizarNota): Nota | null {
        const indice = this.notas.findIndex(nota => nota.id === id);
        if (indice === -1) return null;

        this.notas[indice] = {
            ...this.notas[indice],
            ...actualizaciones,
            fechaModificacion: new Date()
        };

        this.guardarNotas();
        return this.notas[indice];
    }

    eliminarNota(id: string): boolean {
        const indice = this.notas.findIndex(nota => nota.id === id);
        if (indice === -1) return false;

        this.notas.splice(indice, 1);
        this.guardarNotas();
        return true;
    }

    buscarNotas(termino: string): Nota[] {
        const terminoLower = termino.toLowerCase();
        return this.notas.filter(nota =>
            nota.titulo.toLowerCase().includes(terminoLower) ||
            nota.contenido.toLowerCase().includes(terminoLower) ||
            nota.etiquetas.some(etiqueta => etiqueta.toLowerCase().includes(terminoLower))
        );
    }

    filtrarPorCategoria(categoria: CategoriaNota | 'all'): Nota[] {
        if (categoria === 'all') return this.notas;
        return this.notas.filter(nota => nota.categoria === categoria);
    }

    obtenerCategorias(): CategoriaNota[] {
        const categorias = new Set(this.notas.map(nota => nota.categoria));
        return Array.from(categorias);
    }

    obtenerEstadisticas(): {
        total: number;
        porCategoria: { [categoria: string]: number };
        ultimaModificacion: Date | null;
    } {
        const porCategoria: { [categoria: string]: number } = {};
        
        this.notas.forEach(nota => {
            porCategoria[nota.categoria] = (porCategoria[nota.categoria] || 0) + 1;
        });

        const ultimaModificacion = this.notas.length > 0
            ? new Date(Math.max(...this.notas.map(n => n.fechaModificacion.getTime())))
            : null;

        return {
            total: this.notas.length,
            porCategoria,
            ultimaModificacion
        };
    }
}