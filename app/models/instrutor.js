var mongoose = require('mongoose');
module.exports = function () {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        email: {
            type: mongoose.SchemaTypes.Email,
            ref: 'Intrutor',
            required: true
        },
        created: {
            type: Date,
            default: Date.now,
            required: false
        }
        
    });
    return mongoose.model('instrutor', schema);
}
