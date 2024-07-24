const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.get('/', patientController.getPatients);

// Tambahkan route lainnya untuk CRUD

module.exports = router;

