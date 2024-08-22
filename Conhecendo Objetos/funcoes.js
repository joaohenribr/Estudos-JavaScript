const estudante = {
    nome: 'João Henrique',
    idade: 25,
    cpf: '12312312312',
    curso: 'JavaScript',
    bolsista: true,
    telefones: [31999999998, 31888888887],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false
    }
};

console.log(estudante.estaAprovado(7));
console.log(estudante);