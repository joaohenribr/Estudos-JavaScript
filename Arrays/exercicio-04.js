// 1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

// const alunos = ["João", "Luisa", "Gustavo", "Manuela"];

// alunos.forEach((aluno, indice) => {
//     console.log(`O aluno ${aluno} está na posição: ${indice}`);
// })


// 2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback 
// que executa alguma operação matemática. 
//Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, 
//imprimindo o resultado da operação no console.

// function executaOperacaoEmArray(array, calculoNotas){
//     return array.map(calculoNotas);
// }

// function multiplicacaoPorQuatro(num){
//     return num * 4;
// }

// const notasDeProva = [2, 4, 3, 5];
// const listaDeNotasMultiplicadas = executaOperacaoEmArray(notasDeProva, multiplicacaoPorQuatro);
// console.log(listaDeNotasMultiplicadas);


// 3 - Você recebeu um array numeros contendo valores numéricos.  
//Crie um programa que verifique se um número específico está presente nesse array.
// Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, 
//  se o número não estiver presente, o programa deve retornar "-1".

// const numeros = [2, 4, 6, 8, 10];
// const numeroValido = 10;
// let valido;
// let invalido;

// numeros.forEach((numero, indice) => numero === numeroValido ? valido = indice : invalido = -1);

// const resultado = valido === undefined ? console.log(`O numero ${numeroValido} não está no array COD ${invalido}!`) :console.log(`O numero ${numeroValido} está no indice ${valido}.`) ;


// RESOLUÇÃO:

// const numeros = [10, 20, 30, 40, 50];
// const numeroProcurado = 30;
// let posicao = -1;

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] === numeroProcurado) {
//     posicao = i;
//     break;
//   }
// }

// console.log(`Posição do número ${numeroProcurado}: ${posicao}`);



// 4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.

// Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas.
// Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos.
// Exiba no console uma mensagem informando o nome do aluno procurado; 

// caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.


// const nomesTurmaA = [
//     'João Silva',
//     'Maria Santos',
//     'Pedro Almeida'
//   ];
  
//   const nomesTurmaB = [
//     'Carlos Oliveira',
//     'Ana Souza',
//     'Lucas Fernandes'
//   ];

// const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

// console.log(todasAsTurmas);

// const busca = todasAsTurmas.find(aluno => aluno === 'Ana Souza');

// if(busca === undefined){
//     console.log('Aluno não encontrado!');
// }else{
//     console.log(`A pessoa ${busca} está na lista!`)
// }



// 5 - Considere um array de números inteiros.

// Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação.
//  Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.

// const numeros = [6, 9, 12, 15, 18, 21];

// numeros.forEach((numero) => console.log('O resultado da multiplicação de ',numero + ' por 3 é: ',numero * 3));

// indice = numeros.findIndex(numero => numero === 18);

// console.log(`O numero 18 tem como indice a posição ${indice}`);

// RESOLUÇÃO:

// const numeros = [6, 9, 12, 15, 18, 21];

// console.log('Elementos do array multiplicados por 3:');

// numeros.forEach(numero => {
//   const resultado = numero * 3;
//   console.log(resultado);
// });

// const indiceDoNumero18 = numeros.findIndex(numero => numero === 18);

// if (indiceDoNumero18 !== -1) {
//   console.log(`O número 18 está no índice ${indiceDoNumero18}.`);
// } else {
//   console.log('O número 18 não está presente no array.');
//}