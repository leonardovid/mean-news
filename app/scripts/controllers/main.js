angular.module("newsApp").controller('mainCtrl', function($scope){
	
	$scope.templates =
	    [{ name: 'news.html', url: 'templates/news.html'}];
	$scope.template = $scope.templates[0];
	console.log($scope.template);

});