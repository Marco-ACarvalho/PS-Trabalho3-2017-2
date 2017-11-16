function banco(connection) {
	this._connection = connection;
};

banco.prototype.listaAutomovel = function(data, callback) {
	this._connection.query('SELECT * FROM automovel', callback);
};

banco.prototype.salvaAutomovel = function(data, callback) {
	this._connection.query('INSERT INTO automovel SET ?', data, callback);
};

banco.prototype.listaMontadora = function(data, callback) {
	this._connection.query('SELECT * FROM montadora', callback);
};

banco.prototype.salvaMontadora = function(data, callback) {
	this._connection.query('INSERT INTO montadora SET ?', data, callback);
	console.log('Chegou no Banco');
};

module.exports = function(app) {
	return banco;
};