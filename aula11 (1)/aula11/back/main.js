//ideia é ter um form e acessar disiciplinas, listar e cadastrar displicnas

//importar express
const express = require('express');
const fs = require('fs');
const path = require('path');
//expres ta com dependecia no jsnon

//path ajudara a construir ma==caminho para o db


const app = express();


const dbPath = path.join('db', 'disciplinas.json')

//assim que receber a requisiççai ira acessar /disciplinas e fazer a funcao aero
app.get('/disciplinas', (req, res)=>{
    //form envia dados em query paaramns
    const {sigla} = req.query //obj req carrega a requiscao

    //operador desestruturar, coloca entre {} o que voce quer e ele vai automartico com o que escreveu entre {}
    
    //buscar no banco a sigla(serviço que esta buscando)
    const disciplinasString = fs.readFileSync(dbPath, {encoding: 'utf8'})

    //transformar o arquvio em um 'vetor de classes'
    const disciplinas = JSON.parse(disciplinasString);

    //isso agora funciona:
    // disciplinas[0];
    // disciplinas[2];
    // disciplinas[1];

    // for (let index = 0; index < disciplinas.length; index++) {
    //     if (disciplinas[index].sigla === sigla) {
    //         res.status(200).send(disciplinas[index])
    //     }
    //     res.status(200).send(disciplinas[index])
    // }


    // for == find

    const disciplina_atual = disciplinas.find( (d) => d.sigla === sigla)
    //d vai receber o primeiro elemnto, depois o segundo, depois o terceiro... e vao para quando entra na funcao


    if (disciplina_atual) {
        res.status(200).send(disciplina_atual);
    }else{
        res.status(404).send('disicplina nao encotnrada')
    }



})

app.use(express.urlencoded({extended: true}))//tem que fazer isso para desestruturar o json

app.post('/disciplinas', (req, res)=>{
    const {equivalencia, sigla, ementa} = req.body;


    const disciplinasString = fs.readFileSync(dbPath, {encoding:"utf-8"})
    const disciplinas = JSON.parse(disciplinasString);

    //criar nova disciplina
    const novaDisciplina = {
        //criar json igual ao arquvio:
        id: disciplinas.length + 1,
        sigla,
        ementa,
        equivalencia,
        //pois na linha 62 ja fizemos a 'instancia'
    }
    disciplinas.push(novaDisciplina)

    //disciplinas é um json pois na linha 69 fizemos isso, queremos stringuifcar passando o argumentos
    fs.writeFileSync(dbPath, JSON.stringify(disciplinas, null, 1))
    
    res.status(201).send('Disciplina criada com sucessp')


})



//ligar o servidor para ouvir porta
app.listen(3000, () =>{
    console.log('servidor ouvindo');
})
