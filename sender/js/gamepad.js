var gamepad = {
	currentGamePad: null,
	polling: false,
	prevTimestamp: null,
	prevButtons: [],
	keyMap: {
		0: 90,//B
		1: 88,//A
		8: 83,//select
		9: 65,//start
		12: 38,//up,
		13: 40,//down,
		14: 37,//left,
		15: 39//right,
	},
	init: function() {
		var gamepadAPI = !! navigator.webkitGetGamepads || !! navigator.webkitGamepads;
		if(!gamepadAPI)
			alert("no gamepad support");
		else {
			gamepad.startPolling();
		}
	},
	startPolling: function() {
		if(!gamepad.polling) {
			gamepad.polling = true;
			gamepad.poll();
		}
	},
	stopPolling: function() {
		gamepad.polling = false;
	},
	poll: function() {
		gamepad.status();
		if(gamepad.polling) {
			if(window.requestAnimationFrame) {
				window.requestAnimationFrame(gamepad.poll);
			} else if (window.webkitRequestAnimationFrame) {
				window.webkitRequestAnimationFrame(gamepad.poll);
			}
		}
	},
	status: function() {
		var gamepadFound = gamepad.getGamePad();
		if(gamepadFound) {
			if(gamepad.currentGamePad.timestamp && gamepad.currentGamePad.timestamp == gamepad.prevTimestamp)
				return;
			$.map(gamepad.currentGamePad.buttons, function(val, index) {
				if(val == 1) {				
					var keycode = gamepad.keyMap[index];
					cast_api.sendMessage(cv_activity.activityId, "Test", {"type": "keydown", "keycode":keycode})					
					return;
				}
				if(val == 0 && gamepad.prevButtons[index] == 1) {
					var keycode = gamepad.keyMap[index];
					cast_api.sendMessage(cv_activity.activityId, "Test", {"type": "keyup", "keycode":keycode})					
				}
			});		

			gamepad.prevTimestamp = gamepad.currentGamePad.timestamp;
			gamepad.prevButtons = gamepad.currentGamePad.buttons;
		}
	},
	getGamePad: function() {
		gamepad.currentGamePad = navigator.webkitGetGamepads && navigator.webkitGetGamepads()[0];
		if(gamepad.currentGamePad === undefined)
			return false;

		return true;
	}


}