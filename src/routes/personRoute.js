const {
    Person
} = require('../repositories/personRepository');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send({
        route: 'Root route'
    });
});

router.post('/', (req, res) => {
    return res.send({
        body: req.body.name + ' ' + req.body.lastname
    });
});

router.put('/:id', (req, res) => {
    return res.send({
        body: req.body.name + ' adding characters'
    });
});

router.delete('/:id', (req, res) => {
    return res.send({
        body: 'deleted person with id: ' + req.params.id
    });
});

module.exports = router;