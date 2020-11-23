const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new mongoose.Schema({
    docType : {
        type: String,
        required: true,
        trim: true
    },
    docNum : {
        type: String,
        required: true,
        trim: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    customerId : {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    givenName: {
        type: String,
        required: true,
        trim: true
    },
    familyName1: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Customer', customerSchema);