// External JS Files
// ●	Include an external JS script on the page.
// ●	The script should contain a function that uses console.log to print something.
// ●	Trigger that function.


function inIt() {
    console.log('Hello from Javascript file');
  }
  
  inIt();
  
  
  // BOM (Window object)
  
  //  window.navigator
  //  Create a function that prints out in the console the following information
  //  ●	the platform on which the browser is running
  //  ●	the information about the browser version
  //  ●	the company that created that browser
  //  Each piece of information should be printed out in a new row.
  
  
  function getPlatform() {
    console.log('platform: ' + window.navigator.platform + '\n' + 'appVersion: ' + window.navigator.appVersion + '\n' + 'company: ' + window.navigator.vendor);
  }
  getPlatform();
  
  
  //  Create new “isOnline” function that checks if the browser is online.
  //  It should print out “online” when the browser is online and “offline” when there is no Internet connection.
  
  function isOnline() {
    if (navigator.onLine) {
      console.log('online');
    } else {
      console.log('offline');
    }
  }
  
  isOnline();
  
  
  // window.screen
  // Create a function that prints out the following information in the console:
  // ●	current browser width and height
  // ●	max possible browser height
  
  function printScreen() {
    console.log('browserWidth: ' + window.screen.availWidth + '\n' + 'browserHeight: ' + window.screen.availHeight + '\n' + 'maxHeight: ' + window.screen.height);
  }
  
  printScreen();
  
  
  // window.location
  // Write a function that prints out website’s url information in the console:
  // ●	full url address
  // ●	domain name
  // ●	used protocol
  // ●	parameters which are part of URL.
  
  function printURLinfo() {
    console.log('URL: ' + window.location.href + '\n' + 'domainName: ' + window.location.hostname + '\n' + 'usedProtocol: ' + window.location.protocol + '\n' + 'parametersOfURL: ' + window.location.search);
  }
  
  printURLinfo();
  
  // Create a function for reloading the page.
  
  //window.location.reload();
  
  // Create a function that redirects you to a website address passed to it.
  
  //window.location.href = "https://www.google.com";
  
  // Test all three functions
  
  
  
  // window.localStorage
  
  // Create a function that stores passed data in the browser local storage.
  function storesPassedData(key, value) {
    window.localStorage.setItem(key, value);
  }
  storesPassedData('firstName', 'Darko');
  
  // Create a function that reads the stored data, and print it out in console.
  
  function readTheStoredData(k) {
    var printedData = window.localStorage.getItem(k)
    console.log(printedData);
  }
  
  readTheStoredData('colleague')
  
  var person = window.localStorage.getItem('firstName');
  console.log(person);
  
  // If there is no data, print "There is no data" in the console.
  
  var person = window.localStorage.getItem('lastName');
  console.log(person);
  
  if (!person) {
    console.log('There is no data');
  }
  
  // Create a function that removes data from the local storage.
  
  var removesData = function (k) {
    window.localStorage.removeItem(k);
  }
  console.log(removesData('firstName'));
  
  // Use the previously created functions to store/read/remove some data.
  
  storesPassedData('lastName', 'Kovacevic');
  storesPassedData('colleague', 'Filip');
  storesPassedData('room', '41')
  
  var lastName = window.localStorage.getItem('lastName')
  var colleague = window.localStorage.getItem('colleague')
  var room = window.localStorage.getItem('room')
  
  console.log(lastName);
  console.log(colleague);
  console.log(room);
  
  console.log(removesData('room'));
  
  // Then add some data in storage and close the browser.
  
  // Open the browser again on the same page and use the function to read the stored value.
  
  function readsTheStoredData(k) {
    var printedData = window.localStorage.getItem(k)
    console.log(printedData);
  }
  
  readsTheStoredData('colleague');
  
  
  // Modify functions to work with sessionStorage instead of localStorage.
  // Try same scenario as with localStorage to examine data livecycle.
  
  function storesPassedData(key, value) {
    window.sessionStorage.setItem(key, value);
  }
  storesPassedData('height', '177');
  
  
  function readsTheStoredData(k) {
    var printedData = window.sessionStorage.getItem(k)
    console.log(printedData);
  }
  
  readsTheStoredData('height')
  
  
  var removesData = function (k) {
    window.sessionStorage.removeItem(k);
  }
  console.log(removesData('height'));
  
  
  // window.history
  // Play around with the browser forward/back navigation.
  // Implement a function that navigates two pages back.
  
  // window.location.href = "https://google.com";
  // window.location.href = "https://youtube.com";
  // window.location.href = "https://getbootstrap.com";
  
  
  function goBack() {
    window.history.go(-2);
  };
  
  goBack();