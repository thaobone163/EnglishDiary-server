const express = require('express');
const router = express.Router();

const topicRouter = require('../controllers/topic');

router.get("/show/:ID_kh", topicRouter.findAll);

router.get("/search/:search/:ID_kh", topicRouter.search);

router.get("/id/:ID_chude", topicRouter.findOne);

module.exports = router;