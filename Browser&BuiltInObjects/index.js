var weAreExternal = function() {
    console.log( "Javljamo se iz dijaspore...");
   }();
  
//    BOM (Window object)

//    window.navigator
//   Create a function that prints out in the console the following information
//   the platform on which the browser is running
//   the information about the browser version
//   the company that created that browser
//   Each piece of information should be printed out in a new row.
  
//   Create new “isOnline” function that checks if the browser is online.
//   It should print out “online” when the browser is online and “offline” when there is no Internet connection.
  
  

  

  

  
  

      
//   Use the previously created functions to store/read/remove some data.
//   Then add some data in storage and close the browser.
//   Open the browser again on the same page and use the function to read the stored value.
  
//   Modify functions to work with sessionStorage instead of localStorage.
//   Try same scenario as with localStorage to examine data livecycle.
  
//   window.history
//   Play around with the browser forward/back navigation.
//   Implement a function that navigates two pages back.
  
   var navigatore = function() {
    console.log(window.navigator.platform);
    console.log(window.navigator.appVersion); 
    console.log(window.navigator.userAgent);
   
   }();

//   Create new “isOnline” function that checks if the browser is online.
//   It should print out “online” when the browser is online and “offline” when there is no Internet connection.

   var ourInternetChecker = function isOnline() {
    if (window.navigator.onLine) {
      console.log("online");
    } else {
      console.log("offline");
    } return 
  }();
  
//   window.screen
//   Create a function that prints out the following information in the console:
//   current browser width and height
//   max possible browser height


  var ourBrowserScreen = function () {
    console.log(window.screen.height);
    console.log(window.screen.width);
    console.log(window.screen.availHeight);
  }();
  

//   window.location
//   Write a function that prints out website’s url information in the console:
//   full url address
//   domain name
//   used protocol
//   parameters which are part of URL.


//   Create a function for reloading the page.
//   Create a function that redirects you to a website address passed to it.
//   Test all three functions

var myURLinformation = function () {
    console.log(window.location.href);
    console.log(window.location.hostname);
    console.log(window.location.protocol);
    console.log(window.location.search);
  }();

var refreshMyWeb = function () {
    return setTimeout("location.reload(false);", 5000);
  }();
  
var redirect = function () {
    return window.open('http://google.com')
}();


//   window.localStorage
//   Create a function that stores passed data in the browser local storage.
//   Create a function that reads the stored data, and print it out in console.
//   If there is no data, print "There is no data" in the console.
//   Create a function that removes data from the local storage.

//   Use the previously created functions to store/read/remove some data.
//   Then add some data in storage and close the browser.
//   Open the browser again on the same page and use the function to read the stored value.

if(!window.localStorage.getItem('name')){
    var name= window.prompt('Unesite vase ime')
    window.localStorage.setItem('name', 'age');
}
  