// Seleccionamos las imágenes
const platano = document.querySelector('.platano');
const drips = document.querySelector('.drips');

// Agregamos un evento para detectar el scroll
window.addEventListener('scroll', () => {
  // Calculamos la cantidad de desplazamiento en el scroll
  let scrollPosition = window.scrollY;

  // Oscilamos la imagen del plátano en función del desplazamiento
  let oscillation = Math.sin(scrollPosition / 500) * 400; // Ajustamos el rango de oscilación a 20 grados

  // Aplicamos el movimiento de rotación a la imagen del plátano
  platano.style.transform = `translateX(${oscillation}px)`;  // Movimiento horizontal  
});