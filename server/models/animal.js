var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schema = new Schema({
  name: String,
  imageURL:String,
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