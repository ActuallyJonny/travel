const express = require('express');
const router = express.Router();

const { browse, byId } = require('../controllers/hotel');

router.get('/browse', browse);
router.get('/:id', byId);

module.exports = router;
