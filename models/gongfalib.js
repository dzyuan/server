const mongoose = require("mongoose");


const gongfalibSchema = mongoose.Schema({
  year: {
    type: Number,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  department: {
    type: Array,
    require: true
  },
  writers: {
    type: Array,
    require: true
  },
  
  techField: {
    type: Array,
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
    type: Array,
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


module.exports = mongoose.model("gongfalib", gongfalibSchema);
