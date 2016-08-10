(function () {
    'use strict';
    
    var app = angular
        .module('matApp', ['ngMaterial', 'ngRoute']).
        config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('grey')
                .accentPalette('red');
        })


    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/jobs', {
                templateUrl: '/views/jobslist.html',
                controller: 'jobsListController'
            })
            .when('/requests', {
                templateUrl: '/views/requestlist.html',
                controller: 'requestListController'
            })
            .when('/request/:activityId/:poRefNum', {
                templateUrl: '/views/request.html',
                controller: 'requestController'
            })
            .otherwise( {
                redirecTo : '/jobs'
            });
    }])    
} )();

