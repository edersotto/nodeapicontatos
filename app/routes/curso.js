module.exports = function (app) {
    var controller = app.controllers.curso;
    // post - envia dados para o servidor cadastrar algo
    app.post('/cursos', controller.salvarCurso);
    app.get('/cursos', controller.listaCursos);
    app.get('/cursos/:id', controller.obtemCurso);
    app.put('/cursos', controller.alteraCurso);
    app.delete('/cursos/:id', controller.removeCurso);
    
}