module.exports = function(app){
    /// cria a variável que vai conter as funções da controller
    var controller = {};
    // cria variável que irá acessar a model
    var instrutor = app.models.instrutor;

    // cria a função de cadastrar contato
    controller.salvarInstrutor = function(req, res) {
        instrutor.create(req.body).then(
            function(instrutor) {
                res.status(201).json(instrutor);
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }


        
    // função que retorna os contatos cadastrados
    controller.listaInstrutores = function(req, res) {
        // executa um find para retornar os contatos
        instrutor.find().exec().then(
            // em caso de sucesso
            function(instrutores) {
                res.status(200).json(instrutores);
            }, 
            // em caso de erro
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }


    // atualiza contatos já cadastrados
    controller.alteraInstrutor = function(req, res) {
        var _id = req.body._id;
        instrutor.findByIdAndUpdate(_id, req.body).exec().then(
            // em caso de sucesso
            function(instrutor) {
                res.status(200).json(instrutor);
            }, 
            // em caso de erro
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }


    // remove contatos cadastrados
    controller.removeInstrutor = function(req, res) {
        var _id = req.params.id;
        instrutor.remove({"_id": _id}).exec().then(
            // em caso de sucesso
            function(instrutor) {
                res.status(204).end();
            }, 
            // em caso de erro
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

        
    controller.obtemInstrutor = function(req, res) {
        var _id = req.params.id;
        instrutor.findById(_id).exec().then(
            // sucesso
            function(instrutor) {
                if(!instrutor) {
                    res.status(404).end();
                }
                else {
                    res.status(200).json(instrutor);
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
