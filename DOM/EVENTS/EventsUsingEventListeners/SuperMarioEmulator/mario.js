var mario = document.getElementById("#mario");
var grass = document.querySelector("body");
var xPos = 0;
var yPos = "0px";


function moveBackgroundRight(event) {
    console.log(grass.style);
    if (event.keyCode === 39) {
      grass.style.backgroundPosition = xPos + "px " + yPos;
      xPos -= 20;
    }
  }
  function moveBackGroundLeft(event) {
    if (event.keyCode === 37) {
      grass.style.backgroundPosition = xPos + "px " + yPos;
      xPos += 20;
    }
  }
  function switchImgSrcRight(event) {
    if (event.keyCode === 39) {
      mario.src = "./img/mario_running.gif";
      mario.style.width = "120px";
      document.removeEventListener("keydown", switchImgSrcRight);
    }
  }
  function switchImgSrcLeft(event) {
    if (event.keyCode === 37) {
      mario.src = "img/mario_running_left.gif";
      img.style.width = "120px";
      document.removeEventListener("keydown", switchImgSrcLeft);
    }
  }
  function stopMoving(event) {
    if (!(event.keyCode === 39) || !(event.keyCode === 37)) {
      document.removeEventListener("keydown", stopMoving);
    }
  }
  document.addEventListener("keydown", moveBackgroundRight);
  document.addEventListener("keydown", moveBackGroundLeft);
  document.addEventListener("keydown", switchImgSrcRight);
  document.addEventListener("keydown", switchImgSrcLeft);