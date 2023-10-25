const mongoose=require("mongoose");

const custSchema = new mongoose.Schema({
     firstname:{
        type:String,
        required:true
     },
     lastname:{
        type:String,
        required:true
     },
     phone:{
        type:Number,
        required:true,
        unique:true
     },
     email:{
        type:String,
        required:true,
        unique:true
     },
     passward:{
        type:Number,
        required:true,
        unique:true
     },
     gender:{
        type:String,
        required:true
     }
})

const Register = new mongoose.model("register",custSchema);
module.exports = Register;