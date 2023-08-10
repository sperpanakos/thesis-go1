# INSTALLATION/APPLICATION RUNNING INSTRUCTIONS

1.Download the dependencies:
npm install

Inside the web-app folder
2.Run the start_dogo scritps in order:
  -First "start_dogo.sh" (kills the proccesses needed)
  -Second "start_dogo2.sh" (executes example_walk)
  -Third "start_dogo3.sh" (executes the command needed to stream back to the user's computer)

3.Run the open_stream.sh script

4.Run the server.js file and navigate the the localhost:3000 page on your browser



## 5G IMPLEMENTATION 
(Reccommend using the camera_web.py and the RCNN file)

"camera_web.py" : receiving and displaying the incoming livestream (over 5G) using flask
"RCNN_inception_v2_human_detection_rtsp_web.py" : adds some human recognitionto the livestream
"simple_human_detection_v2.py" : adds some human recognition to the livestream/simplier and less effective algorithm (ALTERNATIVE)

