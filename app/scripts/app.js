'use strict';

angular.module('sendstepsCloneApp', ['firebase','angular-underscore','angular-selectize', 'ui','firebaseResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/workbench', {
        templateUrl: 'views/workbench/workbench.html',
        controller: 'WorkBenchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  

angular.module('firebaseResource', []).
  value('firebase', (new Firebase('https://sendsteps.firebaseio.com/')));