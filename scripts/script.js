let isOpen = false;

function handlerEvents() {

    let menu = document.getElementById("botonMenu");
    menu.addEventListener("click",handlerMenu);
}

function handlerMenu() {

    let list = document.getElementById("lista");
    let icon = document.getElementById("iconoMenu");

    if(isOpen == false) {

        list.style.display = 'block';
        icon.className = 'fa-solid fa-xmark';
        isOpen = true;

    }else {

        list.style.display = 'none';
        isOpen = false;
        icon.className = 'fa-solid fa-bars';
    }
}