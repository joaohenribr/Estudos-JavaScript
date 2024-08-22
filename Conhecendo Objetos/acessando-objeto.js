const estudante = {
    nome: 'João Henrique',
    idade: 25,
    cpf: '12312312312',
    curso: 'JavaScript'
};

function exibeInfoEstudante(objEstudante, infoEstudante){
    return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'idade'));