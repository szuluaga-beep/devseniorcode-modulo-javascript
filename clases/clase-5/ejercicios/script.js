// ===== EJERCICIO 1: CAMBIO DE COLOR SIMPLE =====

// Array de colores disponibles
const colores = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];

// Función para generar un color aleatorio
function generarColorAleatorio() {
    return colores[Math.floor(Math.random() * colores.length)];
}

// Obtener elementos del DOM
const btnColor = document.getElementById('btn-color');
const colorActual = document.getElementById('color-actual');

// Agregar event listener al botón
btnColor.addEventListener('click', () => {
    const nuevoColor = generarColorAleatorio();
    document.body.style.background = nuevoColor;
    document.body.style.backgroundImage = 'none';
    colorActual.textContent = `Color actual: ${nuevoColor}`;
});

// ===== EJERCICIO 2: MOSTRAR Y OCULTAR =====

const btnToggle = document.getElementById('btn-toggle');
const cajaOculta = document.getElementById('caja-oculta');

btnToggle.addEventListener('click', () => {
    // Alternar entre mostrar y ocultar
    if (cajaOculta.style.display === 'none') {
        cajaOculta.style.display = 'block';
        btnToggle.textContent = 'Ocultar';
    } else {
        cajaOculta.style.display = 'none';
        btnToggle.textContent = 'Mostrar';
    }
});

// ===== EJERCICIO 4: CAMBIO DE TEXTO EN TIEMPO REAL =====

const inputTexto = document.getElementById('input-texto');
const textoDinamico = document.getElementById('texto-dinamico');

// Event listener para cuando escribes en el input
inputTexto.addEventListener('input', () => {
    textoDinamico.textContent = inputTexto.value || 'Tu texto aparecerá aquí';
});

// ===== EJERCICIO 5: CONTADOR SIMPLE =====

let contador = 0;
const numeroContador = document.getElementById('numero-contador');
const btnAumentar = document.getElementById('btn-aumentar');
const btnDisminuir = document.getElementById('btn-disminuir');
const btnReset = document.getElementById('btn-reset');

// Función para actualizar la pantalla del contador
function actualizarContador() {
    numeroContador.textContent = contador;
}

// Event listener para aumentar
btnAumentar.addEventListener('click', () => {
    contador++;
    actualizarContador();
});

// Event listener para disminuir
btnDisminuir.addEventListener('click', () => {
    contador--;
    actualizarContador();
});

// Event listener para reset
btnReset.addEventListener('click', () => {
    contador = 0;
    actualizarContador();
});

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
    
    // Mostrar mensaje de bienvenida
    setTimeout(() => {
        alert('¡Bienvenido a los ejercicios de manipulación del DOM! 🚀\n\nExplora el cambio de colores y la calculadora.');
    }, 1000);
});