webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {


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

/***/ }),
/* 2 */
/***/ (function(module, exports) {


angular.module("newsApp").controller('newsCtrl', function($scope, dataService){
	
	$scope.newsSelected=false;

	dataService.getNews(function(res){
			$scope.newsArray=res.data;
		});
	

 	$scope.addNews= function(news){
 		if ($scope.newsArray.indexOf(news._id)==-1) {
 			$scope.newsArray.unshift(news);

 		}
 		else{

 		}
 		$scope.create=false;
 		
 	}

 	$scope.createNews= function(){
 		$scope.editing=true;
 		$scope.create=true;
		$scope.selectedNews={};		

 	}


 	$scope.deleteNews =function (news, $index){
 		$scope.newsArray.splice($index, 1)
 		dataService.deleteNews(news);

 	}

 	$scope.saveEditedNews = function(){
 		for(var prop in $scope.selectedNews) {
 			$scope.originalNews[prop]=$scope.selectedNews[prop];
 			$scope.editing=false;
 			$scope.preview=false;
 		}
 	}

 	$scope.viewNews= function(news,$index){
 		$scope.selected = true;
 		$scope.news= $scope.newsArray[$index];
 	}

 	$scope.editNews= function(news, $index){
 		$scope.editing =true;
 		$scope.manageNews = false;
 		$scope.originalNews = $scope.newsArray[$index];
 		$scope.selectedNews =  Object.assign({}, $scope.originalNews);

 	}

 });

/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);


angular.module("newsApp", []);

__webpack_require__(1);
__webpack_require__(2);
//require('./scripts/directives/news.js');
__webpack_require__(4);
__webpack_require__(3);
__webpack_require__(8);




/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/leonardo/Programming/mean-news/app/scripts/services/templateService.js'\n    at Error (native)");

/***/ })
],[6]);
//# sourceMappingURL=app.bundle.js.map