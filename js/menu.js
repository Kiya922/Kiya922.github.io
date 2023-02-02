var menubutton = document.getElementById("menubutton");
var unhover = document.getElementById("unhover");
var hover = document.getElementById("hover");
var mainmenu = document.getElementById("phone_mode_menu_bg");
var closer = document.getElementById("menu_closer");

function mouseDown(){
    unhover.style.display= "none";
    hover.style.display= "block";
}

function mouseUp(){
    hover.style.display= "none";
    unhover.style.display= "block";
    mainmenu.style.display= "flex";
}

menubutton.addEventListener("click", function(){
    mainmenu.style.display= "flex";
})

menubutton.addEventListener("touchstart", function(){
    unhover.style.display= "none";
    hover.style.display= "block";
})

menubutton.addEventListener("touchend", function(){
    hover.style.display= "none";
    unhover.style.display= "block";
    mainmenu.style.display= "flex";
})

closer.addEventListener("click", function(){
    mainmenu.style.display= "none";
})