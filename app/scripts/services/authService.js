angular.module("newsApp").service('authService',  function($http){
	

	this.confirmLogin = function(callback){
		$http.post('/api/confirm-login')
		.then(callback);
	}

	this.registerUser = function(user,callback){
		$http.post('/api/register',user)
		.then(callback);
	}

	this.logUser= function(credentials,callback){
		$http.post('/api/login',credentials).then(callback);
		
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

	this.savePassword= function (credentials){
		$http.put('/api/users/savePassword',credentials);
	}


});