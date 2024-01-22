const body = document.querySelector('body');
const menu = document.querySelector('.mobile-menu');
const btnOpenMenu = document.querySelector('.menu-icon');
const btnCloseMenu = document.querySelector('.close-menu');

btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);

function openMenu() {
    menu.style.width = '65%';
    menu.style.opacity = '1';
    body.style.overflow = 'hidden';

}

function closeMenu() {
    menu.style.width = '0';
    menu.style.opacity = '0';
    body.style.overflow = 'visible';
}