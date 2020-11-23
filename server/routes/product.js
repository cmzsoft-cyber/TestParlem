const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');

router.post('/',
    [
        check('productName', 'El nom de producte es obligatori').not().isEmpty(),
        check('productTypeName', 'El tipus de producte es obligatori').not().isEmpty(),
        check('numeracioTerminal', 'El nº de terminal es obligatori').not().isEmpty(),
        check('soldAt', 'La data del producte es obligatoria').not().isEmpty().isDate(),
    ],
    auth,
    productController.newProduct
);

router.get('/:customerid',
    auth,
    productController.getProductsByCustomerID
);

module.exports = router;