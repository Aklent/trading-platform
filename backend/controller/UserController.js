require ("dotenv").config();
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

const {UserModel}=require ("../model/UserModel");

//for registering new user 
module.exports.register=async(req,res)=>{
    try{
        console.log(req.body);
        const existingUser=await UserModel.findOne({email:req.body.email});
        if(existingUser){
            return res.status(400).json({error:"Email already exists"});
        }
        const hashPass=await bcrypt.hash(req.body.password,10);
        
        const newUser=new UserModel({
            username: req.body.username,
            email: req.body.email,
            password: hashPass,
        });
        await newUser.save();

        const token= jwt.sign({email:newUser.email},process.env.secret);
        res.status(200).json({token});
    }catch(error){
        res.status(500).json({error:"Internal server error"});
    }
};
module.exports.login=async(req,res)=>{
    try{
        const user= await UserModel.findOne({email:req.body.email});
        if(!user){
            return res.status(401).json({error:"Invalid credentials"});
        }
        const PassMatch= await bcrypt.compare(req.body.password,user.password);
        if(!PassMatch){
            return res.status(401).json({error:"Incorrect Password"});
        }
        const token =jwt.sign({email:user.email},process.env.secret);
        res.status(200).json({token});
    }catch(error){
        res.status(500).json({error:"Internal server error"});
    }
};
