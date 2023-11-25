const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

dotenv.config({path:'./config.env'});

app.use(express.json());
app.use(cookieParser());
app.use(require('./router/auth'));  // Linking the routes/router file

const PORT = process.env.PORT || 3000;

//Middleware
// const middleware = (req,res,next) => {
//     next();
// }

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})