var button = document.querySelector("button");
var body = document.querySelector("body");
var isOn = true;

function changeBackgroundColor () {
    var div = document.querySelector("div");
    div.classList.toggle("active");
}

function turnOff() {
    if (isOn) {
        button.onclick = null;
        isOn = false;
    } else {
        button.onclick = changeBackgroundColor;
        isOn = true;
    }
    
}

