'use strict';

const btn = document.querySelector('.burger-icon-wrapper'),
	  nav = document.querySelector('.menu-wrapper'),
      icon = document.querySelector('.burger-icon');
        

btn.addEventListener('click', () => {

	icon.classList.toggle('active');
	nav.classList.toggle('is-active');
});
