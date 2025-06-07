const axios = require('axios');

const api = 'https://swapi.dev/api';
const endpoint = '/people';

const buscaPersonagens = async () => {
    let counter = 0;
    let url = `${api}${endpoint}`;
    while(url !== null)
    {
        let dados = await axios.get(url);
        dados.data.results.forEach((personagem) => {
            console.log(personagem.name);
            counter++;
        });
        url = dados.data.next;
    }
    console.log('Total de personagens: ', counter);
}


buscaPersonagens();