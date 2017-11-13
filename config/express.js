var express = require("express");
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {

	var app = express();
	app.set('port', 3001);
	
	app.use(express.static('./public'));

	app.set('view engine', 'ejs');
	app.set('views', './app/views');
	
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	//app.use(require('method-override')());

	load('routes', {cwd : 'app'})
		.then('controllers')
		.then('style')
		.into(app);

	app.get('*',function(req, res) {
		res.status(404).render('404');
	});

	return app;

}