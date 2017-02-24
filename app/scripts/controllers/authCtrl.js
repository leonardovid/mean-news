angular.module("newsApp").controller('authCtrl', function($scope,$interval ,authService){
	
	
	$scope.userLogued = authService.logued();

	$scope.logoutUser = function (){
		$scope.userLogued=null;
	}

	
	
	
});