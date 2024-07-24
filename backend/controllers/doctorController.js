const Doctor = require('../models/Doctor');

exports.getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Tambahkan fungsi lainnya untuk CRUD

