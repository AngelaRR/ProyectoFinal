function handlerEvent() {
    let inicio = document.getElementById('linkInicio');
    let nosotros = document.getElementById('linkNosotros');
    let monitores = document.getElementById('linkMonitores');
    let blog = document.getElementById('linkBlog');
    let tiendas = document.getElementById('linkTiendas');
    let contacto = document.getElementById('linkContacto');

    inicio.addEventListener('click', handlerPaginas);
}

function handlerPaginas(e) {
    console.log('hola');
    console.log(e);
}

window.load = handlerEvent;