const mongoose=require("mongoose");

const commentSchema=mongoose.Schema({
    username:{type:String,require:true},
    projectId:{type:mongoose.Schema.Types.ObjectId,ref:"Project",require:true},
    comment:{type:String,require:true},
    time:{type:Date,require:true}
});



module.exports=mongoose.model("Comment",commentSchema);