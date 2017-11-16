function a(req, res, next) {
	return next();
}

module.exports = function (app) {
	var controller = app.controllers.main;
	app.route('/automoveis')
		.get(controller.listaAutomoveis)
		.post(controller.salvaAutomovel);

	app.route('/contatos/:id')
		.get(controller.obtemContato)
		.delete(controller.removeContato);

	app.route('/montadoras')
		.get(controller.listaMontadoras)
		.post(controller.salvaMontadora);
}