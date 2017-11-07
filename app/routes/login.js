module.exports = function(app) {
    app.get('/login', function(req, res){
		res.render('login');
    });

	/*
	app.get('/login/contas', function(req, res) {
		var connection = app.controllers.connectionFactory();
        var estadosList = new app.controllers.login(connection);
		
		estadosList.lista(connection, function(err, resposta) {
			// res.render('estados/lista', {list : resposta});
			res.format( {
				html: function() {
					res.render('/login_lista', {list: resposta});
				},
				json: function() {
					res.json(resposta);
				}
			});
		});

		connection.end();

	}); */
}