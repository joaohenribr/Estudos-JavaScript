// 1)
/*
const elementos = [,,,,,,,,,];

for(i = 0; i < elementos.length; i++) {
    elementos[i]
    if(i === 1){
        elementos[i] = 20;
    } else if(i === 3){
        elementos[i] = 90;
    } else if(i === 7){
        elementos[i] = 31
    }
}

console.log(elementos)
console.log(elementos.length)


Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.
// Criando um array esparso
const arrayEsparso = [];

// Atribuindo valores a alguns elementos do array
arrayEsparso[1] = 'Elemento 1';
arrayEsparso[3] = 'Elemento 3';
arrayEsparso[7] = 'Elemento 7';

// Imprimindo os resultados
console.log(arrayEsparso);
console.log(arrayEsparso.length);

// 2)

const elementos = [1, 2, 3, 4, 5];
console.log(`Array antes da alteração: ${elementos}`);

elementos[0] = 7;

console.log('Array depois da alteração: ' + elementos);


// 3)

const meuArray = [];

meuArray.push(3, 5, 8);

console.log(meuArray);

for (i = 0; i < meuArray.length; i++){
    meuArray[i] = i == 0 ? meuArray[i] = meuArray[i] * 2 : meuArray[i];    
}

console.log(meuArray)


// 4)

const valores = [];

valores.push(12);
valores.push(29);
valores.push(53);

console.log('Array resultante: ' + valores);


// 5)

const clinica = [];

clinica.push('Cachorro ', 'Gato ', 'Papagaio ');
console.log('Animais novos: ' + clinica);

clinica.pop();
console.log('Fila de animais: ' + clinica);
clinica.pop();
console.log('Fila de animais: ' + clinica);
clinica.pop();
console.log('Fila de animais: ' + clinica);


// RESPOSTAS


// 1)

// Criando um array esparso
const arrayEsparso = [];

// Atribuindo valores a alguns elementos do array
arrayEsparso[1] = 'Elemento 1';
arrayEsparso[3] = 'Elemento 3';
arrayEsparso[7] = 'Elemento 7';

// Imprimindo os resultados
console.log(arrayEsparso);
console.log(arrayEsparso.length);


// 3)

const meuArray = []; // Criando um array vazio
meuArray.push(5); // Adicionando números ao array
meuArray.push(10);
meuArray.push(15);

//Exibição dos Itens
console.log("Itens no array meuArray:", meuArray);

//Atualização de Itens
//Dobrando o valor do primeiro elemento
meuArray[0] = meuArray[0] * 2; 
//mesma operação utilizando o operador `*=`
//meuArray[0] *= 2;
console.log("Array após a atualização do primeiro elemento:", meuArray);
*/


// TESTES

const meuArray = [];

meuArray.push(15, 29, 13);

console.log('Array com os itens: ', meuArray);

meuArray [0] = meuArray[0] * 2;

console.log('Array atualizado: ', meuArray);
