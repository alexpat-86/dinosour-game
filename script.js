const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const playspace = document.getElementById("playspace");

const rotor = document.getElementById("rotator");

function jump() {
    if(player.classList == "animate"){return}
    player.classList.add("animate");
    setTimeout(function(){
        player.classList.remove("animate");
    },300);
}


const onMouseMove = (e) =>{
    player.style.left = e.pageX + 'px';
    player.style.top = e.pageY + 'px';
}
  
document.addEventListener('mousemove', onMouseMove);
 
const bullet = document.getElementById("bullet");

document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32) {
            bullet.style.color("red");
    }
}
  

