angular.module("newsApp").service('authService',  function($http){
	
	this.getUsers = function(callback){
		$http.get('mock/users.json')
		.then(callback);
	};
	
	this.deleteUser = function(news){

	}

	this.saveUser = function(){

	}
});