'use strict';
var express = require('express');
var router = express.Router();
var News = require('../models/news');



/*Noticias*/
router.get('/news',function(req,res){
	var pageOptions = {
    page: req.query.page || 0,
    limit: 9
	}

	News.find()
    .skip(pageOptions.page*pageOptions.limit)
    .limit(pageOptions.limit)
    .sort({_id: -1})
    .exec(function (err, news) {
        if(err) { res.status(500).json(err); return; };
        res.status(200).json(news);
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