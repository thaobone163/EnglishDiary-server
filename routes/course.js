const express = require('express');
const router = express.Router();


const courseRouter = require("../controllers/course");

// Retrieve a single Profile with teacherId
router.get("/id/:ID_khoahoc", courseRouter.find);

module.exports = router;