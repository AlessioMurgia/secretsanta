const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});

const { extractorHandler } = require('./backend/backend');

app.post('/api/extract', (req, res) => {

    //console.log(req.body.formData);
    //res.send(req.body);
    const respPing = extractorHandler(req.body.formData)
    //const result = sum(a, b);
    res.send({respPing});
});

/*
{
  formData: [ { name: '1', email: '1@.i' }, { name: '2', email: '2@.i' } ]
}
*/