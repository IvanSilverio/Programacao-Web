const axios = require('axios');

const api = 'https://swapi.dev/api';
const endpoint1 = '/people';
const endpoint2 = '/planets';

const buscaPersonagens = async () => {
    let counter = 0;
    let url = `${api}${endpoint1}`;
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

const buscaPlanetas = async () => {
    let counter = 0;
    let url = `${api}${endpoint2}`;
    while(url !== null)
    {
        let dados = await axios.get(url);
        dados.data.results.forEach((planeta) => {
            console.log(planeta.name);
            counter++;
        });
        url = dados.data.next;
    }
    console.log('Total de Planetas: ', counter);
}

buscaPersonagens();
buscaPlanetas();