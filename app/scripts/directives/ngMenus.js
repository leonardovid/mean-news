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

