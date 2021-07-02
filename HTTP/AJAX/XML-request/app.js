var endpoint = "http://www.geoplugin.net/xml.gp?ip=79.175.76.66";

//1. create request
var newRequest = new XMLHttpRequest();

//2. initialize request
newRequest.open("GET", endpoint);  //method how we initialize request, it recieves 2 parameters, 3rd, 4th, 5th are optional


//3. onload handler
newRequest.onload = function () {
    if (newRequest.status >= 200 && newRequest.status < 300) {
        var response = newRequest.responseXML;
        var country = response.querySelector("geoplugin_countryName").textContent;

        //to show it on html page 
        var $countryDisplay = document.querySelector("#country");
        $countryDisplay.textContent = country;
    }
}


//4. send request (so we can recieve response)
newRequest.send();