// ===== FUNCIONALIDAD INTERACTIVA PARA EJERCICIOS CSS =====

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 CSS Grid & Flexbox Demo cargado');
    
    // ===== NAVEGACIÓN MÓVIL =====
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-open');
            navToggle.textContent = navLinks.classList.contains('nav-open') ? '✕' : '☰';
        });
    }
    
    // ===== SMOOTH SCROLLING PARA NAVEGACIÓN =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===== ANIMACIONES DE ENTRADA =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar ejercicios para animaciones
    document.querySelectorAll('.exercise').forEach(exercise => {
        exercise.style.opacity = '0';
        exercise.style.transform = 'translateY(30px)';
        exercise.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(exercise);
    });
    
    // ===== DEMO DE RESPONSIVE DESIGN =====
    const responsiveCards = document.querySelectorAll('.responsive-card');
    
    function updateResponsiveInfo() {
        const width = window.innerWidth;
        let deviceType = '';
        
        if (width < 480) {
            deviceType = 'Móvil Pequeño';
        } else if (width < 768) {
            deviceType = 'Móvil';
        } else if (width < 1024) {
            deviceType = 'Tablet';
        } else {
            deviceType = 'Desktop';
        }
        
        responsiveCards.forEach(card => {
            const existingInfo = card.querySelector('.device-info');
            if (existingInfo) {
                existingInfo.remove();
            }
            
            const deviceInfo = document.createElement('div');
            deviceInfo.className = 'device-info';
            deviceInfo.style.cssText = `
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                padding: 0.5rem;
                border-radius: 4px;
                margin-top: 1rem;
                font-size: 0.9rem;
                font-weight: bold;
                text-align: center;
            `;
            deviceInfo.textContent = `${deviceType} (${width}px)`;
            card.appendChild(deviceInfo);
        });
    }
    
    // Actualizar info responsive al cargar y redimensionar
    updateResponsiveInfo();
    window.addEventListener('resize', updateResponsiveInfo);
    
    // ===== INTERACTIVIDAD DE GALERÍA =====
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Crear modal para imagen
            const img = item.querySelector('img');
            if (img) {
                createImageModal(img.src, img.alt);
            }
        });
    });
    
    function createImageModal(src, alt) {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            cursor: pointer;
        `;
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        img.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 10px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        `;
        
        modal.appendChild(img);
        document.body.appendChild(modal);
        
        // Cerrar modal al hacer clic
        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        // Cerrar con tecla Escape
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                document.body.removeChild(modal);
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
    }
    
    // ===== ANIMACIONES DE HOVER PARA WIDGETS =====
    const widgets = document.querySelectorAll('.widget');
    
    widgets.forEach(widget => {
        widget.addEventListener('mouseenter', () => {
            widget.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        widget.addEventListener('mouseleave', () => {
            widget.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // ===== SIMULACIÓN DE DATOS DINÁMICOS =====
    function updateDashboardData() {
        const statsNumbers = document.querySelectorAll('.stat .number');
        const activityList = document.querySelector('.activity-list');
        const notifications = document.querySelectorAll('.notification-item');
        
        // Actualizar estadísticas con números aleatorios
        statsNumbers.forEach(stat => {
            const currentValue = parseInt(stat.textContent.replace(',', ''));
            const newValue = currentValue + Math.floor(Math.random() * 50) - 25;
            const formattedValue = newValue.toLocaleString();
            
            // Animación de cambio de número
            stat.style.transform = 'scale(1.2)';
            stat.style.color = '#38a169';
            setTimeout(() => {
                stat.textContent = formattedValue;
                stat.style.transform = 'scale(1)';
                stat.style.color = 'var(--primary-color)';
            }, 200);
        });
        
        // Agregar nueva actividad
        if (activityList) {
            const activities = [
                'Nuevo usuario registrado',
                'Venta procesada exitosamente',
                'Backup automático completado',
                'Nuevo mensaje recibido',
                'Actualización de sistema disponible'
            ];
            
            const randomActivity = activities[Math.floor(Math.random() * activities.length)];
            const newItem = document.createElement('li');
            newItem.textContent = randomActivity;
            newItem.style.cssText = `
                background: #e6fffa;
                animation: slideInLeft 0.5s ease;
                padding: 0.5rem 0;
                border-bottom: 1px solid var(--border-color);
                font-size: 0.9rem;
            `;
            
            // Agregar al inicio de la lista
            activityList.insertBefore(newItem, activityList.firstChild);
            
            // Mantener solo 3 elementos
            while (activityList.children.length > 3) {
                activityList.removeChild(activityList.lastChild);
            }
        }
    }
    
    // Actualizar datos cada 5 segundos
    setInterval(updateDashboardData, 5000);
    
    // ===== FUNCIONALIDAD DEL CARRITO DE COMPRAS =====
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartElement = document.querySelector('.cart');
    let cartCount = 3; // Valor inicial
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            cartCount++;
            
            // Actualizar contador del carrito
            if (cartElement) {
                cartElement.textContent = `🛒 (${cartCount})`;
                
                // Animación de éxito
                cartElement.style.transform = 'scale(1.2)';
                cartElement.style.background = '#38a169';
                setTimeout(() => {
                    cartElement.style.transform = 'scale(1)';
                    cartElement.style.background = 'var(--accent-color)';
                }, 300);
            }
            
            // Animación del botón
            button.textContent = '✓ Agregado';
            button.style.background = '#38a169';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = 'Agregar al carrito';
                button.style.background = 'var(--primary-color)';
                button.disabled = false;
            }, 2000);
        });
    });
    
    // ===== FILTROS DE PRODUCTOS =====
    const filterCheckboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
    const priceRange = document.querySelector('.filter-group input[type="range"]');
    const productCards = document.querySelectorAll('.product-card');
    
    function applyFilters() {
        const selectedCategories = Array.from(filterCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.parentNode.textContent.trim());
        
        const maxPrice = priceRange ? parseInt(priceRange.value) : 1000;
        
        productCards.forEach(card => {
            const price = parseFloat(card.querySelector('.price').textContent.replace('$', ''));
            const shouldShow = selectedCategories.length === 0 || price <= maxPrice;
            
            if (shouldShow) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.3s ease';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Actualizar contador de resultados
        const visibleProducts = Array.from(productCards).filter(card => 
            card.style.display !== 'none'
        ).length;
        
        const productsHeader = document.querySelector('.products-header h3');
        if (productsHeader) {
            productsHeader.textContent = `Productos (${visibleProducts} resultados)`;
        }
    }
    
    // Eventos para filtros
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    if (priceRange) {
        priceRange.addEventListener('input', applyFilters);
        
        // Mostrar valor actual del rango
        const rangeValue = document.createElement('div');
        rangeValue.style.cssText = `
            font-size: 0.8rem;
            color: var(--text-light);
            margin-top: 0.25rem;
        `;
        priceRange.parentNode.appendChild(rangeValue);
        
        const updateRangeValue = () => {
            rangeValue.textContent = `Hasta $${priceRange.value}`;
        };
        
        updateRangeValue();
        priceRange.addEventListener('input', updateRangeValue);
    }
    
    // ===== DEMO DE GRID DINÁMICO =====
    const gridContainer = document.querySelector('.products-grid');
    
    if (gridContainer) {
        const gridControls = document.createElement('div');
        gridControls.style.cssText = `
            margin-bottom: 1rem;
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        `;
        
        const columnButtons = [
            { text: '1 Col', cols: '1fr' },
            { text: '2 Cols', cols: 'repeat(2, 1fr)' },
            { text: '3 Cols', cols: 'repeat(3, 1fr)' },
            { text: 'Auto', cols: 'repeat(auto-fill, minmax(200px, 1fr))' }
        ];
        
        columnButtons.forEach(config => {
            const button = document.createElement('button');
            button.textContent = config.text;
            button.className = 'btn-outline';
            button.style.fontSize = '0.8rem';
            button.style.padding = '0.25rem 0.5rem';
            
            button.addEventListener('click', () => {
                gridContainer.style.gridTemplateColumns = config.cols;
                
                // Actualizar estado activo
                gridControls.querySelectorAll('button').forEach(btn => {
                    btn.style.background = 'transparent';
                    btn.style.color = 'var(--primary-color)';
                });
                button.style.background = 'var(--primary-color)';
                button.style.color = 'white';
            });
            
            gridControls.appendChild(button);
        });
        
        // Insertar controles antes de la grilla
        gridContainer.parentNode.insertBefore(gridControls, gridContainer);
        
        // Activar botón por defecto
        gridControls.querySelector('button:last-child').click();
    }
    
    // ===== TIPS Y TRUCOS INTERACTIVOS =====
    const exercises = document.querySelectorAll('.exercise');
    
    exercises.forEach(exercise => {
        const tipButton = document.createElement('button');
        tipButton.textContent = '💡 Ver Tips';
        tipButton.className = 'btn-outline';
        tipButton.style.cssText = `
            margin-top: 1rem;
            font-size: 0.9rem;
            padding: 0.5rem 1rem;
        `;
        
        const tips = {
            'Cards Responsivas': [
                'Usa flex: 1 1 300px para cards que crecen pero mantienen un ancho mínimo',
                'gap es mejor que margin para espaciado en flexbox',
                'flex-wrap: wrap permite que los elementos se ajusten en múltiples líneas'
            ],
            'Navegación Flexible': [
                'justify-content: space-between distribuye el espacio automáticamente',
                'align-items: center centra verticalmente sin importar la altura',
                'flex-grow en el elemento central hace que ocupe el espacio disponible'
            ],
            'Layout de Página Completo': [
                'grid-template-areas hace el código más legible y mantenible',
                '1fr significa "toma todo el espacio disponible"',
                'minmax() es perfecto para layouts responsive sin media queries'
            ]
        };
        
        tipButton.addEventListener('click', () => {
            const exerciseTitle = exercise.querySelector('h3').textContent;
            const relevantTips = Object.keys(tips).find(key => 
                exerciseTitle.includes(key.split(' ')[0])
            );
            
            if (relevantTips && tips[relevantTips]) {
                showTipsModal(relevantTips, tips[relevantTips]);
            } else {
                showTipsModal('Tips Generales', [
                    'CSS Grid es bidimensional, Flexbox es unidimensional',
                    'Mobile-first approach: diseña para móvil primero',
                    'Usa variables CSS para mantener consistencia',
                    'gap es soportado tanto en Grid como en Flexbox moderno'
                ]);
            }
        });
        
        exercise.appendChild(tipButton);
    });
    
    function showTipsModal(title, tipsList) {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            padding: 1rem;
        `;
        
        const content = document.createElement('div');
        content.style.cssText = `
            background: white;
            padding: 2rem;
            border-radius: 12px;
            max-width: 500px;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        `;
        
        content.innerHTML = `
            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">${title}</h3>
            <ul style="list-style: none; padding: 0;">
                ${tipsList.map(tip => `
                    <li style="
                        background: var(--background-light);
                        padding: 1rem;
                        margin-bottom: 0.5rem;
                        border-radius: 8px;
                        border-left: 4px solid var(--primary-color);
                    ">${tip}</li>
                `).join('')}
            </ul>
            <button id="closeTips" style="
                background: var(--primary-color);
                color: white;
                border: none;
                padding: 0.5rem 1rem;
                border-radius: 6px;
                cursor: pointer;
                margin-top: 1rem;
            ">Cerrar</button>
        `;
        
        modal.appendChild(content);
        document.body.appendChild(modal);
        
        // Cerrar modal
        const closeBtn = content.querySelector('#closeTips');
        const closeModal = () => document.body.removeChild(modal);
        
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        
        document.addEventListener('keydown', function handleEscape(e) {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', handleEscape);
            }
        });
    }
    
    // ===== INICIALIZACIÓN FINAL =====
    console.log('✅ Todas las funcionalidades CSS cargadas exitosamente');
    
    // Mostrar mensaje de bienvenida
    setTimeout(() => {
        if (confirm('¡Bienvenido a los ejercicios de CSS Grid y Flexbox! 🎨\n\n¿Te gustaría ver algunos tips interactivos?')) {
            showTipsModal('Tips Generales CSS', [
                '🎯 CSS Grid es perfecto para layouts bidimensionales complejos',
                '🔄 Flexbox excele en layouts unidimensionales y alineación',
                '📱 Siempre diseña con enfoque mobile-first',
                '🎨 Usa CSS Variables para mantener consistencia',
                '⚡ gap simplifica el espaciado entre elementos',
                '🔧 DevTools de Firefox y Chrome tienen inspectores especiales para Grid y Flexbox'
            ]);
        }
    }, 2000);
});

// ===== ESTILOS DINÁMICOS ADICIONALES =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .nav-open {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        box-shadow: var(--shadow-lg);
        padding: 1rem;
        border-radius: 0 0 8px 8px;
    }
    
    @media (max-width: 768px) {
        .nav-links {
            display: none;
        }
    }
`;
document.head.appendChild(style);