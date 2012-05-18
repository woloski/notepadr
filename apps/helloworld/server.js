var http = require('http');

http.createServer(function(req, res) {

	res.writeHead(200);
	res.end('hello from azure');
}).listen(process.env.PORT || 8089);