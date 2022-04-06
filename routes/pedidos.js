const express = require('express');
const router = express.Router();


// RETORNA TODOS OS PRODUTOS
router.get('/', (req,res,next) => {
    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    });
});

//INSERE UM PEDIDO
router.post('/', (req,res,next) => {
    res.status(201).send({
        mensagem: 'O pedido foi criado'
    });
});

//RETORNA UM PEDIDO PELO ID
router.get('/:id_produto', (req,res,next)=>{
    const id = req.params.id_produto
        res.status(200).send({
            mensagem: 'Detahes do pedido',
            id_pedido: id
        });
});

// ALTERA UM PRODUTO
router.patch('/', (req,res,next) => {
    res.status(201).send({
        mensagem: 'Produto alterado'
    });
});

// DELETA UM PEDIDO
router.delete('/', (req,res,next) => {
    res.status(201).send({
        mensagem: 'Pedido excluído'
    });
});

module.exports = router;