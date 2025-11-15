# 🚀 Proyecto Integrador - Módulo 1: JavaScript Junior Developer

## 📋 Descripción General

En este proyecto integrador, desarrollarás una **aplicación web dinámica e interactiva** que consume datos de APIs públicas. El objetivo es consolidar todos los conocimientos adquiridos durante el Módulo 1: **Web Foundations & Coding Skills**.

Esta aplicación debe ser responsiva, incluir modo oscuro/claro y estar completamente desplegada en GitHub Pages.

---

## ⏰ Plazo de Entrega

**📅 Fecha Límite: 4 de Diciembre, 2025 hasta las 23:59**

### 📄 Documento de Entrega

Debes enviar un **documento PDF o Word** que contenga:

1. 🔗 **Enlace al Repositorio GitHub**
   - Ejemplo: `https://github.com/tu-usuario/nombre-proyecto`
   - Asegúrate de que sea **público**

2. 🌐 **Enlace a la Web Desplegada (GitHub Pages)**
   - Ejemplo: `https://tu-usuario.github.io/nombre-proyecto`
   - Verificar que funcione correctamente

3. 🎬 **Enlace al Video en YouTube**
   - Debe estar **público o unlisted**
   - Máximo 5 minutos
   - Incluir descripción del proyecto

### 📧 Forma de Entrega

El documento PDF/Word debe enviarse por:
- Email al mentor/instructor
- A través la plataforma designada

---

## ✅ Requisitos Obligatorios

### 1. **Estructura de Archivos**
Tu proyecto debe incluir:
```
proyecto-integrador/
├── index.html          # Estructura del sitio
├── styles.css          # Estilos de la aplicación
├── index.js            # Lógica y funcionalidad
├── README.md           # Documentación del proyecto
└── assets/             # (Opcional) Imágenes, iconos, etc.
```

### 2. **Frontend (HTML, CSS y JavaScript)**

#### ✨ **index.html**
- Estructura semántica correcta con etiquetas HTML5
- Head con metaetiquetas apropiadas (viewport, charset, etc.)
- Logo o título del proyecto
- Área de visualización de resultados
- Switch para cambiar entre modo claro/oscuro
- Footer con información de créditos

#### 🎨 **styles.css**
- Diseño responsivo (mobile-first)
- Media queries para tablet y desktop
- Variables CSS para colores en modo claro/oscuro
- Flexbox o Grid para layouts
- Animaciones y transiciones suaves
- Estilos para estados hover, focus y active
- Tipografía consistente
- Paleta de colores coherente

#### ⚙️ **index.js**
- Consumo de API mediante `fetch()`
- Gestión de errores (try-catch)
- Almacenamiento en localStorage para el modo oscuro
- Manipulación del DOM dinámica
- Renderización de datos en tarjetas
- Funciones bien organizadas y comentadas

### 3. **API Pública (Selecciona Una o Más)**

Puedes elegir entre estas 4 APIs:

| API | Descripción | Endpoint | Docs |
| :--- | :--- | :--- | :--- |
| **Countries** | Información de países | `https://restcountries.com/v3.1/all` | [Docs](https://restcountries.com) |
| **PokeAPI** | Pokémon | `https://pokeapi.co/api/v2/pokemon` | [Docs](https://pokeapi.co) |
| **JSONPlaceholder** | Posts, usuarios, comentarios | `https://jsonplaceholder.typicode.com/posts` | [Docs](https://jsonplaceholder.typicode.com) |
| **API Colombia** | Ciudades, departamentos y municipios de Colombia | `https://api-colombia.com/` | [Docs](https://api-colombia.com/) |

### 4. **Modo Oscuro/Claro**
- ✅ Switch funcional en la interfaz
- ✅ Almacenamiento de preferencia en localStorage
- ✅ Persistencia al recargar la página
- ✅ Transiciones suaves entre temas
- ✅ Contraste adecuado en ambos modos

### 5. **Diseño Responsivo**
- ✅ Mobile (320px - 640px)
- ✅ Tablet (641px - 1024px)
- ✅ Desktop (1025px en adelante)
- ✅ Navegación adaptable
- ✅ Imágenes que escalen correctamente

---

## 🏗️ Conceptos del Módulo a Aplicar

### Fundamentos de JavaScript
- [ ] Variables (let, const)
- [ ] Tipos de datos
- [ ] Operadores (aritméticos, lógicos, comparación)
- [ ] Estructuras de control (if/else, switch)
- [ ] Bucles (for, while, forEach)
- [ ] Funciones y scope
- [ ] Manejo de errores (try-catch)

### HTML5 y Semántica
- [ ] Estructura correcta del documento
- [ ] Etiquetas semánticas (header, main, footer, section, article)
- [ ] Formularios accesibles
- [ ] Metaetiquetas necesarias

### CSS3 Avanzado
- [ ] Flexbox para alineación
- [ ] CSS Grid para layouts
- [ ] Media Queries para responsividad
- [ ] CSS Variables (custom properties)
- [ ] Transiciones y animaciones
- [ ] Pseudoclases (hover, focus, active)
- [ ] Overflow y posicionamiento

### Manipulación del DOM
- [ ] querySelector / querySelectorAll
- [ ] addEventListener
- [ ] innerHTML / textContent
- [ ] classList (add, remove, toggle)
- [ ] Crear elementos dinámicamente

### APIs y Fetching
- [ ] fetch API
- [ ] Promesas
- [ ] Async/await (opcional)
- [ ] Manejo de respuestas JSON
- [ ] Gestión de errores de red

---

## 📚 Estructura Recomendada del Proyecto

```
index.html
├── Header
│   ├── Logo/Título
│   └── Dark Mode Toggle
├── Main
│   ├── Input de búsqueda
│   ├── Botón de búsqueda
│   └── Contenedor de resultados (dinámico)
└── Footer
    └── Créditos y enlaces

styles.css
├── Variables de colores
├── Reset/Normalización
├── Tipografía
├── Layout
├── Componentes
├── Media Queries
└── Modo oscuro

index.js
├── Configuración (URLs, selectors)
├── Funciones de API
├── Funciones de DOM
├── Funciones de utilidad
├── Event listeners
└── Funciones de tema (dark/light)
```

---

## 🎯 Funcionalidades Principales

### 1. Consulta a la API
```javascript
// Ejemplo: consumir la API
- Fetch a la API elegida al cargar la página
- Obtener datos de la API
- Manejo de errores de conexión
- Gestión de loading states
```

### 2. Visualización de Resultados
```javascript
// Ejemplo: mostrar tarjetas con:
- Imagen
- Nombre
- Descripción/Detalles
- Información adicional según API
```

### 3. Switch de Modo Oscuro
```javascript
// Funcionalidades:
- Toggle visible en el header
- Aplicar tema a toda la página
- Guardar preferencia en localStorage
- Aplicar tema al cargar la página
```

### 4. Responsividad
```css
/* Ejemplo de estructura */
- Desktop: 3 columnas
- Tablet: 2 columnas
- Mobile: 1 columna
```

---

## 🚀 Pasos para Desarrollar

### Paso 1: Planificación
- [ ] Dibuja wireframes de la interfaz
- [ ] Define qué datos mostrarás de la API
- [ ] Diseña el esquema de colores
- [ ] Planifica los breakpoints responsivos

### Paso 2: Estructura Inicial
- [ ] Crea la estructura HTML básica
- [ ] Define las variables CSS (colores, fuentes, tamaños)
- [ ] Implementa el switch de modo oscuro (HTML + CSS)

### Paso 3: Estilos
- [ ] Estilos base (reset, tipografía)
- [ ] Layout con Flexbox/Grid
- [ ] Modo oscuro/claro completo
- [ ] Media queries responsivas
- [ ] Animaciones y transiciones

### Paso 4: JavaScript - Funciones Base
- [ ] Función para cambiar tema (dark/light)
- [ ] Función para guardar/cargar preferencia en localStorage
- [ ] Estructura básica del JavaScript

### Paso 5: Integración con API
- [ ] Función para hacer fetch a la API
- [ ] Función para procesar respuestas
- [ ] Función para mostrar resultados en DOM
- [ ] Manejo de errores

### Paso 6: Interactividad
- [ ] Event listeners para búsqueda
- [ ] Validación de inputs
- [ ] Loading states (spinner, mensaje)
- [ ] Limpieza de resultados previos

### Paso 7: Pruebas
- [ ] Prueba en diferentes dispositivos/tamaños
- [ ] Verifica modo oscuro/claro
- [ ] Prueba la API con diferentes búsquedas
- [ ] Verifica localStorage

### Paso 8: Git y Documentación
- [ ] Commits regulares con mensajes descriptivos
- [ ] README con instrucciones
- [ ] Documentación del código

### Paso 9: Despliegue
- [ ] Crea repositorio en GitHub
- [ ] Push del código
- [ ] Activa GitHub Pages
- [ ] Verifica que funcione en producción

### Paso 10: Presentación
- [ ] Graba video demostrativo (máx 5 min)
- [ ] Explica funcionalidades
- [ ] Muestra lo aprendido
- [ ] Sube a YouTube

---

## 📝 Guía de Commits en Git

Haz commits regulares con mensajes descriptivos:

```bash
# Commits recomendados:
git commit -m "feat: estructura HTML básica del proyecto"
git commit -m "feat: estilos base y variables CSS"
git commit -m "feat: implementar switch modo oscuro"
git commit -m "feat: integrar fetch de API"
git commit -m "feat: renderizar resultados de búsqueda"
git commit -m "feat: responsive design para mobile"
git commit -m "feat: responsive design para tablet"
git commit -m "fix: corregir bug en búsqueda"
git commit -m "docs: actualizar README"
```

---

## 📤 GitHub Pages Deployment

### Paso 1: Crear Repositorio
```bash
# En GitHub, crea nuevo repositorio:
# Nombre: nombre-de-tu-proyecto
# Descripción: Proyecto integrador del Módulo 1 JavaScript
```

### Paso 2: Subir Código
```bash
git init
git add .
git commit -m "feat: proyecto integrador inicial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/nombre-repositorio.git
git push -u origin main
```

### Paso 3: Activar GitHub Pages
1. Ve a **Settings** → **Pages**
2. En "Source", selecciona la rama **main** (o master)
3. Selecciona la carpeta **/root** o **/docs**
4. Click en "Save"
5. Tu sitio estará disponible en: `https://TU-USUARIO.github.io/nombre-repositorio`

---

## 🎬 Video de Presentación

### Requisitos del Video
- ⏱️ **Duración máxima**: 5 minutos
- 📹 **Formato**: MP4 o similar
- 🔊 **Audio claro** con explicación
- 📱 **Captura de pantalla** o filmación del proyecto

### Estructura Sugerida del Video (5 min)

| Tiempo | Contenido |
| :--- | :--- |
| **0:00 - 0:30** | Introducción: Qué es el proyecto, tecnologías usadas |
| **0:30 - 1:30** | Demo de funcionalidades (búsqueda, resultados) |
| **1:30 - 2:30** | Demostración del modo oscuro/claro y responsividad |
| **2:30 - 4:00** | Explicación técnica: qué aprendiste, desafíos, soluciones |
| **4:00 - 5:00** | Conclusiones: próximos pasos, mejoras futuras |

### Plataforma de Subida
- 📺 **YouTube** (recomendado)
- 🎥 Video en **Unlisted** o **Public**

---

## 🔍 Checklist de Revisión

### Código
- [ ] HTML semántico y accesible
- [ ] CSS organizado y responsivo
- [ ] JavaScript limpio y comentado
- [ ] Sin errores en consola
- [ ] API funcionando correctamente

### Funcionalidad
- [ ] Búsqueda en API funcionando
- [ ] Resultados mostrándose correctamente
- [ ] Switch modo oscuro/claro funcional
- [ ] localStorage guardando preferencia
- [ ] Diseño responsivo en todos los dispositivos

### GitHub
- [ ] Repositorio público
- [ ] README completo
- [ ] Commits significativos (mínimo 10)
- [ ] GitHub Pages activo y funcionando

### Presentación
- [ ] Video subido a YouTube
- [ ] Duración: máximo 5 minutos
- [ ] Audio claro
- [ ] Explicación clara de funcionalidades

---

## 🎓 Conceptos Clave a Demostrar

Tu proyecto debe mostrar dominio de:

1. ✅ **HTML5 Semántico**: Estructura correcta, accesibilidad
2. ✅ **CSS3 Avanzado**: Responsividad, flexbox/grid, animaciones
3. ✅ **JavaScript Vanilla**: Funciones, DOM, eventos, fetch
4. ✅ **Integración de APIs**: Consumo correcto, manejo de errores
5. ✅ **Versionado**: Commits descriptivos, buenas prácticas Git
6. ✅ **Despliegue**: GitHub Pages funcionando correctamente
7. ✅ **Documentación**: README claro y código comentado

---

## 💡 Consejos para el Éxito

### 1. **Planificación**
- 🎨 Dibuja wireframes antes de codificar
- 📐 Define el esquema de colores y tipografía
- 📱 Piensa en responsive desde el inicio

### 2. **Desarrollo**
- 🔨 Comienza con funcionalidad, luego optimiza diseño
- 🧪 Prueba frecuentemente en diferentes navegadores
- 📝 Comenta tu código mientras escribes

### 3. **Git**
- 📌 Haz commits regulares (al menos 1 por día)
- 💬 Escribe mensajes descriptivos
- 🌳 Mantén el código limpio en main

### 4. **Feedback**
- 👥 Pide opinión a compañeros y mentores
- 🔄 Itera basado en feedback
- ✨ Busca mejorar continuamente

### 5. **Documentación**
- 📖 README claro y conciso
- 💭 Comenta puntos complejos del código
- 📸 Incluye screenshots en el README si es posible

### 6. **Preparación del Video**
- 🎬 Haz un borrador primero
- 🔊 Prueba audio en diferentes dispositivos
- ✂️ Edita para ser conciso y claro
- 📹 Graba en buena resolución (720p mínimo)

---

## 🔗 Recursos Útiles

### APIs Públicas
- [REST Countries](https://restcountries.com)
- [PokeAPI](https://pokeapi.co)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com)
- [API Colombia](https://api-colombia.com/)

### Herramientas
- [Visual Studio Code](https://code.visualstudio.com)
- [Git](https://git-scm.com)
- [GitHub](https://github.com)
- [Postman](https://www.postman.com) - Para probar APIs

### Documentación
- [MDN - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

### Tutoriales
- [Responsive Design](https://web.dev/responsive-web-design-basics/)
- [CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Fetch API](https://javascript.info/fetch)

---

## 📊 Rúbrica de Evaluación - Escala de 1 a 5 Puntos

Esta rúbrica evalúa tu proyecto progresando desde **RECORDAR** hasta **CREAR**. El estudiante es capaz de crear una web funcional y lógica de acuerdo a los criterios definidos, demostrando los procesos cognitivos en cada nivel.

---

## 📋 Criterios de Evaluación por Competencia

### **1️⃣ FUNCIONALIDAD Y LÓGICA (0-5 puntos)**

| Puntos | Nivel Cognitivo | Descripción | Indicadores de Desempeño |
| :---: | :--- | :--- | :--- |
| **1** | **RECORDAR** | No funciona o no envía fetch | ❌ La API no se llama; no hay integración básica; errores de sintaxis en fetch |
| **2** | **COMPRENDER** | Funcionalidad muy limitada | ⚠️ Fetch básico implementado; API se llama pero manejo de datos incompleto; sin validación; errores en consola |
| **3** | **APLICAR** | Funcionalidad core implementada | ✅ Búsqueda funciona; API retorna datos; se renderizan resultados; manejo básico de errores |
| **4** | **ANALIZAR** | Funcionalidad robusta y optimizada | ✨ Búsqueda avanzada; validación de datos; gestión de errores con try-catch; optimización de requests |
| **5** | **CREAR** | Funcionalidad innovadora y completa | 🚀 Múltiples APIs integradas; filtros personalizados; paginación; caché inteligente; búsquedas avanzadas multicriterio |

**El estudiante demuestra capacidad para:**
- ✅ Entender cómo funcionan las APIs (nivel 1-2)
- ✅ Implementar fetch y procesar datos correctamente (nivel 3)
- ✅ Optimizar y manejar errores apropiadamente (nivel 4)
- ✅ **Crear soluciones funcionales únicas e innovadoras** (nivel 5)

---

### **2️⃣ CÓDIGO LIMPIO Y ORGANIZACIÓN (0-5 puntos)**

| Puntos | Nivel Cognitivo | Descripción | Indicadores de Desempeño |
| :---: | :--- | :--- | :--- |
| **1** | **RECORDAR** | Código desorganizado y confuso | ❌ Código todo en una función; sin comentarios; nombres variables aleatorios; sin estructura |
| **2** | **COMPRENDER** | Código básico con poca organización | ⚠️ Algunas funciones separadas; naming convenciones inconsistentes; pocos comentarios; estructura simple |
| **3** | **APLICAR** | Código bien organizado | ✅ Funciones lógicas y reutilizables; comentarios explicativos; archivos separados (HTML, CSS, JS); sigue DRY |
| **4** | **ANALIZAR** | Código limpio y refactorizado | ✨ Funciones especializadas y bien definidas; código muerto eliminado; naming consistente; comentarios en partes complejas |
| **5** | **CREAR** | Arquitectura profesional | 🚀 Patrón de arquitectura propio (modular/modelos); utilidades reutilizables; código altamente mantenible; documentación interna; fácil de escalar |

**El estudiante demuestra capacidad para:**
- ✅ Escribir código básicamente correcto (nivel 1-2)
- ✅ Organizar funciones lógicamente (nivel 3)
- ✅ Refactorizar y optimizar código (nivel 4)
- ✅ **Crear arquitectura profesional y escalable** (nivel 5)

---

### **3️⃣ DISEÑO RESPONSIVO (0-5 puntos)**

| Puntos | Nivel Cognitivo | Descripción | Indicadores de Desempeño |
| :---: | :--- | :--- | :--- |
| **1** | **RECORDAR** | Diseño no responsivo o quebrado | ❌ Solo funciona en desktop; elementos fuera de lugar en móvil; sin media queries; layout roto |
| **2** | **COMPRENDER** | Diseño responsivo básico | ⚠️ Media queries para 1-2 tamaños; mobile parcialmente funcional; algunas propiedades responsivas; detalles desalineados |
| **3** | **APLICAR** | Diseño responsivo funcional | ✅ Funciona en móvil, tablet y desktop (320px, 768px, 1024px+); Flexbox/Grid implementados; imágenes adaptables |
| **4** | **ANALIZAR** | Diseño responsivo optimizado | ✨ Transiciones suaves entre breakpoints; optimización de performance; cuidadoso control de whitespace y alineación; excelente UX |
| **5** | **CREAR** | Diseño responsivo innovador | 🚀 Layouts únicos y creativos para cada dispositivo; animaciones responsivas; componentes adaptables avanzados; diseño fluid y moderno |

**El estudiante demuestra capacidad para:**
- ✅ Entender conceptos de responsividad (nivel 1-2)
- ✅ Implementar media queries correctamente (nivel 3)
- ✅ Optimizar y mejorar responsive design (nivel 4)
- ✅ **Crear layouts creativos y adaptativos** (nivel 5)

---

### **4️⃣ INTERACTIVIDAD Y EXPERIENCIA (0-5 puntos)**

| Puntos | Nivel Cognitivo | Descripción | Indicadores de Desempeño |
| :---: | :--- | :--- | :--- |
| **1** | **RECORDAR** | Sin interactividad o no funciona | ❌ Switch de tema no funciona; sin eventos; localStorage no se usa; interfaz estática |
| **2** | **COMPRENDER** | Interactividad limitada | ⚠️ Switch cambia tema pero sin transiciones; localStorage funciona a medias; eventos básicos sin refinamiento |
| **3** | **APLICAR** | Interactividad funcional | ✅ Switch modo oscuro/claro funciona; localStorage persiste preferencia; transiciones suaves; eventos se manejan bien |
| **4** | **ANALIZAR** | Interactividad pulida | ✨ Múltiples temas disponibles; animaciones suaves; event listeners optimizados; UX intuitiva; feedback visual claro |
| **5** | **CREAR** | Interactividad innovadora | 🚀 Sistema de temas avanzado; micro-interacciones personalizadas; animaciones únicas; experiencia de usuario excepcional y memorable |

**El estudiante demuestra capacidad para:**
- ✅ Entender eventos y localStorage (nivel 1-2)
- ✅ Implementar switch funcionalmente (nivel 3)
- ✅ Optimizar interactividad y UX (nivel 4)
- ✅ **Crear experiencias interactivas únicas** (nivel 5)

---

### **5️⃣ GITHUB Y DESPLIEGUE (0-5 puntos)**

| Puntos | Nivel Cognitivo | Descripción | Indicadores de Desempeño |
| :---: | :--- | :--- | :--- |
| **1** | **RECORDAR** | Sin repositorio o GitHub Pages no funciona | ❌ Repositorio no existe o privado; GitHub Pages inactivo; pocos o sin commits; proyecto incompleto |
| **2** | **COMPRENDER** | Básica presencia en GitHub | ⚠️ Repositorio público con ≤5 commits; mensajes de commit genéricos; GitHub Pages activo pero con errores; README minimal |
| **3** | **APLICAR** | Git usado correctamente | ✅ ≥10 commits significativos; mensajes descriptivos; GitHub Pages funcionando; README claro; historial limpio |
| **4** | **ANALIZAR** | Control de versiones profesional | ✨ Commits bien estructurados con buena granularidad; mensajes de commit informativos; repositorio bien organizado; documentación buena |
| **5** | **CREAR** | Flujo Git avanzado | 🚀 Rama develop/main; commits atómicos con narrativa clara; GitHub Pages optimizado; documentación profesional; organización exemplar |

**El estudiante demuestra capacidad para:**
- ✅ Usar Git básicamente (nivel 1-2)
- ✅ Hacer commits significativos (nivel 3)
- ✅ Mantener historial limpio y profesional (nivel 4)
- ✅ **Implementar flujo Git avanzado** (nivel 5)

---

### **6️⃣ PRESENTACIÓN Y COMUNICACIÓN (0-5 puntos)**

| Puntos | Nivel Cognitivo | Descripción | Indicadores de Desempeño |
| :---: | :--- | :--- | :--- |
| **1** | **RECORDAR** | Sin video o muy deficiente | ❌ No hay video; >5 minutos; audio inaudible; resolución baja; no se entiende nada |
| **2** | **COMPRENDER** | Video básico | ⚠️ Video ≤5 min pero sin claridad; audio bajo; explicación confusa; falta mostrar funcionalidades |
| **3** | **APLICAR** | Video funcional | ✅ Video claro ≤5 min; audio audible; demuestra funcionalidades; explica el proyecto; flujo coherente |
| **4** | **ANALIZAR** | Video profesional | ✨ Buena edición; narrativa clara; analiza desafíos y soluciones; reflexión sobre aprendizaje; propone mejoras futuras |
| **5** | **CREAR** | Video creativo y excepcional | 🚀 Edición profesional; narrativa personal y cautivadora; demostraciones innovadoras; storytelling; impacto visual; YouTube-ready |

**El estudiante demuestra capacidad para:**
- ✅ Crear un video básico (nivel 1-2)
- ✅ Presentar funcionalidades claramente (nivel 3)
- ✅ Analizar y reflexionar en video (nivel 4)
- ✅ **Crear presentación creativa y profesional** (nivel 5)

---

## 📊 Tabla de Puntuación Total

| Criterio | Puntos Máx | Peso |
| :--- | :---: | :---: |
| **1. Funcionalidad y Lógica** | 5 | 25% |
| **2. Código Limpio y Organización** | 5 | 20% |
| **3. Diseño Responsivo** | 5 | 20% |
| **4. Interactividad y Experiencia** | 5 | 15% |
| **5. GitHub y Despliegue** | 5 | 10% |
| **6. Presentación y Comunicación** | 5 | 10% |
| **TOTAL PUNTOS** | **30** | **100%** |

**Cálculo de Calificación Final:**
```
Calificación = (Puntos Obtenidos / 30) × 100
```

---

## 🎯 Escala de Calificación Numérica

| Calificación | Rango | Nivel de Desempeño |
| :---: | :---: | :--- |
| **5 Puntos** | 90-100 | 🏆 **EXCELENTE** - Dominio completo, innovación, proyecto profesional |
| **4 Puntos** | 80-89 | ⭐ **MUY BUENO** - Cumplimiento total, pocas áreas de mejora |
| **3 Puntos** | 70-79 | ✅ **BUENO** - Cumplimiento básico, mejoras identificables |
| **2 Puntos** | 60-69 | ⚠️ **ACEPTABLE** - Cumplimiento mínimo, deficiencias claras |
| **1 Punto** | <60 | ❌ **INSUFICIENTE** - No cumple requisitos mínimos |

---

## 💡 Ruta para Alcanzar 5 Puntos en Cada Criterio

### 🚀 Funcionalidad (5 puntos):
- [ ] API se consulta sin errores
- [ ] Búsqueda retorna resultados relevantes
- [ ] Datos se renderizan dinámicamente
- [ ] Manejo robusto de errores
- [ ] **CREAR**: Implementa filtros, paginación o múltiples APIs

### 🎨 Código Limpio (5 puntos):
- [ ] Funciones separadas y reutilizables
- [ ] Nombres de variables significativos
- [ ] Comentarios en puntos complejos
- [ ] Código refactorizado sin repeticiones
- [ ] **CREAR**: Arquitectura modular propia y escalable

### 📱 Responsivo (5 puntos):
- [ ] Funciona perfectamente en 3 tamaños
- [ ] Flexbox/Grid implementados
- [ ] Media queries bien estructuradas
- [ ] Imágenes adaptables
- [ ] **CREAR**: Diseño único y animaciones responsivas

### ⚡ Interactividad (5 puntos):
- [ ] Switch modo oscuro/claro funcional
- [ ] Transiciones suaves
- [ ] localStorage persiste preferencia
- [ ] Eventos optimizados
- [ ] **CREAR**: Sistema de temas avanzado, micro-interacciones únicas

### 🔗 GitHub (5 puntos):
- [ ] ≥10 commits significativos
- [ ] Mensajes descriptivos
- [ ] GitHub Pages funcionando
- [ ] Historial limpio
- [ ] **CREAR**: Flujo Git profesional con rama develop

### 🎬 Presentación (5 puntos):
- [ ] Video ≤5 minutos, audio claro
- [ ] Demuestra todas las funcionalidades
- [ ] Explica tecnologías y aprendizaje
- [ ] Reflexión sobre desafíos
- [ ] **CREAR**: Edición profesional, narrativa personal cautivadora

---

## ❓ Preguntas Frecuentes

**¿Puedo usar librerías externas?**
> Sí, pero se recomienda usar principalmente vanilla JavaScript. Puedes usar librerías para: iconos (Font Awesome), animaciones (AOS), pero el core debe ser JavaScript vanilla.

**¿Qué pasa si la API tiene límite de requests?**
> Elige una API con límites altos o sin límites. Todas las recomendadas son seguras. Si alcanzas límite, implementa un sistema de caché con localStorage.

**¿Necesito TypeScript?**
> No es obligatorio. Puedes usar JavaScript vanilla, pero TypeScript es un plus.

**¿Puedo usar frameworks como React?**
> No. Este proyecto es específicamente para JavaScript vanilla para consolidar fundamentos.

**¿Es obligatorio GitHub Pages?**
> Sí. Es importante aprender a desplegar. GitHub Pages es gratuito y perfecto para esto.

---

## 📞 Soporte

Si tienes dudas:
- 📧 Contacta a tu mentor
- 👥 Pregunta en el canal de WhatsApp
- 📚 Revisa los materiales de clase
- 🔗 Consulta la documentación oficial de las tecnologías

---

## 🎉 ¡Buena Suerte!

Recuerda: Este proyecto es tu oportunidad para consolidar los fundamentos de JavaScript, HTML y CSS. 

**¡Que disfrutes el proceso de desarrollo!** 🚀

---

**Formador**: Steven Zuluaga Cortés  
**Módulo**: 1 - JavaScript Junior Developer: Web Foundations & Coding Skills  
**Última actualización**: Noviembre 2025

