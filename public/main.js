//


//new socket obj , shorthand to io.connect()
const socket = io();

socket.on('connect',function(){
  console.log('connection ready!');
})
const video = document.getElementById("video-stream");

socket.on('video', function(data) {
  const blob = new Blob([data], { type: 'video/h264' });
  const url = URL.createObjectURL(blob);
  
  video.src = url;
  video.autoplay = true

});

