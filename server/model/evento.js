var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventosSchema = new Schema({
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
    user_id: {
        type: String,
        required: true,
        default: ''
    }
})

var Event = mongoose.model('Evento', eventosSchema);

module.exports = Event;