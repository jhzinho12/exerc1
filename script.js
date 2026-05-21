let idade = 2;

if (idade >= 18) {
  console.log("Entrada permitida");
} else {
  console.log("Entrada negada: você precisa ter pelo menos 18 anos");
}
let nota1 = 6, nota2 = 7, nota3 = 8;
let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  console.log("Aprovado");
} else if (media >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
let numero = 6;

if (numero % 2 === 0) {
  console.log("Par");
} else {
  console.log("Ímpar");
}
let multiplicador = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${multiplicador} x ${i} = ${multiplicador * i}`);
}
let cont = 10;

while (cont >= 0) {
  console.log(cont);
  cont--;
}
let usuarioCadastrado = "admin";
let senhaCadastrada = "123";
let tentativaUsuario = "admin";
let tentativaSenha = "123";

if (tentativaUsuario === usuarioCadastrado && tentativaSenha === senhaCadastrada) {
  console.log("Login efetuado com sucesso");
} else {
  console.log("Usuário ou senha incorretos");
}
let soma = 0;

for (let i = 1; i <= 100; i++) {
  soma += i;
}
console.log(soma);
let valorEmReal = 10;
let cotacao = 5.00;
let valorDolar = valorEmReal / cotacao;

console.log(`US$ ${valorDolar.toFixed(2)}`);

let temperatura = 40;

if (temperatura > 30) {
  console.log("Está muito quente!");
} else if (temperatura >= 15) {
  console.log("Clima agradável");
} else {
  console.log("Está frio!");
}
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
let num1 = 9, num2 = 10;

if (num1 > num2) {
  console.log("O primeiro é maior");
} else if (num2 > num1) {
  console.log("O segundo é maior");
} else {
  console.log("Os números são iguais");
}
let peso = 7; 
let altura = 1.75; 
let imc = peso / (altura ** 2);

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc <= 24.9) {
  console.log("Peso normal");
} else {
  console.log("Acima do peso");
}
let ano = 2023;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  console.log("Ano bissexto");
} else {
  console.log("Não é bissexto");
}
let senhaCorreta = "1234";
let tentativas = ["0000", "4321", "1234"]; 
let i = 0;

while (tentativas[i] !== senhaCorreta) {
  console.log("Senha Incorreta, tente novamente");
  i++;
}
console.log("Acesso Permitido");
for (let i = 1; i <= 5; i++) {
  console.log(`Tabuada do ${i}:`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }

}