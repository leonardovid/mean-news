angular.module("newsApp").controller('panelCtrl', function($scope){	
	
	$scope.template =
	    {manageNews:'templates/control-panel/manageNews.html',
	  	manageUsers: 'templates/control-panel/manageUsers.html',
	  	manageSubscriptions:'templates/control-panel/manageSubscriptions.html'  
	};




	$scope.changePanel= function(panel){
		$scope.activePanel = $scope.template[panel];
		
		
	}
});