let calculadora = {
    somar: function (n1, n2){
        return n1 + n2
    },
    subtrair: function (n1, n2){
        return n1 - n2
    }
};
module.exports = calculadora;

console.log(calculadora.subtrair(1,3))