angular.module("newsApp").service('dataService',  function($http){
	
	this.getNews = function(callback){
		$http.get('mock/news.json')
		.then(callback);
	};
	
	this.deleteNews = function(news){

	}

	this.saveNews = function(){

	}
});