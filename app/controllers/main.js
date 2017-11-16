module.exports = function (app) {
	var controller = [];
	controller.listaAutomoveis = function(req, res){
		var connection = app.controllers.connectionFactory();
		var List = new app.controllers.BancoDeDados(connection);

		List.listaAutomovel(connection,
			function (err, resposta) {
				res.json(resposta);
			}
		);
	
		connection.end();
	};

	controller.salvaAutomovel = function(req, res){
		var automovel = req.body;
		var connection = app.controllers.connectionFactory();
		var Save = new app.controllers.BancoDeDados(connection);

		Save.salvaAutomovel(automovel,
			function (resposta) {
				res.redirect('/#!/automoveis');
			}
		);

		connection.end();
	};
	
	controller.obtemContato = function(req, res){};
	controller.removeContato = function(req, res){};

	controller.listaMontadoras = function(req, res){
		var connection = app.controllers.connectionFactory();
		var List = new app.controllers.BancoDeDados(connection);

		List.listaMontadora(connection,
			function (err, resposta) {
				res.json(resposta);
			}
		);
	
		connection.end();
	};

	controller.salvaMontadora = function(req, res){
		var montadora = req.body;
		var connection = app.controllers.connectionFactory();
		var Save = new app.controllers.BancoDeDados(connection);

		Save.salvaMontadora(montadora,
			function (resposta) {
				res.redirect('/#!/cadastro/montadora');
			}
		);

		connection.end();
	};

	return controller;
};