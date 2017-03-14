angular.module("newsApp").controller('profileCtrl', function($scope,$window,$compile,authService){

	authService.confirmLogin(function (res){
		var user=res.data;
		$scope.userLogued=user;
	});

	$scope.closeMessage= function(){
		$scope.success=false
		$scope.error=false;
	}

	$scope.savePassword = function(credentials){
		credentials.email= $scope.userLogued.email;
		authService.savePassword(credentials,function(res){
			//success callback
			$scope.successTextAlert = "La contraseña se a actualizado exitosamente";
	 		$scope.success = true;
		},function(res){
			//error callback
			$scope.errorTextAlert="La antigua contraseña no es correcta";
			$scope.error=true;
		});
	}

	$scope.closeAccount= function(){
		authService.deleteUser($scope.userLogued._id);
		$scope.userLogued=null;
		$scope.closeDialog();
		authService.logOut();
		$window.location.href="/";
	}

	$scope.closeDialog = function(){
 		$('#dialog').remove();

 	}

 	$scope.showDialog =function (id, $index){
 		var divDialog = $('<div id="dialog" class="panel panel-danger text-center"></div>');
 		var h2= '<h3>¿Esta seguro que desea Cerrarla?</h3>';
 		var buttonConfirm = $('<button class="btn btn-success">Confirmar</button>');
 		buttonConfirm.attr("ng-click","closeAccount()");
 		var buttonCancel = $('<button class="btn btn-primary">Cancelar</button>');
 		buttonCancel.attr("ng-click","closeDialog()");

 		divDialog.append(h2);
 		divDialog.append(buttonConfirm);
 		divDialog.append(buttonCancel);

 		var compiledDialog = $compile(divDialog)($scope); 
 		$('body').append(compiledDialog);
 		
 		
 	}

 	$scope.checkPasswords= function(credentials){
		var passwordMatch= false;
		var password = false

		if (credentials.newPassword==credentials.repeatPassword) {		
			passwordMatch=true;
			$('#password-label').hide()	
		}
		else{
			password=false;
			$('#password-label').show()
		}


		if (credentials.oldPassword==null || credentials.oldPassword.length==0) {
			password=false;
		} else { password=true; }


		if (password) {
			$('#field-label').hide();
		} else { $('#field-label').show(); }

		if (password && passwordMatch) {
			$('#changeButton').prop('disabled',false);
		} else { $('#changeButton').prop('disabled',true); }

			
	}
});