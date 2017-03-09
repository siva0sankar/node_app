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

// start the server
app.listen(port,function(){
    console.log('app started');
});

// route the app
app.get('/',function(req,res){
    res.send('hello World')
});
