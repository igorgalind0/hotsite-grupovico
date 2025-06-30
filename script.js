//Crédito (Perguntas)
const perguntas = document.querySelectorAll('.credito button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains('ativa');
    pergunta.setAttribute('aria-expanded', ativa);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);    
}

perguntas.forEach(eventosPerguntas);

const telefone = document.getElementById('telefone');

telefone.addEventListener('input', () => {
    telefone.value = telefone.value.replace(/[A-Za-z]/g, '');
});

function MenuMobile(){
    const menuMobile = document.querySelector("[data-menu='button'");
    const ulMenu = document.querySelector("[data-menu='list'");
    
    menuMobile.addEventListener('click', () => {
        ulMenu.classList.toggle('ativo');
    });
}

MenuMobile();

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('a[href^="#"]');
  
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
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

initScrollSuave();