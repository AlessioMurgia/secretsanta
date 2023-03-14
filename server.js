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

const { sum } = require('./backend/backend');

app.post('/api/extract', (req, res) => {

    //console.log(req.body);
    res.send(req.body);
    //const result = sum(a, b);
    //res.send({ result });

});

/*
{
  formData: [ { name: '1', email: '1@.i' }, { name: '2', email: '2@.i' } ]
}
*/