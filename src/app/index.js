const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const routes = require('../routes/index')

app.get('/', (req, res) => {
    res.send('Hello World test!')
});

routes(app)

module.exports = app;