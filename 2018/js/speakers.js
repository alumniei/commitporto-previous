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

    if (attributes.linkedin) {
      document.getElementById('social-linkedin').href = attributes.linkedin;
      document.getElementById('social-linkedin').children[0].classList.remove('hidden');
    } else {
      document.getElementById('social-linkedin').children[0].classList.add('hidden');
    }

    if (attributes.twitter) {
      document.getElementById('social-twitter').href = attributes.twitter;
      document.getElementById('social-twitter').children[0].classList.remove('hidden');
    } else {
      document.getElementById('social-twitter').children[0].classList.add('hidden');
    }

    if (attributes.github) {
      document.getElementById('social-github').href = attributes.github;
      document.getElementById('social-github').children[0].classList.remove('hidden');
    } else {
      document.getElementById('social-github').children[0].classList.add('hidden');
    }

    if (attributes.gitlab) {
      document.getElementById('social-gitlab').href = attributes.gitlab;
      document.getElementById('social-gitlab').children[0].classList.remove('hidden');
    } else {
      document.getElementById('social-gitlab').children[0].classList.add('hidden');
    }

    if (attributes.link) {
      document.getElementById('social-link').href = attributes.link;
      document.getElementById('social-link').children[0].classList.remove('hidden');
    }

    if (attributes.talkvideo) {
      document.getElementById('talk-video').href = attributes.talkvideo;
    } else {
      document.getElementById('talk-video').style.display = 'none';
    }
    document.getElementById('bio').innerHTML = attributes.bio;

    document.getElementById('speakers').scrollIntoView({block: "start", behavior: "smooth"});
  }
}
