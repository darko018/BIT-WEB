// var container = $('<div>');
// var imgArray = ['https://unsplash.com/photos/76Temf2IFiY', 'https://unsplash.com/photos/g9SNY0aLMF0', 'https://unsplash.com/photos/OgqWLzWRSaI','https://unsplash.com/photos/5X1y4fvpIV0'];

// $('body').prepend(container);

$("body").prepend("<div>")

var $images = [
    "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGdhbWluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",  

    "https://i.pinimg.com/originals/68/b1/c1/68b1c1dd2b6515ea334d8e92dc2a4e2f.jpg", 

    "https://wallpaperaccess.com/full/2086927.jpg",

    "https://i.pinimg.com/originals/74/e2/79/74e27961b4d0bee0c4c7d68d56f5ebf8.jpg",

    "https://pbblogassets.s3.amazonaws.com/uploads/2018/05/18110738/game-over.jpg",

    
]

var $border = true;
$.each($images, function(index) {
    var $size = Math.round(400 * Math.random() + 100);
    var img = $("<img>").attr("src", $images[index]).css({
        "width": $size,
        "height": $size
    })
    $("div").append(img);

    if($size < 200 && $border) {
        img.css({
            "border": "3px solid green"
        })
        $border = false;
    }
    
    
})

$("div").prepend("<h1>Gaming Galery</h1>").css({
    "text-align": "center",
    "color": "lightblue"
})
