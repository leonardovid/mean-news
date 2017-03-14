angular.module("newsApp").controller('panelCtrl', function($scope,authService){	
	
	authService.confirmLogin(function (res){
		var user=res.data;
		$scope.userLogued=user;
	});

	$scope.template =
	    {manageNews:'templates/control-panel/manageNews.html',
	  	manageUsers: 'templates/control-panel/manageUsers.html',
	  	managePassword:'templates/control-panel/managePassword.html',
	  	manageProfile:'templates/control-panel/manageProfile.html'  
	};


	$scope.activePanel = $scope.template.manageProfile;

	$scope.changePanel= function(panel){
		$scope.activePanel = $scope.template[panel];
		
		
	}
});