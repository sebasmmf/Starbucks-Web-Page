const menu = document.querySelector('.mobile-menu');
const btnOpenMenu = document.querySelector('.menu-icon');

btnOpenMenu.addEventListener('click', openMenu)

function openMenu() {
    menu.style.display = 'flex';
    const btnCloseMenu = document.querySelector('.close-menu');
    btnCloseMenu.addEventListener('click', () => menu.style.display = 'none');
}