const express = require('express')
const router = express()
const api = require('../phrases/phrases-pt_br.json')

router.get('/', (req, res) =>{
    res.json(api)
})
router.get('/:id', (req, res) =>{
    res.json(api.phrases_pt_br[req.params.id])
})

module.exports = router;