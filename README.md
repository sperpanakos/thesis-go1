1.Download the files from Github:
git clone git@github.com:sperpanakos/thesis-go1.git

2.Download the dependencies:
npm install

3.Run the test-source gstreamer pipeline in the command line:
gst-launch-1.0 videotestsrc ! video/x-raw,width=640,height=480 ! videoconvert ! x264enc ! rtph264pay ! udpsink host=127.0.0.1 port=8002

4.Receive the incoming h264 video frames,encode them in WebM format and serve them on port 8004:
gst-launch-1.0 udpsrc port=8002 ! application/x-rtp,encoding-name=H264,payload=96 ! rtph264depay ! avdec_h264 ! videoconvert ! vp8enc ! webmmux ! tcpserversink host=127.0.0.1 port=8004
