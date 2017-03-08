'use strict';

var mongoose= require('mongoose');

var userSchema = new mongoose.Schema({
	name:String,
	lastname:String,
	type:String,
	subscriptions:{	economy:Boolean,
					international:Boolean,
					tech:Boolean,
					politics:Boolean,
					society:Boolean,
					sports:Boolean}
})

var userModel = mongoose.model('Users',userSchema);

module.exports = userModel;