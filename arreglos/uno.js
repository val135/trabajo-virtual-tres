'use strict'
const workWithMovies = () => {}
const pelis = [
    'Lalaland',
    'Home alone',
    'Ps I love you'
];

pelis [3] =('The avengers end game');
pelis [0]= ('The avengers end game');


const nuevaLongitud = pelis.push('The avengers end game');
const elementosEliminados = pelis.splice(0, 1);

console.log(pelis);
console.log(pelis.length);
console.log(nuevaLongitud);
console.log(elementosEliminados);
console.log(pelis.length);
console.log(pelis);
