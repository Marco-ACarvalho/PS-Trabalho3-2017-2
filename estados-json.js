// estados-json.js

var http = require('http');
var config = {
    hostname: 'localhost',
    port: 3000,
    path: '/estados',
    headers: {
        'Accept': 'application/json'
    }    
};
    
http.get(config, function (res) {
    res.on('data', function (params) {
        console.log("Resposta: " + params);
    });
});