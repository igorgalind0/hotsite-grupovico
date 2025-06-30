export default function ativarPerguntas() {
  const perguntas = document.querySelectorAll('.credito button');
  
  function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);
  
    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains('ativa');
    pergunta.setAttribute('aria-expanded', ativa);
  }
  
  perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', ativarPergunta);
  });
  
  const telefone = document.getElementById('telefone');
  
  telefone.addEventListener('input', () => {
    telefone.value = telefone.value.replace(/[A-Za-z]/g, '');
  });
}
