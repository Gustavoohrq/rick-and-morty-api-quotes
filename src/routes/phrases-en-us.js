const express = require('express')
const router = express()
const api = require('../store/phrases-en_us.json')

router.get('/', (req, res) =>{
    res.json(api)
})
router.get('/:id', (req, res) =>{
    var id = parseInt(req.params.id) - 1
    res.json(api.phrases_us[id])
})

module.exports = router;