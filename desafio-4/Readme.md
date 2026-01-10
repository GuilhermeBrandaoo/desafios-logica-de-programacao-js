# 🧮 Maior de Três Números

## 📌 Descrição do Exercício

Este exercício tem como objetivo receber **três números** e retornar **o maior valor entre eles**, utilizando conceitos básicos de lógica de programação em JavaScript.

### 🎯 Objetivo
- Identificar o maior número entre três valores.

### 🧠 Conceitos Trabalhados
- Funções matemáticas
- Operador spread (`...`)
- Uso do `Math.max()`

---

## 🛠️ Solução Utilizada

Foi utilizada a função `Math.max()` junto com o **spread operator**, que permite passar os valores do array como argumentos individuais para a função.

### 📄 Código

```js
const numeros = [10, 100, 147];

console.log(Math.max(...numeros));
