function imc(peso, altura) {
    return peso/altura;
}

console.log("Meu IMC é " + imc(90, 1.70));






function calculadora(n1=10, n2=20){
    let soma= n1 + n2
    let subtracao= n1 - n2
    let multiplicacao= n1 * n2
    let divisao= n1 / n2

    console.log(soma)
    console.log(subtracao)
    console.log(multiplicacao)
    console.log(divisao)
}

calculadora()





let nomeJogador="William";
let golsJogador= 1;
let precoEmDolar= 10000;

function fazerGol(){
    golsJogador++;
    console.log(golsJogador + 'º Gol do jogador ' + nomeJogador + ' que vale ' + precoEmDolar)
}

fazerGol()
fazerGol()
fazerGol()
fazerGol()
fazerGol()





function hatTrick(){
    fazerGol()
    fazerGol()
    fazerGol()
    precoEmDolar+= precoEmDolar * 10/100
    console.log(golsJogador + 'º Gol do jogador ' + nomeJogador + ' que vale ' + precoEmDolar)
}

hatTrick()

