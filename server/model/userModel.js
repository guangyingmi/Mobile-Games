const mongoose = require("mongoose");

const User = mongoose.model(
    "user",
    new mongoose.Schema({
        username:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required: true
        }
    })
)

module.exports.checkLogin = async params=>{
    return await User.find(params);
};