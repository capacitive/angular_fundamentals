'use strict'

eventsApp.controller('EventController',['$scope', '$sce', 'eventDataService',
    function ($scope, $sce, eventDataService){
        $scope.appName = $sce.trustAsHtml('<span style="color:red">Event Planner</span>');
        $scope.boolValue = true;
        $scope.thestyler = {color:'red'};
        $scope.theclass = "blue";
        $scope.btnDisabled = true;
        $scope.sortorder = 'name';

        $scope.event = eventDataService.event;

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        }

        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        }
}]);
