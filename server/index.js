const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const data = "You will become an amazing Web Developer"

app.get('/data', (req,res) => {
    res.status(200).send(data)
})

const PORT = 4006;
app.listen(PORT, () => console.log('Server is listening on port 4006'));


