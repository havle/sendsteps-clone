'use strict';

angular
	.module('WorkBenchCtrl',['Poll', 'PollItem', 'Presentation'])
	.controller('WorkBenchCtrl', ['$scope', 'Poll', 'PollItem', 'Presentation',function($scope, Poll, PollItem,Presentation) {

		$scope.workbenchInit = function(){
			Poll.query({page:1}).then(function(){
				alert("query done")
			});
			var presentations = Poll.all()[0];
			// $scope.presentation = presentations[0];
		}
		$scope.setDefaultPresentation= function(){
			if(angular.isUndefined($scope.presentation))
			{
				$scope.presentation = new Presentation({title: "Untitled"})
			}
			$scope.presentation.save().then(function(error){
				$scope.presentation.polls().query();
			});	
		}
		$scope.addItem = function(item){
			// if(angular.isUndefined($scope.newPollItem)	
			// 	|| $scope.newPollItem == "")
			// 	return;
			// $scope.newPollItem = poll.items.add({text:""});// new item
			if(angular.isUndefined(item)
				|| item.text == "")
			{
				item.delete();
			}
			else
			{
				item.save();
			}
			$scope.edittingItem = undefined;
			// $scope.newPollItem($scope.editingPoll);
		};

		$scope.addPoll = function(){
			if(!$scope.presentation)
			{
				$scope.setDefaultPresentation();
			}
			var title = $scope.newPollTitle;
			if(title === ''
				|| angular.isUndefined(title))
			{
				title = "Untitled Poll";
			}

			var poll = $scope.presentation.polls().new({title: title});

			poll.save().then(function()
			{
				$scope.presentation.polls().query();
			})
		}

		$scope.newPollItem = function(poll){
			if(!angular.isUndefined($scope.edittingItem)
				&& $scope.edittingItem.text =="")
				return;
			$scope.edittingItem = poll.pollitems().new({text:""});
			$scope.edittingItem.save().then(function(){
				poll.pollitems().query();
			});		
		}

		$scope.doneEditting = function(poll){
			// Save the currenty edting poll
			poll.save();
			$scope.editingPoll = undefined;
			// $scope.addItem($scope.edittingItem);
		}

		$scope.editPoll = function(poll){
			if(poll === $scope.editingPoll)
				return;
			if(!angular.isUndefined($scope.editingPoll))
			{
				$scope.doneEditting($scope.editingPoll);
				$scope.editingPoll = undefined;
			}

			$scope.editingPoll = poll;
			// $scope.newPollItem(poll);		
		}
		
		
	}]);