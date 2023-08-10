//new socket obj , shorthand to io.connect()
// const socket = io();

// socket.on('connect',function(){
//   console.log('connection ready!');
// })
// const video = document.getElementById("video-stream");

// socket.on('video', function(data) {
//   const blob = new Blob([data], { type: 'video/h264' });
//   const url = URL.createObjectURL(blob);
  
//   video.src = url;
//   video.autoplay = true

// });

const commandLineInput = document.getElementById('command-line-input');
const commandLineContainer = document.getElementById('command-line-container');

const greenOutputs = [];

commandLineInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const command = commandLineInput.value;
    const commandLineOutput = document.createElement('div');
    commandLineOutput.textContent = command;
    commandLineOutput.style.color = 'green';
    commandLineContainer.appendChild(commandLineOutput);
    greenOutputs.push(commandLineOutput);
    commandLineInput.value = '';

    if (command === 'walk') {
      fetch('/walk1')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        })
        .catch(error => {
          console.error('Error executing walk command:', error);
        });
    }
  }
  }
);

const clearButton = document.querySelector('#clear-button');

clearButton.addEventListener('click', () => {
  for (let i = 0; i < greenOutputs.length; i++) {
    greenOutputs[i].remove();
  }
});

