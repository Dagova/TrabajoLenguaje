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

// Carrusel horizontal
document.querySelectorAll('.carousel-container').forEach(container => {
  const carousel = container.querySelector('.carousel');
  const nextBtn = container.querySelector('.next');
  const prevBtn = container.querySelector('.prev');

  let scrollStep = 220; // ancho + margen
  let totalItems = carousel.querySelectorAll('a').length / 2;

  let index = 0;

  const scrollCarousel = () => {
    index++;
    carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });

    if (index >= totalItems) {
      setTimeout(() => {
        carousel.scrollTo({ left: 0, behavior: 'auto' });
        index = 0;
      }, 300); // espera a que termine el scroll animado
    }
  };

  nextBtn.addEventListener('click', scrollCarousel);
  prevBtn.addEventListener('click', () => {
    index = (index - 1 + totalItems) % totalItems;
    carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  });

  // Auto-scroll cada 3 segundos
  setInterval(scrollCarousel, 3000);
});


