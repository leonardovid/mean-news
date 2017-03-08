angular.module("newsApp").config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

	$routeProvider.when('/', {templateUrl: 'templates/listNews.html', controller:'newsCtrl'});
	$routeProvider.when('/auth', {templateUrl: 'templates/auth.html'});
	$routeProvider.when('/panel', {templateUrl: 'templates/panel.html',controller:'panelCtrl'});
	$routeProvider.when('/news/:id', {templateUrl: 'templates/viewNews.html',controller:'newsCtrl'});
	$routeProvider.otherwise({redirectTo: '/'});

	$locationProvider.html5Mode({enabled: true, requireBase: false});

}]);

