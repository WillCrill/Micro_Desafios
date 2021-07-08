// Arrays
let comidasFavoritas = ['Pizza', 'Lasanha', 'Pudim'];

let numerosSorteados = [12, 45, 56, 324, 452]

// Metodos Arrays
comidasFavoritas.push('Bolo de Cenoura') 
    // Adiciona um ou mais elementos ao final do array
comidasFavoritas.pop()
    // Remove o ultimo elemento de um array
comidasFavoritas.shift()
    // Elimina o primeiro elemanto de um array
comidasFavoritas.unshift('Batata Frita')
    // Adiciona um ou mais elementos ao inicio do array
comidasFavoritas.join()
comidasFavoritas.join(' - ')
    // Une os elementos de um array, utilizando o separador que lhe especificarmos.
    // Se não o especificarmos, utilizará a virgula, por padrão
comidasFavoritas.indexOf('Lasanha')
    // Busca no array um elemento que recebe como parametro
comidasFavoritas.lastIndexOf('Pudim')
    // Procura o elemento no array de tras para frente e retor a posição do elemento que esta procurando
comidasFavoritas.includes('Pizza')
    // Busca um elemento no array e retorna um booleano

comidasFavoritas.length;

comidasFavoritas[2].length;
    // Quantidade total de caracteres na string