function login(connection) {
	this._connection = connection;
};

login.prototype.lista = function(data, callback) {
	this._connection.query('SELECT * FROM Contas', callback);
};

login.prototype.salva = function(data, callback) {
	this._connection.query('INSERT INTO Contas SET ?', data, callback);
};

module.exports = function(app) {
	return login;
};