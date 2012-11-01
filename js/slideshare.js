function loadSlideshare(embedCode) {
    var src = 'http://www.slideshare.net/slideshow/embed_code/' + embedCode;
    $("#slides_panel").append(
      '<iframe src="' + src + '""></iframe>'
    );
}
