const mongoose = require('mongoose');
const {
    stringify
} = require('querystring');

const PersonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Person', PersonSchema);