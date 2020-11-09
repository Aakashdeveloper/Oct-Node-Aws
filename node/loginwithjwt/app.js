const express = require('express');
const app = express();
const db = require('./db');
const port = 5000;

var AuthController = require('./auth/AuthController');
app.use('/api/auth',AuthController);

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})