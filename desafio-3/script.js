const vogais = ['a','e','i','o','u'];
const palavra = 'Mesa'
let numeroVogais = 0;

for (i = 1; i <= palavra.length; i++) {
    palavra.includes(vogais[i]);
    numeroVogais++;
}

console.log(numeroVogais)