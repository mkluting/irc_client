var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// send index.html on connect
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/js/client.js', function(req, res) {
    res.sendFile(__dirname + '/js/client.js');
});
/*
app.set('views', __dirname + '/tmpl');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname+'/public'));
app.get('/', function(req,res) {
    res.render("page");
});
*/
// Log Connect/Disconnect
io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });
});

/*
var io = require('socket.io').listen(app.listen(3000));
*/
// start server listen
http.listen(3000, function() {
    console.log('listening on *:3000');
});
