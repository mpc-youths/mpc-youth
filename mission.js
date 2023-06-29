function updateProgress(progressContainer) {
  var percentLabel = progressContainer.querySelector('.progress-label');
  var circle = progressContainer.querySelector('.progress-bar');

  var val = parseInt(percentLabel.textContent);

  if (isNaN(val)) {
    val = 100;
  } else {
    var r = circle.getAttribute('r');
    var c = Math.PI * (r * 2);

    if (val < 0) {
      val = 0;
    }
    if (val > 100) {
      val = 100;
    }

    var pct = ((100 - val) / 100) * c;

    circle.style.strokeDashoffset = pct;
    circle.style.strokeDasharray = c;
    progressContainer.setAttribute('data-pct', val);
  }
}

// Example usage
var progressContainers = document.querySelectorAll('.progress-container');
progressContainers.forEach(function (container) {
  updateProgress(container);
});
