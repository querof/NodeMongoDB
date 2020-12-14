const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const personRouter = require('./routes/personRoute');
const app = express();

require('dotenv/config');

app.use(bodyParser.json());

app.use('/api/v1/person', personRouter);

app.get('/', (req, res) => {
    res.send({
        body: "Root"
    });
});

mongoose.connect(
    process.env.DB_CONNECTION_STRING, {
        useNewUrlParser: true
    },
    () => {
        console.log('connected to DB!');
    });
const port = process.env.PORT || 3002;
app.listen(port, () => console.log('Listen on port ' + port));