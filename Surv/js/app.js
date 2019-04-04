var todoApp = angular.module("MonApp", [ 'ngRoute']);
todoApp.config(function($routeProvider){
      $routeProvider
                .when( '/', {templateUrl : 'index.html', controller: 'ExamsCtrl'})
                .otherwise ({redirectTo : '/'});

});
