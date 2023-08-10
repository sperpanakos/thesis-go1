echo "123" | sshpass -p '123' ssh -tt pi@192.168.12.1 "gst-launch-1.0 udpsrc port=8000 ! udpsink host=192.168.12.162 port=8002"
