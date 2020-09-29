const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function() {
    console.log('click hamburger');

    body.classList.toggle('noScroll');
    header.classList.toggle('open');
    fadeElems.forEach(function(element) {
        element.classList.toggle('fade-in', header.classList.contains('open'));
        element.classList.toggle('fade-out', !header.classList.contains('open'));
    })
});