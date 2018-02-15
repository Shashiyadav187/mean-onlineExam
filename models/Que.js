import { String } from 'core-js/library/web/timers';

var mongoose = require('mongoose');

var QueSchema = new mongoose.Schema({
  question : String,
  answer : String,
  options : {
     a : String,
     b : String,
     c : String,
     d : String,
     },
});

module.exports = mongoose.model('Que', QueSchema);