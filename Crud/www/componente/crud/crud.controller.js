angular.module('crud')
    .controller('crudCtrl', function($scope, $webSql) {
       
      
        $scope.enviar = function(){
            console.log($scope.nome)
            debugger

        }
    })