const body = document.querySelector('body');
const menu = document.querySelector('.mobile-menu');
const btnOpenMenu = document.querySelector('.menu-icon');

btnOpenMenu.addEventListener('click', openMenu);

function openMenu() {

    menu.style.width = '65%';
    body.style.overflow = 'hidden';

    const btnCloseMenu = document.querySelector('.close-menu');
    btnCloseMenu.addEventListener('click', () => {
        menu.style.width = '0%';
        body.style.overflow = 'visible';
    });
}