const express = require('express');
const router = express.Router();

const videoRouter = require('../controllers/video');

router.get("/show", videoRouter.findAll);

router.get("/search/:search", videoRouter.search);

router.get("/id/:ID_chude", videoRouter.find);

router.get("/load/:ID_video", videoRouter.load);

module.exports = router;