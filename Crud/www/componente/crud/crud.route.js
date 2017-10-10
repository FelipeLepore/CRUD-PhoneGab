angular.module('crud')

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('crud', {
            url: '/crud',
            templateUrl: 'componente/crud/crud.html',
            controller: 'CrudCtrl',
            cache: false
        })
        // $urlRouterProvider.otherwise('/login');
})