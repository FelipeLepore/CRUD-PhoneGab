angular.module('crud')

.config(function($routeProvider) {
    $routeProvider
        .when('/1', {
            templateUrl: 'componente/crud/crud.html',
            controller: 'crudCtrl'
        })
        .when('/view2', {
            templateUrl: 'view2.html',
            controller: 'SecondController'
        })
        .otherwise({
            redirectTo: '/'
        });
});