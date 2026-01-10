const numeros = [5, 45, 46, 21, 57, 243, 2424]

const soma = numeros.reduce((acc, curr) => { // acc (valor inicial: 0) curr (cada número do array)
    return acc + curr;
}, 0);

console.log(soma)