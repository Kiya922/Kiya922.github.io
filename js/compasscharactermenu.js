var show = document.getElementById("show");
var check = document.getElementById("check");
var charactermenu = document.getElementById("character-f");
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

var counter = 0;
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

var character_counter = 0;
var attacker_counter = 0;
var gunner_counter = 0;
var tank_counter = 0;
var sprinter_counter = 0;
var original_counter = 0;
var GG_counter = 0;
var Voca_counter = 0;
var SFV_counter = 0;
var Re0_counter = 0;
var AngelsofDeath_counter = 0;
var Danganronpa_counter = 0;
var Konosuba_counter = 0;
var Kyojin_counter = 0;
var Nekomiya_counter = 0;
var SteinGate_counter = 0;
var Fate_counter = 0;
var KaBuKi_counter = 0;
var Danmachi_counter = 0;
var FFXV_counter = 0;
var StrayDogs_counter = 0;
var Ryza_counter = 0;
var P5_counter = 0;
var OverlordIV_counter = 0;
var SAO_counter = 0;
var NieR_counter = 0;
var Slime_counter = 0;
var RailgunT_counter = 0;

show.addEventListener("click", function(){
    charactermenu.style.display = "flex";
    document.body.style.overflow = "hidden";
})

OK.addEventListener("click", function(){
    charactermenu.style.display = "none";
    document.body.style.overflow = "auto";

    if(counter == 0){
        for(var x = 0; x < character.length; x++){
            document.getElementsByClassName("character")[x].style.display="flex";
        }
        check.style.color = "#ffffff";
    }
    else{
        for(var x = 0; x < character.length; x++){
            document.getElementsByClassName("character")[x].style.display="none";
        }
        check.style.color = "#ff8808";
    }

    if(attacker_counter == 1){
        for(x = 0; x < attacker.length; x++){
            document.getElementsByClassName("attacker")[x].style.display="flex";
        }
    }

    if(gunner_counter == 1){
        for(x = 0; x < gunner.length; x++){
            document.getElementsByClassName("gunner")[x].style.display="flex";
        }
    }

    if(tank_counter == 1){
        for(x = 0; x < tank.length; x++){
            document.getElementsByClassName("tank")[x].style.display="flex";
        }
    }

    if(sprinter_counter == 1){
        for(x = 0; x < sprinter.length; x++){
            document.getElementsByClassName("sprinter")[x].style.display="flex";
        }
    }

    if(original_counter == 1){
        for(x = 0; x < original.length; x++){
            document.getElementsByClassName("original")[x].style.display="flex";
        }
    }

    if(GG_counter == 1){
        for(x = 0; x < GG.length; x++){
            document.getElementsByClassName("GG")[x].style.display="flex";
        }
    }

    if(Voca_counter == 1){
        for(x = 0; x < Voca.length; x++){
            document.getElementsByClassName("Voca")[x].style.display="flex";
        }
    }

    if(SFV_counter == 1){
        for(x = 0; x < SFV.length; x++){
            document.getElementsByClassName("SFV")[x].style.display="flex";
        }
    }

    if(Re0_counter == 1){
        for(x = 0; x < Re0.length; x++){
            document.getElementsByClassName("Re0")[x].style.display="flex";
        }
    }

    if(AngelsofDeath_counter == 1){
        for(x = 0; x < AngelsofDeath.length; x++){
            document.getElementsByClassName("AngelsofDeath")[x].style.display="flex";
        }
    }

    if(Danganronpa_counter == 1){
        for(x = 0; x < Danganronpa.length; x++){
            document.getElementsByClassName("Danganronpa")[x].style.display="flex";
        }
    }

    if(Konosuba_counter == 1){
        for(x = 0; x < Konosuba.length; x++){
            document.getElementsByClassName("Konosuba")[x].style.display="flex";
        }
    }

    if(Kyojin_counter == 1){
        for(x = 0; x < Kyojin.length; x++){
            document.getElementsByClassName("Kyojin")[x].style.display="flex";
        }
    }

    if(Nekomiya_counter == 1){
        for(x = 0; x < Nekomiya.length; x++){
            document.getElementsByClassName("Nekomiya")[x].style.display="flex";
        }
    }

    if(SteinGate_counter == 1){
        for(x = 0; x < SteinGate.length; x++){
            document.getElementsByClassName("SteinGate")[x].style.display="flex";
        }
    }

    if(Fate_counter == 1){
        for(x = 0; x < Fate.length; x++){
            document.getElementsByClassName("Fate")[x].style.display="flex";
        }
    }

    if(KaBuKi_counter == 1){
        for(x = 0; x < KaBuKi.length; x++){
            document.getElementsByClassName("KaBuKi")[x].style.display="flex";
        }
    }

    if(Danmachi_counter == 1){
        for(x = 0; x < Danmachi.length; x++){
            document.getElementsByClassName("Danmachi")[x].style.display="flex";
        }
    }

    if(FFXV_counter == 1){
        for(x = 0; x < FFXV.length; x++){
            document.getElementsByClassName("FFXV")[x].style.display="flex";
        }
    }

    if(StrayDogs_counter == 1){
        for(x = 0; x < StrayDogs.length; x++){
            document.getElementsByClassName("StrayDogs")[x].style.display="flex";
        }
    }

    if(Ryza_counter == 1){
        for(x = 0; x < Ryza.length; x++){
            document.getElementsByClassName("Ryza")[x].style.display="flex";
        }
    }

    if(P5_counter == 1){
        for(x = 0; x < P5.length; x++){
            document.getElementsByClassName("P5")[x].style.display="flex";
        }
    }

    if(OverlordIV_counter == 1){
        for(x = 0; x < OverlordIV.length; x++){
            document.getElementsByClassName("OverlordIV")[x].style.display="flex";
        }
    }

    if(SAO_counter == 1){
        for(x = 0; x < SAO.length; x++){
            document.getElementsByClassName("SAO")[x].style.display="flex";
        }
    }

    if(NieR_counter == 1){
        for(x = 0; x < NieR.length; x++){
            document.getElementsByClassName("NieR")[x].style.display="flex";
        }
    }

    if(Slime_counter == 1){
        for(x = 0; x < Slime.length; x++){
            document.getElementsByClassName("Slime")[x].style.display="flex";
        }
    }

    if(RailgunT_counter == 1){
        for(x = 0; x < RailgunT.length; x++){
            document.getElementsByClassName("RailgunT")[x].style.display="flex";
        }
    }
})

attacker_btn.addEventListener("click", function(){
    if(attacker_counter == 0){
        attacker_counter = 1;
        counter = counter + 1;
        attacker_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        attacker_counter = 0;
        counter = counter - 1;
        attacker_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

gunner_btn.addEventListener("click", function(){
    if(gunner_counter == 0){
        gunner_counter = 1;
        counter = counter + 1;
        gunner_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        gunner_counter = 0;
        counter = counter - 1;
        gunner_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

tank_btn.addEventListener("click", function(){
    if(tank_counter == 0){
        tank_counter = 1;
        counter = counter + 1;
        tank_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        tank_counter = 0;
        counter = counter - 1;
        tank_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

sprinter_btn.addEventListener("click", function(){
    if(sprinter_counter == 0){
        sprinter_counter = 1;
        counter = counter + 1;
        sprinter_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        sprinter_counter = 0;
        counter = counter - 1;
        sprinter_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

original_btn.addEventListener("click", function(){
    if(original_counter == 0){
        original_counter = 1;
        counter = counter + 1;
        original_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        original_counter = 0;
        counter = counter - 1;
        original_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

GG_btn.addEventListener("click", function(){
    if(GG_counter == 0){
        GG_counter = 1;
        counter = counter + 1;
        GG_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        GG_counter = 0;
        counter = counter - 1;
        GG_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

Voca_btn.addEventListener("click", function(){
    if(Voca_counter == 0){
        Voca_counter = 1;
        counter = counter + 1;
        Voca_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        Voca_counter = 0;
        counter = counter - 1;
        Voca_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

SFV_btn.addEventListener("click", function(){
    if(SFV_counter == 0){
        SFV_counter = 1;
        counter = counter + 1;
        SFV_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        SFV_counter = 0;
        counter = counter - 1;
        SFV_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

Re0_btn.addEventListener("click", function(){
    if(Re0_counter == 0){
        Re0_counter = 1;
        counter = counter + 1;
        Re0_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        Re0_counter = 0;
        counter = counter - 1;
        Re0_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

AngelsofDeath_btn.addEventListener("click", function(){
    if(AngelsofDeath_counter == 0){
        AngelsofDeath_counter = 1;
        counter = counter + 1;
        AngelsofDeath_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        AngelsofDeath_counter = 0;
        counter = counter - 1;
        AngelsofDeath_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

Danganronpa_btn.addEventListener("click", function(){
    if(Danganronpa_counter == 0){
        Danganronpa_counter = 1;
        counter = counter + 1;
        Danganronpa_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        Danganronpa_counter = 0;
        counter = counter - 1;
        Danganronpa_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

Konosuba_btn.addEventListener("click", function(){
    if(Konosuba_counter == 0){
        Konosuba_counter = 1;
        counter = counter + 1;
        Konosuba_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        Konosuba_counter = 0;
        counter = counter - 1;
        Konosuba_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

Kyojin_btn.addEventListener("click", function(){
    if(Kyojin_counter == 0){
        Kyojin_counter = 1;
        counter = counter + 1;
        Kyojin_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        Kyojin_counter = 0;
        counter = counter - 1;
        Kyojin_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

Nekomiya_btn.addEventListener("click", function(){
    if(Nekomiya_counter == 0){
        Nekomiya_counter = 1;
        counter = counter + 1;
        Nekomiya_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        Nekomiya_counter = 0;
        counter = counter - 1;
        Nekomiya_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

SteinGate_btn.addEventListener("click", function(){
    if(SteinGate_counter == 0){
        SteinGate_counter = 1;
        counter = counter + 1;
        SteinGate_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        SteinGate_counter = 0;
        counter = counter - 1;
        SteinGate_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

Fate_btn.addEventListener("click", function(){
    if(Fate_counter == 0){
        Fate_counter = 1;
        counter = counter + 1;
        Fate_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        Fate_counter = 0;
        counter = counter - 1;
        Fate_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

KaBuKi_btn.addEventListener("click", function(){
    if(KaBuKi_counter == 0){
        KaBuKi_counter = 1;
        counter = counter + 1;
        KaBuKi_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        KaBuKi_counter = 0;
        counter = counter - 1;
        KaBuKi_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

Danmachi_btn.addEventListener("click", function(){
    if(Danmachi_counter == 0){
        Danmachi_counter = 1;
        counter = counter + 1;
        Danmachi_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        Danmachi_counter = 0;
        counter = counter - 1;
        Danmachi_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

FFXV_btn.addEventListener("click", function(){
    if(FFXV_counter == 0){
        FFXV_counter = 1;
        counter = counter + 1;
        FFXV_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        FFXV_counter = 0;
        counter = counter - 1;
        FFXV_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

StrayDogs_btn.addEventListener("click", function(){
    if(StrayDogs_counter == 0){
        StrayDogs_counter = 1;
        counter = counter + 1;
        StrayDogs_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        StrayDogs_counter = 0;
        counter = counter - 1;
        StrayDogs_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

Ryza_btn.addEventListener("click", function(){
    if(Ryza_counter == 0){
        Ryza_counter = 1;
        counter = counter + 1;
        Ryza_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        Ryza_counter = 0;
        counter = counter - 1;
        Ryza_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

P5_btn.addEventListener("click", function(){
    if(P5_counter == 0){
        P5_counter = 1;
        counter = counter + 1;
        P5_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        P5_counter = 0;
        counter = counter - 1;
        P5_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

OverlordIV_btn.addEventListener("click", function(){
    if(OverlordIV_counter == 0){
        OverlordIV_counter = 1;
        counter = counter + 1;
        OverlordIV_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        OverlordIV_counter = 0;
        counter = counter - 1;
        OverlordIV_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

SAO_btn.addEventListener("click", function(){
    if(SAO_counter == 0){
        SAO_counter = 1;
        counter = counter + 1;
        SAO_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        SAO_counter = 0;
        counter = counter - 1;
        SAO_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

NieR_btn.addEventListener("click", function(){
    if(NieR_counter == 0){
        NieR_counter = 1;
        counter = counter + 1;
        NieR_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        NieR_counter = 0;
        counter = counter - 1;
        NieR_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

Slime_btn.addEventListener("click", function(){
    if(Slime_counter == 0){
        Slime_counter = 1;
        counter = counter + 1;
        Slime_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        Slime_counter = 0;
        counter = counter - 1;
        Slime_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})

RailgunT_btn.addEventListener("click", function(){
    if(RailgunT_counter == 0){
        RailgunT_counter = 1;
        counter = counter + 1;
        RailgunT_btn.style="background-color: #000000; border: 4px solid #444444;";
    }
    else{
        RailgunT_counter = 0;
        counter = counter - 1;
        RailgunT_btn.style="background-color: #70707080; border: 4px solid #94949480;";
    }
})