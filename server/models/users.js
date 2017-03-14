'use strict';

var mongoose= require('mongoose');
var bcrypt= require('bcrypt');

var userSchema = new mongoose.Schema({
	email:{	type:String, unique:true, required:true, trim:true},
	name:{	type:String, required:true, trim:true},
	type:{	type:String, required:true, trim:true, default:'user'},
	regDate: {	type:String, required:true},
	password:{	type:String, required:true, trim:true}
	
})

/*Autentifica al usuario*/
userSchema.statics.authenticate= function(email, password, callback){
	userModel.findOne({ email:email }).exec(function(error,user){
		if (error) {
			return callback(error);
		} else if (!user){
			var err = new Error('Usuario no encontrado');
			err.status = 401;
			return callback(err);
		}
		bcrypt.compare(password, user.password, function (error, result) {
			if (result===true) {
				return callback(null,user);
			}
			else {
				return callback();
			}
		});
	})
}

userSchema.statics.changePassword= function(email, password, newPassword, callback){
	userModel.findOne({ email:email }).exec(function(error,user){
		if (error) {
			return callback(error);
		} else if (!user){
			var err = new Error('Usuario no encontrado');
			err.status = 401;
			return callback(err);
		}
		
		bcrypt.compare(password, user.password, function (error, result) {
			if (result===true) {
				bcrypt.hash(newPassword,10,function (error, hash) {
					if (error) {
						return next(error);
					}else{
						user.password = hash;
						userModel.findByIdAndUpdate(user.id,user,function(error,user){
							if (error) {
								return callback(error);
							}
							else return callback(null,user);
						});
					}
				});
				
			};
		});
	})
}


/*Encripta la contraseña antes de guardarla*/
userSchema.pre('save',function (next) {
	var user = this;
	bcrypt.hash(user.password,10,function (error, hash) {
		if (error) {
			return next(error);
		}
		user.password = hash;
		next();
	});
});

var userModel = mongoose.model('Users',userSchema);



module.exports = userModel;