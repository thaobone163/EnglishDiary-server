const express = require('express');
const router = express.Router();

const storyRouter = require('../controllers/story');

router.get("/show", storyRouter.findAll);

router.get("/search/:search", storyRouter.search);

router.get("/id/:ID_chude", storyRouter.find);

router.get("/load/:ID_truyen", storyRouter.load);

module.exports = router;