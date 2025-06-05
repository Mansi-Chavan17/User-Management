const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    Role:{type:String,required:true},
    image:{type:String},
    linkedIn:{type:String},
    twitter:{type:String}
})

const userModel=new mongoose.model("User",userSchema)


module.exports=userModel