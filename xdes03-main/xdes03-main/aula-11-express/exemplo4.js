const express = require('express');
const fs = require('fs');

const app = new express();
const arquivo = 'disciplinas.json'

app.get('/disciplinas/:id',(req,res) => {
    //Extrair parametros
    const {id} = req.params;
    //abrir arquivo
    const dados = fs.readFileSync(arquivo);
    //converter para JSON
    const dadosJson = JSON.parse(dados);
    res.json(dadosJson.find(disc => disc.id=id));
    
});

app.listen(3000, () => {
    console.log('Servidor ligado!');
});