const express = require('express')
const router = express()
const api = require('../phrases/phrases-en_us.json')

router.get('/', (req, res) =>{
    res.json(api)
})
router.get('/:id', (req, res) =>{
    res.json(api.phrases_us[req.params.id])
})

module.exports = router;