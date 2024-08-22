// 1)
/*

const saldo = 0;
const deposito = 100;
const saqueContaBancaria = 75;

let operacao = saldo + deposito;

operacao = operacao - saqueContaBancaria;

console.log("O saldo é: RS", operacao);


// 2)

const num = 10;
const operacao = num % 2 === 0 ? 'O númeor é par!' : 'O número é impar!';

console.log(operacao)


// 3)

const usuario = 'Joao';
const usuarioPermissao = true;

if (usuario.toLocaleLowerCase() === 'joao' && usuarioPermissao === true){
    console.log('Online')
    } else {
        console.log('Offline')
}
        

// 4)

const cadastroNome = false;
const cadastroIdade = true;

if (cadastroNome || cadastroIdade){
    console.log('Verdadeira')
    } else {
        console.log('Falso')
}

*/

// 5)

const idadeUsuario = 14;
const idadeMinima = 18;

if (idadeUsuario >= 18){
    console.log('O usuário pode realizar a compra!');
} else {
    console.log('O usuário não pode realizar a compra!');
}