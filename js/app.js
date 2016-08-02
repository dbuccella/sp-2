(function () {
    'use strict';
    
    var app = angular
        .module('matApp', ['ngMaterial', 'ngRoute']);

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
            .otherwise( {
                redirecTo : '/jobs'
            });
    }])    
} )();

