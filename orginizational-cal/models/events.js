var mongoose = require('mongoose');
var schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost/test');

const Events = new Schema({
title:{
  type: String,
  required: true
},
Mirco:{
  type: String,
  unique: true
},
date:{
  type: Number,
  required: true
}
});

//string relates to name of this file(?)
var Event = mongoose.model("events", Events);

module.exports = Event;
