const mongoose = require("mongoose");


const gongfalibSchema = mongoose.Schema({
  year: {
    type:String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  department: {
    type: String,
    require: true
  },
  writer: {
    type: String,
    require: true
  },
  
  techField: {
    type: String,
    require: true
  },
  
  summary: {
    type: String,
    require: true
  },
  class: {
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


module.exports = mongoose.model("Gongfalib", gongfalibSchema);
