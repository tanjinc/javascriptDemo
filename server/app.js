var http = require('http');
var fs = require("fs");

var data = {
    key:'hello',
    value:'world'
};

var server = http.createServer(function (req, res) {
    // res.writeHead(200, {'Content-Type':'application/json'});
    //可以解决跨域的请求
    res.writeHead(200,{"Content-Type":'text/plain','charset':'utf-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});
    str=fs.readFileSync('data.txt');
    res.write(str);
    res.end();
});

server.listen(8082, function () {
    console.log('listion on localhost:8082');
})