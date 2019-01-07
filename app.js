////////////// MODULES //////////////
var app     = require('express')();
var express = require('express');
var fs      = require('fs');

//////////////  CODE  //////////////
app.use('/public', express.static(__dirname + "/public"));
app.use( express.static(__dirname + "/public"));
//
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/views/index.html');
	console.log(req.method + ' : ' + req.url);
});


app.get('/login', function(req, res){
    res.sendFile(__dirname + '/public/views/login.html');
	console.log(req.method + ' : ' + req.url);
});

app.get('/login/vk', function(req, res){
    res.sendFile(__dirname + '/public/views/vklogin.html');
	console.log(req.method + ' : ' + req.url);
});

app.get('/user/home', function(req, res){
    res.sendFile(__dirname + '/public/views/home.html');
	console.log(req.method + ' : ' + req.url);
});
//////////////  MODS  //////////////

////////////// SERVER //////////////
var server = require('https').createServer({
    key: fs.readFileSync(__dirname + '/ssl/private.key'),
    cert: fs.readFileSync(__dirname + '/ssl/certificate.crt')
},app);

server.listen(443);