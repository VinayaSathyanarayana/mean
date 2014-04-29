'use strict';
angular.module('mean').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('users', {
                url: '/admin/users',
                templateUrl: 'admin/views/users.html'
            }).state('themes', {
                url: '/admin/themes',
                templateUrl: 'admin/views/themes.html'
            }).state('settings', {
                url: '/admin/settings',
                templateUrl: 'admin/views/settings.html'
            }).state('modules', {
                url: '/admin/modules',
                templateUrl: 'admin/views/modules.html'
            });
    }
]);