'use strict';

angular.module('sendstepsCloneApp')
	.controller('WorkBenchCtrl', ['$scope', 'angularFire', '_',function($scope, angularFire, _) {
		$scope.polls=[];
		var ref = new Firebase('https://sendsteps.firebaseio.com/polls');
		angularFire(ref, $scope, 'polls');

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
			var existing = _.find($scope.polls, function(item){item.title == $scope.pollTitle});
			if(isUndefined(existing))
			{
				$scope.polls.push({"title": $scope.pollTitle, "items": $scope.items});	
			}	

			$scope.resetVars();
		}

		$scope.resetVars = function(){
			$scope.items = [];
			$scope.pollTitle = "";
	}]);