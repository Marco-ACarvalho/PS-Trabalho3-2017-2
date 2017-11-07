// app/routes/estados.js

module.exports = function(app) {

	app.get('/estados', function(req, res) {
		var connection = app.controllers.connectionFactory();
        var estadosList = new app.controllers.EstadosDAO(connection);
		
		estadosList.lista(connection, function(err, resposta) {
			// res.render('estados/lista', {list : resposta});
			res.format( {
				html: function() {
					res.render('estados/lista', {list: resposta});
				},
				json: function() {
					res.json(resposta);
				}
			});
		});

		connection.end();

	});

	app.get('/estados/cria', function(req, res) {
		res.render('estados/form');
	});

	app.post('/estados/salva', function(req, res) {
		var estado = req.body;
		var connection = app.controllers.connectionFactory();
		var estadosSave = new app.controllers.EstadosDAO(connection);		

		estadosSave.salva(estado, function(err, result) {
			res.redirect('/estados');
			console.log('Estado Salvo!');
		});

		connection.end();
	});
}