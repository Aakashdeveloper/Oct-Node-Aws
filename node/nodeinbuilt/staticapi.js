var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    fs.readFile('db.json','utf-8',function(error,data){
        if(error) throw error;
        res.write(data);
        res.end();
    });
});

server.listen(9800);