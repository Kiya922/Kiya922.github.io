var counter = 0;

var ur001 = document.getElementById("btnur001");
var ur002 = document.getElementById("btnur002");
var ur003 = document.getElementById("btnur003");
var ur004 = document.getElementById("btnur004");
var ur005 = document.getElementById("btnur005");
var ur006 = document.getElementById("btnur006");
var ur007 = document.getElementById("btnur007");
var ur008 = document.getElementById("btnur008");
var ur009 = document.getElementById("btnur009");
var ur010 = document.getElementById("btnur010");
var ur011 = document.getElementById("btnur011");
var ur012 = document.getElementById("btnur012");
var ur013 = document.getElementById("btnur013");
var ur014 = document.getElementById("btnur014");
var ur015 = document.getElementById("btnur015");
var ur016 = document.getElementById("btnur016");
var ur017 = document.getElementById("btnur017");
var ur018 = document.getElementById("btnur018");
var ur019 = document.getElementById("btnur019");
var ur020 = document.getElementById("btnur020");
var ur021 = document.getElementById("btnur021");
var ur022 = document.getElementById("btnur022");
var ur023 = document.getElementById("btnur023");
var ur024 = document.getElementById("btnur024");
var ur025 = document.getElementById("btnur025");
var ur026 = document.getElementById("btnur026");
var ur027 = document.getElementById("btnur027");
var ur028 = document.getElementById("btnur028");
var ur029 = document.getElementById("btnur029");
var ur030 = document.getElementById("btnur030");
var ur031 = document.getElementById("btnur031");
var ur032 = document.getElementById("btnur032");
var ur033 = document.getElementById("btnur033");
var ur034 = document.getElementById("btnur034");
var ur035 = document.getElementById("btnur035");
var ur036 = document.getElementById("btnur036");
var ur037 = document.getElementById("btnur037");
var ur038 = document.getElementById("btnur038");
var ur039 = document.getElementById("btnur039");
var ur040 = document.getElementById("btnur040");
var ur041 = document.getElementById("btnur041");
var ur042 = document.getElementById("btnur042");
var ur043 = document.getElementById("btnur043");
var ur044 = document.getElementById("btnur044");
var ur045 = document.getElementById("btnur045");
var ur046 = document.getElementById("btnur046");
var ur047 = document.getElementById("btnur047");
var ur048 = document.getElementById("btnur048");
var ur049 = document.getElementById("btnur049");
var ur050 = document.getElementById("btnur050");
var ur051 = document.getElementById("btnur051");
var ur052 = document.getElementById("btnur052");
var ur053 = document.getElementById("btnur053");
var ur054 = document.getElementById("btnur054");
var ur055 = document.getElementById("btnur055");
var ur056 = document.getElementById("btnur056");
var ur057 = document.getElementById("btnur057");
var ur058 = document.getElementById("btnur058");
var ur059 = document.getElementById("btnur059");
var ur060 = document.getElementById("btnur060");
var ur061 = document.getElementById("btnur061");
var ur062 = document.getElementById("btnur062");
var ur063 = document.getElementById("btnur063");
var ur064 = document.getElementById("btnur064");
var ur065 = document.getElementById("btnur065");
var ur066 = document.getElementById("btnur066");
var ur067 = document.getElementById("btnur067");
var ur068 = document.getElementById("btnur068");
var ur069 = document.getElementById("btnur069");
var ur070 = document.getElementById("btnur070");

var cardname = document.getElementsByClassName("card-name");

function reset(){
    document.getElementById("text001").style.display = "none";
    document.getElementById("text002").style.display = "none";
    document.getElementById("text003").style.display = "none";
    document.getElementById("text004").style.display = "none";
    document.getElementById("text005").style.display = "none";
    document.getElementById("text006").style.display = "none";
    document.getElementById("text007").style.display = "none";
    document.getElementById("text008").style.display = "none";
    document.getElementById("text009").style.display = "none";
    document.getElementById("text010").style.display = "none";
    document.getElementById("text011").style.display = "none";
    document.getElementById("text012").style.display = "none";
    document.getElementById("text013").style.display = "none";
    document.getElementById("text014").style.display = "none";
    document.getElementById("text015").style.display = "none";
    document.getElementById("text016").style.display = "none";
    document.getElementById("text017").style.display = "none";
    document.getElementById("text018").style.display = "none";
    ur001.className = "card";
    ur002.className = "card";
    ur003.className = "card";
    ur004.className = "card";
    ur005.className = "card";
    ur006.className = "card";
    ur007.className = "card";
    ur008.className = "card";
    ur009.className = "card";
    ur010.className = "card";
    ur011.className = "card";
    ur012.className = "card";
    ur013.className = "card";
    ur014.className = "card";
    ur015.className = "card";
    ur016.className = "card";
    ur017.className = "card";
    ur018.className = "card";
    ur019.className = "card";
    ur020.className = "card";
    ur021.className = "card";
    ur022.className = "card";
    ur023.className = "card";
    ur024.className = "card";
    ur025.className = "card";
    ur026.className = "card";
    ur027.className = "card";
    ur028.className = "card";
    ur029.className = "card";
    ur030.className = "card";
    ur031.className = "card";
    ur032.className = "card";
    ur033.className = "card";
    ur034.className = "card";
    ur035.className = "card";
    ur036.className = "card";
    ur037.className = "card";
    ur038.className = "card";
    ur039.className = "card";
    ur040.className = "card";
    ur041.className = "card";
    ur042.className = "card";
    ur043.className = "card";
    ur044.className = "card";
    ur045.className = "card";
    ur046.className = "card";
    ur047.className = "card";
    ur048.className = "card";
    ur049.className = "card";
    ur050.className = "card";
    ur051.className = "card";
    ur052.className = "card";
    ur053.className = "card";
    ur054.className = "card";
    ur055.className = "card";
    ur056.className = "card";
    ur057.className = "card";
    ur058.className = "card";
    ur059.className = "card";
    ur060.className = "card";
    ur061.className = "card";
    ur062.className = "card";
    ur063.className = "card";
    ur064.className = "card";
    ur065.className = "card";
    ur066.className = "card";
    ur067.className = "card";
    ur068.className = "card";
    ur069.className = "card";
}

ur001.addEventListener("click", function(){
    cardname[0].innerHTML = "終極系無防守戰法";
    counter = ur001.classList.contains("ht");
    if(counter == 0){
        reset();
        ur001.className = "card-d ht";
        document.getElementById("text001").style.display = "flex";
    }
    else{
        reset();
    }
})

ur002.addEventListener("click", function(){
    cardname[0].innerHTML = "武術家的超加速";
    counter = ur002.classList.contains("ht");
    if(counter == 0){
        reset();
        ur002.className = "card-d ht";
        document.getElementById("text001").style.display = "flex";
    }
    else{
        reset();
    }
})

ur003.addEventListener("click", function(){
    cardname[0].innerHTML = "樂團團長 指揮家";
    counter = ur003.classList.contains("ht");
    if(counter == 0){
        reset();
        ur003.className = "card-d ht";
        document.getElementById("text001").style.display = "flex";
    }
    else{
        reset();
    }
})

ur004.addEventListener("click", function(){
    cardname[0].innerHTML = "-蒼王宮- 恩寵天使 索恩=尤利耶夫";
    counter = ur004.classList.contains("ht");
    if(counter == 0){
        reset();
        ur004.className = "card-d ht";
        document.getElementById("text001").style.display = "flex";
    }
    else{
        reset();
    }
})

ur005.addEventListener("click", function(){
    cardname[1].innerHTML = "湮滅長程步槍Hum-buster";
    counter = ur005.classList.contains("ht");
    if(counter == 0){
        reset();
        ur005.className = "card-d ht";
        document.getElementById("text002").style.display = "flex";
    }
    else{
        reset();
    }
})

ur006.addEventListener("click", function(){
    cardname[1].innerHTML = "名校足球社 閃電射門";
    counter = ur006.classList.contains("ht");
    if(counter == 0){
        reset();
        ur006.className = "card-d ht";
        document.getElementById("text002").style.display = "flex";
    }
    else{
        reset();
    }
})

ur007.addEventListener("click", function(){
    cardname[1].innerHTML = "掌管靈魂的聖天使 加百列";
    counter = ur007.classList.contains("ht");
    if(counter == 0){
        reset();
        ur007.className = "card-d ht";
        document.getElementById("text002").style.display = "flex";
    }
    else{
        reset();
    }
})

ur008.addEventListener("click", function(){
    cardname[1].innerHTML = "妖炎參謀 月夜叉";
    counter = ur008.classList.contains("ht");
    if(counter == 0){
        reset();
        ur008.className = "card-d ht";
        document.getElementById("text002").style.display = "flex";
    }
    else{
        reset();
    }
})

ur009.addEventListener("click", function(){
    cardname[2].innerHTML = "超美味！！ 熱量傳揚 遠距教學空手道";
    counter = ur009.classList.contains("ht");
    if(counter == 0){
        reset();
        ur009.className = "card-d ht";
        document.getElementById("text003").style.display = "flex";
    }
    else{
        reset();
    }
})

ur010.addEventListener("click", function(){
    cardname[2].innerHTML = "機航師彈 飛船";
    counter = ur010.classList.contains("ht");
    if(counter == 0){
        reset();
        ur010.className = "card-d ht";
        document.getElementById("text003").style.display = "flex";
    }
    else{
        reset();
    }
})

ur011.addEventListener("click", function(){
    cardname[2].innerHTML = "狂暴的天空之王 烈焰龍";
    counter = ur011.classList.contains("ht");
    if(counter == 0){
        reset();
        ur011.className = "card-d ht";
        document.getElementById("text003").style.display = "flex";
    }
    else{
        reset();
    }
})

ur012.addEventListener("click", function(){
    cardname[2].innerHTML = "慶典的壓軸！煙火";
    counter = ur012.classList.contains("ht");
    if(counter == 0){
        reset();
        ur012.className = "card-d ht";
        document.getElementById("text003").style.display = "flex";
    }
    else{
        reset();
    }
})

ur013.addEventListener("click", function(){
    cardname[3].innerHTML = "我最喜歡媽媽了";
    counter = ur013.classList.contains("ht");
    if(counter == 0){
        reset();
        ur013.className = "card-d ht";
        document.getElementById("text004").style.display = "flex";
    }
    else{
        reset();
    }
})

ur014.addEventListener("click", function(){
    cardname[3].innerHTML = "戰略之燈/國防長官芙蕾";
    counter = ur014.classList.contains("ht");
    if(counter == 0){
        reset();
        ur014.className = "card-d ht";
        document.getElementById("text004").style.display = "flex";
    }
    else{
        reset();
    }
})

ur015.addEventListener("click", function(){
    cardname[3].innerHTML = "鬥魂！灌注！繼承的靈魂 遊戲火箭筒";
    counter = ur015.classList.contains("ht");
    if(counter == 0){
        reset();
        ur015.className = "card-d ht";
        document.getElementById("text004").style.display = "flex";
    }
    else{
        reset();
    }
})

ur016.addEventListener("click", function(){
    cardname[3].innerHTML = "聯合宇宙軍 強襲壓制型 裝甲多腳戰車";
    counter = ur016.classList.contains("ht");
    if(counter == 0){
        reset();
        ur016.className = "card-d ht";
        document.getElementById("text004").style.display = "flex";
    }
    else{
        reset();
    }
})

ur017.addEventListener("click", function(){
    cardname[4].innerHTML = "慶典的重頭戲！龍形煙火";
    counter = ur017.classList.contains("ht");
    if(counter == 0){
        reset();
        ur017.className = "card-d ht";
        document.getElementById("text005").style.display = "flex";
    }
    else{
        reset();
    }
})

ur018.addEventListener("click", function(){
    cardname[4].innerHTML = "任意門";
    counter = ur018.classList.contains("ht");
    if(counter == 0){
        reset();
        ur018.className = "card-d ht";
        document.getElementById("text005").style.display = "flex";
    }
    else{
        reset();
    }
})

ur019.addEventListener("click", function(){
    cardname[4].innerHTML = "超級壞蛋！差勁！壞人派遣公司社長 貝利巴特";
    counter = ur019.classList.contains("ht");
    if(counter == 0){
        reset();
        ur019.className = "card-d ht";
        document.getElementById("text005").style.display = "flex";
    }
    else{
        reset();
    }
})

ur020.addEventListener("click", function(){
    cardname[4].innerHTML = "妖軍統一 大將";
    counter = ur020.classList.contains("ht");
    if(counter == 0){
        reset();
        ur020.className = "card-d ht";
        document.getElementById("text005").style.display = "flex";
    }
    else{
        reset();
    }
})

ur021.addEventListener("click", function(){
    cardname[5].innerHTML = "聯合宇宙軍 防護罩摧毀波";
    counter = ur021.classList.contains("ht");
    if(counter == 0){
        reset();
        ur021.className = "card-d ht";
        document.getElementById("text006").style.display = "flex";
    }
    else{
        reset();
    }
})

ur022.addEventListener("click", function(){
    cardname[5].innerHTML = "恆星間傳送裝置 Tele-Pass";
    counter = ur022.classList.contains("ht");
    if(counter == 0){
        reset();
        ur022.className = "card-d ht";
        document.getElementById("text006").style.display = "flex";
    }
    else{
        reset();
    }
})

ur023.addEventListener("click", function(){
    cardname[5].innerHTML = "反導砲 加諾涅‧法伊耶爾";
    counter = ur023.classList.contains("ht");
    if(counter == 0){
        reset();
        ur023.className = "card-d ht";
        document.getElementById("text006").style.display = "flex";
    }
    else{
        reset();
    }
})

ur024.addEventListener("click", function(){
    cardname[5].innerHTML = "爸爸陪我玩";
    counter = ur024.classList.contains("ht");
    if(counter == 0){
        reset();
        ur024.className = "card-d ht";
        document.getElementById("text006").style.display = "flex";
    }
    else{
        reset();
    }
})

ur025.addEventListener("click", function(){
    cardname[6].innerHTML = "米娜&露娜&蕾娜的大拍賣戰爭";
    counter = ur025.classList.contains("ht");
    if(counter == 0){
        reset();
        ur025.className = "card-d ht";
        document.getElementById("text007").style.display = "flex";
    }
    else{
        reset();
    }
})

ur026.addEventListener("click", function(){
    cardname[6].innerHTML = "時髦盟友忍者 -壬生笑美美實-";
    counter = ur026.classList.contains("ht");
    if(counter == 0){
        reset();
        ur026.className = "card-d ht";
        document.getElementById("text007").style.display = "flex";
    }
    else{
        reset();
    }
})

ur027.addEventListener("click", function(){
    cardname[6].innerHTML = "*絢爛之美* 最多&最初&無限大";
    counter = ur027.classList.contains("ht");
    if(counter == 0){
        reset();
        ur027.className = "card-d ht";
        document.getElementById("text007").style.display = "flex";
    }
    else{
        reset();
    }
})

ur028.addEventListener("click", function(){
    cardname[6].innerHTML = "-蒼王宮- 聖歌連隊 旋律";
    counter = ur028.classList.contains("ht");
    if(counter == 0){
        reset();
        ur028.className = "card-d ht";
        document.getElementById("text007").style.display = "flex";
    }
    else{
        reset();
    }
})

ur029.addEventListener("click", function(){
    cardname[7].innerHTML = "【黛露敏】惡魔薄荷始龍";
    counter = ur029.classList.contains("ht");
    if(counter == 0){
        reset();
        ur029.className = "card-d ht";
        document.getElementById("text008").style.display = "flex";
    }
    else{
        reset();
    }
})

ur030.addEventListener("click", function(){
    cardname[7].innerHTML = "合力攻擊！ 夢想☆天使之箭";
    counter = ur030.classList.contains("ht");
    if(counter == 0){
        reset();
        ur030.className = "card-d ht";
        document.getElementById("text008").style.display = "flex";
    }
    else{
        reset();
    }
})

ur031.addEventListener("click", function(){
    cardname[7].innerHTML = "超美味！！ 熱量霸王 波尼亞托夫斯基一族";
    counter = ur031.classList.contains("ht");
    if(counter == 0){
        reset();
        ur031.className = "card-d ht";
        document.getElementById("text008").style.display = "flex";
    }
    else{
        reset();
    }
})

ur032.addEventListener("click", function(){
    cardname[7].innerHTML = "|||狐笑||| 祓三姊妹 夢色|桃色";
    counter = ur032.classList.contains("ht");
    if(counter == 0){
        reset();
        ur032.className = "card-d ht";
        document.getElementById("text008").style.display = "flex";
    }
    else{
        reset();
    }
})

ur033.addEventListener("click", function(){
    cardname[8].innerHTML = "戰陣之燈/VDN-93 強襲登陸艦 尤克特拉希爾";
    counter = ur033.classList.contains("ht");
    if(counter == 0){
        reset();
        ur033.className = "card-d ht";
        document.getElementById("text009").style.display = "flex";
    }
    else{
        reset();
    }
})

ur034.addEventListener("click", function(){
    cardname[8].innerHTML = "學園的王者 學生會執行部";
    counter = ur034.classList.contains("ht");
    if(counter == 0){
        reset();
        ur034.className = "card-d ht";
        document.getElementById("text009").style.display = "flex";
    }
    else{
        reset();
    }
})

ur035.addEventListener("click", function(){
    cardname[8].innerHTML = "全方位攻擊";
    counter = ur035.classList.contains("ht");
    if(counter == 0){
        reset();
        ur035.className = "card-d ht";
        document.getElementById("text009").style.display = "flex";
    }
    else{
        reset();
    }
})

ur036.addEventListener("click", function(){
    cardname[8].innerHTML = "迅雷的科學家 阿巴坎";
    counter = ur036.classList.contains("ht");
    if(counter == 0){
        reset();
        ur036.className = "card-d ht";
        document.getElementById("text009").style.display = "flex";
    }
    else{
        reset();
    }
})

ur037.addEventListener("click", function(){
    cardname[9].innerHTML = "聯合宇宙軍 衛星加農砲";
    counter = ur037.classList.contains("ht");
    if(counter == 0){
        reset();
        ur037.className = "card-d ht";
        document.getElementById("text010").style.display = "flex";
    }
    else{
        reset();
    }
})

ur038.addEventListener("click", function(){
    cardname[9].innerHTML = "全員集合！ 魔法少女莉莉卡☆露露卡";
    counter = ur038.classList.contains("ht");
    if(counter == 0){
        reset();
        ur038.className = "card-d ht";
        document.getElementById("text010").style.display = "flex";
    }
    else{
        reset();
    }
})

ur039.addEventListener("click", function(){
    cardname[9].innerHTML = "狂愛的次女 瓦爾瓦拉";
    counter = ur039.classList.contains("ht");
    if(counter == 0){
        reset();
        ur039.className = "card-d ht";
        document.getElementById("text010").style.display = "flex";
    }
    else{
        reset();
    }
})

ur040.addEventListener("click", function(){
    cardname[9].innerHTML = "紅薔薇的暗殺術 殘酷";
    counter = ur040.classList.contains("ht");
    if(counter == 0){
        reset();
        ur040.className = "card-d ht";
        document.getElementById("text010").style.display = "flex";
    }
    else{
        reset();
    }
})

ur041.addEventListener("click", function(){
    cardname[10].innerHTML = "小千的外遇懲罰狙擊";
    counter = ur041.classList.contains("ht");
    if(counter == 0){
        reset();
        ur041.className = "card-d ht";
        document.getElementById("text011").style.display = "flex";
    }
    else{
        reset();
    }
})

ur042.addEventListener("click", function(){
    cardname[10].innerHTML = "創靈的庇佑 泰奧瓦";
    counter = ur042.classList.contains("ht");
    if(counter == 0){
        reset();
        ur042.className = "card-d ht";
        document.getElementById("text011").style.display = "flex";
    }
    else{
        reset();
    }
})

ur043.addEventListener("click", function(){
    cardname[10].innerHTML = "*真實之美* 喬凡尼";
    counter = ur043.classList.contains("ht");
    if(counter == 0){
        reset();
        ur043.className = "card-d ht";
        document.getElementById("text011").style.display = "flex";
    }
    else{
        reset();
    }
})

ur044.addEventListener("click", function(){
    cardname[10].innerHTML = "【黛露敏】惡魔薄荷鬼龍 把拔敏";
    counter = ur044.classList.contains("ht");
    if(counter == 0){
        reset();
        ur044.className = "card-d ht";
        document.getElementById("text011").style.display = "flex";
    }
    else{
        reset();
    }
})


ur045.addEventListener("click", function(){
    cardname[11].innerHTML = "絕夢魔女 啟示錄☆露露卡";
    counter = ur045.classList.contains("ht");
    if(counter == 0){
        reset();
        ur045.className = "card-d ht";
        document.getElementById("text012").style.display = "flex";
    }
    else{
        reset();
    }
})

ur046.addEventListener("click", function(){
    cardname[11].innerHTML = "|||貍原||| 破戒怨士 喰色";
    counter = ur046.classList.contains("ht");
    if(counter == 0){
        reset();
        ur046.className = "card-d ht";
        document.getElementById("text012").style.display = "flex";
    }
    else{
        reset();
    }
})

ur047.addEventListener("click", function(){
    cardname[11].innerHTML = "某家用機械的叛亂";
    counter = ur047.classList.contains("ht");
    if(counter == 0){
        reset();
        ur047.className = "card-d ht";
        document.getElementById("text012").style.display = "flex";
    }
    else{
        reset();
    }
})

ur048.addEventListener("click", function(){
    cardname[11].innerHTML = "命運的女神 進化☆莉莉卡";
    counter = ur048.classList.contains("ht");
    if(counter == 0){
        reset();
        ur048.className = "card-d ht";
        document.getElementById("text012").style.display = "flex";
    }
    else{
        reset();
    }
})

ur049.addEventListener("click", function(){
    cardname[12].innerHTML = "革命的旗幟";
    counter = ur049.classList.contains("ht");
    if(counter == 0){
        reset();
        ur049.className = "card-d ht";
        document.getElementById("text013").style.display = "flex";
    }
    else{
        reset();
    }
})

ur050.addEventListener("click", function(){
    cardname[12].innerHTML = "自深淵湧出的黑影";
    counter = ur050.classList.contains("ht");
    if(counter == 0){
        reset();
        ur050.className = "card-d ht";
        document.getElementById("text013").style.display = "flex";
    }
    else{
        reset();
    }
})

ur051.addEventListener("click", function(){
    cardname[12].innerHTML = "夢想☆魔法陣";
    counter = ur051.classList.contains("ht");
    if(counter == 0){
        reset();
        ur051.className = "card-d ht";
        document.getElementById("text013").style.display = "flex";
    }
    else{
        reset();
    }
})

ur052.addEventListener("click", function(){
    cardname[12].innerHTML = "全天首都防護罩 Hum-Sphere LLIK";
    counter = ur052.classList.contains("ht");
    if(counter == 0){
        reset();
        ur052.className = "card-d ht";
        document.getElementById("text013").style.display = "flex";
    }
    else{
        reset();
    }
})

ur053.addEventListener("click", function(){
    cardname[13].innerHTML = "銀河防衛機器人 Unidoll-2525";
    counter = ur053.classList.contains("ht");
    if(counter == 0){
        reset();
        ur053.className = "card-d ht";
        document.getElementById("text014").style.display = "flex";
    }
    else{
        reset();
    }
})

ur054.addEventListener("click", function(){
    cardname[13].innerHTML = "慶典的精隨！男人的手筒煙火";
    counter = ur054.classList.contains("ht");
    if(counter == 0){
        reset();
        ur054.className = "card-d ht";
        document.getElementById("text014").style.display = "flex";
    }
    else{
        reset();
    }
})

ur055.addEventListener("click", function(){
    cardname[13].innerHTML = "磐石 Hum-unknown";
    counter = ur055.classList.contains("ht");
    if(counter == 0){
        reset();
        ur055.className = "card-d ht";
        document.getElementById("text014").style.display = "flex";
    }
    else{
        reset();
    }
})

ur056.addEventListener("click", function(){
    cardname[13].innerHTML = "神技官 安傑‧索雷";
    counter = ur056.classList.contains("ht");
    if(counter == 0){
        reset();
        ur056.className = "card-d ht";
        document.getElementById("text014").style.display = "flex";
    }
    else{
        reset();
    }
})

ur057.addEventListener("click", function(){
    cardname[14].innerHTML = "獨災者 安古利夫‧基夫特";
    counter = ur057.classList.contains("ht");
    if(counter == 0){
        reset();
        ur057.className = "card-d ht";
        document.getElementById("text015").style.display = "flex";
    }
    else{
        reset();
    }
})

ur058.addEventListener("click", function(){
    cardname[14].innerHTML = "忘愛的長女 亞歷珊卓";
    counter = ur058.classList.contains("ht");
    if(counter == 0){
        reset();
        ur058.className = "card-d ht";
        document.getElementById("text015").style.display = "flex";
    }
    else{
        reset();
    }
})

ur059.addEventListener("click", function(){
    cardname[14].innerHTML = "樂團公主 歌姬";
    counter = ur059.classList.contains("ht");
    if(counter == 0){
        reset();
        ur059.className = "card-d ht";
        document.getElementById("text015").style.display = "flex";
    }
    else{
        reset();
    }
})

ur060.addEventListener("click", function(){
    cardname[14].innerHTML = "紅薔薇的副團長 友情";
    counter = ur060.classList.contains("ht");
    if(counter == 0){
        reset();
        ur060.className = "card-d ht";
        document.getElementById("text015").style.display = "flex";
    }
    else{
        reset();
    }
})

ur061.addEventListener("click", function(){
    cardname[15].innerHTML = "-蒼王宮- 冰冠女王 依迪雅=N=尤朗布魯克";
    counter = ur061.classList.contains("ht");
    if(counter == 0){
        reset();
        ur061.className = "card-d ht";
        document.getElementById("text016").style.display = "flex";
    }
    else{
        reset();
    }
})

ur062.addEventListener("click", function(){
    cardname[15].innerHTML = "加魯魯的閃亮亮凸額頭戰車";
    counter = ur062.classList.contains("ht");
    if(counter == 0){
        reset();
        ur062.className = "card-d ht";
        document.getElementById("text016").style.display = "flex";
    }
    else{
        reset();
    }
})

ur063.addEventListener("click", function(){
    cardname[15].innerHTML = "雷靈的庇佑 雷鳥";
    counter = ur063.classList.contains("ht");
    if(counter == 0){
        reset();
        ur063.className = "card-d ht";
        document.getElementById("text016").style.display = "flex";
    }
    else{
        reset();
    }
})

ur064.addEventListener("click", function(){
    cardname[15].innerHTML = "對手狂刃忍者 -幽幽院夢良良-";
    counter = ur064.classList.contains("ht");
    if(counter == 0){
        reset();
        ur064.className = "card-d ht";
        document.getElementById("text016").style.display = "flex";
    }
    else{
        reset();
    }
})

ur065.addEventListener("click", function(){
    cardname[16].innerHTML = "-蒼王宮- 終結禁獸 導彈";
    counter = ur065.classList.contains("ht");
    if(counter == 0){
        reset();
        ur065.className = "card-d ht";
        document.getElementById("text017").style.display = "flex";
    }
    else{
        reset();
    }
})

ur066.addEventListener("click", function(){
    cardname[16].innerHTML = "背負亡妻的庇佑";
    counter = ur066.classList.contains("ht");
    if(counter == 0){
        reset();
        ur066.className = "card-d ht";
        document.getElementById("text017").style.display = "flex";
    }
    else{
        reset();
    }
})

ur067.addEventListener("click", function(){
    cardname[16].innerHTML = "#夜光犯罪特區 #小讚演唱會";
    counter = ur067.classList.contains("ht");
    if(counter == 0){
        reset();
        ur067.className = "card-d ht";
        document.getElementById("text017").style.display = "flex";
    }
    else{
        reset();
    }
})

ur068.addEventListener("click", function(){
    cardname[16].innerHTML = "#夜光犯罪特區 #整夜都是本大爺讚美會";
    counter = ur068.classList.contains("ht");
    if(counter == 0){
        reset();
        ur068.className = "card-d ht";
        document.getElementById("text017").style.display = "flex";
    }
    else{
        reset();
    }
})

ur069.addEventListener("click", function(){
    cardname[17].innerHTML = "能量罐 100000ml";
    counter = ur069.classList.contains("ht");
    if(counter == 0){
        reset();
        ur069.className = "card-d ht";
        document.getElementById("text018").style.display = "flex";
    }
    else{
        reset();
    }
})