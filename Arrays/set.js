const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const nomesAtualizados = new Set(nomes);

const listaNomesAtualizados = [...new Set(nomes)];

listaNomesAtualizados.push('Gustavo');

console.log(listaNomesAtualizados);