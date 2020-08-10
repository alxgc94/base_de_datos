var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: false,
        default: ''
    },
    start_hour: {
        type: String,
        required: false,
        default: ''
    },
    end_hour: {
        type: String,
        required: false,
        default: ''
    },
})

var User = mongoose.model('Evento', eventoSchema);

module.exports = User;