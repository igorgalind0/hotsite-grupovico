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


const modal = document.getElementById('modal');
const title = document.getElementById('modal-title');
const text = document.getElementById('modal-text');
const img = document.getElementById('modal-img');
const close = document.getElementById('close-modal');

document.querySelectorAll('a[data-title]').forEach(link => {
link.addEventListener('click', (e) => {
    e.preventDefault();
    title.textContent = link.dataset.title;
    text.textContent = link.dataset.text;
    img.src = link.dataset.img;
    img.alt = link.dataset.title;
    modal.showModal();
    modal.classList.add('modal-animado');
    document.body.classList.add('no-scroll');
});
});
    close.addEventListener('click', () => {
    modal.close();
    document.body.classList.remove('no-scroll');
});

modal.addEventListener('click', (e) => {
const rect = modal.getBoundingClientRect();

if (
    e.clientX < rect.left || e.clientX > rect.right ||
    e.clientY < rect.top || e.clientY > rect.bottom
) {
    modal.close();
    document.body.classList.remove('no-scroll');
}
});


