const mongoose = require("mongoose");


const projectSchema = mongoose.Schema({
  year: {
    type: String,
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
  leader: {
    type: String,
    require: true
  },
  startDate: {
    type: Date,
    require: true
  },
  completeDate: {
    type: Date,
    require: true
  },
  budget: {
    type: Number,
    require: true
  },
  techField: {
    type: Array,
    require: true
  },
  techSource: {
    type: Array,
    require: true
  },
  purpose: {
    type: String,
    require: true
  },
  implementation: {
    type: String,
    require: true
  },
  technology: {
    type: String,
    require: true
  },
  innovation: {
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
  status:{
type:String,
default:"edit"
  },
  comments: [{
    username: String,
    commentContent: String,
    createOn: Date
  }],
});


module.exports = mongoose.model("project", projectSchema);
