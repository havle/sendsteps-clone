'use strict';

angular.module('sendstepsCloneApp')
	.controller('WorkBenchCtrl', function($scope) {
		$scope.newItem = "";
		$scope.items = ['1','2','3'];
		$scope.pollTitle = "";

		$scope.addItem = function(){
			if(angular.isUndefined($scope.newItem)
				|| $scope.newItem == "")
				return;
			$scope.items.push($scope.newItem);
			$scope.newItem = "";
		}

		$scope.savePoll = new function(){
			if($scope.items.count <= 0)
				return;


		}
	});