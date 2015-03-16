'use strict';

eventsApp.factory('eventDataService', function(){
    return {
        event: {
            name: 'Angular Boot Camp',
            date: '2015/4/5',
            time: '10:30 am',
            price: '549.99',
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
                    duration: 4,
                    level: 'Advanced',
                    abstract: 'The ins and outs of directives.',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit advanced',
                    creatorName: 'Jake Deerfield',
                    duration: 1,
                    level: 'Intermediate',
                    abstract: 'A closer look at scopes.',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Bucky',
                    duration: 2,
                    level: 'Intermediate',
                    abstract: 'The ins and outs of Controllers.',
                    upVoteCount: 0
                },
                {
                    name: 'Angular Test Tools',
                    creatorName: 'Bobbo',
                    duration: 1,
                    level: 'Basic',
                    abstract: 'Handy tools for unit testing.',
                    upVoteCount: 0
                }
            ]
        }
    }
})
