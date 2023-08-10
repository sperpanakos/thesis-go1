gst-launch-1.0 udpsrc port=9201 buffer-size=2097152 ! application/x-rtp,media=video,encoding-name=H264 ! rtph264depay ! h264parse ! avdec_h264 ! videoconvert ! vp8enc deadline=3 ! webmmux ! tcpserversink host=127.0.0.1 port=8004 



