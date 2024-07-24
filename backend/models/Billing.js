const mongoose = require('mongoose');

const BillingSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patient',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    // Tambahkan field lain sesuai kebutuhan
});

module.exports = Billing = mongoose.model('billing', BillingSchema);

