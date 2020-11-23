const Customer = require('../models/Customer');
const { validationResult } = require('express-validator');

exports.newCustomer = async (req,res) => {   

    // Check Errors
    // Show error message Express Validator
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    // Verify if Customer registered
    const { email, customerId, phone } = req.body;
    let customer = await Customer.find({$or: [{ email: email}, { customerId: customerId}, { phone: phone}]})        

    if(customer.length > 0){
        return res.status(400).json({msg:"Aquest client ja existeix"});
    }
    
    // Create a new Customer
    customer = await new Customer(req.body);

    try {
        customer.save();
        res.json({msg: 'Nou client creat', customer })
    } catch (error) {
        console.log(error);
        res.status(500).send('Error getCustomers');
    }

}

exports.getCustomers = async (req, res) => {

    // Get all customers
    try {

        let customers = await Customer.find().sort({created: -1});
        res.json({customers})
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Error getCustomers');
    }

}