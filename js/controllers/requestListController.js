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

        $scope.reqData = [
            {
                poRefNum : 9876767,
                dispType : 'Tow',
                date: '08/01/16 10:30 AM',
                reqType : 'resendDispatch',
                reqSubType : 'email',
                status : 'Submitted'
            },
            {
                poRefNum : 9876767,
                dispType : 'Tow',
                date: '08/01/16 10:30 AM',
                reqType : 'resendDispatch',
                reqSubType : 'email',
                status : 'Submitted'
            },
            {
                poRefNum : 9876767,
                dispType : 'Tow',
                date: '08/01/16 10:30 AM',
                reqType : 'resendDispatch',
                reqSubType : 'email',
                status : 'Submitted'
            },
            {
                poRefNum : 9876767,
                dispType : 'Tow',
                date: '08/01/16 10:30 AM',
                reqType : 'resendDispatch',
                reqSubType : 'email',
                status : 'Submitted'
            },

        ];
    }

} )();
