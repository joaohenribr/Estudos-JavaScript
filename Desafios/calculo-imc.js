// 01 - Cálculo de IMC
// Descrição: Criar um código para calcular o Índice de Massa Corporal, recebendo dados de altura e peso.

// const altura = 1.75;
// const peso = 82;
// const IMC = peso / altura ** 2;

// console.log('IMC: ', IMC.toFixed(2))

// console.log(`Calculo IMC. A sua altura é ${altura}m e o seu peso é ${peso}kg assim o calculo do seu IMC é igual a ${IMC.toFixed(2)} pontos.`);

// adicionar mensagem para bom ruim ou pessimo de acordo com a pontuação do usuário.



// 01.1 - Cálculo de IMC

// const altura = 1.75;
// const peso = 82;
// const IMC = peso / altura ** 2;
// const descricao = "IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.\n\nO índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.\n";
// let IMCExedente;
// let classificação;
// let obesidade = 0;
// let pesoExedente;

// if (IMC < 18.5){
//     classificação = 'magreza';
//     IMCExedente = IMC - 24.9;
//     pesoExedente = IMCExedente * altura **2;
// } else if (IMC >= 18.5 && IMC < 25){
//     classificação = 'normal';
//     pesoExedente = 0;
//     IMCExedente = 0;
// } else if (IMC >= 25 && IMC <= 29.9){
//     classificação = 'sobrepeso';
//     obesidade = 1;
//     IMCExedente = IMC - 24.9;
//     pesoExedente = IMCExedente * altura **2;
// } else if (IMC >= 30 && IMC <= 39.9){
//     classificação = 'obesidade';
//     obesidade = 2;
//     IMCExedente = IMC - 24.9;
//     pesoExedente = IMCExedente * altura **2;
// } else{
//     classificação = 'obesidade grave';
//     obesidade = 3;
//     IMCExedente = IMC - 24.9;
//     pesoExedente = IMCExedente * altura **2;  
// }

// const pesoIdeal = peso - pesoExedente;

// console.log(descricao);
// console.log(`A sua altura é ${altura}m e o seu peso é ${peso}kg assim o calculo do seu IMC é igual a: ${IMC.toFixed(2)} pontos que é classificado como ${classificação} e grau ${obesidade} de obesidade.\nDe acordo com os calculos o seu peso ideal seria ${pesoIdeal.toFixed(2)}`);
