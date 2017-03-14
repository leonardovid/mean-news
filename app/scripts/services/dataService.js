angular.module("newsApp").service('dataService',  function($http){
	
	/*Noticias*/
	this.getNews = function(callback,page){
		$http.get('/api/news?page='+page)
		.then(callback);
	};

	this.getNewsById = function(callback,id){
		$http.get('/api/news/'+id)
		.then(callback);
	};

	this.editNews = function(news){
		$http.put('/api/news/',news);
	}
	
	this.deleteNews = function(id){
		$http.delete('/api/news/'+id);
	}

	this.saveNews = function(news){
		$http.post('/api/news',news);
	}


	/*Usuarios*/

	this.getUsers = function(callback){
		$http.get('/api/users')
		.then(callback);
	}
	
	


});