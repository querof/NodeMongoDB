const express = require('express');
const bodyParser = require('body-parser');
const personRouter = require('./routes/person');
const app = express();

app.use(bodyParser.json());
app.use('/api/v1/person', personRouter);

app.get('/', (req, res) => {
    res.send({
        body: "Root"
    });
});

const port = process.env.PORT || 3002;
app.listen(port, () => console.log('Listen on port ' + port));