var socket = require('socket.io-client')
    .connect('http://CommandMonkey.azurewebsites.net');

console.log("Requesting to be target...");
socket.emit('setTarget');
socket.on('command', function (cmd) {
    console.log('Received a command: ' + cmd);
})