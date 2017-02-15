
angular.module("newsApp").controller('newsCtrl', function($scope, dataService){
	
	$scope.newsSelected=false;

	dataService.getNews(function(res){
			$scope.newsArray=res.data;
		});
	

 	$scope.addNews= function(news){
 		if ($scope.newsArray.indexOf(news._id)==-1) {
 			$scope.newsArray.unshift(news);

 		}
 		else{

 		}
 		$scope.create=false;
 		
 	}

 	$scope.createNews= function(){
 		$scope.editing=true;
 		$scope.create=true;
		$scope.selectedNews={};		

 	}


 	$scope.deleteNews =function (news, $index){
 		$scope.newsArray.splice($index, 1)
 		dataService.deleteNews(news);

 	}

 	$scope.saveEditedNews = function(){
 		for(var prop in $scope.selectedNews) {
 			$scope.originalNews[prop]=$scope.selectedNews[prop];
 			$scope.editing=false;
 			$scope.preview=false;
 		}
 	}

 	$scope.viewNews= function(news,$index){
 		$scope.selected = true;
 		$scope.news= $scope.newsArray[$index];
 	}

 	$scope.editNews= function(news, $index){
 		$scope.editing =true;
 		$scope.manageNews = false;
 		$scope.originalNews = $scope.newsArray[$index];
 		$scope.selectedNews =  Object.assign({}, $scope.originalNews);

 	}

 });