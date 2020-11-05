module.exports = function(app){
    /// cria a variável que vai conter as funções da controller
    var controller = {};
    // cria variável que irá acessar a model
    var contato = app.models.contato;

    // cria a função de cadastrar contato
    controller.salvarContato = function(req, res) {
        contato.create(req.body).then(
            function(contato) {
                res.status(201).json(contato);
            }, function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

   // função que retorna os contatos cadastrados
   controller.listaContatos = function(req, res) {
        // executa um find para retornar os contatos
        contato.find().populate('emergencia').exec().then(
            // em caso de sucesso
            function(contatos) {
                res.status(200).json(contatos);
            }, 
            // em caso de erro
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }
   

     // atualiza contatos já cadastrados
     controller.alteraContato = function(req, res) {
        var _id = req.body._id;
        contato.findByIdAndUpdate(_id, req.body).exec().then(
            // em caso de sucesso
            function(contato) {
                res.status(200).json(contato);
            }, 
            // em caso de erro
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }
   

    // remove contatos cadastrados
    controller.removeContato = function(req, res) {
        var _id = req.params.id;
        contato.remove({"_id": _id}).exec().then(
            // em caso de sucesso
            function(contato) {
                res.status(204).end();
            }, 
            // em caso de erro
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }


        
    controller.obtemContato = function(req, res) {
        var _id = req.params.id;
        contato.findById(_id).populate('emergencia').exec().then(
            // sucesso
            function(contato) {
                if(!contato) {
                    res.status(404).end();
                }
                else {
                    res.status(200).json(contato);
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
