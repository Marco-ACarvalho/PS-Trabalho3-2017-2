angular.module('contatooh').controller('AutomoveisController',
	function ($scope, $resource) {

		$scope.automoveis = [];

		$scope.filtro = '';

		var Automovel = $resource('automoveis:id');

		function buscaContatos(){
			Automovel.query(
				function(automoveis){
					$scope.automoveis = automoveis;
					console.log(automoveis);
				},
				function(erro){
					console.log('Não foi possivel obter a lista de automoveis!');
					console.log(erro);
				}
			);
		}
		buscaContatos();
		
		console.log('Chegou aqui');
		//console.log(automoveis.data[1].marca);
	});