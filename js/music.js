var music = document.querySelector("audio");

var song_name = document.getElementById("name");
var song_img = document.getElementById("song_img");
var bt = document.getElementsByClassName("bt");
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var next = document.getElementById("next");
var c = 0;
var song_list =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
var nowplaying = 0

const song = [
    {
        'song_name': 'レトロマニア狂想曲',
        'song_path': './music/1.mp3',
        'song_link': 'https://youtu.be/amHYeH2HkUU',
        'img_path': './img/music/1.jpg',
        'song_author': 'PolyphonicBranch',
        'song_author_link': 'https://twitter.com/Tomoya_PB',
        'img_author': 'リラル',
        'img_author_link': 'https://twitter.com/micocolor',
    },{
        'song_name': 'Call of Justice',
        'song_path': './music/2.mp3',
        'song_link': 'https://youtu.be/emc5r--2NHo',
        'img_path': './img/music/2.jpg',
        'song_author': 'ダルビッシュP',
        'song_author_link': 'https://twitter.com/devilish5150',
        'img_author': 'レク',
        'img_author_link': 'https://twitter.com/reku_AL',
    },{
        'song_name': 'アルカリレットウセイ',
        'song_path': './music/3.mp3',
        'song_link': 'https://youtu.be/zLmopbS97aY',
        'img_path': './img/music/3.jpg',
        'song_author': 'かいりきベア',
        'song_author_link': 'https://twitter.com/kairiki_bear',
        'img_author': '(ﾉω･､)',
        'img_author_link': 'https://www.pixiv.net/users/4457',
    },{
        'song_name': 'キレキャリオン',
        'song_path': './music/4.mp3',
        'song_link': 'https://youtu.be/AWVvuh9L2cc',
        'img_path': './img/music/4.jpg',
        'song_author': 'ポリスピカデリー',
        'song_author_link': 'https://twitter.com/_policep',
        'img_author': 'wogura',
        'img_author_link': 'https://twitter.com/wogura',
    },{
        'song_name': '残響',
        'song_path': './music/5.mp3',
        'song_link': 'https://youtu.be/Eoj9UcNv3Eo',
        'img_path': './img/music/5.jpg',
        'song_author': '164',
        'song_author_link': 'https://twitter.com/164203',
        'img_author': 'りゅうせー',
        'img_author_link': 'https://twitter.com/ryuuseee',
    },{
        'song_name': 'マチガイサガシ',
        'song_path': './music/6.mp3',
        'song_link': 'https://youtu.be/YXTmB26L22Y',
        'img_path': './img/music/6.jpg',
        'song_author': 'まふまふ',
        'song_author_link': 'https://twitter.com/uni_mafumafu',
        'img_author': 'apapico',
        'img_author_link': 'https://twitter.com/apapico',
    },{
        'song_name': 'ハイスペックニート',
        'song_path': './music/7.mp3',
        'song_link': 'https://youtu.be/4DbM_WD0kl8',
        'img_path': './img/music/7.jpg',
        'song_author': '40mP',
        'song_author_link': 'https://twitter.com/40mP',
        'img_author': 'たま',
        'img_author_link': 'https://twitter.com/tamak0',
    },{
        'song_name': 'ドクハク',
        'song_path': './music/8.mp3',
        'song_link': 'https://youtu.be/nCO9j_L894U',
        'img_path': './img/music/8.jpg',
        'song_author': 'MARETU',
        'song_author_link': 'https://twitter.com/maretu01',
        'img_author': 'MARETU',
        'img_author_link': 'https://twitter.com/maretu01',
    },{
        'song_name': 'ダンスロボットダンス',
        'song_path': './music/9.mp3',
        'song_link': 'https://youtu.be/g7dvpD_zlIM',
        'img_path': './img/music/9.jpg',
        'song_author': 'ナユタン星人',
        'song_author_link': 'https://twitter.com/NayutalieN',
        'img_author': 'ナユタン星人',
        'img_author_link': 'https://twitter.com/NayutalieN',
    },{
        'song_name': 'アヤカシ',
        'song_path': './music/10.mp3',
        'song_link': 'https://youtu.be/i1G-k305pJM',
        'img_path': './img/music/10.jpg',
        'song_author': 'buzzG',
        'song_author_link': 'https://twitter.com/buzz_g',
        'img_author': 'YahaKo やはこ',
        'img_author_link': 'https://twitter.com/yahako_',
    },{
        'song_name': 'グラーヴェ',
        'song_path': './music/11.mp3',
        'song_link': 'https://youtu.be/hghTIJEF8dk',
        'img_path': './img/music/11.jpg',
        'song_author': 'niki',
        'song_author_link': 'https://twitter.com/niki_reverse',
        'img_author': 'りゅうせー',
        'img_author_link': 'https://twitter.com/ryuuseee',
    },{
        'song_name': 'テスラは夢の中',
        'song_path': './music/12.mp3',
        'song_link': 'https://youtu.be/7EJV3mIqHK8',
        'img_path': './img/music/12.jpg',
        'song_author': 'TOKOTOKO（西沢さんP）',
        'song_author_link': 'https://twitter.com/NishizawasanP',
        'img_author': 'べて',
        'img_author_link': 'https://twitter.com/betete02',
    },{
        'song_name': 'カンタービレ×パッシオーネ',
        'song_path': './music/13.mp3',
        'song_link': 'https://youtu.be/VMsHGGSenxU',
        'img_path': './img/music/13.jpg',
        'song_author': 'OSTER project',
        'song_author_link': 'https://twitter.com/fuwacina',
        'img_author': 'ぶーた',
        'img_author_link': 'https://twitter.com/booota',
    },{
        'song_name': '撥条少女時計',
        'song_path': './music/14.mp3',
        'song_link': 'https://youtu.be/sB1e_0jkvE8',
        'img_path': './img/music/14.jpg',
        'song_author': '清風明月（Drop×葉月ゆら）',
        'song_author_link': 'https://twitter.com/Drop99',
        'img_author': '一斗まる',
        'img_author_link': 'https://twitter.com/ittomaru',
    },{
        'song_name': 'KILLER B',
        'song_path': './music/15.mp3',
        'song_link': 'https://youtu.be/T2ekD1vzw8I',
        'img_path': './img/music/15.jpg',
        'song_author': '梅とら',
        'song_author_link': 'https://twitter.com/umetorara',
        'img_author': '秋赤音',
        'img_author_link': 'https://twitter.com/_akiakane',
    },{
        'song_name': 'Let Me Take You',
        'song_path': './music/16.mp3',
        'song_link': 'https://youtu.be/7SqlLY4N3vY',
        'img_path': './img/music/16.jpg',
        'song_author': 'BANVOX',
        'song_author_link': 'https://twitter.com/banvox',
        'img_author': '',
        'img_author_link': '',
    },{
        'song_name': '天使だと思っていたのに',
        'song_path': './music/17.mp3',
        'song_link': 'https://youtu.be/UvUJbhxUKT8',
        'img_path': './img/music/17.jpg',
        'song_author': '鬱P',
        'song_author_link': 'https://twitter.com/asshole_wii',
        'img_author': '金子開発',
        'img_author_link': 'https://kanekokaihatsu.com/',
    },{
        'song_name': '君はただ二回飛べばいい',
        'song_path': './music/18.mp3',
        'song_link': 'https://youtu.be/dGEFz6Y30Bw',
        'img_path': './img/music/18.jpg',
        'song_author': 'mothy',
        'song_author_link': 'https://twitter.com/mothy_akuno',
        'img_author': 'ひでかず',
        'img_author_link': 'https://twitter.com/hidekazu_king',
    },{
        'song_name': 'バイオレンストリガー',
        'song_path': './music/19.mp3',
        'song_link': 'https://youtu.be/iKdHiLzBf34',
        'img_path': './img/music/19.jpg',
        'song_author': '八王子P',
        'song_author_link': 'https://twitter.com/8_Prince',
        'img_author': 'ぽあろ',
        'img_author_link': 'https://twitter.com/poaro_coffee',
    },{
        'song_name': 'キミノカゼニナル',
        'song_path': './music/20.mp3',
        'song_link': 'https://youtu.be/0Ms8CfPOT2k',
        'img_path': './img/music/20.jpg',
        'song_author': 'のぼる↑',
        'song_author_link': 'https://twitter.com/noboru_e',
        'img_author': 'クサノオ',
        'img_author_link': 'https://twitter.com/kusa_no_oh',
    },{
        'song_name': 'だから言ったでしょ？',
        'song_path': './music/21.mp3',
        'song_link': 'https://youtu.be/fBrQ32MpcFU',
        'img_path': './img/music/21.jpg',
        'song_author': 'EasyPop',
        'song_author_link': 'https://twitter.com/easypop_betti',
        'img_author': 'apapico',
        'img_author_link': 'https://twitter.com/apapico',
    },{
        'song_name': 'Crazy beat',
        'song_path': './music/22.mp3',
        'song_link': 'https://youtu.be/A2CLaPzWypk',
        'img_path': './img/music/22.jpg',
        'song_author': 'さつき が てんこもり',
        'song_author_link': 'https://twitter.com/TENKOMORI',
        'img_author': 'こんたくん',
        'img_author_link': 'https://twitter.com/konta_niki',
    },{
        'song_name': 'やどりぎ',
        'song_path': './music/23.mp3',
        'song_link': 'https://youtu.be/AdJlCZ1Swxk',
        'img_path': './img/music/23.jpg',
        'song_author': 'Eve',
        'song_author_link': 'https://twitter.com/oo0eve0oo',
        'img_author': '',
        'img_author_link': '',
    },{
        'song_name': '惑星のダンスフロア',
        'song_path': './music/24.mp3',
        'song_link': 'https://www.nicovideo.jp/watch/so38083198',
        'img_path': './img/music/24.jpg',
        'song_author': 'SANRIO',
        'song_author_link': 'https://www.sanrio.co.jp/',
        'img_author': 'ナナカワ',
        'img_author_link': 'https://twitter.com/7_kawa',
    },{
        'song_name': 'アブソリュート',
        'song_path': './music/25.mp3',
        'song_link': 'https://youtu.be/waKONiYYouU',
        'img_path': './img/music/25.jpg',
        'song_author': 'YASUHIRO（康寛）',
        'song_author_link': 'https://twitter.com/yasuhiro_vanq',
        'img_author': 'キヨイチ',
        'img_author_link': 'https://twitter.com/kiyoichi261',
    },{
        'song_name': 'パラレルレイヤー',
        'song_path': './music/26.mp3',
        'song_link': 'https://youtu.be/AegqO851dwY',
        'img_path': './img/music/26.jpg',
        'song_author': 'lumo',
        'song_author_link': 'https://twitter.com/lumommmbon',
        'img_author': 'ちゃもーい',
        'img_author_link': 'https://twitter.com/chamooi',
    },{
        'song_name': 'アイ情劣等生',
        'song_path': './music/27.mp3',
        'song_link': 'https://youtu.be/eEuIHatfgkE',
        'img_path': './img/music/27.jpg',
        'song_author': 'かいりきベア',
        'song_author_link': 'https://twitter.com/kairiki_bear',
        'img_author': 'のう',
        'img_author_link': 'https://twitter.com/nounoknown',
    },{
        'song_name': '欲望我慢スル事ナカレ',
        'song_path': './music/28.mp3',
        'song_link': 'https://youtu.be/kkQXjSkCgsU',
        'img_path': './img/music/28.jpg',
        'song_author': 'cosMo＠暴走P',
        'song_author_link': 'https://twitter.com/cosmobsp',
        'img_author': '布施龍太',
        'img_author_link': 'https://twitter.com/chameleonrock',
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
    song_name.textContent = song[song_list[nowplaying]].song_name;
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