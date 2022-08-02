const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const result = document.getElementById('result');

function btnOnClick(){
    let resultado = parseInt(input1.value) + parseInt(input2.value);
    let resultadoFinal = 'Resultado de la suma es ' + resultado;
    console.log(resultadoFinal);
    result.innerText = resultadoFinal;
};