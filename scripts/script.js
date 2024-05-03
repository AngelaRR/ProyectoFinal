function handlerEvents() {
    // Creamos las variables necesarias y les asignamos los elementos que tengan la id seleccionada
    let botonAbrir = document.getElementById('botonMenu'); 
    let botonTienda1 = document.getElementById('tienda1');
    let botonTienda2 = document.getElementById('tienda2');

    // Cuando hagamos click el elemento botonAbrir, se ejecutará la función handlerOpen
    botonAbrir.addEventListener('click',handlerOpen);

    // Cuando hagmamos click en el elemento botonTienda1 o botonTienda2, a través de una función flecha ejecutamos la linea de código que permite que se abra una nueva pestaña con la url definida
    botonTienda1.addEventListener('click', () => {
        window.open('https://www.nockpoint.es/b2c/1');
    });

    botonTienda2.addEventListener('click', () => {
        window.open('https://cerraarchery.com/');
    });
}

// Función para abrir el menú a través del botón que aparece en resoluciones pequeñas
function handlerOpen() {
    // Declaramos las variables y les asignamos los elementos con las id's necesarias
    let iconoMenu = document.getElementById('botonMenu');
    let menu = document.getElementById('header__menu');
    let nav = document.getElementById('header__nav');
    let logo = document.getElementById('header__img');

    iconoMenu.style.display = 'none'; //Ocultamos las opciones horizontales del menú
    menu.style.height = '100%'; //Ocupamos toda la pantalla con el menú
    nav.style.display = 'flex'; //Le damos un disposición flex a las opciones del menú
    logo.style.zIndex = '1' //Posicionamos el logo por detrás del menú
}

//Cuando se carga la página se llama a la función handlerEvents
window.onload = handlerEvents; 