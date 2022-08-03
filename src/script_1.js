const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});
//Modificar elementos
h1.innerHTML = 'Cambio del texto desde JS';
h1.innerText = 'No manejo de html <br>';

//Modificar atributos
console.log(h1.getAttribute('pantalla'));
h1.setAttribute('class', 'rojo');

h1.classList.add('azul');
h1.classList.remove('azul');

input.value ='Testing modificacion';

//add elementos HTML
const img = document.createElement('img');
img.setAttribute('src','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zJcuUrus-cneHFMjoQdR1wHaFN%26pid%3DApi&f=1');
console.log(img);
pid.innerText = '';
pid.append(img);