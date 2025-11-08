// ===== IMPORTACIONES =====
import {
    Usuario,
    UsuarioFactory,
    validarTipo,
    esString,
    esNumber,
    esBoolean,
    GestorVehiculos,
    Contenedor,
    GestorNotas,
    CategoriaNota,
    CrearNota
} from './types.js';

// ===== INICIALIZACIÓN GLOBAL =====
let gestorUsuarios: Usuario[] = [];
let gestorVehiculos: GestorVehiculos;
let contenedorNumeros: Contenedor<number>;
let contenedorTextos: Contenedor<string>;
let gestorNotas: GestorNotas;
let notaActualId: string | null = null;

// ===== INICIALIZACIÓN DOM =====
document.addEventListener('DOMContentLoaded', () => {
    inicializarAplicacion();
    configurarEventListeners();
    actualizarEstadoTypeScript();
});

// ===== FUNCIONES DE INICIALIZACIÓN =====
function inicializarAplicacion(): void {
    console.log('🚀 Inicializando aplicación TypeScript...');
    
    // Inicializar gestores
    gestorVehiculos = new GestorVehiculos();
    contenedorNumeros = new Contenedor<number>();
    contenedorTextos = new Contenedor<string>();
    gestorNotas = new GestorNotas();
    
    // Configurar interfaces
    inicializarValidadorTipos();
    inicializarGestorUsuarios();
    inicializarGestorVehiculos();
    inicializarGenericos();
    inicializarAplicacionNotas();
    
    console.log('✅ Aplicación TypeScript inicializada correctamente');
}

function actualizarEstadoTypeScript(): void {
    const statusElement = document.getElementById('tsStatus');
    if (statusElement) {
        statusElement.innerHTML = `
            <span class="status-dot active"></span>
            <span class="status-text">TypeScript activo y funcionando</span>
        `;
        statusElement.classList.add('active');
    }
}

// ===== CONFIGURACIÓN DE EVENT LISTENERS =====
function configurarEventListeners(): void {
    // Validador de tipos
    configurarValidadorTipos();
    
    // Gestor de usuarios
    configurarGestorUsuarios();
    
    // Gestor de vehículos
    configurarGestorVehiculos();
    
    // Contenedores genéricos
    configurarGenericos();
    
    // Aplicación de notas
    configurarAplicacionNotas();
    
    // Navegación suave
    configurarNavegacion();
}

// ===== EJERCICIO 1: VALIDADOR DE TIPOS =====
function inicializarValidadorTipos(): void {
    console.log('📝 Inicializando validador de tipos...');
}

function configurarValidadorTipos(): void {
    const inputs = {
        string: document.getElementById('stringInput') as HTMLInputElement,
        number: document.getElementById('numberInput') as HTMLInputElement,
        boolean: document.getElementById('booleanInput') as HTMLSelectElement
    };

    const indicators = {
        string: document.getElementById('stringType') as HTMLElement,
        number: document.getElementById('numberType') as HTMLElement,
        boolean: document.getElementById('booleanType') as HTMLElement
    };

    const analysisArea = document.getElementById('typeAnalysis') as HTMLPreElement;

    // Event listeners para inputs
    Object.entries(inputs).forEach(([tipo, input]) => {
        if (input) {
            input.addEventListener('input', () => actualizarAnalisisTipos());
        }
    });

    function actualizarAnalisisTipos(): void {
        const valores = {
            string: inputs.string?.value || '',
            number: inputs.number?.value ? parseFloat(inputs.number.value) : '',
            boolean: inputs.boolean?.value ? inputs.boolean.value === 'true' : ''
        };

        const analisis = {
            string: validarTipo(valores.string, esString),
            number: validarTipo(valores.number, esNumber),
            boolean: validarTipo(valores.boolean, esBoolean)
        };

        // Actualizar indicadores
        Object.entries(analisis).forEach(([tipo, resultado]) => {
            const indicator = indicators[tipo as keyof typeof indicators];
            if (indicator) {
                indicator.textContent = resultado.esValido ? '✅' : '❌';
                indicator.className = `type-indicator ${resultado.esValido ? 'valid' : 'invalid'}`;
            }
        });

        // Actualizar análisis
        if (analysisArea) {
            const resumen = Object.entries(analisis)
                .map(([tipo, resultado]) => `${tipo}: ${resultado.mensaje}`)
                .join('\n');
            
            analysisArea.textContent = `Análisis de Tipos:\n\n${resumen}\n\nTipos detectados:\n${
                Object.entries(valores)
                    .map(([tipo, valor]) => `- ${tipo}: ${typeof valor} = "${valor}"`)
                    .join('\n')
            }`;
        }
    }
}

// ===== EJERCICIO 2: GESTOR DE USUARIOS =====
function inicializarGestorUsuarios(): void {
    actualizarListaUsuarios();
}

function configurarGestorUsuarios(): void {
    const form = document.getElementById('userForm') as HTMLFormElement;
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            crearUsuario();
        });
    }
}

function crearUsuario(): void {
    const form = document.getElementById('userForm') as HTMLFormElement;
    const formData = new FormData(form);

    const nombre = (document.getElementById('userName') as HTMLInputElement).value;
    const email = (document.getElementById('userEmail') as HTMLInputElement).value;
    const edadInput = (document.getElementById('userAge') as HTMLInputElement).value;
    const rol = (document.getElementById('userRole') as HTMLSelectElement).value as Usuario['rol'];

    // Validaciones
    if (!nombre || !email || !rol) {
        mostrarError('Todos los campos obligatorios deben completarse');
        return;
    }

    if (!UsuarioFactory.validarEmail(email)) {
        mostrarError('El email no tiene un formato válido');
        return;
    }

    const edad = edadInput ? parseInt(edadInput) : undefined;
    if (edad !== undefined && !UsuarioFactory.validarEdad(edad)) {
        mostrarError('La edad debe estar entre 0 y 120 años');
        return;
    }

    try {
        const nuevoUsuario = UsuarioFactory.crearUsuario({
            nombre,
            email,
            edad,
            rol
        });

        gestorUsuarios.push(nuevoUsuario);
        actualizarListaUsuarios();
        form.reset();
        mostrarExito(`Usuario ${nombre} creado exitosamente`);
        
        console.log('👤 Usuario creado:', nuevoUsuario);
    } catch (error) {
        mostrarError('Error al crear el usuario');
        console.error(error);
    }
}

function actualizarListaUsuarios(): void {
    const lista = document.getElementById('usersList');
    if (!lista) return;

    if (gestorUsuarios.length === 0) {
        lista.innerHTML = '<p class="empty-state">No hay usuarios creados aún...</p>';
        return;
    }

    const usuariosHTML = gestorUsuarios.map(usuario => `
        <div class="user-card">
            <div class="user-header">
                <h4>${usuario.nombre}</h4>
                <span class="user-role ${usuario.rol}">${usuario.rol}</span>
            </div>
            <div class="user-details">
                <p><strong>Email:</strong> ${usuario.email}</p>
                ${usuario.edad ? `<p><strong>Edad:</strong> ${usuario.edad} años</p>` : ''}
                <p><strong>ID:</strong> ${usuario.id}</p>
                <p><strong>Creado:</strong> ${usuario.fechaCreacion.toLocaleDateString()}</p>
            </div>
            <div class="user-actions">
                <button class="btn-danger" onclick="eliminarUsuario(${usuario.id})">Eliminar</button>
            </div>
        </div>
    `).join('');

    lista.innerHTML = usuariosHTML;
}

// Función global para eliminar usuario
(window as any).eliminarUsuario = (id: number): void => {
    gestorUsuarios = gestorUsuarios.filter(usuario => usuario.id !== id);
    actualizarListaUsuarios();
    mostrarExito('Usuario eliminado correctamente');
};

// ===== EJERCICIO 3: GESTOR DE VEHÍCULOS =====
function inicializarGestorVehiculos(): void {
    actualizarListaVehiculos();
    actualizarEstadisticasVehiculos();
}

function configurarGestorVehiculos(): void {
    const createBtn = document.getElementById('createVehicle');
    const startAllBtn = document.getElementById('startAllVehicles');
    const stopAllBtn = document.getElementById('stopAllVehicles');
    const statsBtn = document.getElementById('vehicleStats');

    createBtn?.addEventListener('click', crearVehiculo);
    startAllBtn?.addEventListener('click', () => {
        gestorVehiculos.encenderTodos();
        actualizarListaVehiculos();
        agregarLogVehiculo('🟢 Todos los vehículos encendidos');
    });
    stopAllBtn?.addEventListener('click', () => {
        gestorVehiculos.apagarTodos();
        actualizarListaVehiculos();
        agregarLogVehiculo('🔴 Todos los vehículos apagados');
    });
    statsBtn?.addEventListener('click', mostrarEstadisticasVehiculos);
}

function crearVehiculo(): void {
    const tipo = (document.getElementById('vehicleType') as HTMLSelectElement).value;
    const marca = (document.getElementById('vehicleBrand') as HTMLInputElement).value;
    const modelo = (document.getElementById('vehicleModel') as HTMLInputElement).value;
    const año = parseInt((document.getElementById('vehicleYear') as HTMLInputElement).value);

    if (!marca || !modelo || !año) {
        mostrarError('Todos los campos son obligatorios');
        return;
    }

    if (año < 1900 || año > 2025) {
        mostrarError('El año debe estar entre 1900 y 2025');
        return;
    }

    const vehiculo = gestorVehiculos.crearVehiculo(tipo, marca, modelo, año);
    if (vehiculo) {
        gestorVehiculos.agregarVehiculo(vehiculo);
        actualizarListaVehiculos();
        limpiarFormularioVehiculo();
        agregarLogVehiculo(`🚀 Nuevo ${vehiculo.obtenerTipo()} creado: ${vehiculo.obtenerInfo()}`);
        mostrarExito(`${vehiculo.obtenerTipo()} creado exitosamente`);
    } else {
        mostrarError('Tipo de vehículo no válido');
    }
}

function actualizarListaVehiculos(): void {
    const lista = document.getElementById('vehicleList');
    const garage = document.getElementById('vehicleGarage')?.querySelector('h4');
    
    if (!lista) return;

    const vehiculos = gestorVehiculos.obtenerVehiculos();
    
    if (garage) {
        garage.textContent = `Garaje (${vehiculos.length} vehículos)`;
    }

    if (vehiculos.length === 0) {
        lista.innerHTML = '<p class="empty-state">No hay vehículos en el garaje...</p>';
        return;
    }

    const vehiculosHTML = vehiculos.map((vehiculo, index) => `
        <div class="vehicle-card ${vehiculo.encendido ? 'running' : 'stopped'}">
            <div class="vehicle-info">
                <h4>${vehiculo.obtenerTipo()}</h4>
                <p>${vehiculo.obtenerInfo()}</p>
                <div class="vehicle-sound">${vehiculo.obtenerSonido()}</div>
            </div>
            <div class="vehicle-controls">
                <button onclick="toggleVehiculo(${index})" class="btn-secondary">
                    ${vehiculo.encendido ? 'Apagar' : 'Encender'}
                </button>
            </div>
        </div>
    `).join('');

    lista.innerHTML = vehiculosHTML;
    actualizarEstadisticasVehiculos();
}

// Función global para toggle de vehículo
(window as any).toggleVehiculo = (index: number): void => {
    const vehiculos = gestorVehiculos.obtenerVehiculos();
    const vehiculo = vehiculos[index];
    
    if (vehiculo) {
        if (vehiculo.encendido) {
            vehiculo.apagar();
            agregarLogVehiculo(`🔴 ${vehiculo.obtenerInfo()} apagado`);
        } else {
            vehiculo.encender();
            agregarLogVehiculo(`🟢 ${vehiculo.obtenerInfo()} encendido`);
        }
        actualizarListaVehiculos();
    }
};

function agregarLogVehiculo(mensaje: string): void {
    const logsContainer = document.querySelector('#vehicleLogs .logs-content');
    if (logsContainer) {
        const timestamp = new Date().toLocaleTimeString();
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';
        logEntry.textContent = `[${timestamp}] ${mensaje}`;
        logsContainer.insertBefore(logEntry, logsContainer.firstChild);
        
        // Mantener solo los últimos 10 logs
        while (logsContainer.children.length > 10) {
            logsContainer.removeChild(logsContainer.lastChild!);
        }
    }
}

function actualizarEstadisticasVehiculos(): void {
    const stats = gestorVehiculos.obtenerEstadisticas();
    console.log('📊 Estadísticas de vehículos:', stats);
}

function mostrarEstadisticasVehiculos(): void {
    const stats = gestorVehiculos.obtenerEstadisticas();
    const mensaje = `
Estadísticas del Garaje:
- Total de vehículos: ${stats.total}
- Encendidos: ${stats.encendidos}
- Apagados: ${stats.apagados}

Por tipo:
${Object.entries(stats.porTipo)
    .map(([tipo, cantidad]) => `- ${tipo}: ${cantidad}`)
    .join('\n')}
    `;
    alert(mensaje);
}

function limpiarFormularioVehiculo(): void {
    (document.getElementById('vehicleBrand') as HTMLInputElement).value = '';
    (document.getElementById('vehicleModel') as HTMLInputElement).value = '';
    (document.getElementById('vehicleYear') as HTMLInputElement).value = '';
}

// ===== EJERCICIO 4: CONTENEDORES GENÉRICOS =====
function inicializarGenericos(): void {
    actualizarContenedoresGenericos();
}

function configurarGenericos(): void {
    // Contenedor de números
    document.getElementById('addNumber')?.addEventListener('click', () => {
        const input = document.getElementById('numberInput') as HTMLInputElement;
        const valor = parseFloat(input.value);
        
        if (!isNaN(valor)) {
            contenedorNumeros.agregar(valor);
            input.value = '';
            actualizarContenedoresGenericos();
            mostrarExito(`Número ${valor} agregado`);
        } else {
            mostrarError('Ingresa un número válido');
        }
    });

    // Contenedor de textos
    document.getElementById('addText')?.addEventListener('click', () => {
        const input = document.getElementById('textInput') as HTMLInputElement;
        const valor = input.value.trim();
        
        if (valor) {
            contenedorTextos.agregar(valor);
            input.value = '';
            actualizarContenedoresGenericos();
            mostrarExito(`Texto "${valor}" agregado`);
        } else {
            mostrarError('Ingresa un texto válido');
        }
    });

    // Botones de ordenar
    document.getElementById('sortNumbers')?.addEventListener('click', () => {
        contenedorNumeros.ordenar((a, b) => a - b);
        actualizarContenedoresGenericos();
        mostrarExito('Números ordenados');
    });

    document.getElementById('sortTexts')?.addEventListener('click', () => {
        contenedorTextos.ordenar();
        actualizarContenedoresGenericos();
        mostrarExito('Textos ordenados');
    });

    // Botones de limpiar
    document.getElementById('clearNumbers')?.addEventListener('click', () => {
        contenedorNumeros.limpiar();
        actualizarContenedoresGenericos();
        mostrarExito('Números eliminados');
    });

    document.getElementById('clearTexts')?.addEventListener('click', () => {
        contenedorTextos.limpiar();
        actualizarContenedoresGenericos();
        mostrarExito('Textos eliminados');
    });

    // Enter en inputs
    document.getElementById('numberInput')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('addNumber')?.click();
        }
    });

    document.getElementById('textInput')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('addText')?.click();
        }
    });
}

function actualizarContenedoresGenericos(): void {
    // Actualizar displays
    const numberContainer = document.getElementById('numberContainer');
    const textContainer = document.getElementById('textContainer');
    
    if (numberContainer) {
        const numeros = contenedorNumeros.obtenerTodos();
        numberContainer.textContent = `[${numeros.join(', ')}]`;
    }
    
    if (textContainer) {
        const textos = contenedorTextos.obtenerTodos();
        textContainer.textContent = `["${textos.join('", "')}"]`;
    }

    // Actualizar estadísticas
    const numberCount = document.getElementById('numberCount');
    const textCount = document.getElementById('textCount');
    const totalCount = document.getElementById('totalCount');

    if (numberCount) numberCount.textContent = contenedorNumeros.longitud.toString();
    if (textCount) textCount.textContent = contenedorTextos.longitud.toString();
    if (totalCount) totalCount.textContent = (contenedorNumeros.longitud + contenedorTextos.longitud).toString();
}

// ===== EJERCICIO 5: APLICACIÓN DE NOTAS =====
function inicializarAplicacionNotas(): void {
    actualizarListaNotas();
    actualizarEstadisticasNotas();
}

function configurarAplicacionNotas(): void {
    // Botón nueva nota
    document.getElementById('newNote')?.addEventListener('click', () => {
        crearNuevaNota();
    });

    // Filtros
    document.getElementById('categoryFilter')?.addEventListener('change', (e) => {
        const categoria = (e.target as HTMLSelectElement).value as CategoriaNota | 'all';
        filtrarNotas(categoria);
    });

    // Búsqueda
    document.getElementById('searchNotes')?.addEventListener('input', (e) => {
        const termino = (e.target as HTMLInputElement).value;
        buscarNotas(termino);
    });
}

function crearNuevaNota(): void {
    const datosNota: CrearNota = {
        titulo: 'Nueva Nota',
        contenido: '',
        categoria: 'personal',
        etiquetas: []
    };

    const nota = gestorNotas.crearNota(datosNota);
    actualizarListaNotas();
    actualizarEstadisticasNotas();
    seleccionarNota(nota.id);
    mostrarExito('Nueva nota creada');
}

function actualizarListaNotas(): void {
    const lista = document.getElementById('notesList');
    if (!lista) return;

    const notas = gestorNotas.obtenerNotas();
    
    if (notas.length === 0) {
        lista.innerHTML = `
            <div class="empty-notes">
                <p>No hay notas aún.</p>
                <p>¡Crea tu primera nota!</p>
            </div>
        `;
        return;
    }

    const notasHTML = notas.map(nota => `
        <div class="note-item ${nota.id === notaActualId ? 'active' : ''}" onclick="seleccionarNota('${nota.id}')">
            <div class="note-header">
                <h4>${nota.titulo}</h4>
                <span class="note-category ${nota.categoria}">${nota.categoria}</span>
            </div>
            <div class="note-preview">${nota.contenido.substring(0, 100)}${nota.contenido.length > 100 ? '...' : ''}</div>
            <div class="note-meta">
                <span class="note-date">${nota.fechaModificacion.toLocaleDateString()}</span>
                ${nota.etiquetas.length > 0 ? `<span class="note-tags">${nota.etiquetas.slice(0, 2).join(', ')}${nota.etiquetas.length > 2 ? '...' : ''}</span>` : ''}
            </div>
            <button class="note-delete" onclick="event.stopPropagation(); eliminarNota('${nota.id}')" title="Eliminar nota">🗑️</button>
        </div>
    `).join('');

    lista.innerHTML = notasHTML;
}

// Función global para seleccionar nota
(window as any).seleccionarNota = (id: string): void => {
    notaActualId = id;
    const nota = gestorNotas.obtenerNotaPorId(id);
    
    if (nota) {
        mostrarEditorNota(nota);
        actualizarListaNotas(); // Para actualizar clase active
    }
};

// Función global para eliminar nota
(window as any).eliminarNota = (id: string): void => {
    if (confirm('¿Estás seguro de que quieres eliminar esta nota?')) {
        gestorNotas.eliminarNota(id);
        
        if (notaActualId === id) {
            notaActualId = null;
            mostrarPlaceholderEditor();
        }
        
        actualizarListaNotas();
        actualizarEstadisticasNotas();
        mostrarExito('Nota eliminada');
    }
};

function mostrarEditorNota(nota: any): void {
    const editor = document.getElementById('noteEditor');
    if (!editor) return;

    editor.innerHTML = `
        <div class="note-editor-form">
            <div class="editor-header">
                <input type="text" id="noteTitleInput" class="note-title-input" value="${nota.titulo}">
                <div class="editor-controls">
                    <select id="noteCategorySelect" class="note-category-select">
                        <option value="personal" ${nota.categoria === 'personal' ? 'selected' : ''}>Personal</option>
                        <option value="trabajo" ${nota.categoria === 'trabajo' ? 'selected' : ''}>Trabajo</option>
                        <option value="ideas" ${nota.categoria === 'ideas' ? 'selected' : ''}>Ideas</option>
                        <option value="recordatorios" ${nota.categoria === 'recordatorios' ? 'selected' : ''}>Recordatorios</option>
                    </select>
                    <button id="saveNote" class="btn-primary">💾 Guardar</button>
                </div>
            </div>
            
            <textarea id="noteContentInput" class="note-content-input" placeholder="Escribe tu nota aquí...">${nota.contenido}</textarea>
            
            <div class="editor-footer">
                <div class="note-tags-section">
                    <label>Etiquetas:</label>
                    <input type="text" id="noteTagsInput" placeholder="Agregar etiquetas (separadas por comas)" value="${nota.etiquetas.join(', ')}">
                </div>
                
                <div class="note-meta-info">
                    <span>Creada: ${nota.fechaCreacion.toLocaleDateString()}</span>
                    <span>Modificada: ${nota.fechaModificacion.toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    `;

    // Configurar eventos del editor
    configurarEventosEditor();
}

function configurarEventosEditor(): void {
    const saveBtn = document.getElementById('saveNote');
    const titleInput = document.getElementById('noteTitleInput') as HTMLInputElement;
    const contentInput = document.getElementById('noteContentInput') as HTMLTextAreaElement;
    const categorySelect = document.getElementById('noteCategorySelect') as HTMLSelectElement;
    const tagsInput = document.getElementById('noteTagsInput') as HTMLInputElement;

    saveBtn?.addEventListener('click', guardarNotaActual);

    // Auto-guardar al cambiar contenido
    let timeoutId: number;
    [titleInput, contentInput, categorySelect, tagsInput].forEach(input => {
        input?.addEventListener('input', () => {
            clearTimeout(timeoutId);
            timeoutId = window.setTimeout(guardarNotaActual, 1000); // Auto-guardar después de 1 segundo
        });
    });

    // Ctrl+S para guardar
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            guardarNotaActual();
        }
    });
}

function guardarNotaActual(): void {
    if (!notaActualId) return;

    const titleInput = document.getElementById('noteTitleInput') as HTMLInputElement;
    const contentInput = document.getElementById('noteContentInput') as HTMLTextAreaElement;
    const categorySelect = document.getElementById('noteCategorySelect') as HTMLSelectElement;
    const tagsInput = document.getElementById('noteTagsInput') as HTMLInputElement;

    const actualizaciones = {
        titulo: titleInput?.value || 'Sin título',
        contenido: contentInput?.value || '',
        categoria: categorySelect?.value as CategoriaNota || 'personal',
        etiquetas: tagsInput?.value ? tagsInput.value.split(',').map(tag => tag.trim()).filter(tag => tag) : []
    };

    gestorNotas.actualizarNota(notaActualId, actualizaciones);
    actualizarListaNotas();
    actualizarEstadisticasNotas();
    
    // Mostrar indicador de guardado
    const saveBtn = document.getElementById('saveNote');
    if (saveBtn) {
        const originalText = saveBtn.textContent;
        saveBtn.textContent = '✅ Guardado';
        saveBtn.style.background = '#38a169';
        
        setTimeout(() => {
            saveBtn.textContent = originalText;
            saveBtn.style.background = '';
        }, 1500);
    }
}

function mostrarPlaceholderEditor(): void {
    const editor = document.getElementById('noteEditor');
    if (editor) {
        editor.innerHTML = `
            <div class="editor-placeholder">
                <h3>✏️ Selecciona una nota o crea una nueva</h3>
                <p>Usa el botón "+ Nueva" para comenzar</p>
            </div>
        `;
    }
}

function filtrarNotas(categoria: CategoriaNota | 'all'): void {
    const notas = gestorNotas.filtrarPorCategoria(categoria);
    // Aquí podrías implementar la lógica para mostrar solo las notas filtradas
    console.log(`📁 Filtrando por categoría: ${categoria}`, notas);
}

function buscarNotas(termino: string): void {
    if (termino.trim()) {
        const notas = gestorNotas.buscarNotas(termino);
        console.log(`🔍 Búsqueda: "${termino}"`, notas);
    } else {
        actualizarListaNotas();
    }
}

function actualizarEstadisticasNotas(): void {
    const stats = gestorNotas.obtenerEstadisticas();
    
    const totalNotesEl = document.getElementById('totalNotes');
    const categoriesCountEl = document.getElementById('categoriesCount');
    const lastSavedEl = document.getElementById('lastSaved');

    if (totalNotesEl) totalNotesEl.textContent = stats.total.toString();
    if (categoriesCountEl) categoriesCountEl.textContent = Object.keys(stats.porCategoria).length.toString();
    if (lastSavedEl) {
        lastSavedEl.textContent = stats.ultimaModificacion 
            ? stats.ultimaModificacion.toLocaleTimeString()
            : 'Nunca';
    }
}

// ===== UTILIDADES UI =====
function mostrarError(mensaje: string): void {
    console.error('❌', mensaje);
    // Aquí podrías implementar un sistema de notificaciones más sofisticado
    alert(`Error: ${mensaje}`);
}

function mostrarExito(mensaje: string): void {
    console.log('✅', mensaje);
    // Aquí podrías implementar un sistema de notificaciones más sofisticado
}

function configurarNavegacion(): void {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href')!);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ===== EXPORT PARA DEBUGGING =====
(window as any).debugApp = {
    gestorUsuarios,
    gestorVehiculos,
    contenedorNumeros,
    contenedorTextos,
    gestorNotas
};

console.log('🎉 Aplicación TypeScript completamente cargada');
console.log('💡 Usa window.debugApp para inspeccionar los gestores desde la consola');