'use strict';

angular.module('sendstepsCloneApp', ['firebase'])
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
