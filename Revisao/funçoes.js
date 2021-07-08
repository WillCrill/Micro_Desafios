// Função Basica
function somar (a, b) {
    return a + b
}
console.log(somar(1, 2));


// Função Declarada
function fazerSorvete (quantidade) {
    return ' sorvete'.repeat(quantidade);
};
console.log(fazerSorvete(12));


// Função Expressas
let fazerSushi = function (quantidade) {
    return ' sushi'.repeat(quantidade);
};
console.log(fazerSushi(12));


// Arrow Function
let saudacao = () => 'Olá Mundo!'
console.log(saudacao());

let dobro = numero => numero * 2;
console.log(dobro(10));

let soma = (a, b) => a + b;
console.log(soma(20, 40));

let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ':' + data.getMinutes();
}
console.log(horaAtual())

// Callback
setTimeout(function(){
    console.log('Olá Mundo!')
}, 1000)

let myCallback = () => console.log('Olá Mundo!');
setTimeout(myCallback, 1000);

