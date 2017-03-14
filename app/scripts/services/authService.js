angular.module("newsApp").service('authService',  function($http){
	

	this.confirmLogin = function(callback){
		$http.post('/api/confirm-login').then(callback);
	}

	this.registerUser = function(user,callback,errorCallback){
		$http.post('/api/register',user).then(callback,errorCallback);
	}

	this.logUser= function(credentials,callback,errorCallback){
		$http.post('/api/login',credentials).then(callback,errorCallback);
		
	}

	this.logOut = function(callback){
		$http.get('/api/logout').then(callback);
	}

	this.updateUser = function(user){
		$http.put('/api/users',user);
	}

	this.deleteUser= function (userId){
		$http.delete('/api/users/'+userId);
	}

	this.savePassword= function (credentials,callback,errorCallback){
		$http.put('/api/users/savePassword',credentials).then(callback,errorCallback);
	}


});