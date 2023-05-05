// set up the canvas and context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// set the canvas dimensions to match the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// create an array of birds
var birds = [];
for (var i = 0; i < 200; i++) {
  birds.push({
    x: Math.random() * 5, // x position
    y: Math.random() * canvas.height, // y position
    vx: (Math.random() - 0.5) * 10, // x velocity
    vy: (Math.random() - 0.5) * 10, // y velocity
    size: 50 // size of the bird
  });
}

// set up the animation loop
function animate() {
  // clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // draw the birds
  birds.forEach(function(bird) {
    const image = document.createElement("img");
    image.src = 'bird.png';
    ctx.drawImage(image, bird.x, bird.y, bird.size, bird.size);
    // ctx.translate(canvas.width/2, canvas.height/2);
    ctx.rotate(Math.random() * 10);
    
    // move the bird
    bird.x += bird.vx;
    bird.y += bird.vy;
    
    // check if the bird has gone off the screen
    if (bird.x < 0 || bird.x > canvas.width ||
        bird.y < 0 || bird.y > canvas.height) {
      // remove the bird from the array
      var index = birds.indexOf(bird);
      if (index > -1) {
        birds.splice(index, 1);
      }
      
      // turn the background black
      if(birds.length <= 5){
        document.body.style.backgroundColor = "black";
        setTimeout(openPage, 200);

      }
    }
  });
  
  // request the next frame of the animation
  requestAnimationFrame(animate);
}

function openPage(){
  window.location.assign("title.html");
}

animate();
