const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    // Tambahkan field lain sesuai kebutuhan
});

module.exports = Doctor = mongoose.model('doctor', DoctorSchema);

