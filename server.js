const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const net = require('net');

app.use(express.static(__dirname))

// serve the index.html file
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/info.html',function(req,res){
  res.sendFile(__dirname + '/public/info.html')
})

// create a TCP server to receive the H264 video stream
const server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    console.log('Received ' + data.length + ' bytes of video data');
    // send the H264 video stream to the client via Socket.IO
    io.emit('video', data);
  });
});

// start the TCP server to listen for incoming video stream
server.listen(5000, function() {
  console.log('TCP server listening on port 5000');
});

// start the HTTP server to serve the index.html file
http.listen(3000, function(){
  console.log('HTTP server listening on *:3000');
});
