const express = require('express');
const { createShortUrl, redirectUrl } = require('../controllers/urlController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/create', authenticate, createShortUrl);
router.get('/:shortId', redirectUrl);

module.exports = router;