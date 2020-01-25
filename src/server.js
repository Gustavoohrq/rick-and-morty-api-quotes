require('dotenv/config');

const express = require('express'); 
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

const port = process.env.SERVER_PORT || 8080
const app = express()

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (_, res) => {
    res.json({ 'message': 'Welcome api phrases Rick and Morty' })
})

app.use(routes);

app.listen(port, function () {
    console.log(`Server running on the port ${port}`);
});

module.exports = app;