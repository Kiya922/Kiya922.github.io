var music = document.querySelector("audio");

var song_name = document.getElementById("name");
var song_img = document.getElementById("song_img");
var bt = document.getElementsByClassName("bt");
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var next = document.getElementById("next");
var c = 0;
var song_list =[0, 1]
var nowplaying = 0

const song = [
    {
        'song_name_tw': '懷舊癡迷狂想曲',
        'song_name_jp': 'レトロマニア狂想曲',
        'song_path': './music/1.mp3',
        'song_link': 'https://youtu.be/amHYeH2HkUU',
        'img_path': './img/music/1.jpg',
        'song_author': 'PolyphonicBranch',
        'song_author_link': 'https://twitter.com/Tomoya_PB',
        'img_author': 'リラル',
        'img_author_link': 'https://twitter.com/micocolor',
    },{
        'song_name_tw': 'Call of Justice',
        'song_name_jp': 'Call of Justice',
        'song_path': './music/2.mp3',
        'song_link': 'https://youtu.be/amHYeH2HkUU',
        'img_path': './img/music/2.jpg',
        'song_author': 'PolyphonicBranch',
        'song_author_link': 'https://twitter.com/Tomoya_PB',
        'img_author': 'リラル',
        'img_author_link': 'https://twitter.com/micocolor',
    },
]

function play_next(){
    if (nowplaying+1 < song_list.length){
        nowplaying = nowplaying+1;
    }
    else{
        nowplaying = 0
    }
    music.src = song[song_list[nowplaying]].song_path;
    music.play();
}

bt[0].addEventListener("click", function(){
    if (c == 0){
        music.play();
    }
    else if(c == 1){
        music.pause();
    }
})

bt[1].addEventListener("click", function(){
    play_next();
})

music.addEventListener("play", function(){
    pause.style.display = "flex";
    play.style.display = "none";
    c = 1;
    song_name.textContent = song[song_list[nowplaying]].song_name_jp;
    song_img.src = song[song_list[nowplaying]].img_path;
})

music.addEventListener("pause", function(){
    play.style.display = "flex";
    pause.style.display = "none";
    c = 0;
})

music.addEventListener("ended", function(){
    play_next();
})