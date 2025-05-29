//Tarefa buscar um pokemom e criar um arquivo
//com o nomo do primeiro pokemom

const axios = require('axios');

const url = `https://pokeapi.co/api/v2/pokemon`;

const buscaPokemom = async () => {
    const pokemons = await axios.get(url);
    console.log(pokemons.data.results[0].name);
}

buscaPokemom()
console.log('Haha')
console.log('Hehe')
console.log('Hihi')