const Billing = require('../models/Billing');

exports.getBillings = async (req, res) => {
    try {
        const billings = await Billing.find();
        res.json(billings);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Tambahkan fungsi lainnya untuk CRUD

