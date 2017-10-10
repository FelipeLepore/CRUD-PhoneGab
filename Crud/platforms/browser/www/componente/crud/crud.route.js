angular.module('crud')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'componente/crud/crud.html',
                controller: 'crudCtrl'

            })
    })