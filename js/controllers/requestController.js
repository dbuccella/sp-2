(function () {
    'use strict';
    var app = angular
        .module('matApp')
        .controller('requestController', requestController);

    requestController.$inject = ['$scope', '$routeParams', 'requestService'];
    
    function requestController($scope, $routeParams, requestService)
    {
        $scope.message = 'Sumbitted Requests';
        $scope.currentPage = 'requests';
        var id = $routeParams.activityId;
        var poRefNum = $routeParams.poRefNum;

        $scope.reqData = requestService.getRequest(id);  
    }

} )();
