/*
let matriculaAtiva = true;

function verificaMatriculaAtiva() {
 if (matriculaAtiva === true) {
   return 'matrícula ativa no sistema';
 } else {
   return 'matrícula não está ativa';
 }
}

console.log(verificaMatriculaAtiva());
// retorna 'matrícula ativa no sistema'

let matriculaAtiva = true;

function verificaMatriculaAtiva() { 
    return matriculaAtiva ? 'matrícula ativa no sistema' : 'matrícula não está ativa';
}

console.log(verificaMatriculaAtiva());
// retorna 'matrícula ativa no sistema'

let idadeEstudante = 16;
let precisaDeAutorizacao;

if (idadeEstudante < 18) {
    precisaDeAutorizacao = true;
} else {
    precisaDeAutorizacao = false;
}

console.log(precisaDeAutorizacao);
*/

let idadeEstudante = 16;
let precisaDeAutorizacao = idadeEstudante < 18 ? true : false;

console.log(precisaDeAutorizacao);