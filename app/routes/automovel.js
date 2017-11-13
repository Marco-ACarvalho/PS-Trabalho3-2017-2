module.exports = function (app) {
	app.get('/automovel', function (req, res) {
		//res.render('automovel');
		var connection = app.controllers.connectionFactory();
        var montadoraList = new app.controllers.montadora(connection);
		
		montadoraList.lista(connection, function(err, resposta) {
			// res.render('estados/lista', {list : resposta});
			res.format( {
				html: function() {
					res.render('automovel', {mont: resposta});
				},
				json: function() {
					res.json(resposta);
				}
			});
		});

		connection.end();
	});

	app.post('/automovel/salva', function (req, res) {
		var automovel = req.body;
		var connection = app.controllers.connectionFactory();
		var automovelSave = new app.controllers.automovel(connection);

		automovelSave.salva(automovel, function (err, result) {
			res.redirect('/automovel');
			console.log(err + 'Automovel Salvo!');
		});

		connection.end();
	});

	app.get('/automoveis', function (req, res) {
		var connection = app.controllers.connectionFactory();
		var automovelList = new app.controllers.automovel(connection);
		var montadoraList = new app.controllers.montadora(connection);
		var respostaAux;
		
		montadoraList.lista(connection, function (err, resposta2) {
			respostaAux = resposta2;
		});

		automovelList.lista(connection, function (err, resposta) {
			res.format({
				html: function () {
					res.render('automoveis', {
						list: resposta,
						mont: respostaAux
					});
				},
				json: function () {
					res.json(resposta, respostaAux);
				}
			});
		});

		connection.end();

	});
}