var mysql = require('mysql');
function criarConexao(){

  return mysql.createConnection ({
    host:'127.0.0.1',
    user: 'root',
    password: '',
    database: 'banco_node', 
    insecureAuth: 'true',
    multipleStatements: 'true'
  });
  
}

module.exports = function(){
    return criarConexao;
}
