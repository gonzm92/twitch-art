function createStars(container, count) {
  for (var i = 0; i < count; i++) {
    drawStar(container);
  }
}

function drawStar(container) {
  var star = document.createElement('div');
  star.className = 'star';
  var x = Math.random() * 100;
  var y = Math.random() * 100;

  if (x > 20 && x < 80 && y > 20 && y < 80) {
    x = x < 50 ? 20 : 80;
    y = y < 50 ? 20 : 80;
  }

  star.style.left = x + '%';
  star.style.top = y + '%';
  container.appendChild(star);
}

var starsContainer = document.getElementById('stars-container');
createStars(starsContainer, 1000);

var backgroundMusic = new Audio('background-music.mp3');
backgroundMusic.volume = 0.5;
backgroundMusic.loop = true;
backgroundMusic.play();
