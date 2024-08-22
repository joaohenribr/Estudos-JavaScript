//Number.parseInt() e Number.parseFloat()
parseInt('4'); // retorna o número 4
parseInt('4.5'); // retorna o número 4

parseFloat('4'); // retorna o número 4
parseFloat('4.5'); // retorna o número 4.5
parseFloat('4.5abc'); // retorna o número 4.5

//includes()
//Determina se um conjunto de caracteres pode ser encontrado dentro de uma string, retornando true ou false:

console.log('estudando JavaScript'.includes('Java')); // retorna true

const texto = 'estudando JavaScript';
console.log(texto.includes('Java')); // retorna true

//toLowerCase()
//Converte todos os caracteres da string para letras minúsculas.
console.log('POR FAVOR, NÃO GRITE'.toLowerCase());

const texto2 = 'POR FAVOR, NÃO GRITE';
console.log(texto2.toLowerCase()); // retorna 'por favor, não grite'

//Da mesma forma que existe um método para transformar textos em minúsculas, também é possível usar 
//texto.toUpperCase() para converter em maiúsculas.

console.log('Porfavor não grite!'.toUpperCase());


// Tabela Hash

const k = {
    nome: 'João', 
    cpf: '123456789',
    idade: 25,
    casado: false
};

const a = ['João', 'Luisa'];

console.log(k);
