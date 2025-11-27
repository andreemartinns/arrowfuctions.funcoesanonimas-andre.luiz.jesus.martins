📌 Funções Anônimas e Arrow Functions

Este projeto mostra a diferença entre funções anônimas e arrow functions no JavaScript, com exemplos simples e práticos.

🔹 Funções Anônimas

Não possuem nome.

Usadas como callbacks.

setTimeout(function() {
  console.log("Função anônima executada");
}, 1000);

🔹 Arrow Functions

Sintaxe curta.

Mais legível.

Não altera o this.

const somar = (a, b) => a + b;
console.log(somar(5, 3));

🔹 Exemplo com filter
const numeros = [5, 10, 15, 20];
const maiores = numeros.filter(n => n > 10);
console.log(maiores);
