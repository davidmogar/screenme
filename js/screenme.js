/*
 * @author David Moreno Garcia
 *
 * Ok... I know... I'll fill this with more info soon :P
 */

$(document).ready(function () {
  $("#webcam").resizable({
    aspectRatio: 4/3,
    containment: "#wrapper",
    grid: 1
  });
  $("#webcam").draggable({
    containment: "#wrapper",
    scroll: false,
    snap: "#wrapper",
    snapMode: "inner"
  });

  loadUserMedia();
});

var onUserMediaError = function(e) {
    console.log('User media error', e);
}

function loadUserMedia() {
  if (navigator.getUserMedia) {                       
    navigator.getUserMedia({video: true, audio: true},
        function(localMediaStream) {
      var video = $("#webcam video");
      video.attr('src', window.URL.createObjectURL(localMediaStream));
    }, onUserMediaError); 
  } else {                                                                                                 alert('Your browser is not supported.'); 
  }
}

window.URL = window.URL || window.webkitURL;
navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;
