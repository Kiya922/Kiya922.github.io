var menubutton = document.getElementsByClassName("menubutton");
var unhover = document.getElementById("unhover");
var hover = document.getElementById("hover");

function mouseUp(){
    hover.style.display="none";
    unhover.style.display="block";
}

function mouseDown(){
    unhover.style.display="none";
    hover.style.display="block";
}

function Select(){
    return false;
}