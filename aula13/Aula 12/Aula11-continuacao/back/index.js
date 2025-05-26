const express = require('express');
const fs = require('fs');
const path = require('path');
const { json } = require('stream/consumers');

const app = express();

const dbPath = path.join('db', 'disciplinas.json');

// converte os bits para JSON, que vem do formulario do post
app.use(express.urlencoded({extended: true}))

app.get('/disciplinas', (req, res) => {

    // O Form HTML envia dados utilizando query parameters
    const {sigla} = req.query;

    // Buscar mo banco a sigla
    const disciplinasString = fs.readFileSync(dbPath, {encoding : 'utf8'});

    const disciplinas = JSON.parse(disciplinasString);

    // for(let i = 0; i < disciplinas.length; i++){
    //     if(disciplinas[i].sigla === sigla){
    //         res.status(200).send(disciplinas[i]);
    //     }
    // }

    const disciplina = disciplinas.find((d) => d.sigla.toLowerCase === sigla.toLowerCase);

    if(disciplina){
        res.status(200).send(disciplina);
    }else{
        res.status(404).send('Disciplina não encontrada')
    }
});

app.post('/disciplinas', (req, res) =>{

    const {equivalencia, sigla, ementa} = req.body;

    // acessar o banco e salvar a nova disciplina
    const disciplinasString = fs.readFileSync(dbPath, {encoding : 'utf8'});
    const disciplinas = JSON.parse(disciplinasString);

    //criar a nova disciplina

    const novaDisciplina = {
        id: disciplinas.length + 1,
        sigla,
        ementa,
        equivalencia
    }

    disciplinas.push(novaDisciplina);

    // acessar o banco e salvar a nova disciplina
    fs.writeFileSync(dbPath, JSON.stringify(disciplinas, null, 2));

    res.status(201).send('Disciplina criada com Sucesso');

})

app.listen(3000, () => {
    console.log('Servidor ouvindo...');
})