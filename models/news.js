const mongoose = require("mongoose");


const newsSchema = mongoose.Schema({
  title: {
    type:String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  
  writer: {
    type: String,
    require: true
  },
  
 
  
  
  
  attachment: {
    type: String,
    require: true
  },
  createOn: {
    type: Date
  },
  modifyOn: {
    type: Date
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true
  }, 

  enableFlag:{
    type:String,        
    default:'Y'
},
});


module.exports = mongoose.model("news", gongfalibSchema);
