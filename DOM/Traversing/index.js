function addClass() {

  
    var elWithClassActive = document.querySelector('.active');
  
 
    elWithClassActive.classList.remove('active')
  
   
    var firstUl = elWithClassActive.parentElement.parentElement.previousElementSibling.firstElementChild;
  
    var firstLi = firstUl.firstElementChild.classList.add('active')
  
    //console.log(firstLi);
  }
  addClass();
