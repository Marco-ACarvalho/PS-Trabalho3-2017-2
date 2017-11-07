// app/infra/EstadosDAO.js

function EstadosDAO(connection) {
	this._connection = connection;
};

EstadosDAO.prototype.lista = function(data, callback) {
	this._connection.query('SELECT * FROM estados', callback);
};

EstadosDAO.prototype.salva = function(data, callback) {
	this._connection.query('INSERT INTO estados SET ?', data, callback);
};

module.exports = function(app) {
	return EstadosDAO;
};