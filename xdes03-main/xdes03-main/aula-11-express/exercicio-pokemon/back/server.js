const express = require('express');
const fs = require('fs');
const path = require('path');


const dbPath = path.join('db','pokemon.json');


const app = express();

app.use(express.urlencoded({extended: true}));


app.listen(3000,() => {

    console.log('server on');

});


app.get('/pokemon', (req,res) => {

    const {pokename} = req.query;

    const db = fs.readFileSync(dbPath);
    const pokemons = JSON.parse(db);
    const pokemon = pokemons.find(p => p.name === pokename.toLowerCase());

    if(pokemon)
    {
        const response = `
            <h1>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
            <img src ="${pokemon.img}" alt="imagem do pokemon ${pokemon.name}" />
        `;
        res.send(response);
    }
    else
    {
        res.send(`Pokemon ${pokename} não encontrado`);
    }

});


app.post('/pokemon', (req,res) => {

    const {pokename, pokeimg, pokeid} = req.body;

    const db = fs.readFileSync(dbPath);
    const pokemons = JSON.parse(db);
    
    const pokemon = {
        id: Number(pokeid),
        name: pokename,
        img: pokeimg
    }

    pokemons.push(pokemon);

    fs.writeFileSync(dbPath,JSON.stringify(pokemons,null,2));

    res.send('Pokemon adicionado com sucesso');
   

});