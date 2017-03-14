angular.module("newsApp").controller('authCtrl', function($scope,$window ,authService){

	
	authService.confirmLogin(function (res){
		var user=res.data;
		$scope.userLogued=user;
		$scope.userLogued.firstName= user.name.split(' ')[0];
	});
	

	$scope.logoutUser = function (){
		$scope.userLogued=null;
		authService.logOut()
	}

	$scope.closeMessage= function(){
		
		$scope.error=false;
	}

	$scope.login= function (credentials){
		authService.logUser(credentials,function(res){

			$window.location.href = '/panel';
		},function(res){
			$scope.errorTextAlert="El Email o la contraseña son incorrectos";
			$scope.error=true;
		});
	}		

	$scope.register= function (user){
		var date = new Date().toISOString().replace(/T.*/,'').split('-').reverse().join('-');
		user.regDate = date;
		authService.registerUser(user,function(res){
			$window.location.href = '/';			
		},function(res){
			$scope.errorTextAlert="El email ya se encuentra registrado";
			$scope.error=true;
		});
	}
	
	$scope.checkFields= function(){
		var passwordMatch= false;
		var email = false;
		var name= false
		var password = false

		if ($scope.user.password==$scope.repeatPassword) {		
			passwordMatch=true;
			$('#password-label').hide()	
		}
		else{
			password=false;
			$('#password-label').show()
		}

		if ($scope.user.email==null || $scope.user.email.length==0) {
			email=false;
		} else { email=true; }

		if ($scope.user.name==null || $scope.user.name.length==0) {
			name=false;
		} else { name=true; }

		if ($scope.user.password==null || $scope.user.password.length==0) {
			password=false;
		} else { password=true; }


		if (password && email && name) {
			$('#field-label').hide();
		} else { $('#field-label').show(); }

		if (password && email && name && passwordMatch) {
			$('#regButton').prop('disabled',false);
		} else { $('#regButton').prop('disabled',true); }

			
	}
});