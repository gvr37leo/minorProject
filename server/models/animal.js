var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schema = new Schema({
  name: String,
  imageURL:String,
  tribe:String,
  question:[
      {
          posX:Number,
          posY:Number,
          question:String,
          answers:[String],
          correctAnswer:Number
      }
  ]
})

var Animal = mongoose.model('animal', schema);
module.exports = Animal