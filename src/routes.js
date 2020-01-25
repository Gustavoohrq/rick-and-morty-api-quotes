const express = require('express');
const router = express.Router();

const phrasesController = require('./controllers/phrasesController');

router.get('/phrases/:language', phrasesController.index);
router.get('/phrases/:language/:id', phrasesController.show);

module.exports = router;
