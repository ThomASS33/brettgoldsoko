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
  "#FA75C8","#E778BB","#D57CAD","#C27FA0","#B08293","#9D8685","#8B8978","#788D6A","#66905D","#539350","#419742","#2E9A35", "#3F9E34", "#50A233", "#62A632", "#73AA31", "#84AE30", "#95B330", "#A6B72F", "#B7BB2E", "#C9BF2D", "#DAC32C", "#EBC72B", "#ECC039", "#EEB848", "#EFB156", "#F0A964", "#F2A272", "#F39A81", "#F5938F", "#F68B9D", "#EBC72B", "#F784AB", "#F97CBA", "#EBC72B"
  
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