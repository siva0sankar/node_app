/* 
//simple node server

// import http module
var http = require('http');

// handle sending request and returning responce

function handleRequests(req,res){
// return string;
res.end('Hello World!');
}

// create server
var server = http.createServer(handleRequests);

// start server and listen on port x

server.listen(8080,function(){
    console.log('server started');
});

*/


////////////////////////// EXPRESS ///////////////////

var express = require('express');
var app = express();
var port = 8080;

// router for app
var router = require('./app/routes');
app.use('/',router);

// set static file location (css,images and etc)
app.use(express.static(__dirname + '/public'));


// start the server
app.listen(port,function(){
    console.log('app started');
});
