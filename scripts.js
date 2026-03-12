document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu - Funcionalidad del menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.querySelector('i').classList.toggle('fa-bars');
            menuToggle.querySelector('i').classList.toggle('fa-times');
        });

        // Cerrar menú al hacer clic en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            });
        });
    }

    // Schedule Tabs - Funcionalidad de las pestañas del horario
    const tabBtns = document.querySelectorAll('.tab-btn');
    const daySchedules = document.querySelectorAll('.day-schedule');
    
    // Verificamos si los elementos existen para evitar errores
    if (tabBtns.length > 0 && daySchedules.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // 1. Quitar la clase 'active' de todos los botones
                tabBtns.forEach(b => b.classList.remove('active'));
                // 2. Quitar la clase 'active' de todos los horarios
                daySchedules.forEach(s => s.classList.remove('active'));
                
                // 3. Añadir 'active' al botón presionado
                btn.classList.add('active');
                
                // 4. Obtener el ID del horario a mostrar (data-day)
                const dayId = btn.getAttribute('data-day');
                
                // 5. Añadir 'active' al horario correspondiente
                const activeSchedule = document.getElementById(dayId);
                if (activeSchedule) {
                    activeSchedule.classList.add('active');
                } else {
                    console.error(`No se encontró el horario con ID: ${dayId}`);
                }
            });
        });
    } else {
        console.error('No se encontraron botones de pestañas o divisiones de horario.');
    }

    // Sticky Navbar shadow - Sombra para la barra de navegación al hacer scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)'; // Sombra suave inicial
            }
        });
    }
});