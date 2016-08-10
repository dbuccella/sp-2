(function () {
    'use strict';
    var app = angular
        .module('matApp')
        .controller('jobsListController', jobsListController);

    jobsListController.$inject = ['$scope', '$rootScope'];
    
    function jobsListController($scope, $rootScope)
    {
        $scope.message = 'Jobs';
        $scope.currentPage = 'jobs';

        $scope.jobData = [
            {
                poRefNum : 9876767,
                dispType : 'Tow',
                date: '08/01/16 10:30 AM',
                address: '1 Main St, Medford MA'
            },
            {
                poRefNum : 1836767,
                dispType : 'Flat-Tire',
                date: '08/01/16 10:18 AM',
                address: '1 Main St, Medford MA'
            },
            {
                poRefNum : 6767655,
                dispType : 'Winch',
                date: '08/01/16 9:57 AM',
                address: '1 Main St, Medford MA'
            },
            {
                poRefNum : 9888888,
                dispType : 'Gas Delivery',
                date: '08/01/16 9:30 AM',
                address: '1 Main St, Medford MA'
            }
        ];

        //$rootScope.jobCount = $scope.jobData.length; 
        //$scope.jobCount = $rootScope.jobCount;
        //$scope.reqCount = $rootScope.reqCount;
        //$scope.searchString = '';
    }

} )();
