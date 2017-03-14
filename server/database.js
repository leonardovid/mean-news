'use strict';

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mean-news',function (error) {
	if (error) {
		console.log("mongoose fail to connect");
	}
});