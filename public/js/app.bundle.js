webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

angular.module("newsApp").controller('mainCtrl', function($scope){
	
	$scope.templates =
	    [{ name: 'news.html', url: 'templates/news.html'}];
	$scope.template = $scope.templates[0];
	console.log($scope.template);

});

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module("newsApp", []);

__webpack_require__(1);
/*require('./scripts/directives/news.js');
require('./scripts/services/data.js');*/



/***/ })
],[3]);
//# sourceMappingURL=app.bundle.js.map