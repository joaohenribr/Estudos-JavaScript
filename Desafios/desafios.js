// 1 - Conversão de Temperatura
// Descrição: Criar um código para conversão de temperatura entre Celsius e Fahrenheit.

// const celsius = 0;
// const fahrenheit = 32;

// function converterCelsiusEmFahrenheit(graus){
//     graus = (celsius * (9/5)) + 32 ;
//     console.log(`${celsius}° graus celsius são ${graus.toFixed(2)}° graus fahrenheit.`);
// }
// function converterFahrenheitEmCelsius(graus){
//     graus = (fahrenheit - 32) * 5/9;    
//     console.log(`${fahrenheit}° graus fahrenheit são ${graus}° graus celsius.`);
// }

// converterCelsiusEmFahrenheit(celsius);
// converterFahrenheitEmCelsius(fahrenheit);



// 1.1 - Conversão de Temperatura


// const celsius = 0;
// const fahrenheit = 32;

// function conversaoDeTemperatura(graus){
//     graus = (celsius * (9/5)) + 32 ;
//     console.log(`${celsius}° graus celsius são ${graus.toFixed(2)}° graus fahrenheit.`);
    
//     graus = (fahrenheit - 32) * 5/9;    
//     console.log(`${fahrenheit}° graus fahrenheit são ${graus}° graus celsius.`);
// }

// conversaoDeTemperatura()



// 1.2 - Conversão de Temperatura


// let celsius = 2;
// const grausCelsius = celsius;
// const celsiusParaFahrenheit = celsius = 0 ? 'erro' : (celsius * (9/5)) + 32 ;

// let fahrenheit = 35.6;
// const grausFahrenheit = fahrenheit;
// const fahrenheitParaCelsius = fahrenheit = 0 ? 'erro' : (fahrenheit - 32) * 5/9 ;

// console.log(`${grausCelsius.toFixed(1)}° graus celsius são ${celsiusParaFahrenheit}° graus fahrenheit`);
// console.log(`${grausFahrenheit}° graus fahrenheit são ${fahrenheitParaCelsius.toFixed(1)}° graus celsius`);



// 02 - Cálculo de IMC
// Descrição: Criar um código para calcular o Índice de Massa Corporal, recebendo dados de altura e peso.

// const altura = 1.75;
// const peso = 82;
// const IMC = peso / altura ** 2;

// console.log('IMC: ', IMC.toFixed(2))

// console.log(`Calculo IMC. A sua altura é ${altura}m e o seu peso é ${peso}kg assim o calculo do seu IMC é igual a ${IMC.toFixed(2)} pontos.`);

// adicionar mensagem para bom ruim ou pessimo de acordo com a pontuação do usuário.



// 02.1 - Cálculo de IMC

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



// 03 - Concatenação de strings
// Descrição: Receba ou armazene três dados (nome, idade e cidade) e exiba uma mensagem concatenando estes dados.

// const nome = 'João';
// const idade = 25;
// const cidade = 'Belo horizonte';

// console.log(`Olá, meu nome é ${nome}, eu tenho ${idade} anos de idade e moro em ${cidade}.`);



// 04 - Área e perímetro de retângulo
// Descrição: Receba ou armazene os valores de lado de um retângulo e exiba os valores de área e perímetro.

// const base = 10;
// const altura = 20;
// const calculoArea = base * altura;
// const calculoPerimetro = 2* (base + altura);

// console.log('A área do retângulo é',calculoArea,'e o perímetro é',calculoPerimetro);



// 05 - Verificação de divisibilidade
// Receba ou armazene dois valores (x e y) e informe se x é divisível por y (a divisão dá resto zero).

// const x = 4;
// const y = 5;

// if(x % y === 0){
//     console.log(`O valor ${x} é divisível por ${y}`);
// } else {
//     console.log(`O valor ${x} não é divisível por ${y}`);

// }



// 06 - Classificação de faixa etária
// Receba ou armazene um valor de idade e informe a que faixa etária a idade pertence, baseado na classificação abaixo:

// Criança: 0 a 12 anos;
// Adolescente: 13 a 17 anos;
// Adulto: 18 a 59 anos;
// Idoso: 60+ anos.
// Faça a verificação utilizando if/else.

// const idade = 60;

// if(idade <= 12){
//     console.log('A idade informada pertence a faixa etária criança: 0 a 12 anos.')
// }else if(idade > 12 && idade <=17){
//     console.log('A idade informada pertence a faixa etária adolescente: 13 a 17 anos.')
// }else if(idade > 17 && idade <=59){
//     console.log('A idade informada pertence a faixa etária adulto: 18 a 59 anos.')
// }else if(idade >= 60){
//     console.log('A idade informada pertence a faixa etária idoso: 60+ anos.')
// }else{
//     console.log('Erro, idade invalida!')
// }



// 07 - Comparação de números
// Crie um programa que compara dois números e informa se o primeiro é maior, menor ou igual ao segundo.

// const num1 = 20;
// const num2 = 20;

// if(num1 > num2){
//     console.log('O primeiro numero é maior que o segundo!');
// }else if(num1 < num2){
//     console.log('O primeiro numero é menor que o segundo!');
// }else if(num1 === num2){
//     console.log('Os numeros são iguais!');
// }else{
//     console.log('Erro')
// }





// FAZER
// 08 - Calculadora
// Faça uma calculadora básica, que recebe dois números e a operação entre eles, e retorne o resultado.

// Utilize o switch para armazenar a operação escolhida.

// Observação: fiz a resolução deste exercício e do próximo em um arquivo HTML, para variar um pouco.

// const num1 = 2;
// const num2 = 4;
// const operacao = num1 + num2;





// 09 - Cálculo de tarifas.
// Crie um programa que exibe o valor de uma tarifa dependendo da idade e tipo do usuário (estudante ou regular).

// O valor básico é R$2,50. Esse valor é alterado de acordo com a regra a seguir:

// Menores de 6 anos: grátis, tarifa zero;
// Estudantes: 50% de desconto;
// Idosos (60+): 30% de desconto;
// Regular: tarifa normal.

// const idade = 40;
// const tipoUsuario = 'regular';
// let tarifa = 2.50;

// if(idade <= 6){
//     tarifa = 0;
// }else if(tipoUsuario === 'estudante'){
//     tarifa = tarifa / 2;
// }else if(idade > 59){
//     tarifa = tarifa * 0.7
// }else if(tipoUsuario === 'regular'){
//     tarifa = 2.5;
// }

// console.log(`A tarifa a ser cobrada é R$${tarifa}`);



// 10 - Somatório 1 a N
// Receba/armazene um valor N e exiba o resultado da soma de 1 até N.

// O desafio deve ser feito utilizando estruturas de repetição.

const valor = 10;
let soma = 0;

for(i = 1; i <= valor; i++){
    console.log(i)
    soma += i;
}

console.log('A soma dos numeros é:',soma);