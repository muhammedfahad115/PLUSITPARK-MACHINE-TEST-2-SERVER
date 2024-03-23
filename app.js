const express = require('express');
require('dotenv').config()
require('./config/config')()

const app = express();
const port = 5000;

app.listen(port,()=>{
    console.log(`Server is now running on port ${port}`)
})