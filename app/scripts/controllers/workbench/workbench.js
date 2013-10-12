'use strict';

angular.module('sendstepsCloneApp')
	.controller('WorkBenchCtrl', function($scope) {
		$scope.polls = [];
		$scope.addItem = function(){
			if(angular.isUndefined($scope.newItem)
				|| $scope.newItem == "")
				return;
			$scope.items.push($scope.newItem);
			$scope.newItem = "";
		};

		$scope.savePoll = function(){
			if($scope.items.count <= 0)
				return;

			if($scope.pollTitle == "")
			{
				// TODO: change this to nice flash up top
				alert("Must include a poll title");
			}

			$scope.polls.push({"title": $scope.pollTitle, "items": $scope.items});
			$scope.resetVars();
		}

		$scope.resetVars = function(){
			$scope.items = [
				'Thor',
				'Gandi',
				'Superman'];
			$scope.pollTitle = "Who's your favourite Marvel hero";
		}
	});