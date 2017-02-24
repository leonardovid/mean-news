angular.module("newsApp").controller('newsCtrl', function($scope, $routeParams ,dataService){



	dataService.getNews(function(res){
			$scope.newsArray=res.data;
			id = $routeParams.id;
			if (id!=null) {
	 			$scope.news= $scope.newsArray[id];
	 			}
		});

	
	$scope.showListNewsToEdit= function(){
		$scope.editing=false;
 		$scope.preview=false;
 		$scope.listNews=true;
	}

	$scope.showNewsToEdit= function(){
		$scope.editing=true;
 		$scope.listNews=false;
 		$scope.preview= false;
	}

	$scope.showCreateNews= function(){
		$scope.listNews=false;
		$scope.editing=true;
	 	$scope.create=true;
	 	$scope.selectedNews={};	
	}

	 	$scope.previewNews = function(){
 		$scope.preview=true;
 	}

 	$scope.addNews= function(news){
 		if ($scope.newsArray.indexOf(news._id)==-1) {
 			$scope.newsArray.unshift(news);
 		}
 		else{

 		}
 		$scope.showCreateNews();
 		
 	}

 	$scope.deleteNews =function (news, $index){
 		$scope.newsArray.splice($index, 1)
 		dataService.deleteNews(news);

 	}

 	$scope.saveEditedNews = function(){
 		for(var prop in $scope.selectedNews) {
 			$scope.originalNews[prop]=$scope.selectedNews[prop];
 			$scope.showListNewsToEdit();
 		}
 	}


 	$scope.editSelectedNews= function(news, $index){
 		$scope.showNewsToEdit();
 		$scope.originalNews = $scope.newsArray[$index];
 		$scope.selectedNews =  Object.assign({}, $scope.originalNews);
 		

 	}

 	$scope.goBackFrom= function(from){
		if (from == 'preview') {
			$scope.preview=false;
		}
		if (from == 'editing') {
			$scope.showListNewsToEdit();
		}
		if (from== 'view') {
			$scope.selected=false;
		}

	}
});