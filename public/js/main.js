angular.module('contatooh', ['ngRoute' /*, 'ngResource'*/ ])
	.config(function ($routeProvider /*, $httpProvider */ ) {

		//$httpProvider.interceptors.push('meuInterceptor');

		$routeProvider.when('/home', {
			templateUrl: 'partials/home.html'
		});
		$routeProvider.when('/cadastro/automovel', {
			templateUrl: 'partials/formAutomovel.html'
		});
		$routeProvider.when('/cadastro/montadora', {
			templateUrl: 'partials/formMontadora.html'
		});
		$routeProvider.when('/automoveis', {
			templateUrl: 'partials/automoveis.html',
			controller: 'AutomoveisController'
		});
		$routeProvider.when('/montadoras', {
			templateUrl: 'partials/montadoras.html'
		});
		$routeProvider.when('/ajuda', {
			templateUrl: 'partials/ajuda.html'
		});
		/*
		$routeProvider.when('/contato/:contatoId', {
		    templateUrl: 'partials/contato.html',
		    controller: 'ContatoController'
		});

		$routeProvider.when('/contato', {
		    templateUrl: 'partials/contato.html',
		    controller: 'ContatoController'
		});

		$routeProvider.when('/auth', {
		    templateUrl: 'partials/auth.html'
		});
		*/
		$routeProvider.otherwise({
			redirectTo: '/home'
		});

	});