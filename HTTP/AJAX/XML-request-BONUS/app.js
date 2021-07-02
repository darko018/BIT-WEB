var endpoint = "http://www.geoplugin.net/xml.gp?ip=";

var $countryDisplay = document.querySelector("#country");
var $continentDisplay = document.querySelector("#continent");
var $submit = document.querySelector("#submit");
var $ipInput = document.querySelector("#ip");

function onResponse(response) {
    var country = response.querySelector("geoplugin_countryName").textContent;
    var continent = response.querySelector("geoplugin_continentName").textContent;

    $countryDisplay.textContent = country;
    $continentDisplay.textContent = continent;
}

//1. create request
var newRequest = new XMLHttpRequest();
console.log(newRequest);


//3. onload handler
newRequest.onload = function () {
    if (newRequest.status >= 200 && newRequest.status < 300) {
        onResponse(newRequest.responseXML);
    }
};

function fetchLocation() {
    var ipAddress = $ipInput.value;
    var completeURL = endpoint + ipAddress;

    //2. initialize request
    newRequest.open("GET", completeURL);  //method how we initialize request, it recieves 2 parameters, 3rd, 4th, 5th are optional

    //4. send request (so we can recieve response)
    newRequest.send();
}

$submit.addEventListener("click", fetchLocation);
