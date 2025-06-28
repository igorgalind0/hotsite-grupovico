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