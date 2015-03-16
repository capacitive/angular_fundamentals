'use strict';

eventsApp.controller('EditEventController', ['$scope', '$sce',
    function ($scope, $sce){
        $scope.appName = $sce.trustAsHtml('<span style="color:red">Event Planner</span>');

        $scope.saveEvent = function(event){

            console.log('event' + event.name + ' saved...');
        }

        $scope.cancelEdit = function(){
            window.location = "EventDetails.html"
        }
    }]
);
