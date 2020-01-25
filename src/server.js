const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const routes = require('./routes');

const porta = process.env.PORT || 8080
const app = express()

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ 'message': 'Welcome api phrases Rick and Morty' })
})

app.use(routes);

app.listen(porta, function () {
    console.log('RODANDO NA PORTA: 8080');
});

module.exports = app;