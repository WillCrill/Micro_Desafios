let carro = {
    placa: 'ADF1238'
}
console.log(carro.placa)


function Restaurante(nomeRestaurante, Cardapio){
    this.nomeRestaurante = nomeRestaurante
    this.Cardapio = Cardapio
};

let meuRestaurante = new Restaurante('fogoNoChao', ['churrasco', 'rocambole', 'salada']);

console.log(meuRestaurante)