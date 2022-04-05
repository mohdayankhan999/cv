function copyText() {
  navigator.clipboard.writeText("1733364_o1Ga0JVygyahDcYc3ZLuzCRy5dHTaLjv");
  alert('Friend key copied!');
}

var currentFrame = 1;
function genGif(){
  document.getElementById("bird-gif").src = "images/birds/"+currentFrame+".png";
  currentFrame ++;
  if(currentFrame > 240){
    currentFrame = 1;
  }
}
setInterval(genGif, 60);
