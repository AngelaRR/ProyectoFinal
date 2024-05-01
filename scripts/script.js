function handlerEvents() {
    let botonAbrir = document.getElementById('botonMenu'); 

    botonAbrir.addEventListener('click',handlerOpen);
}

function handlerOpen() {
    let iconoMenu = document.getElementById('botonMenu');
    let menu = document.getElementById('header__menu');
    let nav = document.getElementById('header__nav');
    let logo = document.getElementById('header__img');

    iconoMenu.style.display = 'none';
    menu.style.height = '100%';
    nav.style.display = 'flex';
    logo.style.zIndex = '1'
}


window.onload = handlerEvents;