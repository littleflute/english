rem mkmp4.bat v0.12

echo === %1 ==============

ffmpeg -i %1.mp3 -i 1.png  -s 640x480 -vcodec mpeg4 %1.mp4
