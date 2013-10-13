'use strict';

angular.module('sendstepsCloneApp', ['angular-underscore','angular-selectize', 'ui','sendstepsFB','WorkBenchCtrl'])
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
  })
  .run(function($rootScope, firebase) {

    // reset the database every time
    firebase.remove();

    $rootScope.safeApply = function(fn) {
      var phase = this.$root.$$phase;
      if(phase == '$apply' || phase == '$digest') {
        if(fn && (typeof(fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };
  });

angular.module('sendstepsFB', []).
  value('firebase', (new Firebase('https://sendsteps.firebaseio.com/')));