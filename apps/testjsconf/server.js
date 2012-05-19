var http = require('http');
var express = require('express');
var fs = require('fs');
var share = require('share');

var port = process.env.PORT || 8080;

var app = express.createServer();

var doc = fs.readFileSync(__dirname + '/doc.html', 'utf8');

app.get('/', function(req, res) {
    console.log('req : ' + req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(doc);

});

share.server.attach(app, { db: { type: 'none' }, port: port });
app.listen(port);