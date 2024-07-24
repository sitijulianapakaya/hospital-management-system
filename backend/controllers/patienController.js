const Patient = require('../models/Patient');

exports.getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Tambahkan fungsi lainnya untuk CRUD

