let produtos = [
    {nome: "Doritos",       valor: 1200,   qualidade: 100,   status:  true},
    {nome: "Fandangos",     valor:  800,   qualidade:  80,   status: false},
    {nome: "Sheetos",       valor: 1000,   qualidade:  90,   status:  true},
    {nome: "Giló",          valor:  100,   qualidade:  10,   status:  true},
    {nome: "Pão Frances",   valor:  500,   qualidade:  70,   status: false},
    {nome: "Cup Noodles",   valor:  600,   qualidade: 100,   status:  true}
];

let compras = produtos.filter(function(compra){
    let valor = compra.valor
    let qualidade = compra.qualidade
    let status = compra.status

    let selecionado = (valor >= 482 && valor <= 1600) && (qualidade >= 60) && (status == true)
    
    return selecionado
});

console.log(compras)

let carrinho = compras.forEach((compra) => {
    console.log("Produto: " + compra.nome + ", Valor: " + compra.valor)
});

const total = compras.reduce((acumulador, compra) => {return acumulador.valor + compra.valor})

console.log(carrinho + total);