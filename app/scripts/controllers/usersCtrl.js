angular.module("newsApp").controller('usersCtrl', function($scope, authService,dataService){

    dataService.getUsers(function(res){
		var users = res.data;
		var fileteredUsers=[];
		for (var i = 0; i < users.length; i++) {
			if (users[i].type=='user'||users[i].type=='author') {
				fileteredUsers.push(users[i]);
			}
		}
		$scope.users= fileteredUsers;
	});

	$scope.changeUserType= function(user, option){
		if (option == "promote") {
			user.type="author";
		}
		if (option == "demote") {
			user.type="user";
		}
		authService.updateUser(user);

	}

	
});