const express = require('express');
const router = express.Router();

const lessonRouter = require('../controllers/lesson');

router.get("/show/:ID_chude", lessonRouter.findAll);


router.get("/id/:ID_baihoc", lessonRouter.findOne);

module.exports = router;