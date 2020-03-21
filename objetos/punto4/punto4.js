'use strict';

const eventBoton = document.querySelector('.boton');

const imprimirEvento = (evento) => {
    console.log(evento);
}

eventBoton.addEventListener('click', imprimirEvento);