const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    // Tambahkan field lain sesuai kebutuhan
});

module.exports = Patient = mongoose.model('patient', PatientSchema);

