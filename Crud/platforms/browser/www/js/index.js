/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = angular.module('crud', ['ngRoute', 'angular-websql'])

.controller('IndexCtrl', function($scope, $webSql) {
    $scope.db = $webSql.openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
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
    console.log($scope.db);



    // de qualquer forma, sempre teste que o objeto foi instanciado direito antes de usá-lo

    // "CREATE TABLE IF NOT EXISTS usuario (id integer primary key, nome varchar(max), email varchar(max), idade integer)", [],        


})