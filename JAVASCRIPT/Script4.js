window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Seleccionamos los elementos
    const imagen = document.querySelector('.chocolates');

    // Mover la imagen hacia arriba en función del scroll
    imagen.style.transform = `translateY(-${scrollY * 0.4}px)`;
  });