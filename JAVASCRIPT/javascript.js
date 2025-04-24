const banner = document.querySelector('.banner2');
const imagenes = banner.querySelectorAll('img');
const selector = document.querySelector('.selector-vertical');
let index = 0;

// Obtenemos las miniaturas
const miniaturas = selector.querySelectorAll('img');

// Añadimos un evento a cada miniatura para navegar al carrusel correspondiente
miniaturas.forEach((miniatura, i) => {
  miniatura.addEventListener('click', () => {
    index = i;  // Cambia el índice a la imagen correspondiente
    banner.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
    actualizarSelector();
  });
});

// Actualiza la miniatura activa
function actualizarSelector() {
  miniaturas.forEach((m, i) => {
    m.classList.toggle('activo', i === index);
  });
}

// Avanzar automáticamente el carrusel
function avanzarCarrusel() {
  index++;
  banner.scrollTo({
    top: index * window.innerHeight,
    behavior: 'smooth'
  });

  if (index >= imagenes.length) {
    setTimeout(() => {
      banner.scrollTo({ top: 0, behavior: 'auto' });
      index = 0;
      actualizarSelector();
    }, 400);
  } else {
    actualizarSelector();
  }
}

setInterval(avanzarCarrusel, 3000);


