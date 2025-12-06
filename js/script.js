function showSection(sectionId) {
    // 1. Ocultar todas las secciones de contenido
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // 2. Quitar la clase 'active-btn' de todos los botones
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.classList.remove('active-btn');
    });

    // 3. Mostrar la sección seleccionada
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.remove('hidden');
    }

    // 4. Resaltar el botón presionado
    const activeButton = document.getElementById('btn-' + sectionId);
    if (activeButton) {
        activeButton.classList.add('active-btn');
    }
}
