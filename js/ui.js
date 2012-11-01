function initUI() {
  $("#slides_panel").resizable({
    containment: "#wrapper",
    start: function(){
      iframe = $('iframe');
      var div = $('<div></div>');
                  
      $('#slides_panel').append(div[0]);
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

  $("#slides_panel").draggable({
    containment: "#wrapper",
    scroll: false,
    snap: true,
    snapMode: "corner"
  });

  $("#webcam_panel").resizable({
    aspectRatio: 4/3,
    containment: "#wrapper",
  });

  $("#webcam_panel").draggable({
    containment: "#wrapper",
    scroll: false,
    snap: true,
    snapMode: "corner"
  });
}

function showOptions() {
  $('#options_panel').animate({
    right: '-80px'
  }, 'slow');
}
