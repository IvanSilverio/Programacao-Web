const axios = require('axios');

const api = 'https://swapi.dev/api';
const endpoint = '/people';

const buscaPersonagens = async () => {
    let url = `${api}${endpoint}`;

    const dados = await axios.get(url);
    dados.data.results.forEach((personagem) => {
        console.log(personagem.name);
    });

}

buscaPersonagens();