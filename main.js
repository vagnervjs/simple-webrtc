var webrtc = new WebRTC({
	localVideoEl: 'local',
	remoteVideosEl: 'remote',
	autoRequestMedia: true
});

webrtc.on('readyToCall', function () {
	'use strict';

	webrtc.joinRoom('room-name');
});