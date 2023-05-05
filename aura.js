	// Get access to the webcam
  navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    var video = document.getElementById("video");
    video.srcObject = stream;
    video.play();
  })
  .catch(function(err) {
    console.log("Error: " + err);
  });

// Take a snapshot of the video and display it on the canvas
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
document.getElementById("snap").addEventListener("click", function() {
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
});

//colorpicker API

function eyedropper(){
document.getElementById("start-button").addEventListener("click", () => {
  const resultElement = document.getElementById("result");

  if (!window.EyeDropper) {
    resultElement.textContent =
      "Your browser does not support the EyeDropper API";
    return;
  }

  const eyeDropper = new EyeDropper();

  eyeDropper.open().then((result) => {
      resultElement.textContent = result.sRGBHex;
      resultElement.style.backgroundColor = result.sRGBHex;
      setTimeout(openLoad(), 5000);
    })
    .catch((e) => {
      resultElement.textContent = e;
    })
})
  }

function openLoad(){
    window.location.assign("load.html");
  }
