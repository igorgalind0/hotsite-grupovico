export default function abrirModal() {
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
}