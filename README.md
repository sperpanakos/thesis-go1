# Thesis: Study and Design of an IoT Application in 5G utilizing the Robotic Quadruped Unitree Go1

**Author:** Panagiotis Athanasios Sperdoulis  
**University:** University of Patras  
**Degree:** Electrical Engineering & Computer Science  


## Introduction

This README file accompanies my thesis project, where I explore the development of a livestream application with a 5G implementation using the robotic dog **Unitree Go1** . As part of my studies at the University of Patras, pursuing a degree in Electrical Engineering & Computer Science, I've worked on this project to demonstrate the integration of modern IoT and 5G technologies in practical applications.

Feel free to explore the installation instructions, application details, and 5G implementation aspects provided in this document.

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

