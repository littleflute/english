rem psrt.bat v0.13

echo === %1 ==============

ffmpeg -i %1.mp4 -vf subtitles=%1.srt srt%1.mp4
 
