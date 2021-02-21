const mongoose=require("mongoose");
const uniqueValidator=require("mongoose-unique-validator")

const userSchema=mongoose.Schema({
   
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    userType:{
        type:String,
      
        default:'user'
    },
    date:{
        type:Date,       
        default:Date.now()
    },
    enableFlag:{
        type:String,        
        default:'Y'
    },


});

userSchema.plugin(uniqueValidator);

module.exports=mongoose.model("User",userSchema);
