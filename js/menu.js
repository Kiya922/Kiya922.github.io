var menubutton = document.getElementsByClassName("menubutton");
var unhover = document.getElementById("unhover");
var hover = document.getElementById("hover");

function mouseDown(){
    unhover.style.display="none";
    hover.style.display="block";
}

function mouseUp(){
    hover.style.display="none";
    unhover.style.display="block";
}

menubutton.addEventListener("click", function(){
    unhover.style.display="none";
    hover.style.display="block";
    hover.style.display="none";
    unhover.style.display="block";
})