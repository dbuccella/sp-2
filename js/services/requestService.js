(function () {
    'use strict';

    angular.module('matApp').factory('requestService', function () {
        // static for now
        var _requestData = [
            {
                id : 1,
                poRefNum : 9876767,
                dispType : 'Tow',
                date: '08/01/16 10:30 AM',
                reqType : 'resendDispatch',
                reqSubType : 'email',
                status : 'Submitted'
            },
            {
                id : 2,
                poRefNum : 9873367,
                dispType : 'Lockout',
                date: '08/01/16 10:30 AM',
                reqType : 'resendDispatch',
                reqSubType : 'email',
                status : 'Submitted'
            },
            {
                id : 3,
                poRefNum : 9111267,
                dispType : 'Flat Tire',
                date: '08/01/16 10:30 AM',
                reqType : 'resendDispatch',
                reqSubType : 'email',
                status : 'Submitted'
            },
            {
                id : 4,
                poRefNum : 9555527,
                dispType : 'Gas Delivery',
                date: '08/01/16 10:30 AM',
                reqType : 'resendDispatch',
                reqSubType : 'email',
                status : 'Submitted'
            },

        ];
        
        var _getRequestData = function ()
        {
            return _requestData;
        }

        var _getRequest = function (id) {
            return _requestData.find(
                function (obj) {
                    return obj.id == id;
                }
            )
        }

        return {
            getRequestList : _getRequestData,
            getRequest : _getRequest
        }
    })
    
} )();
