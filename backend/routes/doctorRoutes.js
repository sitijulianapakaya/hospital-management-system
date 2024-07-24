const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.get('/', doctorController.getDoctors);

// Tambahkan route lainnya untuk CRUD

module.exports = router;

