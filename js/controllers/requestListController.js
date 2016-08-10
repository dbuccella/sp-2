(function () {
    'use strict';
    var app = angular
        .module('matApp')
        .controller('requestListController', requestListController);

    requestListController.$inject = ['$scope', '$rootScope', 'requestService'];
    
    function requestListController($scope, $rootScope, requestService)
    {
        $scope.message = 'Sumbitted Requests';
        $scope.currentPage = 'requests';

        $scope.reqData = requestService.getRequestList();

        //$rootScope.reqCount = $scope.reqData.length; 
        //$scope.jobCount = $rootScope.jobCount;
        //$scope.reqCount = $rootScope.reqCount;
        //$scope.searchString = '';
    }

} )();
