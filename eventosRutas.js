const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
var event = require('./model/evento.js');

router.post('/new', async function(req, res, next) {
    const event = req.body;
    try {
        let _event = new Event({
            nombre: event.nombre,
            start: event.start,
            title: event.title,
            end: event.end,
            start_hour: event.start_hour,
            end_hour: event.end_hour
        });

        const saveEvent = await _event.save();

        res.status(200).send('Evento guardado.');

    } catch (err) {
        return res.status(500).send({
            message: err.message
        });
    }
})

router.get('/all', async function(req, res) {
    const events = await Event.find();

    return res.status(200).send(events);
})

router.post('/delete/:id', async function(req, res) {
    try {
        const eventDeleted = await Event.findByIdAndDelete(req.body.id);

        if (eventDeleted) {
            res.status(200).send('Evento eliminado satisfactoriamente!');
        } else {
            res.status(200).send('Evento no se logró eliminar');
        }
    } catch (e) {
        res.status(500).send('Error interno del servidor');
    }

})

router.post('/update', async function(req, res) {
    try {
        const event = await Event.findById(req.body.id);
        event.start = req.body.start_date
        event.end = req.body.start_date
        const eventUpdated = await event.save();

        if (eventUpdated) {
            res.status(200).send('Registro actualizado.');
        } else {
            res.status(400).send('Registro no actualizado.');
        }


    } catch (e) {
        res.status(500).send('Error interno del servidor');
    }

})

module.exports = router