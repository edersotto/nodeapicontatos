module.exports = function(app){
    /// cria a variável que vai conter as funções da controller
    var controller = {};
    // cria variável que irá acessar a model
    var aluno = app.models.aluno;

    // cria a função de cadastrar contato
    controller.salvarAluno = function(req, res) {
        aluno.create(req.body).then(
            function(aluno) {
                res.status(201).json(aluno);
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }


        
    // função que retorna os contatos cadastrados
    controller.listaAlunos = function(req, res) {
        // executa um find para retornar os contatos
        aluno.find().populate('cursos').exec().then(
            // em caso de sucesso
            function(alunos) {
                res.status(200).json(alunos);
            }, 
            // em caso de erro
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }


    // atualiza contatos já cadastrados
    controller.alteraAluno = function(req, res) {
        var _id = req.body._id;
        aluno.findByIdAndUpdate(_id, req.body).exec().then(
            // em caso de sucesso
            function(aluno) {
                res.status(200).json(aluno);
            }, 
            // em caso de erro
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }


    // remove contatos cadastrados
    controller.removeAluno = function(req, res) {
        var _id = req.params.id;
        aluno.remove({"_id": _id}).exec().then(
            // em caso de sucesso
            function(aluno) {
                res.status(204).end();
            }, 
            // em caso de erro
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

        
    controller.obtemAluno = function(req, res) {
        var _id = req.params.id;
        aluno.findById(_id).populate('cursos').exec().then(
            // sucesso
            function(aluno) {
                if(!aluno) {
                    res.status(404).end();
                }
                else {
                    res.status(200).json(aluno);
                }
            }, 
            // erro
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

  
    return controller;
}
