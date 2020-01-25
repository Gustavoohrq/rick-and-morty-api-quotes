const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');


const phrases_en_us = require('./routes/phrases-en-us')
const frases_pt_br = require('./routes/phrases-pt-br')

const porta = process.env.PORT || 8080
const app = express()

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ data: 'Welcome api phrases Rick and Morty' })
})

app.use('/phrases/en-us', phrases_en_us)
app.use('/phrases/pt-br', frases_pt_br)


app.listen(porta, function () {
    console.log('RODANDO NA PORTA: 8080');
});

module.exports = app;