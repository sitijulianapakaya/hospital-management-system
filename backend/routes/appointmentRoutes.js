const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

router.get('/', appointmentController.getAppointments);

// Tambahkan route lainnya untuk CRUD

module.exports = router;

