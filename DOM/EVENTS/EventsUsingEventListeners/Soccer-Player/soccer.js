var player = document.getElementById('player');
var bg = document.getElementById('bg');
var t = document.getElementById('t');
var status = 'on';

function movePlayer(eventClick) {
    if(status == 'on') {
        player.style.top = eventClick.pageY + 'px';
        player.style.left = eventClick.pageX + 'px';
        console.log(eventClick);
    }
    else {
        player.style.left = 0;
        player.style.top = 0;
    }
}
bg.addEventListener('click', movePlayer);

player.addEventListener('mouseover', function () {
    player.title = 'Cristiano Ronaldo';
})

function stopA() {
    status = 'off';
}