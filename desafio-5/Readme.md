# ➕ Soma de Elementos do Array

## 📌 Descrição do Exercício

Este exercício tem como objetivo **somar todos os números contidos em um array**, utilizando recursos da linguagem JavaScript para percorrer e acumular valores.

---

## 🎯 Objetivo

- Calcular a soma de todos os elementos de um array numérico.

---

## 🧠 Conceitos Trabalhados

- Arrays
- Função `reduce()`
- Acumulador (`acc`)
- Iteração sobre coleções

---

## 🛠️ Solução Utilizada

Foi utilizada a função `reduce()`, que percorre o array e acumula os valores em uma única variável, retornando o resultado final.

### 📄 Código

```js
const numeros = [5, 45, 46, 21, 57, 243, 2424];

const soma = numeros.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(soma);
