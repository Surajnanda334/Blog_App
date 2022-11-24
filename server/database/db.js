
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connection=async()=>{
   
    try{
        await mongoose.connect(process.env.DB_URL,{useNewUrlParser:true});
        console.log('MongoDB connected sucessfully');
    }catch(error){
        console.error('Error in connecting MongoDB',error);
    }
}
export default connection;