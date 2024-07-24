const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');

router.get('/', billingController.getBillings);

// Tambahkan route lainnya untuk CRUD

module.exports = router;

