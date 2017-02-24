'use strict';
var express = require('express');

var router = express.Router();
var news = require('../../mock/news.json');
var users = require('../../mock/users.json');

router.get('/news',function(req,res){
	res.json(news);
})

router.get('/users',function(req,res){
	res.json(users);
})

module.exports = router;