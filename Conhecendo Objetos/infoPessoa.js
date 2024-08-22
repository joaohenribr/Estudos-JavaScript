const pessoa = {
    nome: 'João',
    idade: 25,
    solteiro: true,
    hobbies: ['Bicicleta', 'Corrida', 'Peteca'],
    endereco: {
        rua: 'Rua Moisés',
        cidade: 'Belo Horizonte',
        estado: 'Minas Gerais',
    }
}

function mostrarInfoPessoa(pessoa){
    return console.log(
                `Nome: ${pessoa.nome}, é do tipo: ${typeof pessoa.nome} \n`,
                `Idade: ${pessoa.idade}, é do tipo: ${typeof pessoa.idade} \n`,
                `Estado civil: ${pessoa.solteiro}, é do tipo: ${typeof pessoa.solteiro} \n`,
                `Hobbies: ${pessoa.hobbies.toString()}, é do tipo: ${typeof pessoa.hobbies.toString()} \n`,
                `Está pessoa mora na ${pessoa.endereco.rua}, que fica na cidade de ${pessoa.endereco.cidade} e no estado de ${pessoa.endereco.estado}.`,
            )
}

mostrarInfoPessoa(pessoa);