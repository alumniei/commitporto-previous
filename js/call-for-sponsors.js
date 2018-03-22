const name = document.getElementById("sponsor-name");
const email = document.getElementById("sponsor-email");
const submit = document.getElementById("sponsor-submit");

submit.onclick = () => {
  if(name.value && email.value) {
    const url = "https://hooks.slack.com/services/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";
    const xhr = new XMLHttpRequest();
    const data = JSON.stringify({"text": `Chamo-me ${name.value} e quero patrocinar a commitporto:commitporto:! Enviem-me o prospectus para: ${email.value} (cc <!here>)`});

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
    submit.classList.add('disabled');

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const callForSponsors = document.getElementById('call-for-sponsors');
        const successMessage = document.getElementById('success-message');
        successMessage.classList.add('visible');

        name.value = '';
        email.value = '';
      }
    }
  }
}

toggleSendButton = () => {
  if(name.value && email.value) {
    submit.classList.remove('disabled');
  } else {
    submit.classList.add('disabled');
  }
}

name.oninput = toggleSendButton;
email.oninput = toggleSendButton;
