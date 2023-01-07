var show = document.getElementById("show");
var check = document.getElementById("check");
var charactermenu = document.getElementById("character-f");
var cancel = document.getElementById("cancel");
var OK = document.getElementById("OK");

var character = document.getElementsByClassName("character");
var attacker = document.getElementsByClassName("attacker");
var gunner = document.getElementsByClassName("gunner");
var tank = document.getElementsByClassName("tank");
var sprinter = document.getElementsByClassName("sprinter");
var original = document.getElementsByClassName("original");
var GG = document.getElementsByClassName("GG");
var Voca = document.getElementsByClassName("Voca");
var SFV = document.getElementsByClassName("SFV");
var Re0 = document.getElementsByClassName("Re0");
var AngelsofDeath = document.getElementsByClassName("AngelsofDeath");
var Danganronpa = document.getElementsByClassName("Danganronpa");
var Konosuba = document.getElementsByClassName("Konosuba");
var Kyojin = document.getElementsByClassName("Kyojin");
var Nekomiya = document.getElementsByClassName("Nekomiya");
var SteinGate = document.getElementsByClassName("SteinGate");
var Fate = document.getElementsByClassName("Fate");
var KaBuKi = document.getElementsByClassName("KaBuKi");
var Danmachi = document.getElementsByClassName("Danmachi");
var FFXV = document.getElementsByClassName("FFXV");
var StrayDogs = document.getElementsByClassName("StrayDogs");
var Ryza = document.getElementsByClassName("Ryza");
var P5 = document.getElementsByClassName("P5");
var OverlordIV = document.getElementsByClassName("OverlordIV");
var SAO = document.getElementsByClassName("SAO");
var NieR = document.getElementsByClassName("NieR");
var Slime = document.getElementsByClassName("Slime");
var RailgunT = document.getElementsByClassName("RailgunT");

var all_btn = document.getElementById("all_btn");
var attacker_btn = document.getElementById("attacker_btn");
var gunner_btn = document.getElementById("gunner_btn");
var tank_btn = document.getElementById("tank_btn");
var sprinter_btn = document.getElementById("sprinter_btn");
var original_btn = document.getElementById("original_btn");
var GG_btn = document.getElementById("GG_btn");
var Voca_btn = document.getElementById("Voca_btn");
var SFV_btn = document.getElementById("SFV_btn");
var Re0_btn = document.getElementById("Re0_btn");
var AngelsofDeath_btn = document.getElementById("AngelsofDeath_btn");
var Danganronpa_btn = document.getElementById("Danganronpa_btn");
var Konosuba_btn = document.getElementById("Konosuba_btn");
var Kyojin_btn = document.getElementById("Kyojin_btn");
var Nekomiya_btn = document.getElementById("Nekomiya_btn");
var SteinGate_btn = document.getElementById("SteinGate_btn");
var Fate_btn = document.getElementById("Fate_btn");
var KaBuKi_btn = document.getElementById("KaBuKi_btn");
var Danmachi_btn = document.getElementById("Danmachi_btn");
var FFXV_btn = document.getElementById("FFXV_btn");
var StrayDogs_btn = document.getElementById("StrayDogs_btn");
var Ryza_btn = document.getElementById("Ryza_btn");
var P5_btn = document.getElementById("P5_btn");
var OverlordIV_btn = document.getElementById("OverlordIV_btn");
var SAO_btn = document.getElementById("SAO_btn");
var NieR_btn = document.getElementById("NieR_btn");
var Slime_btn = document.getElementById("Slime_btn");
var RailgunT_btn = document.getElementById("RailgunT_btn");

show.addEventListener("click", function(){
    charactermenu.style.display = "flex";
    document.body.style.overflow = "hidden";
})

cancel.addEventListener("click", function(){
    charactermenu.style.display = "none";
    document.body.style.overflow = "auto";
    for(var x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="flex";
    }
    check.style.color = "#ffffff";
})

OK.addEventListener("click", function(){
    charactermenu.style.display = "none";
    document.body.style.overflow = "auto";
    check.style.color = "#ff8808";
})

all_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="flex";
    }
})

attacker_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < attacker.length; x++){
        document.getElementsByClassName("attacker")[x].style.display="flex";
    }
})

gunner_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < gunner.length; x++){
        document.getElementsByClassName("gunner")[x].style.display="flex";
    }
})

tank_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < tank.length; x++){
        document.getElementsByClassName("tank")[x].style.display="flex";
    }
})

sprinter_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < sprinter.length; x++){
        document.getElementsByClassName("sprinter")[x].style.display="flex";
    }
})

original_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < original.length; x++){
        document.getElementsByClassName("original")[x].style.display="flex";
    }
})

GG_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < GG.length; x++){
        document.getElementsByClassName("GG")[x].style.display="flex";
    }
})

Voca_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < Voca.length; x++){
        document.getElementsByClassName("Voca")[x].style.display="flex";
    }
})

SFV_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < SFV.length; x++){
        document.getElementsByClassName("SFV")[x].style.display="flex";
    }
})

Re0_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < Re0.length; x++){
        document.getElementsByClassName("Re0")[x].style.display="flex";
    }
})

AngelsofDeath_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < AngelsofDeath.length; x++){
        document.getElementsByClassName("AngelsofDeath")[x].style.display="flex";
    }
})

Danganronpa_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < Danganronpa.length; x++){
        document.getElementsByClassName("Danganronpa")[x].style.display="flex";
    }
})

Konosuba_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < Konosuba.length; x++){
        document.getElementsByClassName("Konosuba")[x].style.display="flex";
    }
})

Kyojin_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < Kyojin.length; x++){
        document.getElementsByClassName("Kyojin")[x].style.display="flex";
    }
})

Nekomiya_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < Nekomiya.length; x++){
        document.getElementsByClassName("Nekomiya")[x].style.display="flex";
    }
})

SteinGate_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < SteinGate.length; x++){
        document.getElementsByClassName("SteinGate")[x].style.display="flex";
    }
})

Fate_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < Fate.length; x++){
        document.getElementsByClassName("Fate")[x].style.display="flex";
    }
})

KaBuKi_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < KaBuKi.length; x++){
        document.getElementsByClassName("KaBuKi")[x].style.display="flex";
    }
})

Danmachi_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < Danmachi.length; x++){
        document.getElementsByClassName("Danmachi")[x].style.display="flex";
    }
})

FFXV_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < FFXV.length; x++){
        document.getElementsByClassName("FFXV")[x].style.display="flex";
    }
})

StrayDogs_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < StrayDogs.length; x++){
        document.getElementsByClassName("StrayDogs")[x].style.display="flex";
    }
})

Ryza_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < Ryza.length; x++){
        document.getElementsByClassName("Ryza")[x].style.display="flex";
    }
})

P5_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < P5.length; x++){
        document.getElementsByClassName("P5")[x].style.display="flex";
    }
})

OverlordIV_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < OverlordIV.length; x++){
        document.getElementsByClassName("OverlordIV")[x].style.display="flex";
    }
})

SAO_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < SAO.length; x++){
        document.getElementsByClassName("SAO")[x].style.display="flex";
    }
})

NieR_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < NieR.length; x++){
        document.getElementsByClassName("NieR")[x].style.display="flex";
    }
})

Slime_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < Slime.length; x++){
        document.getElementsByClassName("Slime")[x].style.display="flex";
    }
})

RailgunT_btn.addEventListener("click", function(){
    for(x = 0; x < character.length; x++){
        document.getElementsByClassName("character")[x].style.display="none";
    }
    for(x = 0; x < RailgunT.length; x++){
        document.getElementsByClassName("RailgunT")[x].style.display="flex";
    }
})