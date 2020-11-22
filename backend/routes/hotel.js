const express = require('express');
const router = express.Router();

const { browse, byId, rooms, card } = require('../controllers/hotel');

router.get('/browse', browse);
router.get('/:id', byId);
router.get('/rooms/:id', rooms)
router.get('/card/:id', card)

module.exports = router;
