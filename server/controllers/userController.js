const User = require('../models/User');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

exports.newUser = async (req,res) => {    
    
    // Check Errors
    // Show error message Express Validator
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    // Verify that user registered
    const { email, password } = req.body;
    let user = await User.findOne({email});

    if(user){
        return res.status(400).json({msg:"Aquest usuari ja està registrat"});
    }

    // Create new user
    user = await new User(req.body);
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    try {
        user.save();
        res.json({msg: 'Usuari creat correctament'});
    } catch (error) {
        console.log(error);
        res.status(500).send('Error newUser');
    }
}