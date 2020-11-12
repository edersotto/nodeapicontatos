var mongoose = require('mongoose');
module.exports = function () {
    var schema = mongoose.Schema({

        nome: {
            type: String,
            required: true
        },
        ativo: {
			type: Boolean,
			required: false,
			default: true
        },
        cargaHoraria: {
            type: Number,
            required: true,
            enum : [40,80], 
            default: 40 
        },
        valor: {
            type: Number,
            required: true,
            //min: 99,
            min: [this.valor >= 99]
        },
        dataInicio: {
            type: Date,
            required: true,
        }, 
        dataTermino: {
            type: Date,
            required: true,
            validate: function dateValidator(value) {
                return this.dataInicio <= value;
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
            required: true
        }
    });
    
    return mongoose.model('Curso', schema);
}