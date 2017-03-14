'use strict';
var express = require('express');
var router = express.Router();
var News = require('../models/news');



/*Noticias*/
router.get('/news',function(req,res){
	News.find(function (error,news) {
		if (error) {
			res.status(500);
		}
		else {
			res.json(news);
		}
	})	
});

router.get('/news/:id',function(req,res){
	News.findById({_id:req.params.id},function (error,news) {
		if (error) {
			res.status(500);
		}
		else {
			res.json(news);
		}
	})	
});

router.post('/news',function(req,res){
	var news= req.body;
	News.create(news,function(error,news){
		if (error) {
			return res.status(500);
		}
		res.json({"message":"news created"})
	});
			
});

router.put('/news/',function(req,res){
	var news= req.body;
	var id = news._id;
	News.findByIdAndUpdate(id,news,function(error,news){
		if (error) {
			return res.status(500);
		}
		res.json({"message":"news updated"})
	});
		
});

router.delete('/news/:id',function(req,res){
	var id= req.params.id;
	News.findByIdAndRemove(id,function(error,news){
		if (error) {
			return res.status(500);
		}
		res.json({"message":"news removed"})
	});
		
});

module.exports = router;