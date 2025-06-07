const axios = require('axios');

const api = 'https://swapi.dev/api';
const endpoint = '/planets';

const buscaPlanetas = async () => {
    let counter = 0;
    let url = `${api}${endpoint}`;
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


buscaPlanetas();