export default function initScrollSuave() {
    const linksInternos = document.querySelectorAll('a[href^="#"]');
  
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');

      if (!href || href === '#') return;
      
      const section = document.querySelector(href);
      if (section) {
        const topo = section.offsetTop - 150;
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });
    }
  
      // forma alternativa
      // const topo = section.offsetTop;
      // window.scrollTo({
      //   top: topo,
      //   behavior: 'smooth',
      // });
    }
  
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
}
