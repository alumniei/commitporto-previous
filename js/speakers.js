const speakers = document.getElementsByClassName("speaker");

Array.from(speakers).forEach(function (speaker) {
  speaker.onclick = function(e) {
    const attributes = e.currentTarget.dataset;
    if (!attributes.name) return;

    document.getElementById('talk').classList.add("active");
    document.getElementById('speaker-photo').src = e.currentTarget.children[0].src;
    document.getElementById('speaker-name').innerHTML = e.currentTarget.children[1].innerHTML;
    document.getElementById('talk-name').innerHTML = attributes.name;
    document.getElementById('talk-description').innerHTML = attributes.talkdesc;
    if (attributes.talkvideo) {
      document.getElementById('talk-video').href = attributes.talkvideo;
    } else {
      document.getElementById('talk-video').style.display = 'none';
    }
    document.getElementById('bio').innerHTML = attributes.bio;

    document.getElementById('speakers').scrollIntoView({block: "start", behavior: "smooth"});
  }
});

document.getElementById('close').onclick = function(e) {
  document.getElementById('talk').classList.remove("active");
}
