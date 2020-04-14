// 1. let numero = prompt('digite um numero');

// if (numero%2===0){
//     alert (`o número ${numero} é par`);
// }else {
//     alert (`o número ${numero} é ímpar`);
// }

//2. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Reprovado", se a média for menor do que sete;
// A mensagem "Aprovado com Distinção", se a média for igual a dez.

// let nota1 = parseFloat(prompt ('Digite a sua nota'));
// let nota2 = parseFloat(prompt ('Digite a sua outra nota'));
// let media = (nota1+nota2)/2;

// if (media>=7 && media<10) {
//     alert ('Aprovado');
// } else if (media <7){
//     alert ('Reprovado');
// } else if (media===10) {
//     alert ('Aprovado com distinção');
// } else {
//     alert ('Nota inválida');
// }

// 3. Faça um script que leia três números inteiros e mostre o maior deles.
// - ler 3 valores
// - condicao qual é o maior deles

// let num1 = parseInt(prompt('digite um número'));
// let num2 = parseInt (prompt('digite outro número'));
// let num3 = parseInt (prompt('digite outro número'));

// if (num1>num2 && num1>num3) {
//     console.log (`o número ${num1} é maior`);
// } else if (num2>num1 && num2>num3) {
//     console.log (`o número ${num2} é maior`);
// } else if (num1===num2 && num2===num3){
//     alert (`os números ${num1}, ${num2} e ${num3} são iguais`);
// } else {
//     console.log (`o número ${num3} é maior`);
// }

// 4. Faça um script que pede dois inteiros e armazene eles em duas variáveis. Em seguida, troque o valor das variáveis, invertendo e exibindo o antes e o depois em uma janela de alert.
// Fazer duas variáveis trocarem de valores entre si - Variável Auxiliar

// let num1 = parseInt(prompt('digite um número'));
// let num2 = parseInt(prompt('digite outro número'));

// let auxiliar;

// alert (`os valores definidos são ${num1} e ${num2}`);

// auxiliar = num1;
// num1 = num2;
// num2 = auxiliar;
// alert (`os novos valores definidos são ${num1} e ${num2}`);

// Transforme os ifs abaixo em if ternario (condicao ? exp 1 : exp2 ).

// 1. 
// if(a > 0) {
// resultado = "valor maior que 0";
// } else {
// resultado = "valor = 0";
// }
    // let a = 10;
    // let resultado = (a>0)? "a é maior que 0" : "a é igual a zero";
    // console.log (resultado);

// 2.
// if(sexo === 'feminino') {
// alert('seja bem vinda');
// } else {
// alert('seja bem vindo')
// }

// let sexo = prompt ('Qual seu gênero?');
// (sexo==='feminino')? alert('seja bem-vinda'): alert('seja bem-vindo');

// 3.
// var isIphone = false;
// var os;

// if (isIphone) {
//   os = "iOS";
// } else {
//   os = "Android";
// }

// isIphone = false;
// (isIphone)? os='iOS': os='Android';
// console.log (os);

// ou os = (isIphone) ? 'ios' : 'android'


//4. if(salario < 5000) {
// 	cargo = "junior"
// } else {
// 	cargo = "pleno"
// }

// salario=6000;
// cargo = (salario<5000)? 'junior': 'pleno';
// console.log (cargo);

//Crie uma variável chamada “fruta”. Esta variável deve receber uma string com o nome de uma fruta. Após, crie uma estrutura condicional switch que receba esta variável e que possua três casos: caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis” e caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções e verifique o console do seu navegador. Crie também um default, que retornará uma mensagem de erro no console.

let fruta = prompt ('Escolha uma fruta');

switch (fruta) {
    case 'maçã':
        console.log ('Não vendemos esta fruta aqui');
        break;
    case 'kiwi':
        console.log ('Estamos com escassez de kiwis');
        break;
    case 'melancia':
        console.log ('Aqui está, são 3 reais o quilo');
        break;
    default:
        console.error ('fruta indisponível');
}