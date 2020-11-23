const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check } = require('express-validator');

router.post('/',
    [
        check('name', 'El nom es obligatori').not().isEmpty(),
        check('email', 'Email no vàlid').isEmail(),
        check('password', 'El password ha de tenir mínim 6 caracters').isLength({min: 6})
    ],
    userController.newUser
);

module.exports = router;
