const mongoose = require('mongoose');
require('dotenv').config({ path: 'environmentvars.env'});

const connectDB = async () => {
    try {
        await mongoose.connect( process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        } );
        console.log('DB Conected');
    } catch (error) {
        console.log('Connection DB Error');
        console.log(error);
        process.exit(1); 
    }
}

module.exports = connectDB;