const mongoose=require("mongoose")
require('dotenv').config();

const MONGO_URL=process.env.MONGO_URL ||
"mongodb+srv://mansichavan1704:Mansi1704@cluster0.cdymrjk.mongodb.net/"



const connectToDB=async(req,res)=>{
    try{
        await mongoose.connect(MONGO_URL)
        console.log("mongoDb connect successfully")
    }catch(err){
        console.log(err)
    }
}

module.exports=connectToDB