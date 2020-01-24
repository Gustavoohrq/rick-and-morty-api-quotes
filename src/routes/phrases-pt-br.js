const express = require('express')
const router = express()
const api = require('../phrases/phrases-pt_br.json')

router.get('/', (req, res) =>{
    res.json(api)
});

router.get('/:id', (req, res) => {
    var id = parseInt(req.params.id) - 1
    res.json(api.phrases_pt_br[id])
});


module.exports = router;