chromecast-gb
=============

Working Game Boy emulator for chromecast

Credit of GB emulator goes to Pedro Ladaria at http://codebase.es/jsgb/

Credit of GB Rom http://momeka.com/

Instructions
--------------
1) whitelist your device: https://developers.google.com/cast/whitelisting

2) Edit line 21 with your own APP ID of receiver/index.html

3) Edit line 31 with your own APP ID of sender/index.html

4) Put the receiver code at the URL you used to whitelist your chromecast

5) Put the sender code anywhere and tell your chromecast chrome extension to load the SDK at that domain (https://developers.google.com/cast/whitelisting)

6) Open the sender page in your browser... it should automatically connect to your chromecast and load the reciever page on your chromecast

7) Debug with following instructions https://developers.google.com/cast/developing_your_receiver#debugging
