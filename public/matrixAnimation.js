// Initializing the canvas
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas(); // Initial resize

var boxSize = 8;
var columns = canvas.width / boxSize;

var colors = [
  "#FA75C8", "#F784AB", "#F97CBA", "#F68B9D", "#F5938F", "#F39A81", "#F2A272", "#F0A964", "#EFB156", "#EEB848", "#ECC039", "#DAC32C",
  "#C9BF2D", "#B7BB2E", "#A6B72F", "#95B330", "#84AE30", "#73AA31", "#62A632", "#50A233", "#3F9E34", "#2E9A35"
];

var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = Math.floor(canvas.height / boxSize);
}

var animationFrameId;
var isPaused = false;
var isReversed = false;
var animationSpeed = 50; // Default speed in milliseconds

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < drops.length; i++) {
    var colorIndex = (drops[i] + i) % colors.length;
    ctx.fillStyle = colors[colorIndex];
    ctx.fillRect(i * boxSize, drops[i] * boxSize, boxSize, boxSize);
    ctx.strokeStyle = '#000';
    ctx.strokeRect(i * boxSize, drops[i] * boxSize, boxSize, boxSize);

    if (isReversed) {
      drops[i]++;
      if (drops[i] * boxSize > canvas.height && Math.random() > 0.95) {
        drops[i] = 0; // Reset to the top with a random chance
      }
    } else {
      drops[i]--;
      if (drops[i] * boxSize < 0 && Math.random() > 0.95) {
        drops[i] = Math.floor(canvas.height / boxSize); // Reset to the bottom with a random chance
      }
    }
  }

  if (!isPaused) {
    animationFrameId = setTimeout(draw, animationSpeed);
  }
}

function startAnimation() {
  if (!animationFrameId) {
    draw();
  }
}

function pauseAnimation() {
  isPaused = true;
  clearTimeout(animationFrameId);
}

function resumeAnimation() {
  if (isPaused) {
    isPaused = false;
    draw();
  }
}

function setSpeed(speed) {
  animationSpeed = speed;
  if (!isPaused) {
    clearTimeout(animationFrameId);
    draw();
  }
}

function stopAnimation() {
  isPaused = true;
  clearTimeout(animationFrameId);
}

function restartAnimation() {
  // Reinitialize drops without resizing the canvas
  columns = Math.floor(canvas.width / boxSize); // Ensure columns are recalculated
  drops = [];
  for (var i = 0; i < columns; i++) {
    drops[i] = Math.floor(canvas.height / boxSize);
  }

  // Stop and immediately start the animation
  clearTimeout(animationFrameId);
  isPaused = false; // Ensure animation is not paused
  draw(); // Start drawing the animation
}

function reverseAnimation() {
  isReversed = !isReversed;
  // Restart the animation to apply the reverse effect
  restartAnimation(); 
}

window.matrixAnimation = {
  start: startAnimation,
  pause: pauseAnimation,
  resume: resumeAnimation,
  stop: stopAnimation,
  restart: restartAnimation,
  setSpeed: setSpeed,
  reverse: reverseAnimation
};

// Handle window resize
window.addEventListener('resize', resizeCanvas);

// Start the animation initially
startAnimation();
