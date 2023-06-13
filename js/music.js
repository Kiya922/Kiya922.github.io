var music = document.querySelector("audio")

var pp = document.getElementsByClassName("bt");
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var pp_path = document.getElementById("pp_path");
var c = 0;

pp[0].addEventListener("click", function(){
    if (c == 0){
        pause.style.display = "flex";
        play.style.display = "none";
        c = 1;
        music.play();
    }
    else if(c == 1){
        play.style.display = "flex";
        pause.style.display = "none";
        c = 0;
        music.pause();
    }
})