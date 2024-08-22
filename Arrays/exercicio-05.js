// 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos,
//  utilizando Spread Operator.
//  Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo,
//  por exemplo function funcaoExemplo(...params).

// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
// const salaJava = [6, 5, 8, 9, 5, 6];
// const salaPython = [7, 3.5, 8, 9.5];

// function uniaoArray(...array){
//     const arrayCompleto = array.reduce((acc, numero) => acc + numero, 0);
//     return arrayCompleto; 
// }

// const soma = uniaoArray(salaJS, salaJava, salaPython);
// console.log(soma);

// RESPOSTA:

// function concatArrays(...arrays) {
//     return [].concat(...arrays); // operador spread para concatenar os arrays
// }

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];
// const arraysConcatenados = concatArrays(arr1, arr2, arr3);
// console.log(arraysConcatenados); // Saída: [1, 2, 3, 4, 5, 6]



// 2 - Crie um array de números chamado valores. Depois,
// escreva um programa que some todos os elementos deste array utilizando o método reduce.

// const valores = [6, 5, 8, 9, 5, 6];

// const soma = valores.reduce((acc, numero) => numero + acc, 0);

// console.log(soma)


// 3 - Considere duas listas de cores:
// Crie um programa que una essas duas listas,
// removendo cores duplicadas e exiba a lista final.

// const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
// const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

// const todasAsCores = coresLista1.concat(coresLista2);
// const coresAtualizadas = [...new Set(todasAsCores)];

// console.log(coresAtualizadas);

// RESPOSTA: 

// const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
// const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

// const coresUnicas = [...new Set([...coresLista1, ...coresLista2])];
// console.log('Cores sem repetir: ', coresUnicas);



// 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const numerosPares = numeros.filter((numero) => numero % 2 === 0);

// console.log(numerosPares);

// RESPOSTA:

// function filtraNumerosPares(arr) {
//     return arr.filter(num => num % 2 === 0); // Filtra apenas os números pares
// }

// const numArray = [1, 2, 3, 4, 5, 6];
// const listaNumerosPares = filtraNumerosPares(numArray);
// console.log(listaNumerosPares); // Saída: [2, 4, 6]



// 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const numerosMultiplosDeTresEMaioresQueCinco = numeros.filter((numero) => numero % 3 === 0);

// console.log(numerosMultiplosDeTresEMaioresQueCinco);

// RESPOSTA: 

// const listaNumeros = [3, 6, 9, 4, 12, 2, 7];

// function filtraNumeros(arr) {
//     return arr.filter(num => num % 3 === 0 && num > 5); // Filtra números múltiplos de 3 e maiores que 5
// }

// const numerosFiltrados = filtraNumeros(listaNumeros);
// console.log(numerosFiltrados); // Saída: [6, 9, 12]


// 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const soma = numeros.reduce((acc, numero) => numero + acc, 0);

// console.log(soma);

// RESPOSTA:

// function somaElementosDoArray(arr) {
//     return arr.reduce((acum, atual) => acum + atual, 0); // Soma os elementos do array
//   }
  
// const listaNumeros = [1, 2, 3, 4, 5];
// const somaTotal = somaElementosDoArray(listaNumeros);
// console.log(somaTotal); // Saída: 15