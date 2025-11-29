// ===== EJERCICIO: TIENDA ONLINE TIPADA =====
// Un ejemplo práctico y fácil de entender sobre tipos en TypeScript

// ===== 1. INTERFACES Y TIPOS BÁSICOS =====

// Tipo para categorías de productos
export type Categoria = 'electrónica' | 'ropa' | 'libros' | 'alimentos';

// Interfaz para un Producto
export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    categoria: Categoria;
    enStock: boolean;
    descripcion: string;
}

// Interfaz para un Carrito
export interface CarritoItem {
    producto: Producto;
    cantidad: number;
}

// Tipo para una Orden
export interface Orden {
    id: string;
    items: CarritoItem[];
    total: number;
    fecha: Date;
    estado: 'pendiente' | 'completada' | 'cancelada';
}

// ===== 2. CLASE PARA GESTIONAR EL CATÁLOGO =====

export class Catalogo {
    private productos: Producto[] = [];
    private contadorId = 1;

    // Agregar un producto
    agregarProducto(
        nombre: string,
        precio: number,
        categoria: Categoria,
        descripcion: string,
        enStock: boolean = true
    ): Producto {
        const producto: Producto = {
            id: this.contadorId++,
            nombre,
            precio,
            categoria,
            descripcion,
            enStock
        };
        
        this.productos.push(producto);
        return producto;
    }

    // Obtener todos los productos
    obtenerProductos(): Producto[] {
        return [...this.productos];
    }

    // Buscar producto por ID
    obtenerProductoPorId(id: number): Producto | undefined {
        return this.productos.find(p => p.id === id);
    }

    // Filtrar por categoría
    obtenerPorCategoria(categoria: Categoria): Producto[] {
        return this.productos.filter(p => p.categoria === categoria);
    }

    // Obtener productos en stock
    obtenerEnStock(): Producto[] {
        return this.productos.filter(p => p.enStock);
    }

    // Actualizar stock
    actualizarStock(id: number, enStock: boolean): boolean {
        const producto = this.obtenerProductoPorId(id);
        if (producto) {
            producto.enStock = enStock;
            return true;
        }
        return false;
    }
}

// ===== 3. CLASE PARA GESTIONAR EL CARRITO =====

export class Carrito {
    private items: CarritoItem[] = [];

    // Agregar producto al carrito
    agregarProducto(producto: Producto, cantidad: number): void {
        if (cantidad <= 0) {
            console.error('La cantidad debe ser mayor a 0');
            return;
        }

        const itemExistente = this.items.find(item => item.producto.id === producto.id);
        
        if (itemExistente) {
            itemExistente.cantidad += cantidad;
        } else {
            this.items.push({ producto, cantidad });
        }
    }

    // Eliminar producto del carrito
    eliminarProducto(productoId: number): boolean {
        const indice = this.items.findIndex(item => item.producto.id === productoId);
        if (indice !== -1) {
            this.items.splice(indice, 1);
            return true;
        }
        return false;
    }

    // Actualizar cantidad
    actualizarCantidad(productoId: number, cantidad: number): boolean {
        const item = this.items.find(item => item.producto.id === productoId);
        if (item) {
            if (cantidad <= 0) {
                return this.eliminarProducto(productoId);
            }
            item.cantidad = cantidad;
            return true;
        }
        return false;
    }

    // Obtener items del carrito
    obtenerItems(): CarritoItem[] {
        return [...this.items];
    }

    // Calcular total
    calcularTotal(): number {
        return this.items.reduce((total, item) => {
            return total + (item.producto.precio * item.cantidad);
        }, 0);
    }

    // Obtener cantidad de items
    get totalItems(): number {
        return this.items.reduce((total, item) => total + item.cantidad, 0);
    }

    // Vaciar carrito
    vaciar(): void {
        this.items = [];
    }

    // Verificar si el carrito está vacío
    estaVacio(): boolean {
        return this.items.length === 0;
    }
}

// ===== 4. CLASE PARA GESTIONAR ÓRDENES =====

export class GestorOrdenes {
    private ordenes: Orden[] = [];
    private contadorOrdenes = 1;

    // Crear una orden a partir del carrito
    crearOrden(carrito: Carrito): Orden | null {
        if (carrito.estaVacio()) {
            console.error('No se puede crear una orden con un carrito vacío');
            return null;
        }

        const orden: Orden = {
            id: `ORD-${this.contadorOrdenes++}`,
            items: carrito.obtenerItems(),
            total: carrito.calcularTotal(),
            fecha: new Date(),
            estado: 'pendiente'
        };

        this.ordenes.push(orden);
        return orden;
    }

    // Obtener todas las órdenes
    obtenerOrdenes(): Orden[] {
        return [...this.ordenes];
    }

    // Obtener orden por ID
    obtenerOrdenPorId(id: string): Orden | undefined {
        return this.ordenes.find(o => o.id === id);
    }

    // Cambiar estado de una orden
    cambiarEstado(
        id: string, 
        nuevoEstado: 'pendiente' | 'completada' | 'cancelada'
    ): boolean {
        const orden = this.obtenerOrdenPorId(id);
        if (orden) {
            orden.estado = nuevoEstado;
            return true;
        }
        return false;
    }

    // Obtener órdenes completadas
    obtenerOrdenesCompletadas(): Orden[] {
        return this.ordenes.filter(o => o.estado === 'completada');
    }

    // Calcular ventas totales
    calcularVentasTotales(): number {
        return this.ordenes
            .filter(o => o.estado === 'completada')
            .reduce((total, o) => total + o.total, 0);
    }
}
