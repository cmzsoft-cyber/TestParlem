const Product = require('../models/Product');
const User = require('../models/User');
const { validationResult } = require('express-validator');

exports.newProduct = async (req, res) => {   

    // Check Errors
    // Show error message Express Validator
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    } 

    // Create a new Product
    let product = await Product(req.body);
    
    try {
        product.save();
        res.json({msg: 'Nou producte creat', product })
    } catch (error) {
        console.log(error);
        res.status(500).send('Error newProduct');
    }
}

exports.getProductsByCustomerID = async (req, res) => {     

    // get all products by customer id

    try {

        let products = await Product.find({ customerId: req.params.customerid }).sort({soldAt: -1});;      
        res.json({products})   
        
    } catch (error) {
        console.log(error);       
        res.status(500).send('Error getProductsByCustomerID'); 
    }    

}