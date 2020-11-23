const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');

// POST New Customer
router.post('/',
    [
        check('docType', 'El tipus de document es obligatori').not().isEmpty(),
        check('docNum', 'El número de document es obligatori').not().isEmpty(),
        check('email', 'Email no vàlid').isEmail(),
        check('customerId', 'El nº de client es obligatori').not().isEmpty().isNumeric(),     
        check('givenName', 'El nom del client es obligatori').not().isEmpty(),
        check('familyName1', 'El nom de familia es obligatori').not().isEmpty(),
        check('phone', 'El teléfon es obligatori').not().isEmpty(), 
    ],
    auth,
    customerController.newCustomer
);

// GET all customers
router.get('/', 
    auth,
    customerController.getCustomers
)


module.exports = router;