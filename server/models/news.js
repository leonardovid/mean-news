'use strict';

var mongoose= require('mongoose');

var newsSchema = new mongoose.Schema({
	title:String,
	subtitle:String,
	content:String,
	author:String,
	date:String,	
});

var newsModel = mongoose.model('News',newsSchema);

module.exports = newsModel;