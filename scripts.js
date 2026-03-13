document.addEventListener('DOMContentLoaded', function() {
    // 1. Funcionalidad de las Pestañas (Tabs)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const daySchedules = document.querySelectorAll('.day-schedule');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Quitamos 'active' de todos los botones y horarios
            tabBtns.forEach(b => b.classList.remove('active'));
            daySchedules.forEach(s => s.classList.remove('active'));

            // Agregamos 'active' al botón que se le hizo clic
            this.classList.add('active');

            // Buscamos el ID del horario y lo mostramos
            const targetId = this.getAttribute('data-day');
            const targetSchedule = document.getElementById(targetId);
            
            if (targetSchedule) {
                targetSchedule.classList.add('active');
            } else {
                console.error("Error: No se encontró el div con id -> " + targetId);
            }
        });
    });

    // 2. Funcionalidad del Menú Móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});