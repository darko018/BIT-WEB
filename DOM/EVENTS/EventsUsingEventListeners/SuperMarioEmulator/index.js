var bodyContainer = document.querySelector("body")
var mario = document.querySelector(".mario");
var container = document.querySelector(".main-container");
var xPosition = 0;
var intervalId;

var moveRight = function (e) {
        if (e.keyCode === 39) {
                mario.setAttribute("src", "./img/mario_running.gif");
        }  
        bodyContainer.removeEventListener("keydown", moveRight);
}

var stopMoving = function (e) {
        if (e.keyCode === 39) {
                mario.setAttribute("src", "./img/mario.png");
        }
        bodyContainer.addEventListener("keydown", moveRight);
}

var groundMoving = function (e) {
        if (e.keyCode === 39) {
                intervalId = setInterval(function() {
                        xPosition -= 1;
                        container.style.backgroundPosition = xPosition + 'px bottom';  
                },1);
                bodyContainer.removeEventListener("keydown", groundMoving);
        }
}

var groundStop = function (e) {
        if (e.keyCode === 39) {
                clearInterval(intervalId);
        }
        bodyContainer.addEventListener("keydown", groundMoving);
}

var moveLeft = function (e) {
        if (e.keyCode === 37) {
                mario.setAttribute("src", "./img/mario_running_left.gif");
        }  
        bodyContainer.removeEventListener("keydown", moveLeft);
}

var stopMovingLeft = function (e) {
        if (e.keyCode === 37) {
                mario.setAttribute("src", "./img/mario-left.png");
        }
        bodyContainer.addEventListener("keydown", moveLeft);
}

var groundMovingLeft = function (e) {
        if (e.keyCode === 37) {
                intervalId = setInterval(function() {
                        xPosition += 1;
                        container.style.backgroundPosition = xPosition + 'px bottom';  
                },1);
                bodyContainer.removeEventListener("keydown", groundMovingLeft);
        }
}

var groundStopLeft = function (e) {
        if (e.keyCode === 37) {
                clearInterval(intervalId);
        }
        bodyContainer.addEventListener("keydown", groundMovingLeft);
}

var jumping = function (e) {
        if (e.keyCode === 32) {
                mario.style.bottom = "30%";
        }    
}

var ground = function (e) {
        if (e.keyCode === 32) {
                mario.style.bottom = "18%";
        } 
}

bodyContainer.addEventListener("keydown", moveRight);
bodyContainer.addEventListener("keydown", moveLeft);
bodyContainer.addEventListener("keydown", groundMoving);
bodyContainer.addEventListener("keydown", groundMovingLeft);
bodyContainer.addEventListener("keyup", stopMoving);
bodyContainer.addEventListener("keyup", stopMovingLeft);
bodyContainer.addEventListener("keyup", groundStop);
bodyContainer.addEventListener("keyup", groundStopLeft);

bodyContainer.addEventListener("keypress", jumping);

bodyContainer.addEventListener("keyup", ground);