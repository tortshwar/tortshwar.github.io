window.onclick = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width,
    height = canvas.height;
  context.fillStyle = 'rgb(240,205,0)';
  
  var points = [],
    bounce = 0.9,
    gravity = 0.5,
    friction = 0.995;
  
  points.push({
    x: 10,
    y: canvas.height-(5+Math.random()*20),
    oldx: Math.random()*10,
    oldy: canvas.height
  });
  
  
  
  update();
  
  function update() {
    updatePoints();
    renderPoints();
    requestAnimationFrame(update);
  }
  
  function updatePoints() {
    for(var i = 0; i < points.length; i++) {
      var p = points[i],
        vx = (p.x - p.oldx) * friction,
        vy = (p.y - p.oldy) * friction;
      
      p.oldx = p.x;
      p.oldy = p.y;
      p.x += vx;
      p.y += vy;
      p.y += gravity;
      
      if(p.x > width) {
        p.x = width;
        p.oldx = p.x + vx * bounce;
      }
      else if(p.x < 0) {
        p.x = 0;
        p.oldx = p.x + vx * bounce;
      }
      if(p.y > height) {
        p.y = height;
        p.oldy = p.y + vy * bounce;
      }
      else if(p.y < 0) {
        p.y = 0;
        p.oldy = p.y + vy * bounce;
      }
    }
  }
  
  function renderPoints() {
    context.clearRect(0, 0, width, height);
    for(var i = 0; i < points.length; i++) {
      var p = points[i];
      context.beginPath();
      context.arc(p.x, p.y, 10, 0, Math.PI * 2);
      context.fill();
    }
  }
};