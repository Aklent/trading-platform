const {Schema} = require ("mongoose");

const UserSchema = new Schema({
    username:String,
    email:String,
    password:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"order",
        },
    ],
});
module.exports={UserSchema};