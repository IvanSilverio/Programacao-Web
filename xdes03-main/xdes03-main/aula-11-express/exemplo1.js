const express = require('express');

const app = new express();


app.use(() => {
    console.log('Ola');
})

app.listen(3000, () => {
    console.log('Servidor ligado!');
});