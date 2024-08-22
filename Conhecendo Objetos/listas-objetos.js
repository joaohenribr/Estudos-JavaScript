const estudante = {
    nome: 'João Henrique',
    idade: 25,
    cpf: '12312312312',
    curso: 'JavaScript',
    bolsista: true,
    telefones: [31999999998, 31888888887],
    endereco: [{
        rua: 'Rua Amazonas',
        numero: '45',
        complemento: 'apto 43'
    }]
};

estudante.endereco.push({
    rua: 'Avenida São Paulo',
    numero: '1000',
    complemento: ''
})

// console.log(estudante.endereco);
console.log(estudante.endereco[0].rua);

const listaEnderecoComComplemento = estudante.endereco.filter((endereco) => endereco.complemento);

console.log(listaEnderecoComComplemento);
