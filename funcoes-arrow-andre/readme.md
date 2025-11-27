# Funções Anônimas e Arrow Functions no JavaScript

Este projeto apresenta os conceitos de **funções anônimas** e **arrow functions**, explicando a diferença entre elas, suas vantagens e casos de uso reais.

---

## 📌 1. O que são funções anônimas?
São funções **sem nome**, criadas para serem usadas no momento da execução.

São muito comuns em:
- callbacks
- timers
- funções que recebem funções como parâmetro

### ✔️ Exemplo:
```js
setTimeout(function() {
  console.log("Olá! Esta é uma função anônima.");
}, 1000);
