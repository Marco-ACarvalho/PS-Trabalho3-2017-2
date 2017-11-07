// adiciona-estados.js

var http = require('http');
var config = {
    hostname: 'localhost',
    port: 3000,
    path: '/estados',
    method: 'post',
    headers:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }    
};
    
var req = http.request(config, function (res) {
    res.on('data', function (params) {
        console.log("Resposta: " + params);
    });
});

var estados = {
    nome: 'Rio de Janeiro'
}

req.end(JSON.stringify(estados));