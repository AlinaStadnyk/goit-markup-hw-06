console.log('modal.js');
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  console.log(refs.openModalBtn);
  console.log(refs.closeModalBtn);

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    console.log('toggleModal');
    refs.modal.classList.toggle('is-hidden');
  }
})();