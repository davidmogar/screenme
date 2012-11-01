/*
 * @author David Moreno Garcia
 *
 * Ok... I know... I'll fill this with more info soon :P
 */

$(document).ready(function () {
  $("#slides_pane").resizable({
    containment: "#wrapper",
    grid: 1,
    start: function(){
      iframe = $('iframe');
      var div = $('<div></div>');

      $('#slides_pane').append(div[0]);
      div[0].id = 'temp_div';
      div.css({position:'absolute'});
      div.css({top: iframe.position().top, left:0});
      div.height(iframe.height());
      div.width('100%');
    },
    stop: function(){
      $('#temp_div').remove();
    }
  });
  $("#slides_pane").draggable({
    containment: "#wrapper",
    scroll: false,
    snap: "#wrapper",
    snapMode: "inner"
  });

  $("#webcam_pane").resizable({
    aspectRatio: 4/3,
    containment: "#wrapper",
    grid: 1
  });
  $("#webcam_pane").draggable({
    containment: "#wrapper",
    scroll: false,
    snap: "#wrapper",
    snapMode: "inner"
  });

  loadUserMedia();
  loadSlideshare('7292569');
});

var onUserMediaError = function(e) {
    console.log('User media error', e);
}

function loadUserMedia() {
  if (navigator.getUserMedia) {                       
    navigator.getUserMedia({video: true, audio: true},
        function(localMediaStream) {
      var video = $("#webcam");
      video.attr('src', window.URL.createObjectURL(localMediaStream));
    }, onUserMediaError); 
  } else {                                                                                                 alert('Your browser is not supported.'); 
  }
}

function loadSlideshare(embedCode) {
  var src = 'http://www.slideshare.net/slideshow/embed_code/' + embedCode; 
  $('#slides_pane').append(
    '<iframe src="' + src + '""></iframe>'
  );
}

window.URL = window.URL || window.webkitURL;
navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;
