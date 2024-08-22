// 1)
/*
const comprasDoMes = ['ovo', 'leite', 'sucrilhos', 'macarrão', 'açai'];

for (let compras of comprasDoMes){
    console.log(compras)
}



//  2)

const notas = [10, 5, 7, 8, 9];

function mostrarIndice(){
    for(let i = 0; i < notas.length; i++){
        console.log(`O elemento ${notas[i]} pertence ao indice ${i}`);
    }
}

mostrarIndice();



//  3)

const notasDeProva = [2, 4, 8, 10, 9]
let soma = 0;

function somaElementos(){
    for (gustavo = 0; gustavo < notasDeProva.length; gustavo++){
        soma += notasDeProva[gustavo];
    }
    console.log(soma);
}

somaElementos();



//  4)

const numerosCasa = [107, 209, 27, 14, 109];

function identificarMenorEMaiorNumero(arr){
    let menorNumero = 1000;
    let maiorNumero = 0;

    for (i = 0; i < arr.length; i++){    
        if(arr[i] < menorNumero){
            menorNumero = arr[i]
        }    
        if(arr[i] > maiorNumero){
            maiorNumero = arr[i]
        } 
    }    
    console.log(`O menor número é ${menorNumero} e o maior número é ${maiorNumero}`);
}

identificarMenorEMaiorNumero(numerosCasa);



//   5)

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

for (i = 0; i < numeros.length; i++) {
    let resto = numeros[i] % 2;

    if( resto === 0){
        console.log(numeros[i])
    } 
}


RESPOSTA

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
console.log('Números pares do array:');

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i]);
  }
}



//   6)

const notas = [10, 8, 7, 12, 9, 16, 15, 19, 8, 20];
let soma = 0;

for (i = 0; i < notas.length; i++){
    soma += notas[i];
}
    
constmedia = soma / notas.length;

console.log(`A média das notas é: ${media.toFixed(2)}`);

*/



