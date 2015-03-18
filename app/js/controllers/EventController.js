'use strict'

eventsApp.controller('EventController',['$scope', '$sce', '$anchorScroll', 'eventDataService',
    function ($scope, $sce, $anchorScroll, eventDataService){
        $scope.appName = $sce.trustAsHtml('<span style="color:red">Event Planner</span>');
        $scope.boolValue = true;
        $scope.thestyler = {color:'red'};
        $scope.theclass = "blue";
        $scope.btnDisabled = true;
        $scope.sortorder = 'name';

        //bind directly to resource with promise (callback)
        eventDataService.getEvent()
            .$promise.then(
            function(event) {$scope.event = event; console.log(event);},
            function(response) { console.log(response);}
        );

        //old data in service itself
        /*eventDataService.getEvent(function(event){
         $scope.event = event
         });*/

        //promise
        /*eventDataService.getEvent().then(
            function(event){ $scope.event = event; },
            function(statusCode){ console.log(statusCode);}
        );*/

        //pre 1.2 auto-return of promises:
        //$scope.event = eventDataService.getEvent();

        $scope.scrollToSession = function(){
            $anchorScroll();
        }

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        }

        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        }
}]);
