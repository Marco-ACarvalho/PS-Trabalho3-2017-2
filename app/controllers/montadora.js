function automovel(connection) {
	this._connection = connection;
};

automovel.prototype.lista = function(data, callback) {
	this._connection.query('SELECT * FROM montadora', callback);
};

automovel.prototype.salva = function(data, callback) {
	this._connection.query('INSERT INTO montadora SET ?', data, callback);
};

module.exports = function(app) {
	return automovel;
};