// DUAL SERVER FILE. ONE SERVER FOR THE TCP CONNECTION AND ONE FOR THE WEBPAGE SERVICE
//new hange

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const spawn = require('child_process').spawn;
const net = require('net');

app.use(express.static(__dirname))

// serve the index.html file
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/info.html',function(req,res){
  res.sendFile(__dirname + '/public/info.html')
})


//(Doing it manually)
// Start the GStreamer pipeline with a spawn process
//const pipeline = spawn('/usr/bin/gst-launch-1.0', ['udpsrc', 'port=8002', '!', 'application/x-rtp,media=video,clock-rate=90000,encoding-name=H264,payload=96', '!', 'rtph264depay', '!', 'avdec_h264', '!', 'video/x-h264', '!' , 'videoconvert' , '!', 'identity', 'drop-allocation=true', '!', 'tcpclientsink', 'host=127.0.0.1', 'port=5000']);
// για καποιον λογο δεν γινεται spawn to pipeline ( na to tsekarw )

//T C P    S E R V E R
// create a TCP server to receive the H264 video stream
const server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    console.log('Received ' + data.length + ' bytes of video data');
    // feed the data to the decoder
    //parser.decode(data);
    // send the H264 video stream to the client via Socket.IO
    io.emit('video', data);
  });
});

// start the TCP server to listen for incoming video stream
server.listen(5000, function() {
  console.log('TCP server listening on port 5000');
});



//H T T P    S E R V E R 
// start the HTTP server to serve the index.html file
http.listen(3000, function(){
  console.log('HTTP server listening on *:3000');
});

