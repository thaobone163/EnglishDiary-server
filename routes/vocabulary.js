const express = require('express');
const router = express.Router();

const vocabularyRouter = require('../controllers/vocabulary');

router.get("/show/:ID_baihoc", vocabularyRouter.findAll);

router.get("/search/:search", vocabularyRouter.search);

module.exports = router;