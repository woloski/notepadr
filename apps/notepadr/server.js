var http = require('http');
var express = require('express');
var fs = require('fs');
var share = require('share');
var mustache = require('mustache');

var doc = fs.readFileSync(__dirname + '/doc.html', 'utf8');

var app = express.createServer();

app.get('/', function(req, res) {
    res.redirect('/new');
});

app.get('/:docName', function(req, res) {
    var html = mustache.to_html(doc, { docname: req.params.docName });
    console.log(' new req' + req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);

});
var port = process.env.PORT || 8080;
share.server.attach(app, { db: { type: 'none' }, port: port })
app.listen(port);