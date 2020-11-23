const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Server create
const app = express();

console.log('Starting Node Parlem Test server...');

// Connect to DB
connectDB();

// Enable CORS
const optionCors = {
    origin: "http://localhost:3000" // Front End URL
}
app.use(cors(optionCors));

// Server Port
const port = process.env.PORT || 4000;

// Read body values
app.use(express.json());

// App Routes
app.use('/api/user', require('./routes/user'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/customer', require('./routes/customer'));
app.use('/api/product', require('./routes/product'));

// Launch Server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server started on port: ${port}`);
});