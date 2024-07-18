// Initialising the canvas
var canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d");

  var canvas = document.querySelector('canvas'),
  ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var boxSize = 10,
  columns = canvas.width / boxSize;

  var colors = [
  "#2E9A35", "#3F9E34", "#50A233", "#62A632", "#73AA31", "#84AE30", "#95B330", "#A6B72F", "#B7BB2E", "#C9BF2D", "#DAC32C", "#EBC72B",
  
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

setInterval(draw, 33);
