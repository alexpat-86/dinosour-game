const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");

function jump(){
    if(player.classList == "animate"){return}
    player.classList.add("animate");
    setTimeout(function(){
        player.classList.remove("animate");
    },300);
}