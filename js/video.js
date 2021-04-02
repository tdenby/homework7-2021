var video = document.getElementById("player1");
var slider = document.querySelector("#slider");
var firstTime = true;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	if (firstTime == true) {
		document.querySelector("#volume").innerHTML = 100 + "%";
		video.volume = 1;
		slider.value = 100;
		firstTime = false;
	}
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});



document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate = video.playbackRate - .05;
	console.log("Video playback rate is ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	video.playbackRate = video.playbackRate + .05;
	console.log("Video playback rate is ", video.playbackRate);
});

var muteButton = document.querySelector("#mute");
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		console.log("Mute Video");
		document.querySelector('#mute').innerText = 'Unmute';
		video.muted = true;
	}
	else {
		console.log("Unmute Video");
		document.querySelector('#mute').innerText = 'Mute';
		video.muted = false;
	}
});

document.querySelector("#skip").addEventListener("click", function() {
	var time = video.currentTime;
	console.log("Video duration is ", video.duration, " seconds.");
	console.log("Skip Ahead");
	console.log("Current playback time in seconds: ", video.currentTime);
	if (time + 15 > video.duration) {
		video.currentTime = (time + 15) - video.duration;
		video.play();
	}
	else {
		video.currentTime = video.currentTime + 15;
	}
	console.log("New playback time in seconds: ", video.currentTime);
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate * .95;
});

slider.oninput = function() {
	video.volume = slider.value/100;
	document.querySelector("#volume").innerHTML = slider.value + "%";
	console.log("Volume is set to ", video.volume);
  }

  document.querySelector("#vintage").addEventListener("click", function() {
	$("#player1").addClass('oldSchool');
	console.log("vintage filter applied");
});

document.querySelector("#orig").addEventListener("click", function() {
	$("#player1").removeClass('oldSchool');
	console.log("vintage filter removed");
});