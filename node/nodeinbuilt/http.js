var http = require('http');
//import http from 'http';

var server = http.createServer(function(req,res){
    res.write('<h1>Welcome to node server apps</h1>')
    res.end()
});

server.listen(8787)