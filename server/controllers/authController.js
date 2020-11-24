const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env'});
const { validationResult } = require('express-validator');

exports.autenticateUser = async (req, res, next) => {    

    // Check Errors
    // Show error message Express Validator
    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

     // Find User if registered
     const { email, password } = req.body;
     const user = await User.findOne({email});    
     
     if(!user){
         res.status(401).json({msg: 'Aquest usuari no existeix'});
         return next();
     }

     // Check password and autenticate the user

    if(bcrypt.compareSync(password, user.password)){

        // User and password is correct then Creat JWT...
        const token = jwt.sign({
            id: user._id,
            name: user.name,
            email: user.email
        }, process.env.SECRET, {
            expiresIn: '8h'
        });

        res.json({token});

    }else{
        res.status(401).json({msg: 'Password incorrecte'});
        return next();
    }   

}

exports.userAuth = (req, res, next) => {   
    res.json({user: req.user } );
}