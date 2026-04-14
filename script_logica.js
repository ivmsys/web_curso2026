document.addEventListener('DOMContentLoaded', function () {
    // 1. LÓGICA DE NAVEGACIÓN (Ocultar y Mostrar)
    const allSections = document.querySelectorAll('section.section, header.hero'); // Incluimos todas las secciones y el home
    const navLinks = document.querySelectorAll('.nav-links li a');
    const navbar = document.querySelector('.navbar');

    function showSection(targetId) {
        // Ocultamos todas las secciones de contenido
        allSections.forEach(sec => sec.classList.add('spa-hidden'));

        // Mostramos SOLO a la que le dieron clic
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.classList.remove('spa-hidden');
        }

        // Hacemos scroll suave para que la barra quede arriba
        if (targetId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: navbar.offsetTop, behavior: 'smooth' });
        }

        // Cambiamos el color al botón activo
        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === '#' + targetId) {
                a.classList.add('active');
            }
        });
    }

    // Escuchar clics en el menú
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    // Hacer que el botón de "View Schedule" en la portada también funcione
    const viewScheduleBtn = document.querySelector('a[href="#schedule"].btn-primary');
    if (viewScheduleBtn) {
        viewScheduleBtn.addEventListener('click', function (e) {
            e.preventDefault();
            showSection('schedule');
        });
    }

    // Iniciar página mostrando solo la portada
    showSection('home');

    // 2. FUNCIONALIDAD DE LAS PESTAÑAS (Tabs de Horarios - Se mantiene igual)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const daySchedules = document.querySelectorAll('.day-schedule');

    if (tabBtns.length > 0 && daySchedules.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                tabBtns.forEach(b => b.classList.remove('active'));
                daySchedules.forEach(s => s.classList.remove('active'));
                this.classList.add('active');

                const targetId = this.getAttribute('data-day');
                const targetSchedule = document.getElementById(targetId);
                if (targetSchedule) targetSchedule.classList.add('active');
            });
        });
    }

    // 3. MENÚ MÓVIL
    const menuToggle = document.querySelector('.menu-toggle');
    const navContainerLinks = document.querySelector('.nav-links');

    if (menuToggle && navContainerLinks) {
        menuToggle.addEventListener('click', function () {
            navContainerLinks.classList.toggle('active');
        });

        // Cerrar el menú móvil al presionar una opción
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navContainerLinks.classList.remove('active');
            });
        });
    }

    // 4. ACORDEÓN DE ABSTRACTS (Solo uno abierto a la vez)
    const abstractDetails = document.querySelectorAll('.abstract-item');
    abstractDetails.forEach(detail => {
        detail.addEventListener('toggle', function () {
            if (this.open) {
                abstractDetails.forEach(otherDetail => {
                    if (otherDetail !== this && otherDetail.open) {
                        otherDetail.removeAttribute('open');
                    }
                });

                setTimeout(() => {
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const y = this.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }, 10);
            }
        });
    });
});
