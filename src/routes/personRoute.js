const Person = require('../repositories/personRepository');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const persons = await Person.find();
        res.json(persons);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        if (person === null) {
            return res.json({
                message: "no record with Id: " + req.params.id
            });
        }
        res.json(person);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

router.post('/', async (req, res) => {
    const person = new Person({
        name: req.body.name,
        lastname: req.body.lastname
    });

    try {
        const savedPerson = await person.save();
        res.json(savedPerson);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const person = await Person.updateOne({
            _id: req.params.id
        }, {
            name: req.body.name
        });

        res.json(person);
    } catch (err) {
        res.json({
            err
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const post = await Person.remove({
            _id: req.params.id
        });
        return res.json(post);
    } catch (err) {
        res.json({
            err
        });
    }
});

module.exports = router;