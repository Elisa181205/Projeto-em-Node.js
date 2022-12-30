function usuarioBanco(conexao){
    this._conexao = conexao
}

usuarioBanco.prototype.salvar = function(dados,callback){
    this._conexao.query('insert into usuario set ?', dados, callback);
}

module.exports = function(){
    return usuarioBanco;
}