// Initialising the canvas
var canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d");

  var canvas = document.querySelector('canvas'),
  ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var boxSize = 8,
  columns = canvas.width / boxSize;

  var colors = [
    "#FA75C8", "#F784AB", "#F97CBA", "#F68B9D", "#F5938F", "#F39A81", "#F2A272", "#F0A964", "#EFB156", "#EEB848", "#ECC039", "#DAC32C",
    "#C9BF2D", "#B7BB2E", "#A6B72F", "#95B330", "#84AE30", "#73AA31", "#62A632", "#50A233", "#3F9E34", "#2E9A35"
  ];
  
  

var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = Math.floor(canvas.height / boxSize);
}

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
      var colorIndex = (drops[i] + i) % colors.length;
      ctx.fillStyle = colors[colorIndex];
      ctx.fillRect(i * boxSize, drops[i] * boxSize, boxSize, boxSize);
      ctx.strokeStyle = '#000';
      ctx.strokeRect(i * boxSize, drops[i] * boxSize, boxSize, boxSize);
      drops[i]--;
      if (drops[i] * boxSize < 0 && Math.random() > 0.95) {
          drops[i] = Math.floor(canvas.height / boxSize);
      }
  }
}

setInterval(draw, 50);