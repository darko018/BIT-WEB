

$('nav ul li:first-child').css({
    'border-bottom': '2px red solid'
  });

$('nav li').css({
    'text-transform': 'uppercase'
  });

$('.active').css({
    'color': 'green'
  });
  
$('nav ul li:nth-child(2)').css({
    'background-color': 'lightblue'
  });

  
// the other way 

// $(document).ready(function(){
//   var $firstLi = $('.first');
  
//   var $thirdLi = $('.active');
//   var $middleLi = $firstLi.next();
//   console.log($middleLi.text());

//   $firstLi.css("border-bottom" ,"2px red solid");
//   $('li').each(function(index ,element) {
 
//       $(element).css("text-transform" , "uppercase") ;  
//    });  
//   $thirdLi.css("color" ,"red"); 
//   $middleLi.css("background-color" , "lightblue");
// });
