'use strict'

eventsApp.controller('EventController',
    function EventController($scope){

        $scope.event = {
            name: 'Angular Boot Camp',
            date: '2015/4/5',
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                street: '323 Front St.',
                city:'Mountain View',
                province: 'CA'
            },
            imageUrl: 'img/coolangular.PNG',
            sessions: [
                {
                    name: 'Directives Master Class',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'The ins and outs of directives.',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'Jake Deerfield',
                    duration: '30 mins',
                    level: 'Intro',
                    abstract: 'A closer look at scopes.',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Bucky',
                    duration: '1 hr',
                    level: 'Intermediate',
                    abstract: 'The ins and outs of Controllers.',
                    upVoteCount: 0
                }
            ]
        }

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        }

        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        }
});
