var cylon = require('cylon');
var socket = require('socket.io-client')
    .connect('http://CommandMonkey.azurewebsites.net');

//work on a real device
cylon.robot({
    name: 'edison',
    connections: { edison: { adaptor: 'intel-iot' } },
    devices: { monkey: { driver: 'direct-pin', pin: 2 } },
    work: function (edison) {
        socket.emit('setTarget');
        socket.on('command', function (cmd) {
            edison.monkey.digitalWrite(1);
            setTimeout(function () { edison.monkey.digitalWrite(0); }, 2000);
        })
    }
}).start();