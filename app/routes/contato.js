module.exports = function (app) {
    var controller = app.controllers.contato;
    // post - envia dados para o servidor cadastrar algo
    app.post('/contatos', controller.salvarContato);
    app.get('/contatos', controller.listaContatos);
    app.get('/contatos/:id', controller.obtemContato);
    app.put('/contatos', controller.alteraContato);
    app.delete('/contatos/:id', controller.removeContato);
    
}