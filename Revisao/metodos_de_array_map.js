let letras = ['a','b','c','d'];

//função declarativa
// let letrasMai= letras.map(function maiuscula(el){
//     return el.toUpperCase();
// });


//arrow function
let letrasMai=letras.map(maiuscula=el=>el.toUpperCase());

console.log(letras);
console.log(letrasMai);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

let salarios = [1050.00, 2000.00, 5000.00,1000.00];
//reajustar sal. em 40%

function ajusta(sal) {
    return   sal<2000 ?  sal*1.4 : sal;
    // if (sal<2000) 
    //     {return sal*1.4;}
    // else 
    //     {return sal;}  
}
let salAtualizados=salarios.map(ajusta);
//                              callback

console.log(salarios);
console.log(salAtualizados);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const pessoas = [
    {nome: 'Maria', salario: 2000.00},
    {nome: 'João', salario: 4900.00},
    {nome: 'José', salario: 1000.00},
    {nome: 'Paula', salario: 1500.00}
];

//arrow
const soSalario=hen=>hen.salario;
console.log(pessoas.map(soSalario));
const soNome=hen=>hen.nome.toUpperCase();
console.log(pessoas.map(soNome));
console.log(pessoas);