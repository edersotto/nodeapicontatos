var mongoose = require('mongoose');
require('mongoose-type-email');
module.exports = function () {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        dataNascimento: {
            type: Date,
            required: true
        },
        email: {
            type: mongoose.SchemaTypes.Email,
            required: true,
            index: {
                unique: true
            }
        },
        created: {
            type: Date,
            default: Date.now,
            required: false
        },
        cursos: [{
            type: mongoose.Schema.ObjectId,
            ref: 'Curso',
            required: true
        }]
    });
    return mongoose.model('Aluno', schema);
}
