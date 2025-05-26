// import express from 'express';
const { isUtf8 } = require('buffer');
const express = require('express');
const fs = require('fs');
const path = require('path');

const dbPath = path.join('db', 'disciplinas.json')

//instancia do express: aplication

const app = express();

// app.use(); = ouve em todas as rotas, seja /login, /user, 

//manipular arquivo


app.get('/login', (req,res)=>{
    console.log(req.query);
    const nome = req.query.nome;
    const senha = req.query.senha
    
    const msg = `Ola ${nome} sua senha é ${senha} PEGA A SENHA PAEE`;

    // res.send(msg)
    const disciplinasDB = fs.readFileSync(dbPath, {encoding: 'utf8'})
    res.send(disciplinasDB);
    const disciplinas = JSON.parse(disciplinasDB)
    res.send(disciplinas[3])
});

app.listen(3000, () =>{
    console.log('servidor ouvindo no 3000');
})


//esta ouvindo requisições

//forms usa query
//query: www.imc.com.br/login&nome=theo&senha=123
//paramns: www.imc.com.br/login/theo/123