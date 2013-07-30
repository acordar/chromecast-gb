chromecast-gb
=============

Working Game Boy emulator for chromecast

Video here (ignore the cat): http://www.youtube.com/watch?v=yKJ8iX45cGY

Credit of GB emulator goes to Pedro Ladaria at http://codebase.es/jsgb/

Credit of GB Rom http://momeka.com/

Instructions
--------------
1) whitelist your device: https://developers.google.com/cast/whitelisting

2) Edit line 21 of receiver/index.html with your own APP ID

3) Edit line 31 of sender/index.html with your own APP ID

4) Put the receiver code at the URL you used to whitelist your chromecast

5) Put the sender code anywhere and tell your chromecast chrome extension to load the SDK at that domain (https://developers.google.com/cast/whitelisting)

6) Open the sender page in your browser... it should automatically connect to your chromecast and load the reciever page on your chromecast

7) Debug with following instructions https://developers.google.com/cast/developing_your_receiver#debugging


360 GamePad Support
--------------
This application now support the 360 gamepad as a source of user input. It may work with other gamepads if the button mappings are the same. The button mappings are as follows:

360 Pad Button A -> Gameboy Button B (yuck, I know)<br>
360 Pad Button B -> Gameboy Button A <br>
360 dpad -> Gameboy dpad<br>
360 Pad Button Start -> Gameboy Button Start<br>
360 Pad Button Back -> Gameboy Button Select
