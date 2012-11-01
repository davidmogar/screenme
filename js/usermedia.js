window.URL = window.URL || window.webkitURL;
navigator.getUserMedia = 
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia;

var onUserMediaError = function(e) {
  console.log('User media error', e);
}

function initUserMedia() {
  if (navigator.getUserMedia) {
    navigator.getUserMedia({video: true, audio: true},
        function(localMediaStream) {
      var video = $("video#webcam");
      video.attr('src', window.URL.createObjectURL(localMediaStream));
    }, onUserMediaError);
  } else {                                                                                                 alert('Your browser is not supported.');
  }
}
