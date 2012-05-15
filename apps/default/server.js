var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200);
	res.end('hello world azure from win.\ncurrent time on server: ' + new Date());
}).listen(process.env.PORT || 3708);