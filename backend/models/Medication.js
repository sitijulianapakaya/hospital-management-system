const mongoose = require('mongoose');

const MedicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dosage: {
        type: String,
        required: true,
    },
    // Tambahkan field lain sesuai kebutuhan
});

module.exports = Medication = mongoose.model('medication', MedicationSchema);

