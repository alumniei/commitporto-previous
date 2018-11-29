const videoSection = document.getElementById("video-section");
const video = document.getElementById("video");

videoSection.onmouseenter = function() {
  video.play();
};
videoSection.onmouseout = function(e) {
  if(!videoSection.contains(e.toElement)) {
    video.pause();
  }
};
