var mongoose = require('mongoose');
module.exports = function () {
    var schema = mongoose.Schema({

        nome: {
            type: String,
            required: [true,'O campo nome é obrigatório']
        },
        ativo: {
			type: Boolean,
			required: false,
			default: true
        },
        cargaHoraria: {
            type: Number,
            required: true,
            validate: {
                validator: function(value) {
                    return (value==40) || (value==80);
                },
                message: 'A carga horária deve ser 40 ou 80'
            },
            default: 40 
            /*
            enum : {
                values: ['40','80'], 
                message: 'A carga horária precisa ser 40 ou 80.'
            },
            */
            
        },
        valor: {
            type: Number,
            required: [true, 'O campo valor é obrigatório'],
            min: [99, 'O valor mínimo é 99'],
        },
        dataInicio: {
            type: Date,
            required: [true, 'O campo dataInicio é obrigatório'],
        }, 
        dataTermino: {
            type: Date,
            required: [true, 'O campo dataTermino é obrigatório'],
            validate: {
                validator: function(value) {
                    return this.dataInicio <= value;
                },
                message: 'A data de término deve ser maior que a de início'
            }
        }, 
        created: {
            type: Date,
            default: Date.now,
            required: false
        },
        instrutor: {
            type: mongoose.Schema.ObjectId,
            ref: 'Instrutor',
            required: [true, 'É necessário definir um instrutor válido']
        }
    });
    
    return mongoose.model('Curso', schema);
}