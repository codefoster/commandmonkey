var http = require('http');
var app = require('express')();

var targetSocket;

app.set('port', process.env.PORT);
app.get('/api/command', function (req, res) {
    if(targetSocket) targetSocket.emit('command', req.query.cmd);
});

module.exports = app;

var server = http.createServer(app).listen(app.get('port'));

var io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log('connection from client ' + socket.id);
    socket.on('setTarget', function () {
        console.log('Setting ' + socket.id + ' as target...');
        targetSocket = socket
    });
});
