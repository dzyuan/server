const mongoose=require("mongoose");
const uniqueValidator=require("mongoose-unique-validator")

const userSchema=mongoose.Schema({
    username:{type:String,require:true,unique:true},
  
    password:{type:String,require:true},
    userType:{type:String,defult:'user'},
});

userSchema.plugin(uniqueValidator);

module.exports=mongoose.model("User",userSchema);
