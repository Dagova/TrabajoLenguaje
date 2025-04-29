window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
  
    const yum1 = document.querySelector('.yum1');
    const yum2 = document.querySelector('.yum2');
    const yum3 = document.querySelector('.yum3');
  
    if (yum1) {
      yum1.style.transform = `translateX(${-scrollY * 0.3}px)`;
    }
  
    if (yum2) {
      yum2.style.transform = `translateX(${scrollY * 0.3}px)`;
    }
  
    if (yum3) {
      yum3.style.transform = `translateX(${-scrollY * 0.3}px)`;
    }
  });