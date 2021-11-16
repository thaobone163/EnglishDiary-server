const express = require('express');
const router = express.Router();


const accountRouter = require("../controllers/account");

router.get("/username/:tendangnhap", accountRouter.find);

// Create a new Account
router.post("/create", accountRouter.create);

module.exports = router;