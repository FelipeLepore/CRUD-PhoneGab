angular.module('crud')
    .controller('crudCtrl', function($scope, $webSql) {
        debugger
        $scope.db = $webSql.openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
        // "CREATE TABLE IF NOT EXISTS usuario (id integer primary key, nome varchar(max), email varchar(max), idade integer)", [],    


        console.log($scope.db)
        $scope.enviar = function() {
            $scope.db.insert('usuario', { "nome": $scope.nome, "email": $scope.email, 'idade': $scope.idade }).then(function(results) {
                console.log(results.insertId);
            })
            $scope.db.selectAll("usuario").then(function(results) {
                $scope.users = [];
                for (var i = 0; i < results.rows.length; i++) {
                    $scope.users.push(results.rows.item(i));
                }
                console.log($scope.users)
            })
        }
    })