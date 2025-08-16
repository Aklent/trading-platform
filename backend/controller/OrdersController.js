const {OrdersModel} =require ("../model/OrdersModel");
const {UserModel}=require("../model/UserModel");

module.exports.create=async(req,res)=>{
    let newOrder= new OrdersModel({
        name:req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    let savedOrder= await newOrder.save();

    await UserModel.updateOne({email:req.user.email},{$push: {orders:savedOrder._id}});
    res.json({status:"Done!"});
};
module.exports.index=async(req,res)=>{
    let user= await UserModel.findOne({email:req.user.email}).populate("orders");
    res.json(user.orders);

};