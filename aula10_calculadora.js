const tabuada= require('./aula10_Tabuada');
const operacoes= require('./aula10_operacoes');

function calcula(a,b,acao)
{
    switch (acao)
    {
        case '+': console.log(operacoes.soma(a,b));
        break;
        case '-': console.log(operacoes.subtracao(a,b));
        break;
        case '/': console.log(operacoes.divisao(a,b));
        break;
        case '*': console.log(operacoes.divisao(a,b));
        break;
        case 't': tabuada(a);
        break;
    }
}

calcula(1, 4, '+')
calcula(1, 4, '*')
calcula(1, 4, '-')
calcula(1, 4, '/')