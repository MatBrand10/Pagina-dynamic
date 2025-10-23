const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const sobreController = require('../controllers/sobreController');

router.get('/', homeController.getHome);
router.get('/sobre', sobreController.getSobre);

module.exports = router;