const newsletterForm = document.querySelector('.newsletter');
const newsletterModal = document.getElementById('modal-newsletter');
const newsletterMsg = document.getElementById('newsletter-msg');
const newsletterClose = document.getElementById('newsletter-close');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(newsletterForm);

    fetch(newsletterForm.action, {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(text => {
        newsletterMsg.textContent = text;
        newsletterModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // bloquear scroll
        newsletterForm.reset();
      })
      .catch(err => {
        newsletterMsg.textContent = 'Erro ao enviar: ' + err.message;
        newsletterModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });
  });

  newsletterClose.addEventListener('click', () => {
    newsletterModal.style.display = 'none';
    document.body.style.overflow = ''; // reativa scroll
  });

  // Fecha clicando fora da modal
  window.addEventListener('click', (e) => {
    if (e.target === newsletterModal) {
      newsletterModal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
}
