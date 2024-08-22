// 1)
/*

const frase = 'Bom dia, hojé está fazendo muito sol!';

console.log(frase.length);
console.log(frase.toUpperCase());

// 2)

const variavelNull = null;
let variavelUndefined;

console.log(`O resultado da variavel nula é: ${variavelNull}, e a indefinida é: ${variavelUndefined}`);

// 3)

const idade = 20;
const nome = 'João Barbosa';
let carteiraDeMotorista = true;

if (carteiraDeMotorista === true) {
    carteiraDeMotorista = 'sim';
} else {
    carteiraDeMotorista = 'não';
}

console.log(`Bom dia, meu nome é ${nome}, eu tenho ${idade} anos. Possuo carteira de motorista: ${carteiraDeMotorista}`);

// 4)

const altura = 170;
const nome = '20';

console.log(String(altura));
console.log(typeof altura)
console.log(Number.parseInt(nome));
console.log(typeof nome)

// 5)

const name = 'João';

console.log(`Meu nome é ${name}`.toUpperCase());
console.log(`BOM DIA, Hoje vou entrevistar o ${name}`.toLowerCase());

//  ~ou~

const texto = 'Olá meu nome é João';

const maiusculas = texto.toUpperCase();
const minusculas = texto.toLowerCase();
const parteDaString = texto.slice(0, 10);

console.log('Texto em maiúsculas: ', maiusculas);
console.log('Texto em minúsculas: ', minusculas);
console.log('Parte da String: ', parteDaString);
*/

const numero = 20;
const texto = '40';

const numeroConvertidoEmTexto = String(numero);
const textoConvertidoEmNumero = Number(texto);

console.log(numero, texto);
console.log(numeroConvertidoEmTexto, textoConvertidoEmNumero);
console.log('Tipo de dado após a converção: ', typeof numeroConvertidoEmTexto);
console.log('Tipo de dado após a converção: ', typeof textoConvertidoEmNumero);