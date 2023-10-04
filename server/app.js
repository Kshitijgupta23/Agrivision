const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');
//const User = require('./model/userSchema');
const PORT = process.env.PORT || 3000;

//Middleware
// const middleware = (req,res,next) => {
//     next();
// }

app.get("/", (req,res) => {
    res.send("Hello World");
});

app.get("/register", (req,res) => {
    res.send("Hello Wor");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})