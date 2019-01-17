var http = require('http');
var fs = require('fs');


// Asynchronous image loading using pipe - Best Way for performance

http.createServer(function(req,res){
    var rs = fs.createReadStream(__dirname + '/image.jpg').pipe(res);
}).listen(3000);

// Synchronous image loading using buffer
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    let image = fs.readFileSync(__dirname + '/image.jpg');
    res.end(image);
}).listen(3000);


// Asynchronous image loading using buffer
http.createServer(function(req,res){
    var rs = fs.readFile(__dirname + '/image.jpg',function(err,data){
        if (err) throw err;
        res.end(data);
    })
}).listen(3000);

