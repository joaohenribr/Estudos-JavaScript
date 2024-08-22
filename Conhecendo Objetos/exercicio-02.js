// 1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:
// nome (string): Nome da pessoa.
// idade (number): Idade da pessoa.
// solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
// hobbies (array): Lista de hobbies da pessoa.
// Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.
// Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.
// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.
// Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.

// const pessoa = {
//     nome: 'João',
//     idade: 25,
//     solteiro: true,
//     hobbies: ['Bicicleta', 'Corrida', 'Peteca']
// }

// function mostrarInfoPessoa(pessoa){
//     return console.log(
//                 pessoa.nome,
//                 pessoa.idade,
//                 pessoa.solteiro,
//                 pessoa.hobbies.toString()                
//             )
// }

// mostrarInfoPessoa(pessoa);



// 2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:

// rua (string): nome da rua.
// cidade (string): nome da cidade.
// estado (string): nome do estado.
// Preencha as subpropriedades do objeto endereco com valores fictícios.

// Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.

// const pessoa = {
//     nome: 'João',
//     idade: 25,
//     solteiro: true,
//     hobbies: ['Bicicleta', 'Corrida', 'Peteca'],
//     endereco: {
//         rua: 'Rua Moisés',
//         cidade: 'Belo Horizonte',
//         estado: 'Minas Gerais',
//     }
// }

// function mostrarInfoPessoa(pessoa){
//     return console.log(
//                 `Nome: ${pessoa.nome}, é do tipo: ${typeof pessoa.nome} \n`,
//                 `Idade: ${pessoa.idade}, é do tipo: ${typeof pessoa.idade} \n`,
//                 `Estado civil: ${pessoa.solteiro}, é do tipo: ${typeof pessoa.solteiro} \n`,
//                 `Hobbies: ${pessoa.hobbies.toString()}, é do tipo: ${typeof pessoa.hobbies.toString()} \n`,
//                 `Está pessoa mora na ${pessoa.endereco.rua}, que fica na cidade de ${pessoa.endereco.cidade} e no estado de ${pessoa.endereco.estado}.`,
//             )
// }

// mostrarInfoPessoa(pessoa);



// 3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos.
// Cada objeto deve representar uma pessoa e conter as seguintes propriedades:
// nome (string): nome da pessoa.
// idade (number): idade da pessoa.
// cidade (string): cidade de residência da pessoa.
// Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.
// a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.
// b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.
// c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.
// d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.
// Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido.

// const pessoas = [
//     { nome: 'João', idade: 25, cidade: 'Belo Horizonte'},
//     { nome: 'Isabela', idade: 23, cidade: 'Nova Lima'},
//     { nome: 'Gabriela', idade: 32, cidade: 'Rio de Janeiro'}
// ];

// // a)
// function mostrarListaPessoas(listaPessoas){
//     listaPessoas.forEach(pessoa => {
//         console.log(`Nome: ${pessoa.nome}, idade: ${pessoa.idade}, cidade: ${pessoa.cidade}.`)        
//     });
// }

// // b)
// pessoas.push({ nome: 'Marcelo', idade: 19, cidade: 'Carmopolis de Minas'});

// // c)
// mostrarListaPessoas(pessoas);

// // d)
// function filtrarPorCidade(listaPessoas, cidade){
//     return listaPessoas.filter((pessoa) => pessoa.cidade === cidade);
// }
// const moradoresDeBeloHorizonte = filtrarPorCidade(pessoas, 'Belo Horizonte');
// console.log('\nMoradores de Belo Horizonte:');
// mostrarListaPessoas(moradoresDeBeloHorizonte);

// // e)
// const moradoresDePiedade = filtrarPorCidade(pessoas, 'Piedade');
// console.log('\nPessoas moradoras de Piedade: ');
// mostrarListaPessoas(moradoresDePiedade);  



// 4 - Crie um objeto chamado calculadora que terá os seguintes métodos:

// soma: uma função que aceita dois parâmetros e retorna a soma deles.
// subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
// multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
// divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. 
// Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.
// a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.
// b) Adicione um novo método chamado calcularMedia ao objeto calculadora.
// Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.
// c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.

// const calculadora = {
//     soma: (num1, num2) => num1 + num2,
//     subtracao: (num1, num2) => num1 - num2,
//     multiplicacao: (num1, num2) => num1 * num2,
//     divisao: (num1, num2) => num1 / num2 ? num1 / num2 : console.log('Erro: Divisão por zero!'),
//     calcularMedia: function() { return [...arguments].reduce((sum, nr) => sum + nr, 0)}
// }

// const soma = calculadora.soma(2, 2);
// const subtracao = calculadora.subtracao(10, 5);
// const multiplicacao = calculadora.multiplicacao(2, 10);
// const divisao = calculadora.divisao(20, 2);
// const media = [2, 4, 6, 8];
// const calculoMedia = calculadora.calcularMedia(...media)/media.length;

// console.log(`
//     O resultado da soma é: ${soma}
//     O resultado da subtração é: ${subtracao}
//     O resultado da multiplicação é: ${multiplicacao}
//     O resultado da divisão é: ${divisao}
//     O resultado da média é: ${calculoMedia}`)



// 5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:

// titular: uma string representando o titular da conta.
// saldo: um número representando o saldo da conta.
// depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
// sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.
// Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:
// nome: uma string representando o nome do cliente.
// conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).


// Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro
// e imprime no console o nome do cliente
// e o saldo da sua conta utilizando this para acessar as propriedades do objeto.

// Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e,
// em seguida, chame a função para exibir as informações atualizadas no console.

const contaBancaria = {
    titular: '',
    saldo: 1000,
    depositar: function(valor) { return this.saldo += valor},
    sacar: function(valor) { return this.saldo >= valor ? this.saldo -= valor : console.log('Saldo insuficiente')}
}
const cliente = {
    nome: 'Luisa',
    conta: contaBancaria,
}

function mostrarSaldo(cliente){
    console.log(`\ncliente ${cliente.nome},\no saldo da sua conta é: R$${contaBancaria.saldo}`)
}

mostrarSaldo(cliente)

const deposito = contaBancaria.depositar(500)

console.log('\nSaldo atualizado: ')
mostrarSaldo(cliente)

const sacar = contaBancaria.sacar(200)

console.log('\nSaldo atualizado: ')
mostrarSaldo(cliente)




