function liToAlert() {
    var ulEl = document.querySelector('ul');
    console.log(ulEl);
    var secondLi = ulEl.querySelector('ul>li:nth-of-type(2)')
    console.log(secondLi);
    alert(secondLi.textContent);
  }
  liToAlert()
  
  // Create one more function.
  // The function should take some text as an argument.
  // The function should select the last <li> element in the list and replace its text with text passed as the function argument.
  
  function replaceText(text) {
    var ulEl = document.querySelector('ul');
    var lastLi = ulEl.lastElementChild;
    console.log(lastLi);
    var newText = lastLi.textContent = text;
  }
  replaceText('New text');