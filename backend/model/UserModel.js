const {model} =require ("mongoose");

const {UserSchema}= require('../schema/UserSchema');

const UserModel=new model("user", UserSchema);

module.exports={UserModel};