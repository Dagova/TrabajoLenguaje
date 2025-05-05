window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Seleccionamos los elementos
    const texto = document.querySelector('.frutas-texto');
    const imagen = document.querySelector('.frutas');

    // Mover el texto a la izquierda en función del scroll
    texto.style.transform = `translate(-${scrollY * 0.4}px, -50%)`;

    // Mover la imagen hacia arriba en función del scroll
    imagen.style.transform = `translateY(-${scrollY * 0.4}px) rotate(20deg)`;
  });