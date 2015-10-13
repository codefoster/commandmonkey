var app = require('express')();

var targetSocket;

//setup the http route (for receiving commands)
app.get('/api/command', function (req, res) {
    //if there's a target, send the command via a socket message
    if (targetSocket) targetSocket.emit('command', req.query.cmd);
});

//setup the sockets (for setting target)
var io = require('socket.io')(app);
io.on('connection', function (socket) {
    console.log('connection from client ' + socket.id);
    socket.on('setTarget', function () {
        console.log('Setting ' + socket.id + ' as target...');
        targetSocket = socket
    });
});

app.listen(process.env.PORT);
module.exports = app;
