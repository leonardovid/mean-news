'use strict';
var express = require('express');
var router = express.Router();
var User = require('../models/users');

/*Usuarios*/

router.get('/users',function(req,res){
	User.find(function (error,users) {
		if (error) {
			res.status(500);
		}
		else {
			res.json(users);
		}
	})	
});

router.put('/users/',function(req,res){
	var user = req.body;
	var id = user._id;
	User.findByIdAndUpdate(id,user,function(error,user){
		if (error) {
			return res.status(500);
		}
		res.json({"message":"user updated"})
	});
		
});

router.put('/users/savePassword',function(req,res){
	var credentials = req.body;
	User.changePassword(credentials.email,credentials.oldPassword,credentials.newPassword,function(error,user){	
		if (error || !user) {
			var error = new Error ("El email o contraseña son erroneos")
			return next(error);
		} else {
			
			
			res.json({"message":"user logued"})
		}	
			
	});
});

router.delete('/users/:id',function(req,res){
	var id= req.params.id;
	User.findByIdAndRemove(id,function(error,news){
		if (error) {
			return res.status(500);
		}
		res.json({"message":"user removed"})
	});
		
});

/*Autentificacion*/

router.post('/register', function(req, res){
	var user = req.body;
	User.create(user,function(error,user){
		if (error) {
			return res.status(500);
		}
		req.session.userId = user._id;
		return res.redirect('/');
	});
	
});

router.post('/login',function (req, res, next) {

	var credentials = req.body;
	if (credentials.email && credentials.password) {
		User.authenticate(credentials.email,credentials.password,function(error,user){	

			if (error || !user) {
				var error = new Error ("El email o contraseña son erroneos")
				return next(error);
			} else {
				req.session.userId = user._id;
				
				res.json({"message":"user logued"})
			}				
		});
	} else {
		var error = new Error("Email y contraseña requeridos");
		return next(error);
	}
		
});



router.post('/confirm-login',function(req, res){
	if (req.session.userId) {
		User.findById({_id:req.session.userId},function (error,user) {
		if (error) {
			res.status(500);
			
		}
		else {
			res.json(user);
		}
	})	
	}
});

router.get('/logout',function(req, res){
	if (req.session) {
		req.session.destroy();
	}
	return;
});

module.exports = router;