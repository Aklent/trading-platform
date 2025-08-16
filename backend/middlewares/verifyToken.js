require("dotenv").config();
const jwt=require("jsonwebtoken");

const verifyToken=(req,res,next)=>{
    const token=req.headers["authorization"];
    if(!token){
        return res.status(401).json({error:"Needs Token"});
        }
    jwt.verify(token,process.env.secret,(err,decoded)=>{
        if(err){
            return res.status(401).json({error:"Unauthorized"});
        }
        req.user=decoded;
        next();
    });
    };
module.exports={verifyToken};