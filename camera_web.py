from flask import Flask, render_template, Response
import numpy as np
import cv2
# from persondetection import DetectorAPI
# import time
import queue
import threading
q=queue.Queue()


app = Flask(__name__)
def Receive():
    global cap
    counter = 0
    cap = cv2.VideoCapture('udpsrc port=8002 buffer-size=2097152 ! application/x-rtp, media=video, encoding-name=H264 ! rtph264depay ! h264parse ! avdec_h264 ! videoconvert ! videoflip method=rotate-180 ! appsink', cv2.CAP_GSTREAMER)
    ret, frame = cap.read()
    q.put(frame)
    while ret:
        # counter = counter + 1
        ret, frame = cap.read()
        # reduce frames to be driven to the human detection app
        # if counter==10:
        q.put(frame)
            # counter = 0


def Display():
    while True:
        if q.empty() !=True:          
           img=q.get()
     
           ret, buffer = cv2.imencode('.jpg', img)
           frame = buffer.tobytes()
           yield (b'--frame\r\n'
                  b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')  # concat frame one by one and show result
            

@app.route('/video_feed')
def video_feed():
    #Video streaming route. Put this in the src attribute of an img tag
    return Response(Display(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/')
def index():
    """Video streaming home page."""
    return render_template('index.html')

if __name__=='__main__':
    p1=threading.Thread(target=Receive)
    # p2 = threading.Thread(target=Display)
    p1.start()
    # p2.start()
    app.run(host='0.0.0.0', port=5001)
    # app.run(debug=True)
