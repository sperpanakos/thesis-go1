
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const dgram = require('dgram')

app.use(express.static(__dirname))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/info.html',function(req,res){
  res.sendFile(__dirname + '/public/info.html')
})

//Create UDP socket
const udpSocket = dgram.createSocket('udp4')

udpSocket.on('message',function(message){
  io.emit('stream',message)
})

udpSocket.bind(8004)

io.on('connection',function(socket){
  console.log('A client connected');

  socket.on('disconnect',function () {
    console.log('A client just disconnected');
  })
})


app.get('/walk1',function(req,res){
  exec("./run_dogo.sh",(error,stdout,stderr)=>{
    if(error){
      console.log(`error: ${error.message}`);
      res.status(500).send("Error executing script");
      return
    }
    if(stderr){
      console.log(`stderr: ${stderr}`);
      res.status(500).send("Error executing script")
      return
    }
    console.log(`stdout: ${stdout}`);
    res.send("Script executed succesfully")
  })

  });

  http.listen(3000, function(){
    console.log('HTTP server listening on *:3000');
  });


// conn.on('ready', function() {
//   console.log('Connected to VM');
//   const cdCommand = 'cd /unitree_legged_sdk/build/ &&'
//   const sudoCommand = 'sudo ./example_walk'
//   const fullCommand = `${cdCommand} ${sudoCommand}`
//   const vmCommand = `sshpass -p 'panos1999' ssh -o`

//   conn.exec(vmCommand + ' "' + fullCommand + '"', function(err, stream) {
//     if (err) throw err;
//     stream.on('close', function(code, signal) {
//       console.log('Example walk exited with code ' + code);
//       conn.end();
//     }).on('data', function(data) {
//       console.log('STDOUT: ' + data);
//     }).stderr.on('data', function(data) {
//       console.log('STDERR: ' + data);
//     });
//   });
// }).connect({
//   host: '192.168.68.50',
//   username: 'sper',
//   password: 'panos1999'




// create a TCP server to receive the H264 video stream
// const server = net.createServer(function(socket) {
//   socket.on('data', function(data) {
//     console.log('Received ' + data.length + ' bytes of video data');
//     // send the H264 video stream to the client via Socket.IO
//     io.emit('video', data);
//   });
// });

// start the TCP server to listen for incoming video stream
// server.listen(5000, function() {
//   console.log('TCP server listening on port 5000');
// });

// start the HTTP server to serve the index.html file
