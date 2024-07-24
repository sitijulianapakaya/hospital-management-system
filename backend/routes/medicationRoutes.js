const express = require('express');
const router = express.Router();
const medicationController = require('../controllers/medicationController');

router.get('/', medicationController.getMedications);

// Tambahkan route lainnya untuk CRUD

module.exports = router;

