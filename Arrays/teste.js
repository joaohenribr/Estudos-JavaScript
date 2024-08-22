// TESTE 01
/*
const notas = [2, 4, 5, 7];
const alunos = ['João', 'Luisa', 'Gustavo', 'Manuela'];
let soma = 0;

for (i = 0; i < notas.length; i++){
    soma = soma + notas[i];    
    console.log(`A ${i + 1}ª nota é: ` + notas[i] + ' pontos');      
}

console.log('O total é: ' + soma + ' pontos')


for ( i = 1; i <= 10; i++){
    console.log(i)
}


console.log('início do programa');

setTimeout(() => console.log('aguardando 2 segundos'), 2000);
setTimeout(() => console.log('aguardando 5 segundos'), 5000);

console.log('fim do programa');

const array1 = ['João', 'Luisa'];
const array2 = ['Gustavo', 'Manuela'];
const array3 = ['Julia', 'Bernarndo'];

const lista = array1.concat(array2, array3);

console.log(lista);


const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")
 
console.log(arrayConcat)
console.log(arrayOriginal)
*/


// se não vier dado dentro do segundo arrei ele assume o 'João'
// const [nome1 = 'João'] = []
// console.log(nome1);


// // Adicionar dados em um array
// const pessoa = {
//     nome : 'João',
//     idade: 25
// }

// const pessoaComTelefone = {
//     ...pessoa, telefone: 123123123
// }

// console.log(pessoa, pessoaComTelefone);


// Cria a variavel e já utiliza
// const { nome } = pessoa;

// console.log(nome);


// // Imprime os dados e filtra mostrando apenas os dados que quero
// function imprimeDados({ nome, idade }) {
//     console.log(nome, idade);
// }

// imprimeDados(pessoa)


// const lista = [1, 2, 3, 4, 5];
 
// for (let i = 0, j = 0; i < lista.length; i++, j++) {
//  console.log(lista[i] + j); 
// }
 


// let num1 = 10;
// let num2 = num1;

// num2 += 5;
// num1 += 1;

// console.log(`Num1 é ${num1}. Num2 é ${num2}`);



let numeroOriginal = 10;

function alteraNumero(numero) {
  numero = 50;

  console.log(`numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`);
}

alteraNumero(numeroOriginal);
