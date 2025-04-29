// Función para verificar si un elemento está visible en la pantalla
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Seleccionamos todos los párrafos
const paragraphs = document.querySelectorAll('.paragraph');

// Función para manejar el evento de scroll
function handleScroll() {
    paragraphs.forEach(paragraph => {
        if (isInViewport(paragraph)) {
            paragraph.classList.add('visible');
        } else {
            paragraph.classList.remove('visible');
        }
    });
}

// Agregamos el evento de scroll
window.addEventListener('scroll', handleScroll);

// Llamamos a la función para que revise la visibilidad desde el principio
document.addEventListener("DOMContentLoaded", handleScroll);
