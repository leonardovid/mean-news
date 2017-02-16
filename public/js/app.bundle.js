webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {


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
			$scope.userLogued = $scope.users[2];
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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

angular.module("newsApp").directive('ngUserMenu', function() {
  return {
    restrict: 'A',
    templateUrl: 'templates/control-panel/user.html'
  }
});

angular.module("newsApp").directive('ngAuthorMenu', function() {
  return {
    restrict: 'A',
    templateUrl: 'templates/control-panel/author.html'
  }
});

angular.module("newsApp").directive('ngAdminMenu', function() {
  return {
    restrict: 'A',
    templateUrl: 'templates/control-panel/admin.html'
  }
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

angular.module("newsApp").service('authService',  function($http){
	
	this.getUsers = function(callback){
		$http.get('mock/users.json')
		.then(callback);
	};
	
	this.deleteUser = function(news){

	}

	this.saveUser = function(){

	}
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

angular.module("newsApp").service('dataService',  function($http){
	
	this.getNews = function(callback){
		$http.get('mock/news.json')
		.then(callback);
	};
	
	this.deleteNews = function(news){

	}

	this.saveNews = function(){

	}
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(2);
__webpack_require__(22);
__webpack_require__(21);

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var angular = __webpack_require__(1);
angular.module("newsApp", []);

__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(6);
__webpack_require__(5);






/***/ })
],[23]);
//# sourceMappingURL=app.bundle.js.map