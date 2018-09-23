function ProdutoDAO(connection){
    this._connection = connection;
}

ProdutoDAO.prototype.lista = function(callback){
    this._connection.query('SELECT * from produto', callback);
}

module.exports = function() {
    return ProdutoDAO;
}