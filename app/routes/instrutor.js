module.exports = function (app) {
    var controller = app.controllers.instrutor;
    // post - envia dados para o servidor cadastrar algo
    app.post('/instrutores', controller.salvarInstrutor);
    app.get('/instrutores', controller.listaInstrutores);
    app.get('/instrutores/:id', controller.obtemInstrutor);
    app.put('/instrutores', controller.alteraInstrutor);
    app.delete('/instrutores/:id', controller.removeInstrutor);
    
}