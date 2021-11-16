const express = require('express');
const router = express.Router();


const profileRouter = require("../controllers/profile");

// Retrieve a single Profile Id
router.get("/id/:ID_nguoihoc", profileRouter.find);

router.post("/create", profileRouter.create);

module.exports = router;