var express = require('express')
var share = require('share');
var mustache = require('mustache');
var fs = require('fs');
var port = process.env.PORT || 8080;

var app = express.createServer();
var template = fs.readFileSync("./doc.html.mu", 'utf8');

app.get('/', function(req, res, next) {
	res.writeHead(200);
    res.end('<html><body>test</body></html>');
	//res.redirect('/new');
});

/*
app.get('/:docName', function(req, res, next) {
    var docName = req.params.docName;
    var model = app.model;
    model.getSnapshot(docName, function(error, doc) {
        if(error) 
            console.log('doc not exist ' + docName);
        else 
            console.log(doc.snapshot);
    });
    var html = mustache.to_html(template, { docName: docName });
    res.writeHead(200);
    res.end(html);
});
*/
share.server.attach(app, { db: { type: 'none' }, port: port });
app.listen(port);
