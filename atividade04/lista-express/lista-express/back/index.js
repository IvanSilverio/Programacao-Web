
const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const path = require('path');

//Necessário para extrair os dados de Forms vindos de uma requisição POST
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});


const dbusuariosPath = path.join('db', 'banco-dados-usuario.json')
const dbcursosPath = path.join('db', 'cursos.json')


//Requisicao com POST publica para autenticar usuário...
app.post('/login', async (req,res) => {

    const {email, password} = req.body;

    const usuarioString = fs.readFileSync(dbusuariosPath, {encoding: 'utf8'})

    //transformar o arquvio em um 'vetor de classes'
    const usuarios = JSON.parse(usuarioString);

    const usuarios_atual = usuarios.find( (u) => u.email === email)
    //u vai receber o primeiro elemnto, depois o segundo, depois o terceiro...


    if (!usuarios_atual) {
        return res.status(404).send(`Usuario com email ${email} não existe. Considere criar uma conta!.`);    }
    
    if (usuarios_atual.password !== password) {
            return res.status(401).send('Usuario ou senhas incorretas.');
        }

    return res.status(200).send('Autenticado com Sucesso');
})

//...criar as demais rotas seguindo os requisitos.

app.post('/create', async (req,res) => {

    const {username, email, password} = req.body;

    const usuarioString = fs.readFileSync(dbusuariosPath, {encoding: 'utf8'})

    const usuarios = JSON.parse(usuarioString);

    const usuarios_atual = usuarios.find( (u) => u.email === email)


    if (usuarios_atual) {
        return res.status(401).send(`Usuario com email ${email} já existe.`);    
    }

    else{

        const novoCadastro = {

            id: usuarios.length + 1,
            username,
            email,
            password,
        }
        usuarios.push(novoCadastro)

//     queremos stringuifcar passando os argumentos
        fs.writeFileSync(dbusuariosPath, JSON.stringify(usuarios, null, 1))
        return res.status(200).send('Tudo certo usuario criado com sucesso.');
    }
    

})

app.get('/cursos', async (req,res) => {

    const cursosString = fs.readFileSync(dbcursosPath, {encoding: 'utf8'})

    const cursos = JSON.parse(cursosString);

    res.json(cursos); 
    
})

app.get('/cursos/:nome', async (req,res) => {

    const nome = req.params.nome;

    const cursoString = fs.readFileSync(dbcursosPath, {encoding: 'utf8'})

    //transformar o arquvio em um 'vetor de classes'
    const cursos = JSON.parse(cursoString);

    const curso = cursos.filter((c) =>
        c.nome.toLowerCase().includes(nome.toLowerCase())
    );


    if (curso.length === 0) {
        res.status(404).send(`Curso Não Encontrado!`);    
    }

    res.json(curso); 
})
