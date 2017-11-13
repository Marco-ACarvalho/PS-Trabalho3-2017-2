module.exports = function(app) {
    app.get('/', function(req, res){
		res.render('index');
        //res.redirect('/index');
    });
    app.get('/index', function(req, res){
		res.render('index');
        //console.log(res);
    });
}