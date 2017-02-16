
angular.module("newsApp").controller('mainCtrl', function($scope, authService,dataService){
	
	$scope.template =
	    { news: 'templates/news.html',
	      auth:'templates/auth.html',
		  partials:{
		  	header:'templates/partials/header.html',
			footer:'templates/partials/footer.html'
		  },		  
		  panel:'templates/panel.html',
		  panelPartials:{
		  	manageNews:'templates/control-panel/manageNews.html',
		  	manageUsers: 'templates/control-panel/manageUsers.html'
		  }
	};

	$scope.currentTemplate= $scope.template.news; 

	$scope.changeCurrentTemplate = function(page){
		$scope.currentTemplate= $scope.template[page];
		
	}

	

	/*Noticias*/

	$scope.newsSelected=false;

	dataService.getNews(function(res){
			$scope.newsArray=res.data;
		});
	
	$scope.showListNewsToEdit= function(){
		$scope.editing=false;
 		$scope.preview=false;
 		$scope.listNews=true;
	}

	$scope.showNewsToEdit= function(){
		$scope.editing=true;
 		$scope.listNews=false;
 		$scope.preview= false;
	}

	$scope.showCreateNews= function(){
		$scope.listNews=false;
		$scope.editing=true;
	 	$scope.create=true;
	 	$scope.selectedNews={};	
	}

	 	$scope.previewNews = function(){
 		$scope.preview=true;
 	}

 	$scope.addNews= function(news){
 		if ($scope.newsArray.indexOf(news._id)==-1) {
 			$scope.newsArray.unshift(news);
 		}
 		else{

 		}
 		$scope.showCreateNews();
 		
 	}

 	$scope.deleteNews =function (news, $index){
 		$scope.newsArray.splice($index, 1)
 		dataService.deleteNews(news);

 	}

 	$scope.saveEditedNews = function(){
 		for(var prop in $scope.selectedNews) {
 			$scope.originalNews[prop]=$scope.selectedNews[prop];
 			$scope.showListNewsToEdit();
 		}
 	}

 	$scope.viewNews= function(news,$index){
 		$scope.selected = true;
 		$scope.news= $scope.newsArray[$index];
 	}

 	$scope.editSelectedNews= function(news, $index){
 		$scope.showNewsToEdit();
 		$scope.originalNews = $scope.newsArray[$index];
 		$scope.selectedNews =  Object.assign({}, $scope.originalNews);
 		

 	}

 	$scope.goBackFrom= function(from){
		if (from == 'preview') {
			$scope.preview=false;
		}
		if (from == 'editing') {
			$scope.showListNewsToEdit();
		}

	}

	$scope.changePanel= function(panel,option){
		$scope.activePanel = $scope.template.panelPartials[panel];
		if(option == 'create' ){
			$scope.showCreateNews();
		}
		if (option == 'edit') {
			$scope.showListNewsToEdit();
		}
		if (option== 'user') {
			$scope.manageUsers=true;
		}
		
	}

	/*Usuarios*/

	authService.getUsers(function(res){
			$scope.users=res.data;
			$scope.userLogued = $scope.users[0];
	});	

	$scope.logoutUser = function (){
		$scope.userLogued=null;
	}

	$scope.createUser= function(){}

	$scope.deleteUser= function(){}

	$scope.changeUserType= function(user, option){
		if (option == "promote") {
			user.type="author";
		}
		if (option == "demote") {
			user.type="user";
		}

	}

	
	
});