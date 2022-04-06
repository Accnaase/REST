const express = require('express');
const { redirect } = require('express/lib/response');
const app = express();

const rotaProdutos = require('./routes/produtos');
const rotaPedidos= require('./routes/pedidos');

app.use('/pedidos',rotaPedidos);
app.use('/produtos', rotaProdutos);
app.use('/teste', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Não sei como mas deu certo'
    });
});

module.exports = app;