const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path:'./config.env'});

// app config
const app = express();
const port = process.env.PORT;
// middlewares

// db config
require('./db/db_con');
// const User = require('./model/userSchema');
app.use(express.json());
// api endpoints
app.use(require('./router/auth'));


// listener
app.listen(port, () => {
    console.log(`server is running ${port}`)
})