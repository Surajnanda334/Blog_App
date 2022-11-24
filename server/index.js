import express from 'express';
import connection from './database/db.js';
import dotenv from 'dotenv';

const app=express();
dotenv.config();

const PORT=8000;
app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));
connection();