
angular.module("newsApp").controller('mainCtrl', function($scope){
	
	$scope.template =
	    { news: 'templates/news.html',
		  partials:{header:'templates/partials/header.html',
				  footer:'templates/partials/footer.html'},
		  user:'templates/user.html',
		  author:'templates/author.html',
		  admin:'templates/admin.html',
		};

	$scope.currentTemplate = $scope.template.news;

	$scope.changeCurrent = function(template){
		$scope.currentTemplate= $scope.template[template];
	};
	
	

});