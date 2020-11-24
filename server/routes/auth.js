const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');

router.post('/',
    [
        check('email', 'Agrega un email vàlid').isEmail(),
        check('password', 'Agrega el password vàlid').not().isEmpty()
    ],
    authController.autenticateUser
);

router.get('/',
    auth,
    authController.userAuth
);
    
module.exports = router;