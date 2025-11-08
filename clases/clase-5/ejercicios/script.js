// ===== EJERCICIO 1: CONTADOR INTERACTIVO =====

// Seleccionar elementos del DOM
const contador = document.getElementById('contador');
const btnIncrementar = document.getElementById('incrementar');
const btnDecrementar = document.getElementById('decrementar');
const btnReset = document.getElementById('reset');

// Variable para mantener el valor del contador
let valorContador = 0;

// Función para actualizar la pantalla del contador
function actualizarContador() {
    contador.textContent = valorContador;
    
    // Cambiar color según el valor
    if (valorContador > 0) {
        contador.style.color = '#38a169'; // Verde
    } else if (valorContador < 0) {
        contador.style.color = '#e53e3e'; // Rojo
    } else {
        contador.style.color = '#667eea'; // Azul por defecto
    }
}

// Event listeners para el contador
btnIncrementar.addEventListener('click', () => {
    valorContador++;
    actualizarContador();
});

btnDecrementar.addEventListener('click', () => {
    valorContador--;
    actualizarContador();
});

btnReset.addEventListener('click', () => {
    valorContador = 0;
    actualizarContador();
});

// ===== EJERCICIO 2: CAMBIO DE COLORES =====

// Seleccionar elementos
const colorDisplay = document.getElementById('color-display');
const colorButtons = document.querySelectorAll('.color-btn');

// Agregar event listeners a todos los botones de color
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color');
        colorDisplay.style.backgroundColor = color;
        
        // Agregar efecto de rotación
        colorDisplay.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            colorDisplay.style.transform = 'rotate(0deg)';
        }, 500);
    });
});

// ===== EJERCICIO 3: LISTA DE TAREAS =====

// Seleccionar elementos
const nuevaTareaInput = document.getElementById('nueva-tarea');
const btnAgregarTarea = document.getElementById('agregar-tarea');
const listaTareas = document.getElementById('lista-tareas');
const btnLimpiarCompletadas = document.getElementById('limpiar-completadas');

// Array para almacenar las tareas
let tareas = [];
let idTarea = 0;

// Función para crear un elemento de tarea
function crearElementoTarea(tarea) {
    const li = document.createElement('li');
    li.className = 'tarea-item';
    li.setAttribute('data-id', tarea.id);
    
    if (tarea.completada) {
        li.classList.add('completada');
    }
    
    li.innerHTML = `
        <span onclick="toggleTarea(${tarea.id})">${tarea.texto}</span>
        <button class="btn-eliminar" onclick="eliminarTarea(${tarea.id})">🗑️</button>
    `;
    
    return li;
}

// Función para renderizar la lista de tareas
function renderizarTareas() {
    listaTareas.innerHTML = '';
    tareas.forEach(tarea => {
        const elementoTarea = crearElementoTarea(tarea);
        listaTareas.appendChild(elementoTarea);
    });
}

// Función para agregar nueva tarea
function agregarTarea() {
    const texto = nuevaTareaInput.value.trim();
    
    if (texto === '') {
        alert('Por favor, escribe una tarea válida');
        return;
    }
    
    const nuevaTarea = {
        id: idTarea++,
        texto: texto,
        completada: false
    };
    
    tareas.push(nuevaTarea);
    nuevaTareaInput.value = '';
    renderizarTareas();
}

// Función para alternar estado de tarea (completada/pendiente)
function toggleTarea(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.completada = !tarea.completada;
        renderizarTareas();
    }
}

// Función para eliminar tarea
function eliminarTarea(id) {
    tareas = tareas.filter(t => t.id !== id);
    renderizarTareas();
}

// Función para limpiar tareas completadas
function limpiarTareasCompletadas() {
    tareas = tareas.filter(t => !t.completada);
    renderizarTareas();
}

// Event listeners para las tareas
btnAgregarTarea.addEventListener('click', agregarTarea);

nuevaTareaInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});

btnLimpiarCompletadas.addEventListener('click', limpiarTareasCompletadas);

// ===== EJERCICIO 4: GALERÍA DE IMÁGENES =====

// Seleccionar elementos
const imagenGrande = document.getElementById('imagen-grande');
const miniaturas = document.querySelectorAll('.miniatura');

// Función para cambiar imagen principal
function cambiarImagenPrincipal(src, elemento) {
    // Cambiar la imagen grande
    imagenGrande.src = src;
    
    // Remover clase active de todas las miniaturas
    miniaturas.forEach(mini => mini.classList.remove('active'));
    
    // Agregar clase active a la miniatura seleccionada
    elemento.classList.add('active');
    
    // Efecto de fade
    imagenGrande.style.opacity = '0';
    setTimeout(() => {
        imagenGrande.style.opacity = '1';
    }, 150);
}

// Agregar event listeners a las miniaturas
miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', () => {
        const fullSrc = miniatura.getAttribute('data-full');
        cambiarImagenPrincipal(fullSrc, miniatura);
    });
});

// ===== EJERCICIO 5: CALCULADORA =====

// Variables para la calculadora
let operacionActual = '';
let operadorAnterior = '';
let operacion = null;

// Función para agregar número
function agregarNumero(numero) {
    const display = document.getElementById('resultado');
    
    if (numero === '.' && display.value.includes('.')) {
        return; // No permitir múltiples puntos decimales
    }
    
    if (display.value === '0' && numero !== '.') {
        display.value = numero;
    } else {
        display.value += numero;
    }
}

// Función para agregar operador
function agregarOperador(op) {
    const display = document.getElementById('resultado');
    
    if (display.value === '') return;
    
    if (operadorAnterior !== '') {
        calcular();
    }
    
    operacion = op;
    operadorAnterior = display.value;
    display.value = '';
}

// Función para calcular resultado
function calcular() {
    const display = document.getElementById('resultado');
    let resultado;
    const anterior = parseFloat(operadorAnterior);
    const actual = parseFloat(display.value);
    
    if (isNaN(anterior) || isNaN(actual)) return;
    
    switch (operacion) {
        case '+':
            resultado = anterior + actual;
            break;
        case '-':
            resultado = anterior - actual;
            break;
        case '*':
            resultado = anterior * actual;
            break;
        case '/':
            if (actual === 0) {
                alert('Error: División por cero');
                return;
            }
            resultado = anterior / actual;
            break;
        default:
            return;
    }
    
    display.value = resultado;
    operacion = null;
    operadorAnterior = '';
}

// Función para limpiar calculadora
function limpiar() {
    const display = document.getElementById('resultado');
    display.value = '';
    operadorAnterior = '';
    operacion = null;
}

// Función para borrar último carácter
function borrarUltimo() {
    const display = document.getElementById('resultado');
    display.value = display.value.slice(0, -1);
}

// Event listener para teclas del teclado
document.addEventListener('keydown', (e) => {
    const display = document.getElementById('resultado');
    
    // Solo funcionar si el display está enfocado o no hay otro input enfocado
    if (document.activeElement.type === 'text' && document.activeElement.id !== 'resultado') {
        return;
    }
    
    if (e.key >= '0' && e.key <= '9') {
        agregarNumero(e.key);
    } else if (e.key === '.') {
        agregarNumero('.');
    } else if (e.key === '+') {
        agregarOperador('+');
    } else if (e.key === '-') {
        agregarOperador('-');
    } else if (e.key === '*') {
        agregarOperador('*');
    } else if (e.key === '/') {
        e.preventDefault(); // Prevenir búsqueda rápida en navegador
        agregarOperador('/');
    } else if (e.key === 'Enter' || e.key === '=') {
        calcular();
    } else if (e.key === 'Escape') {
        limpiar();
    } else if (e.key === 'Backspace') {
        borrarUltimo();
    }
});

// ===== INICIALIZACIÓN =====

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎯 Ejercicios de DOM cargados correctamente');
    
    // Enfocar el input de nueva tarea
    nuevaTareaInput.focus();
    
    // Mostrar mensaje de bienvenida
    setTimeout(() => {
        alert('¡Bienvenido a los ejercicios de manipulación del DOM! 🚀\n\nExplora cada ejercicio y observa cómo JavaScript interactúa con la página.');
    }, 1000);
});

// ===== FUNCIONES ADICIONALES =====

// Función para mostrar estadísticas de tareas
function mostrarEstadisticas() {
    const total = tareas.length;
    const completadas = tareas.filter(t => t.completada).length;
    const pendientes = total - completadas;
    
    console.log(`📊 Estadísticas de Tareas:
    Total: ${total}
    Completadas: ${completadas}
    Pendientes: ${pendientes}`);
}