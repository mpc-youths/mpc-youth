var percentLabel = document.getElementById("percent-label");
var circle = document.querySelector("#svg #bar");

function updateProgress() {
  var val = parseInt(percentLabel.textContent);

  if (isNaN(val)) {
    val = 100;
  } else {
    var r = circle.getAttribute("r");
    var c = Math.PI * (r * 2);

    if (val < 0) {
      val = 0;
    }
    if (val > 100) {
      val = 100;
    }

    var pct = ((100 - val) / 100) * c;

    circle.style.strokeDashoffset = pct;
    document.getElementById("cont").setAttribute("data-pct", val);
  }
}

// Initial update
updateProgress();