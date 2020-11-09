module.exports = function (app) {
    var controller = app.controllers.aluno;
    // post - envia dados para o servidor cadastrar algo
    app.post('/alunos', controller.salvarAluno);
    app.get('/alunos', controller.listaAlunos);
    app.get('/alunos/:id', controller.obtemAluno);
    app.put('/alunos', controller.alteraAluno);
    app.delete('/alunos/:id', controller.removeAluno);   
}