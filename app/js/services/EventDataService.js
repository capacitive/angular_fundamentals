'use strict';

//include $resource in app.js eventsApp service array []
eventsApp.factory('eventDataService', function($resource){//$http, $log, $q
    var resource = $resource('data/event/:id.json', {id:'@id'});
    return {
        getEvent: function() {
            return resource.get({id:1});
        },
        save: function(event){
            event.id = 999;
            return resource.save(event)
        }
    };
});

//$http and $q services
/*eventsApp.factory('eventDataService', function($http, $log, $q){
    return {
        getEvent: function() {
            var deferred = $q.defer();

            $http({method: 'GET', url: 'data/event/1.json'}).
                success(function(data, status, headers, config){
                    //$log.info(data, status, headers(), config);
                    //successcb(data);
                    deferred.resolve(data);
                }).error(function(data, status, headers, config){
                    //$log.warn(data, status, headers(), config);
                    deferred.reject(status);
                });

            return deferred.promise;
        }
    };
});*/

/*eventsApp.factory('eventDataService', function(){
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
})*/

