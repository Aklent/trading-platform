const {model}= require ("mongoose");

const {HoldingsSchema} = require ('../schema/HoldingsSchema');

const HoldingsModel =model("holding",HoldingsSchema)

module.exports={HoldingsModel};