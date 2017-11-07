angular.module('contatooh').factory('automovel',
    function($resource){
        return $resource('automoveis');
    }
);