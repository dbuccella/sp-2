(function () {
    'use strict';
    var app = angular
        .module('matApp')
        .controller('requestListController', requestListController);

    requestListController.$inject = ['$scope'];
    
    function requestListController($scope)
    {
        $scope.message = 'Sumbitted Requests';
        $scope.currentPage = 'requests';
    }

} )();
