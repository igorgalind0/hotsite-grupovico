const form = document.getElementById('form-contato');
const modal = document.getElementById('modal');
const popupMsg = document.getElementById('popup-msg');
const popupClose = document.getElementById('popup-close');

function abrirModal(msg) {
  popupMsg.textContent = msg;
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData
  })
    .then(response => response.text())
    .then(text => {
      abrirModal(text);
      form.reset();
      console.log('Retorno do PHP:', text);
    })
    .catch(err => {
      abrirModal('Erro ao enviar: ' + err.message);
    });
});

popupClose.addEventListener('click', fecharModal);

// Opcional: fechar clicando fora da modal
modal.addEventListener('click', e => {
  if (e.target === modal) fecharModal();
});