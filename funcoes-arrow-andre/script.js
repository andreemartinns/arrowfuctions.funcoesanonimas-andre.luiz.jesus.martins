// Função anônima
const ola = function () {
  console.log("Função Anônima");
};
ola();

// Arrow function simples
const olaArrow = () => console.log("Arrow Function");
olaArrow();

// Arrow com parâmetros
const soma = (a, b) => a + b;
console.log("Soma:", soma(5, 7));

// Uso em arrays
const numeros = [1, 2, 3, 4, 5, 6];

console.log("Pares:", numeros.filter(n => n % 2 === 0));
console.log("Dobros:", numeros.map(n => n * 2));
console.log("Total:", numeros.reduce((ac, n) => ac + n, 0));

// Diferença de this entre função normal e arrow
const pessoa = {
  nome: "André",
  normal: function () {
    setTimeout(function () {
      console.log("Normal:", this.nome);
    }, 300);
  },

  arrow: function () {
    setTimeout(() => {
      console.log("Arrow:", this.nome);
    }, 300);
  }
};

pessoa.normal();
pessoa.arrow();
