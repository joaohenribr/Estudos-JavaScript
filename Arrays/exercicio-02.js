//  1)
/*

const personagens = ['João', 'Maria'];
const idade = [22, 19];

const lista = personagens.concat(idade);

console.log(lista)


// 2)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parteNumeros = numeros.slice(numeros[2], numeros[7]);

console.log(numeros);
console.log(parteNumeros);

// RESOLUÇÂO

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parteNumeros = numeros.slice(3, 8);
console.log('Parte dos números:', parteNumeros);

// 3)

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

frutas.splice(2, 2, 'Kiwi', 'Pêssego');

console.log(frutas);


// 4)

const menuPrincipal = ['Filé a parmegiana', 'Filé mignon ao molho madeira'];
const menuDeSobremesas = ['Petit gâteau', 'Taça de sorvete'];

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

console.log('Cardápio completo: ', menuCompleto);


// 5)

*/

let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
      linha.push(valorInicial++);
    }
    matriz.push(linha);
}

console.log('Matriz de duas dimensões:');
console.log(matriz);
matriz.forEach(row => console.log(row)); // visualização em linhas e colunas


// 6)

console.log(matriz[1][2]);


// 7)

matriz[2][1] = 15;

console.log('Alterado a terceira linha e terceira coluna: ',matriz);
matriz.forEach(row => console.log(row)); // visualização em linhas e colunas
