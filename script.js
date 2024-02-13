function nextPage() {
    window.location.href = "page2.html";
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}

function redirect() {
    let randomNumber = Math.random();
    if (randomNumber < 0.5) {
      window.location.href = "page3.html";
    } else {
      window.location.href = "page4.html";
    }
  }
  