// ===== TIENDA ONLINE CON TYPESCRIPT =====
// Ejercicio práctico de tipos, interfaces y clases

import {
    Catalogo,
    Carrito,
    GestorOrdenes,
    type Producto,
    type Orden
} from './types.js';

// ===== INICIALIZACIÓN GLOBAL =====
let catalogo: Catalogo;
let carrito: Carrito;
let gestorOrdenes: GestorOrdenes;

// ===== INICIALIZACIÓN DOM =====
document.addEventListener('DOMContentLoaded', () => {
    inicializarAplicacion();
    configurarEventListeners();
});

// ===== INICIALIZAR APLICACIÓN =====
function inicializarAplicacion(): void {
    console.log('🚀 Inicializando Tienda Online con TypeScript...');
    
    // Crear instancias
    catalogo = new Catalogo();
    carrito = new Carrito();
    gestorOrdenes = new GestorOrdenes();

    // Agregar productos de ejemplo
    agregarProductosDemo();
    
    // Mostrar catálogo
    mostrarProductos();
    
    console.log('✅ Aplicación inicializada correctamente');
}

// ===== AGREGAR PRODUCTOS DEMO =====
function agregarProductosDemo(): void {
    // Electrónica
    catalogo.agregarProducto(
        'Laptop Dell XPS',
        1200,
        'electrónica',
        'Laptop de alta performance',
        true
    );

    catalogo.agregarProducto(
        'iPhone 15',
        999,
        'electrónica',
        'Teléfono inteligente',
        true
    );

    // Ropa
    catalogo.agregarProducto(
        'Camiseta Nike',
        45,
        'ropa',
        'Camiseta deportiva de calidad',
        true
    );

    catalogo.agregarProducto(
        'Jeans Levi\'s',
        80,
        'ropa',
        'Pantalón vaquero clásico',
        true
    );

    // Libros
    catalogo.agregarProducto(
        'Clean Code',
        35,
        'libros',
        'Cómo escribir código limpio y profesional',
        true
    );

    catalogo.agregarProducto(
        'JavaScript: The Good Parts',
        28,
        'libros',
        'Guía de las mejores prácticas de JavaScript',
        false
    );

    // Alimentos
    catalogo.agregarProducto(
        'Café Premium',
        15,
        'alimentos',
        'Café molido de origen colombiano',
        true
    );

    console.log('📦 Productos de demostración agregados');
}

// ===== CONFIGURAR EVENT LISTENERS =====
function configurarEventListeners(): void {
    // Botones de categoría
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const categoria = (e.target as HTMLElement).getAttribute('data-category');
            if (categoria) {
                filtrarPorCategoria(categoria as any);
            }
        });
    });

    // Búsqueda
    document.getElementById('searchInput')?.addEventListener('input', (e) => {
        const termino = (e.target as HTMLInputElement).value;
        buscarProductos(termino);
    });

    // Botón limpiar carrito
    document.getElementById('clearCart')?.addEventListener('click', () => {
        carrito.vaciar();
        actualizarCarrito();
        mostrarMensaje('Carrito vaciado', 'info');
    });

    // Botón procesar orden
    document.getElementById('checkoutBtn')?.addEventListener('click', () => {
        procesarOrden();
    });

    // Mostrar todas las órdenes
    document.getElementById('showOrders')?.addEventListener('click', () => {
        mostrarOrdenes();
    });
}

// ===== MOSTRAR PRODUCTOS =====
function mostrarProductos(): void {
    const productos = catalogo.obtenerProductos();
    renderizarProductos(productos);
}

function renderizarProductos(productos: Producto[]): void {
    const container = document.getElementById('products-container');
    if (!container) return;

    if (productos.length === 0) {
        container.innerHTML = '<p class="empty-state">No hay productos disponibles</p>';
        return;
    }

    const html = productos.map(producto => `
        <div class="product-card ${!producto.enStock ? 'out-of-stock' : ''}">
            <div class="product-header">
                <h3>${producto.nombre}</h3>
                <span class="product-category">${producto.categoria}</span>
            </div>
            
            <p class="product-description">${producto.descripcion}</p>
            
            <div class="product-footer">
                <div class="product-price">$${producto.precio.toFixed(2)}</div>
                ${producto.enStock ? 
                    `<button onclick="agregarAlCarrito(${producto.id})" class="btn btn-primary">
                        Agregar al carrito
                    </button>` :
                    `<button disabled class="btn btn-disabled">Sin stock</button>`
                }
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}

// Función global para agregar al carrito
(window as any).agregarAlCarrito = (productoId: number): void => {
    const producto = catalogo.obtenerProductoPorId(productoId);
    
    if (producto && producto.enStock) {
        carrito.agregarProducto(producto, 1);
        actualizarCarrito();
        mostrarMensaje(`${producto.nombre} agregado al carrito`, 'success');
    } else {
        mostrarMensaje('Producto no disponible', 'error');
    }
};

// ===== FILTRAR POR CATEGORÍA =====
function filtrarPorCategoria(categoria: string): void {
    if (categoria === 'todos') {
        mostrarProductos();
    } else {
        const productos = catalogo.obtenerPorCategoria(categoria as any);
        renderizarProductos(productos);
    }

    // Actualizar botones activos
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === categoria) {
            btn.classList.add('active');
        }
    });
}

// ===== BUSCAR PRODUCTOS =====
function buscarProductos(termino: string): void {
    const productos = catalogo.obtenerProductos().filter(p =>
        p.nombre.toLowerCase().includes(termino.toLowerCase()) ||
        p.descripcion.toLowerCase().includes(termino.toLowerCase())
    );
    
    renderizarProductos(productos);
}

// ===== ACTUALIZAR CARRITO =====
function actualizarCarrito(): void {
    const items = carrito.obtenerItems();
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    const countEl = document.getElementById('cart-count');

    if (!container) return;

    // Actualizar badge de cantidad
    if (countEl) {
        countEl.textContent = carrito.totalItems.toString();
    }

    // Actualizar total
    if (totalEl) {
        totalEl.textContent = `$${carrito.calcularTotal().toFixed(2)}`;
    }

    // Actualizar items
    if (items.length === 0) {
        container.innerHTML = '<p class="empty-state">Tu carrito está vacío</p>';
        return;
    }

    const html = items.map(item => `
        <div class="cart-item">
            <div class="item-info">
                <h4>${item.producto.nombre}</h4>
                <p>$${item.producto.precio.toFixed(2)} x ${item.cantidad}</p>
            </div>
            
            <div class="item-controls">
                <input 
                    type="number" 
                    value="${item.cantidad}" 
                    min="1"
                    onchange="actualizarCantidad(${item.producto.id}, this.value)"
                    class="quantity-input"
                />
                <button 
                    onclick="eliminarDelCarrito(${item.producto.id})"
                    class="btn btn-danger btn-small"
                >
                    Eliminar
                </button>
            </div>
            
            <div class="item-subtotal">
                $${(item.producto.precio * item.cantidad).toFixed(2)}
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}

// Funciones globales para carrito
(window as any).actualizarCantidad = (productoId: number, cantidad: string): void => {
    const cant = parseInt(cantidad);
    if (carrito.actualizarCantidad(productoId, cant)) {
        actualizarCarrito();
    }
};

(window as any).eliminarDelCarrito = (productoId: number): void => {
    if (carrito.eliminarProducto(productoId)) {
        actualizarCarrito();
        mostrarMensaje('Producto eliminado del carrito', 'info');
    }
};

// ===== PROCESAR ORDEN =====
function procesarOrden(): void {
    if (carrito.estaVacio()) {
        mostrarMensaje('El carrito está vacío', 'error');
        return;
    }

    const orden = gestorOrdenes.crearOrden(carrito);
    
    if (orden) {
        // Vaciar carrito
        carrito.vaciar();
        actualizarCarrito();

        // Mostrar confirmación
        mostrarMensaje(`¡Orden ${orden.id} creada exitosamente!`, 'success');
        
        console.log('📋 Orden procesada:', orden);
        
        // Auto-guardar en el documento
        const ordersEl = document.getElementById('orders-summary');
        if (ordersEl) {
            ordersEl.innerHTML = `
                <h3>Última orden: ${orden.id}</h3>
                <p>Total: $${orden.total.toFixed(2)}</p>
                <p>Estado: ${orden.estado}</p>
            `;
        }
    }
}

// ===== MOSTRAR ÓRDENES =====
function mostrarOrdenes(): void {
    const ordenes = gestorOrdenes.obtenerOrdenes();
    
    if (ordenes.length === 0) {
        mostrarMensaje('No hay órdenes procesadas', 'info');
        return;
    }

    const container = document.getElementById('orders-list');
    if (!container) return;

    const html = ordenes.map(orden => `
        <div class="order-card">
            <div class="order-header">
                <h4>${orden.id}</h4>
                <span class="order-status ${orden.estado}">${orden.estado}</span>
            </div>
            
            <div class="order-details">
                <p><strong>Fecha:</strong> ${orden.fecha.toLocaleDateString()}</p>
                <p><strong>Total:</strong> $${orden.total.toFixed(2)}</p>
                <p><strong>Items:</strong> ${orden.items.length}</p>
            </div>
            
            <div class="order-items">
                ${orden.items.map(item => `
                    <small>${item.producto.nombre} x${item.cantidad}</small>
                `).join('')}
            </div>
            
            <div class="order-actions">
                <button onclick="cambiarEstadoOrden('${orden.id}', 'completada')" class="btn btn-small btn-success">
                    Completar
                </button>
                <button onclick="cambiarEstadoOrden('${orden.id}', 'cancelada')" class="btn btn-small btn-danger">
                    Cancelar
                </button>
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}

// Función global para cambiar estado
(window as any).cambiarEstadoOrden = (ordenId: string, nuevoEstado: string): void => {
    if (gestorOrdenes.cambiarEstado(ordenId, nuevoEstado as any)) {
        mostrarOrdenes();
        mostrarMensaje(`Orden ${ordenId} actualizada a ${nuevoEstado}`, 'success');
    }
};

// ===== UTILIDADES UI =====
function mostrarMensaje(mensaje: string, tipo: 'success' | 'error' | 'info'): void {
    console.log(`[${tipo.toUpperCase()}] ${mensaje}`);
    
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = `notification notification-${tipo}`;
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    // Mostrar notificación
    setTimeout(() => notificacion.classList.add('show'), 10);
    
    // Eliminar después de 3 segundos
    setTimeout(() => {
        notificacion.classList.remove('show');
        setTimeout(() => notificacion.remove(), 300);
    }, 3000);
}

// ===== DEBUG =====
(window as any).debugApp = {
    catalogo,
    carrito,
    gestorOrdenes
};

console.log('🎉 Tienda Online con TypeScript completamente cargada');
console.log('💡 Usa window.debugApp para inspeccionar los gestores desde la consola');
