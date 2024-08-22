// 1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:

// titulo (string): título do livro.
// autor (string): nome do autor do livro.
// anoPublicacao (number): ano de publicação do livro.
// genero (string): gênero do livro.
// No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.

// const livro = {
//     titulo: 'título do livro',
//     autor: 'nome do autor do livro',
//     anoPublicacao: 'ano de publicação do livro',
//     genero: 'gênero do livro'
// }

// console.log(livro);

// livro.titulo = 'Como Investir em Ações';
// livro.autor = 'Luiz Barsi';
// livro.anoPublicacao = 2024;
// livro.genero = 'Desenvolvimento Pessoal';

// console.log(livro);

// RESPOSTA:

// const livro = {
//     titulo: "O Senhor dos Anéis",
//     autor: "J.R.R. Tolkien",
//     anoPublicacao: 1954,
//     genero: "Fantasia"
// };

// console.log(`Detalhes do Livro:
//     Título: ${livro.titulo}
//     Autor: ${livro.autor}
//     Ano de Publicação: ${livro.anoPublicacao}
//     Gênero: ${livro.genero}`)



// 2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). 
// Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.
// Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado.
//  Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
// Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.
// Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.

// const anoAtual = new Date().getFullYear();

// const livro = {
//     titulo: 'A Arte da Guerra',
//     autor: '',
//     anoPublicacao: 2020,
//     genero: ''
// }

// livro.idadePublicacao = anoAtual - livro.anoPublicacao;

// const mostrarDetalhes = 'Titulo ' + livro.titulo + ', idade de oublicação ' + livro.idadePublicacao;

// console.log(livro);
// console.log(mostrarDetalhes);

// RESPOSTA: 

// livro.js
// const anoAtual = new Date().getFullYear();

// const livro = {
//     titulo: "O Senhor dos Anéis",
//     autor: "J.R.R. Tolkien",
//     anoDePublicacao: 1954,
//     genero: "Fantasia",
// };

// // Adicionando a propriedade idadePublicacao diretamente ao objeto livro
// livro.idadePublicacao = anoAtual - livro.anoDePublicacao;

// // Criando uma string com os detalhes do livro, incluindo a idade de publicação
// livro.mostrarDetalhes = "Detalhes do Livro:\n" +
//                         "Título: " + livro.titulo + "\n" +
//                         "Autor: " + livro.autor + "\n" +
//                         "Ano de Publicação: " + livro.anoDePublicacao + "\n" +
//                         "Gênero: " + livro.genero + "\n" +
//                         "Idade de Publicação: " + livro.idadePublicacao + " anos";

// // Exibindo os detalhes do livro no console
// console.log(livro.mostrarDetalhes);




// 3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação.
// Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.

// const livro = {
//     titulo: 'Quem Pensa Enriquece',
//     autor: 'Gustavo',
//     anoPublicacao: 2018,
//     genero: 'Desenvolvimento Pessoal',
//     idadePublicacao: 6
// }

// console.log(`O livro ${livro['titulo']} foi escrito pelo altor ${livro['autor']} no ano de ${livro['anoPublicacao']} assim com ${livro['idadePublicacao']} anos de publicação, o seu genero é ${livro['genero']}.`);

// RESPOSTA

// livro.js
// const anoAtual = new Date().getFullYear();

// const livro = {
//     titulo: "O Senhor dos Anéis",
//     autor: "J.R.R. Tolkien",
//     anoPublicacao: 1954,
//     genero: "Fantasia",
//     idadePublicacao: anoAtual - 1954,
// };

// // Exemplos de acesso direto às propriedades do objeto livro
// console.log("Detalhes do Livro:");
// console.log("Título: " + livro['titulo']);
// console.log("Autor: " + livro['autor']);
// console.log("Ano de Publicação: " + livro['anoPublicacao']);
// console.log("Gênero: " + livro['genero']);
// console.log("Idade de Publicação: " + livro['idadePublicacao'] + " anos");




// 4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação.
// Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.
// No final do arquivo livro.js, adicione uma avaliação ao objeto.
// Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
// Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.

// const livro = {
//     titulo: '',
//     autor: '',
//     anoPublicacao: 0,
//     genero: '',
//     idadePublicacao: 0
// }

// livro.avaliacao = null;
// console.log(livro);

// livro.avaliacao = 2;
// console.log(livro);

// if(livro.avaliacao === null){
//     livro.avaliacao = 9.7;
// }

// console.log(livro);

// RESPOSTA:

// livro.js
// const anoAtual = new Date().getFullYear();

// const livro = {
//     titulo: "O Senhor dos Anéis",
//     autor: "J.R.R. Tolkien",
//     anoPublicacao: 1954,
//     genero: "Fantasia",
//     idadePublicacao: anoAtual - 1954,
//     avaliacao: null, // Nova propriedade para armazenar a avaliação
// };

// // Adicionando uma avaliação fictícia ao objeto livro
// const novaAvaliacao = { nota: 4.5, comentario: "Ótima leitura!" };
// if (livro.avaliacao === null) {
//     livro.avaliacao = novaAvaliacao;
// } else {
//     console.log("Este livro já possui uma avaliação.");
// }

// // Exibindo detalhes do livro, incluindo a avaliação
// console.log("Detalhes do Livro:");
// console.log("Título: " + livro.titulo);
// console.log("Autor: " + livro.autor);
// console.log("Ano de Publicação: " + livro.anoPublicacao);
// console.log("Gênero: " + livro.genero);
// console.log("Idade de Publicação: " + livro.idadePublicacao + " anos");
// console.log("Avaliação: " + (livro.avaliacao === null ? "Nenhuma avaliação disponível." : "Nota: " + livro.avaliacao.nota + ", Comentário: \"" + livro.avaliacao.comentario + "\""));



// 5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação.
// Depois altere o gênero do livro para "Aventura".

// const livro = {
//     titulo: 'Quem Pensa Enriquece',
//     autor: 'Gustavo',
//     anoPublicacao: 2018,
//     genero: 'Desenvolvimento Pessoal',
//     idadePublicacao: 6
// }

// console.log(livro);

// livro.genero = 'Aventura'
// console.log(livro);

// RESPOSTA:

// // livro.js
// const anoAtual = new Date().getFullYear();

// const livro = {
//     titulo: "O Senhor dos Anéis",
//     autor: "J.R.R. Tolkien",
//     anoPublicacao: 1954,
//     genero: "Fantasia",
//     idadePublicacao: anoAtual - 1954,
//     avaliacao: null
// };

// // Alteração direta do gênero do livro
// livro.genero = "Aventura";

// // Exibição dos detalhes do livro no console
// console.log(`Detalhes do Livro:
//     Título: ${livro.titulo}
//     Autor: ${livro.autor}
//     Ano de Publicação: ${livro.anoPublicacao}
//     Gênero: ${livro.genero}
//     Idade de Publicação: ${livro.idadePublicacao} anos
//     Avaliação: ${livro.avaliacao === null ? "Nenhuma avaliação disponível." : `Nota: ${livro.avaliacao.nota}, Comentário: "${livro.avaliacao.comentario}"`}`)



// 6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação.
// Em seguida, exclua a propriedade avaliacao do objeto livro.
// Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.

// const livro = {
//     titulo: 'Quem Pensa Enriquece',
//     autor: 'Gustavo',
//     anoPublicacao: 2018,
//     genero: 'Desenvolvimento Pessoal',
//     idadePublicacao: 6,
//     avaliacao: 7.5
// }

// console.log(livro);

// delete livro.avaliacao;

// console.log(livro);

// RESPOSTA:

// // livro.js
// const anoAtual = new Date().getFullYear();

// const livro = {
//     titulo: "O Senhor dos Anéis",
//     autor: "J.R.R. Tolkien",
//     anoPublicacao: 1954,
//     genero: "Fantasia",
//     idadePublicacao: anoAtual - 1954,
//     avaliacao: { nota: 4.5, comentario: "Ótima leitura!" }
// };

// // Excluir a propriedade 'avaliacao' do objeto livro
// delete livro.avaliacao;

// // Exibir detalhes do livro no console sem a avaliação
// console.log(`Detalhes do Livro:
//     Título: ${livro.titulo}
//     Autor: ${livro.autor}
//     Ano de Publicação: ${livro.anoPublicacao}
//     Gênero: ${livro.genero}
//     Idade de Publicação: ${livro.idadePublicacao} anos
//     Avaliação: Nenhuma avaliação disponível.`)