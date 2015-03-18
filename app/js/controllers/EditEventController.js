'use strict';

eventsApp.controller('EditEventController', ['$scope', '$sce', 'eventDataService',
    function ($scope, $sce, eventDataService){
        $scope.appName = $sce.trustAsHtml('<span style="color:red">Event Planner</span>');

        $scope.saveEvent = function(event, form){
            console.log(form);
            if(true){
                eventDataService.save(event)
                    .$promise.then(
                        function(response) {console.log('success', response)},
                        function(response) {console.log('failure', response)}
                    );
            }
            console.log('event' + event.name + ' saved...');
        }

        $scope.cancelEdit = function(){
            window.location = "EventDetails.html"
        }
    }]
);
