var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
	console.log('кто то подключился методом ' + req.method, 'и попал на ' + req.url);
});

app.get('/chat', function(req, res){
    res.sendFile(__dirname + '/chat.html');
	console.log('кто то подключился методом ' + req.method, 'и попал на ' + req.url);
});

app.get('/login', function(req, res){
    res.sendFile(__dirname + '/login.html');
	console.log('кто то подключился методом ' + req.method, 'и попал на ' + req.url);
});


http.listen(80, function(){
    console.log('Клиент запущен на порте 80');
});