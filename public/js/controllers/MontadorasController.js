angular.module('contatooh').controller('MontadorasController',
	function ($scope, $resource) {

		$scope.montadoras = [];

		//$scope.filtro = '';

		var Contato = $resource('montadoras:id');

		function buscaContatos() {
			Contato.query(
				function (montadoras) {
					$scope.montadoras = montadoras;
					console.log(montadoras);
				},
				function (erro) {
					console.log('Não foi possivel obter a lista de montadoras!');
					console.log(erro);
				}
			);
		}
		buscaContatos();

		console.log('Chegou aqui');
	});