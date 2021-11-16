const express = require('express');
const router = express.Router();

const songRouter = require('../controllers/song');

router.get("/show", songRouter.findAll);

router.get("/search/:search", songRouter.search);

router.get("/id/:ID_chude", songRouter.find);

router.get("/load/:ID_baihat", songRouter.load);

module.exports = router;