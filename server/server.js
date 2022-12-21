const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute.js');
const Connection = require('./database/db.js');
const cors = require('cors');
const bodyParser = require('body-parser');

 dotenv.config();
 const app = express();
 app.use(cors());
 app.use(bodyParser.json({extended : true}));
 app.use(bodyParser.urlencoded({extended: true}));

 app.use('/user', userRoute);
 
 const PORT = 8000; 
 app.listen(PORT, ()=> console.log(`server is running successfully on port ${PORT}`));
 const username = process.env.DB_USERNAME;
 const password = process.env.DB_PASSWORD;
 Connection(username, password);