const express = require('express');
const router = express.Router();

const progressRouter = require('../controllers/progress');

router.get("/status/:ID_nguoihoc/:ID_baihoc", progressRouter.status);

router.post("/update", progressRouter.update);

router.get("/count/:ID_nguoihoc", progressRouter.count);

router.get("/countAll", progressRouter.countAll);

module.exports = router;