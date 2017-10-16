angular.module('crud')
    .controller('crudCtrl', function($scope, $webSql) {

        $scope.db = $webSql.openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
        // "CREATE TABLE IF NOT EXISTS usuario (id integer primary key, nome varchar(max), email varchar(max), idade integer)", [],    
        $scope.db.createTable('usuario', {
            "id": {
                "type": "INTEGER",
                "null": "NOT NULL", // default is "NULL" (if not defined)
                "primary": true, // primary
                "auto_increment": true // auto increment
            },
            "nome": {
                "type": "text",
                "null": "NOT NULL"
            },
            "email": {
                "type": "text",
                "null": "NOT NULL"
            },
            "idade": {
                "type": "integer",
                "null": "NOT NULL"
            }
        })

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