var mongoose = require('mongoose');

var QueSchema = new mongoose.Schema({
  question : String,
  answer : String,
  a : String,
  b : String,
  c : String,
  d : String, 
});

module.exports = mongoose.model('Que', QueSchema);