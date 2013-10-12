'use strict';

angular.module('sendstepsCloneApp')
	.controller('WorkBenchCtrl', ['$scope', 'angularFireCollection',function($scope, angularFireCollection) {
		

		$scope.addItem = function(poll){
			if(angular.isUndefined($scope.newPollItem)	
				|| $scope.newPollItem == "")
				return;
			$scope.newPollItem = poll.items.add({text:""});// new item
			$scope.polls.update(poll);
			
		};

		$scope.addPoll = function(){
			var title = $scope.newPollTitle;
			if(title === ''
				|| angular.isUndefined(title))
			{
				title = "Untitled Poll";
			}

			$scope.polls.add({title: title, items: {}});
		}

		$scope.workbenchInit = function(){
			var ref = new Firebase('https://sendsteps.firebaseio.com/polls');
			$scope.polls= angularFireCollection(ref);
		}

		$scope.editPoll = function(poll){

			$scope.editingPoll = poll;
			if(!$scope.editingPoll.items)
			{
				$scope.editingPoll.items = 	{};
			}
			$scope.editingPoll.items.add({text:""});
		}
		$scope.doneEditting = function(poll){
			// Save the currenty edting poll
			$scope.polls.update(poll);
			// set edditingPoll to null
		}
		
	}]);