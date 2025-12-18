# Soma de Números de 0 até N

## 📌 Descrição
Este exercício de lógica de programação em JavaScript realiza a **soma de todos os números de 0 até um valor definido**, utilizando um laço de repetição `for`.

---

## 🧠 Lógica do Exercício
- Define-se um número limite (`numero`)
- Um laço `for` percorre todos os números de `0` até esse limite
- Cada valor é somado à variável `resultado`
- Ao final, o total da soma é exibido no console

---

## 💻 Código
```javascript
const numero = 10;
let resultado = 0;

for (i = 0; i <= numero; i++) {
    resultado += i;
}

console.log(resultado)
