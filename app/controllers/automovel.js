

function automovel(connection) {
	this._connection = connection;
};

automovel.prototype.lista = function(data, callback) {
	this._connection.query('SELECT * FROM automovel', callback);
};

automovel.prototype.salva = function(data, callback) {
	this._connection.query('INSERT INTO automovel SET ?', data, callback);
};

module.exports = function(app) {
	return automovel;
};