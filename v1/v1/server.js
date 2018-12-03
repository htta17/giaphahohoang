'use strict';
var http = require('http'),
    connect = require("connect");
var port = process.env.PORT || 1337;

var app = connect()        
    .use(function (req, res, next) {
        console.log("First middleware");
        next();
    })
    .use(function (req, res, next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World\n Test');
    })

http.createServer(app).listen(3000);

