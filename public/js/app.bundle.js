webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {


angular.module("newsApp").controller('mainCtrl', function($scope){
	
	$scope.template =
	    { news: 'templates/news.html',
	      editNews: 'templates/editNews.html',
		  partials:{header:'templates/partials/header.html',
				  footer:'templates/partials/footer.html'},
		  user:'templates/user.html',
		  author:'templates/author.html',
		  admin:'templates/admin.html',
		};

	$scope.currentTemplate = $scope.template.author;

	$scope.changeCurrent = function(template){
		$scope.currentTemplate= $scope.template[template];
	};
	
	

});

/***/ }),
/* 2 */
/***/ (function(module, exports) {


angular.module("newsApp").controller('newsCtrl', function($scope, dataService){
	
	$scope.newsSelected=false;

	dataService.getNews(function(res){
			$scope.newsArray=res.data;
		});
	

 	$scope.addNews= function(){
 		var mock = {title:"Lorem Ipsum",
	 	subtitle:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
	 	content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum, lorem non semper vestibulum, tellus libero laoreet mi, vel volutpat odio augue ac tellus. Sed ornare, dui eu bibendum accumsan, ipsum dui interdum sem, pellentesque fermentum tellus urna eget ipsum. Mauris at vulputate nulla. Integer id elit nibh. Donec augue ante, tincidunt id imperdiet in, faucibus et augue. Nunc eleifend ultrices sagittis. Nunc auctor justo a nisl pulvinar, eget iaculis tortor euismod. Morbi lectus augue, maximus pellentesque consequat nec, consectetur ut neque. Nullam vitae rhoncus nisl, eu porttitor neque. Integer nec sem augue. Aliquam rutrum interdum lectus eu interdum. Suspendisse tincidunt bibendum purus. Donec sit amet pulvinar urna, nec viverra enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur ultrices felis vitae tincidunt mollis. Mauris nec tincidunt erat, nec fringilla nulla. Praesent sagittis interdum sollicitudin. Sed sit amet ipsum felis. Nunc hendrerit quam quis magna dignissim pulvinar. Ut fermentum ac diam volutpat posuere. Pellentesque vestibulum pretium lacus sed lobortis. Mauris vitae facilisis sem. Nullam a lacus tellus. Suspendisse mauris nulla, vulputate in commodo eget, tempor quis enim. Etiam non ante in libero hendrerit consequat. Donec luctus fermentum metus id rhoncus. Suspendisse pretium elit sit amet pharetra accumsan. Pellentesque pellentesque et justo quis elementum. Curabitur dapibus semper tortor in sagittis. Nulla suscipit sollicitudin feugiat. Vestibulum eu erat et erat facilisis dignissim. Maecenas vel diam ultrices, dapibus odio vitae, consectetur quam. Aenean mauris tellus, iaculis id fringilla in, viverra a augue. Mauris faucibus lorem non justo facilisis malesuada. Cras congue ante sit amet orci sagittis sollicitudin. Nullam purus justo, egestas ut dui eget, eleifend ullamcorper nunc. Curabitur at tortor congue ligula tincidunt consequat. Phasellus rhoncus blandit urna a malesuada. Vivamus in quam imperdiet, luctus nunc nec, accumsan eros. Maecenas pharetra ornare ultricies. Proin a orci ligula. Quisque libero metus, suscipit vitae feugiat a, mollis ut mi. Curabitur egestas massa eu enim imperdiet, vel bibendum libero malesuada."
	 	};
 		$scope.newsArray.unshift(mock);
 	}


 	$scope.deleteNews =function (news, $index){
 		$scope.newsArray.splice($index, 1)
 		dataService.deleteNews(news);

 	}

 	$scope.saveNews = function(){
 		for(var prop in $scope.editedNews) {
 			$scope.originalNews[prop]=$scope.editedNews[prop];
 			$scope.editing=false;
 			$scope.preview=false;
 		}
 	}

 	$scope.viewNews= function(news,$index){
 		$scope.newsSelected = true;
 		$scope.news= $scope.newsArray[$index];
 	}

 	$scope.editNews= function(news, $index){
 		$scope.editing =true;
 		$scope.originalNews = $scope.newsArray[$index];
 		$scope.editedNews =  Object.assign({}, $scope.originalNews);

 	}

 });

/***/ }),
/* 3 */
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
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);


angular.module("newsApp", []);

__webpack_require__(1);
__webpack_require__(2);
//require('./scripts/directives/news.js');
__webpack_require__(3);



/***/ })
],[5]);
//# sourceMappingURL=app.bundle.js.map