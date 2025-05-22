const mongoose=require("mongoose");
const validator=require("validator");
const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:4,
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
               throw new Error("email invalid");

            }
        }
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        min:18,
    },
    gender:{
        type:String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("gender is not valid");
            }
        }
    },
    about:{
        type:String,
        default:"this is default",
    }

},{
    timestamps:true
})
module.exports=mongoose.model("user",userSchema);
