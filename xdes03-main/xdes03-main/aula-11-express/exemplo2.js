const express = require('express');

const app = new express();


app.use((req,res) => {
    res.json("Epa!");
})

app.listen(3000, () => {
    console.log('Servidor ligado!');
});