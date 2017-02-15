
angular.module("newsApp").controller('mainCtrl', function($scope, authService, templateService){
	
	$scope.template=templateService.template;

	authService.getUsers(function(res){
			$scope.users=res.data;
			$scope.userLogued = $scope.users[2];
		});	


	$scope.currentTemplate = templateService.currentPage

	$scope.changeCurrentTemplate = function(page){
		$scope.currentTemplate= $scope.template[page];
		templateService.changePage(page);
	}

	$scope.changePanel= function(panel,option){
		$scope.activePanel = $scope.template.panelPartials[panel];
		if(option == 'create' ){
			$scope.manageNews=false;
			$scope.editing=true;
	 		$scope.create=true;
			$scope.selectedNews={};			
		}
		if (option == 'edit') {
			$scope.create=false;
			$scope.manageNews=true
			$scope.editing=false
		}
		
	};

	$scope.goBack= function(option){

	}

	$scope.logoutUser = function (){
		
		$scope.userLogued=null;
	}
});