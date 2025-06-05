const express=require("express")
const { addUser, getUser } = require("../controllers/user.controller")

const userRouter=express.Router()

userRouter.post("/add-user",addUser)

userRouter.get("/get-user",getUser)

module.exports=userRouter