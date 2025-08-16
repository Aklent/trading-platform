const {model} = require ("mongoose");

const{PositionsSchema}= require ('../schema/PositionsSchema');

const PositionsModel =model("positions",PositionsSchema)

module.exports={PositionsModel};