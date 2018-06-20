const speakers = document.getElementsByClassName("speaker");

Array.from(speakers).forEach(function (speaker) {
  speaker.onclick = function(e) {
    openPopup(e.currentTarget);
  }
});

document.getElementById('close').onclick = function(e) {
  document.getElementById('talk').classList.remove("active");
}

function openDetail(id) {
  openPopup(document.getElementById(id))
}

function openPopup(elem) {
  const attributes = elem.dataset;
  if (attributes.name) {
    document.getElementById('talk').classList.add("active");
    document.getElementById('speaker-photo').src = elem.children[0].src;
    document.getElementById('speaker-name').innerHTML = elem.children[1].innerHTML;
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
}

