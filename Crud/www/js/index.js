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
var app = angular.module('crud', ['ngRoute'])
 .run(function(){
    var db = openDatabase("Crud", "1.0", "Teste Web SQL Database", 200000);
    console.log(db);
    
   // de qualquer forma, sempre teste que o objeto foi instanciado direito antes de usá-lo
   if(!db){
       alert('deu pau!');
   }

 db.transaction(function (tx) {
    tx.executeSql(
        "CREATE TABLE IF NOT EXISTS usuario (id integer primary key, nome varchar(max), email varchar(max), idade integer)",
        [],
        function (tx, rs) {
            // index created
        },
        function (tx, e) {
            if (e.message.indexOf("already exists") == -1) {
                // index not created - already exists
            }
        });
 });

})