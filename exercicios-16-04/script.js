let valor1;
let valor2;
let total;

function capturarValor1 (x){
    valor1 = parseInt (x);
    console.log (valor1);
}

function capturarValor2 (y) {
    valor2 = parseInt(y);
    console.log(valor2);
}

function somar() {
    total = valor1 + valor2;
    alert ('A soma total é: ' + total);
    
}

function subtrair() {
    total = valor1 - valor2;
    alert ('A subtração é de ' + total);
}

function dividir(){
    total = valor1/valor2;
    alert ('A divisão é ' +total);
}

function multiplicar() {
    total = valor1*valor2;
    alert ('O resultado da multiplicação é ' +total);
}