angular.module("newsApp").service('dataService',  function($http){
	
	this.getNews = function(callback){
		$http.get('/api/news')
		.then(callback);
	};
	
	this.deleteNews = function(news){

	}

	this.saveNews = function(){

	}

	this.getUsers = function(callback){
		$http.get('/api/users')
		.then(callback);
	};
	
	this.deleteUser = function(news){

	}

	this.saveUser = function(){

	}
});