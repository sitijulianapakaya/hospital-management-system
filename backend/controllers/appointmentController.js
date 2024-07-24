const Appointment = require('../models/Appointment');

exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Tambahkan fungsi lainnya untuk CRUD

