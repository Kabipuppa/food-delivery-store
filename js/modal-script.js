'use strict';

const 
	// Для главной страницы
	close = document.querySelector('.modal-close'),
    modal = document.querySelector('.vmodal'),
    openModal = document.querySelector('.card-title'),
    modalOverlay = document.querySelector('.modal-overlay'),
    // Для модалки с доставкой
    openModalDostavka = document.querySelector('.add-adress');

// Для главной страницы
openModal.addEventListener('click', () => {
    modal.classList.remove('hide');
});
// Для модалки с доставкой
openModalDostavka.addEventListener('click', () => {
    modal.classList.remove('hide');
});

modalOverlay.addEventListener('click', (event) => {
    const target = event.target;
    
    if(target.classList.contains('modal-close') || 
      target === modalOverlay){
        modal.classList.add('hide');
    }
});