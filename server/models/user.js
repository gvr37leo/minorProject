var mongoose = require('mongoose')
var Schema = mongoose.Schema

var schema = new Schema({
  name: String,
  xp: Number,
  discoverys: [Schema.Types.ObjectId],
  password: String
})

var User = mongoose.model('user', schema);
module.exports = User