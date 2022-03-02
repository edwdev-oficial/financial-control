const express = require('express');
const bodyParser = require('../node_modules/body-parser');
const cors = require('cors');
const app = express();
const port = 8083;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
    res.send ({ apiFinancialControl: 'Ok!' })
});

app.listen(port, () => {
    console.log(`api-financil-control loaded in http://localhost:${port}`);
});