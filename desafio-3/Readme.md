# Contador de Vogais em uma Palavra

## 📌 Descrição
Este exercício de lógica de programação em JavaScript tem como objetivo contar quantas vogais existem em uma palavra, utilizando laço de repetição, arrays e o método `includes()`.

---

## 🧠 Lógica do Exercício
- Define-se uma lista com as vogais (`a`, `e`, `i`, `o`, `u`)
- Define-se uma palavra para análise
- O laço percorre cada letra da palavra
- Utiliza-se o método `includes()` para verificar se a letra analisada é uma vogal
- A cada vogal encontrada, o contador é incrementado
- Ao final, o total de vogais é exibido no console

---

## 🔍 O que é o `includes()`
O método `includes()` verifica se um valor existe dentro de um array ou de uma string.

Ele retorna:
- `true` → se o valor existir
- `false` → se o valor não existir

### Exemplo:
```javascript
const vogais = ['a', 'e', 'i', 'o', 'u'];

vogais.includes('a'); // true
vogais.includes('b'); // false
