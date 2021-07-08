//objetivo: filtrar de acordo com uma condição

/* const numeros= [1,2,-3,4,5,0,7,8,9,-19];

const numMaiores0= numeros.filter(el=>el>=0);
console.log(numMaiores0); */

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/* const numeros= [1,2,3,4,5,6,7,8,9,19];
let murilo=[1,2,3,4,5,6,7,8,9,19];
const numerosPares=murilo.filter(el=>el%2==0);

const numerosImpares=numeros.filter(el=>el%2!=0);
//múltiplos de 3
const mult3=numeros.filter(murilo=>murilo%3==0);

console.log(numerosPares);
console.log(numerosImpares);
console.log(mult3); */

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//array de objetos
const pessoas = [
    {nome: 'Maria', salario: 2000.00},
    {nome: 'João', salario: 4900.00},
    {nome: 'José', salario: 1000.00},
    {nome: 'Paula', salario: 1500.00}
];

const salMaior2000= pessoas.filter(maior=>maior.salario>=2000);
console.log(salMaior2000)

const salMenor2000=pessoas.filter(menor=>menor.salario<2000);
console.log(salMenor2000)

//mais 2000 -> 100   menos 2000-> 500
const ajusteMaior=salMaior2000.map(el=>el.salario+=100);
const ajusteMenor=salMenor2000.map(el=>el.salario+=500);

console.log(ajusteMaior);
console.log(ajusteMenor);