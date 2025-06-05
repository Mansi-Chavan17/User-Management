const express=require("express")
const userModel = require("../models/user.model")

const addUser = async(req, res) => {
    try {
        const profile = new userModel(req.body)
        const save = await profile.save()
        res.status(201).json({msg: "profile added successfully"})
    } catch(err) {
        console.log(err)
        res.status(500).json({
            msg: "error while creating profile",
            error: err.message  // This will provide more specific error details
        })
    }
}

const getUser=async(req,res)=>{
    try{
        const profile=await userModel.find()
        res.status(200).json({msg:"profile",profile})
    }catch(err){
        console.log(err)
        res.status(500).json({msg:"error while getting profile"})

    }
}

module.exports={addUser,getUser}