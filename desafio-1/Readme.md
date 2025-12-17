# Verificador de Número Par ou Ímpar

## 📌 Descrição
Este exercício tem como objetivo praticar **lógica de programação** utilizando **JavaScript**.  
O programa verifica se um número é **par** ou **ímpar** usando o operador módulo (`%`).

---

## 🧠 Lógica Utilizada
- Um número é **par** quando o resto da divisão por 2 é igual a `0`.
- Um número é **ímpar** quando o resto da divisão por 2 é diferente de `0`.

---

## 💻 Código
```javascript
const num = 1;

if (num % 2 === 0) {
    console.log('Par')
} else {
    console.log('Ímpar')
}
