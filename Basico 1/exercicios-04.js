
// 1)

function cumprimentarPessoa(nome){   
    console.log(`Olá ${nome}, seja bem vindo(a)!`)
}

const nomeDaPessoa = 'João Henrique';
const saldacao = cumprimentarPessoa(nomeDaPessoa);

/*
// 2)

function verificaIdade (idade){
    idade = 20;
    condicao = idade >= 18 ? 'A pessoa é maior de idade' : 'A pessoa é menor de idade';
    console.log(condicao);
}
    
verificaIdade();


// 3)

function verificaPalindromo(nome){
    textoInvertido = nome.split("").reverse().join("");   
    return verificacao = textoInvertido.toLowerCase() === nome.toLowerCase() ? `O nome ${nome} é um palíndromo!` : `O nome ${nome} não é um palíndromo!`;
}

const verifica = verificaPalindromo('Kaiak');
console.log(verifica);


// 4)

function maiorNumero(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return num1;
    } else if(num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

resultado = maiorNumero(4, 6, 3);

console.log(`O maior numero entre os tres é ${resultado}.`);


// 5)

const calculaPotencia = (base, expoente) =>  Math.pow(base, expoente);

const calculo = calculaPotencia(2, 10);

console.log(calculo);

*/