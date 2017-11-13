angular.module('contatooh').controller('AutomoveisController',
function($scope){
    $scope.automoveis = [{
        _id: 1,
        Marca: 'HYUNDAI',
        Modelo: 'HB20',
        Categoria: 'HATCH',
        Combustivel: 'GASOLINA',
        Placa: 'ABC-1234',
        Montadora: 1
    
    },{
        _id: 2,
        Marca: 'TOYOTA',
        Modelo: 'HILUX',
        Categoria: 'PICK-UPS',
        Combustivel: 'DIESEL',
        Placa: 'ABC-1235',
        Montadora: 1
    },{
        _id: 3,
        Marca: 'HONDA',
        Modelo: 'CITY',
        Categoria: 'SEDANS',
        Combustivel: 'ALCOOL',
        Placa: 'ABC-1236',
        Montadora: 1
    }];
});