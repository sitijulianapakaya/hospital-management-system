const Medication = require('../models/Medication');

exports.getMedications = async (req, res) => {
    try {
        const medications = await Medication.find();
        res.json(medications);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Tambahkan fungsi lainnya untuk CRUD

