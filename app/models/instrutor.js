var mongoose = require('mongoose');
module.exports = function () {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        email: {
            type: mongoose.SchemaTypes.Email,
            required: true
        },
        created: {
            type: Date,
            default: Date.now,
            required: false
        }
        
    });
    return mongoose.model('Instrutor', schema);
}
