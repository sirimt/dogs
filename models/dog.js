var mongoose = require('mongoose');

//Dog Schema
var dogSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	age:{
		type: Number,
		required: true
	},
	temperament:{
		type: String,
		required: true
  }
});

var Dog = module.exports = mongoose.model('Dog', dogSchema);