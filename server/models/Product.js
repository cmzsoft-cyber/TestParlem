const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    productName : {
        type: String,
        required: true
    },
    productTypeName : {
        type: String,
        required: true
    },
    numeracioTerminal : {
        type: Number,
        required: true
    },
    soldAt : {
        type: Date,
        required: true
    },
    customerId : {
        type: mongoose.Schema.Types.String,
        ref: 'Customer',
        default: null
    }
});

module.exports = mongoose.model('Product', productSchema);