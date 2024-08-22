const estudante = {
    nome: 'João Henrique',
    idade: 25,
    cpf: '12312312312',
    curso: 'JavaScript'
};

console.log(estudante.nome)
console.log(`Os tres primeiros digitos do CPF são ${estudante.cpf.substring(0, 3)}`);