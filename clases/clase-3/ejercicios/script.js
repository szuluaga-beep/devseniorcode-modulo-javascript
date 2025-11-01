// script.js — Ejemplos de estructuras de control y bucles

// If / Else — Par o impar
const numInput = document.getElementById('numInput');
const checkBtn = document.getElementById('checkBtn');
const numResult = document.getElementById('numResult');

checkBtn.addEventListener('click', () => {
  const v = Number(numInput.value);
  if (!Number.isFinite(v)) {
    numResult.textContent = 'Por favor ingresa un número válido.';
    return;
  }

  if (v % 2 === 0) {
    numResult.textContent = `${v} es par`;
  } else {
    numResult.textContent = `${v} es impar`;
  }
});

// Switch — Mensaje por día
const daySelect = document.getElementById('daySelect');
const dayBtn = document.getElementById('dayBtn');
const dayResult = document.getElementById('dayResult');

dayBtn.addEventListener('click', () => {
  const d = daySelect.value;
  switch (d) {
    case 'lunes':
      dayResult.textContent = 'Comienza la semana: ¡a organizarse!';
      break;
    case 'martes':
      dayResult.textContent = 'Martes productivo.';
      break;
    case 'miercoles':
      dayResult.textContent = 'Mitad de semana, sigue firme.';
      break;
    case 'jueves':
      dayResult.textContent = 'Jueves: casi viernes.';
      break;
    case 'viernes':
      dayResult.textContent = 'Viernes: tiempo de terminar tareas.';
      break;
    case 'sabado':
      dayResult.textContent = 'Sábado: día de descanso o proyectos personales.';
      break;
    case 'domingo':
      dayResult.textContent = 'Domingo: planifica la semana que viene.';
      break;
    default:
      dayResult.textContent = '';
  }
});

// Lista dinámica — for y for...of
const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const itemsList = document.getElementById('itemsList');
const filterInput = document.getElementById('filterInput');
const filterBtn = document.getElementById('filterBtn');
const resetFilterBtn = document.getElementById('resetFilterBtn');

let items = ['Manzana', 'Banana', 'Cereza'];

function renderList(list) {
  itemsList.innerHTML = '';
  // Uso de for para generar elementos
  for (let i = 0; i < list.length; i++) {
    const li = document.createElement('li');
    li.textContent = `${i + 1}. ${list[i]}`;
    itemsList.appendChild(li);
  }
}

addItemBtn.addEventListener('click', () => {
  const v = itemInput.value && itemInput.value.trim();
  if (!v) return;
  items.push(v);
  itemInput.value = '';
  renderList(items);
});

filterBtn.addEventListener('click', () => {
  const q = (filterInput.value || '').toLowerCase();
  if (!q) return renderList(items);
  const filtered = [];
  // Uso de for...of para filtrar por valor
  for (const it of items) {
    if (it.toLowerCase().includes(q)) filtered.push(it);
  }
  renderList(filtered);
});

resetFilterBtn.addEventListener('click', () => {
  filterInput.value = '';
  renderList(items);
});

// Mostrar propiedades de un objeto — for...in
const showObjBtn = document.getElementById('showObjBtn');
const objOutput = document.getElementById('objOutput');

const persona = { nombre: 'Ana', edad: 29, ciudad: 'Bogotá', rol: 'Estudiante' };

showObjBtn.addEventListener('click', () => {
  let out = '';
  for (const key in persona) {
    // for...in itera propiedades (claves)
    out += `${key}: ${persona[key]}\n`;
  }
  objOutput.textContent = out;
});

// while y do...while — Contadores
const startWhile = document.getElementById('startWhile');
const startDoWhile = document.getElementById('startDoWhile');
const whileOutput = document.getElementById('whileOutput');

startWhile.addEventListener('click', () => {
  let i = 0;
  let text = 'while: ';
  // while: repetir mientras i < 5
  while (i < 5) {
    text += i + (i < 4 ? ', ' : '');
    i++;
  }
  whileOutput.textContent = text;
});

startDoWhile.addEventListener('click', () => {
  let i = 0;
  let text = 'do...while: ';
  // do...while ejecuta al menos una vez
  do {
    text += i + (i < 4 ? ', ' : '');
    i++;
  } while (i < 5);
  whileOutput.textContent = text;
});

// Render inicial
renderList(items);
