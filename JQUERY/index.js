$('li').click(function () {
    $(this).remove()
});


var $selected = $('body'); // selektuje

var $created = $('<h1>')  // kreira jquery objekat

var $someNode = document.getElementById('first');

var $jQueryNode = $($someNode);



$jQueryNode.click(function () {
    $(this).remove();
})

$created.text('add some random text')
$selected.append($('<h1>').text('Added text'));