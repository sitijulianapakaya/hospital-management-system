const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patient',
        required: true,
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctor',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    // Tambahkan field lain sesuai kebutuhan
});

module.exports = Appointment = mongoose.model('appointment', AppointmentSchema);

