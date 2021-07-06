/* Exercicio 1 */
let pares = [2, 4, 6, 8, 10, 12, 14, 16, 18];

let impares = pares.map(function(num){
    return num - 1;
});

console.log(impares);


/* Exercicio 2 */
let nomes = ['William', 'Maria', 'Eric', 'Maria', 'Fernanda'];

let nome = nomes.filter(function(repitido){
    return repitido == 'Maria'
});

console.log(nome);


/* Exercicio 3 */
let numeros = [1, 5, 9, 3, 7];

let menos = numeros.reduce(function(acumulador, numero){
    return acumulador - numero;
});

console.log(menos)


/* Exercicio 4 */
let animais = ['Leão', 'Lobo', 'Aguia', 'Gato', 'Cachorro'];

let animal = animais.forEach(function(ani){
    console.log('O animal é ' + ani)
})

