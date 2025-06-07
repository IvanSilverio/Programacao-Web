const axios = require('axios');

const api = 'https://swapi.dev/api';
const endpoint = '/planets';

const buscaPersonagens = async () => {
    let url = `${api}${endpoint}`;

    const dados = await axios.get(url);
    dados.data.results.forEach((planeta) => {
        console.log(planeta.name);
    });

}

buscaPersonagens();