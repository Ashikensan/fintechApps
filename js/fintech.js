//1乱数を作成する
//1-(1)BSの数字に代入する
let money_number = 0;
let physical_number = 0;
let intelligence_number = 0;
let human_number = 0;
let debt_number = 0;
let credit_number = 0;
let assets_number = 0;
let liabilities_number = 0;
let netWorth_number = 0;
let ok = 0;


//1-(2)BSの勘定科目を変数に代える
const money = "#area_money" 
const physical = "#area_physical"
const intelligence = "#area_intelligence"
const human = "#area_human"
const debt = "#area_debt"
const credit = "#area_credit"
const assets = "#area_assets"
const liabilities = "#area_liabilities"
const netWorth = "#area_netWorth"

//1-(3)アクション毎に加減算する数字を代入する
const kozukaiAc =[2000,3000,4000];
const otetsudaiAc =[500,1000,1500,2000,3000];
const youtubeAc =[3000,4000,5000];
const shukudaiAc =[700,1400,2100];
const jukuAc =[1500,3000,5000];
const dokushoAc =[-1000,-3000,-5000,500,1500,2500];//現金マイナスして他の資産へ振替え
const asobuAc =[1500,3000,5000,6000,10000];
const okashiAc =[-500,-1000,-1500,500,1000,1500];//現金マイナスして他の資産へ振替え
const tasukeruAc =[1500,3000,5000];
const ryokouAc =[-10000,-7500,-5000,5000,7500,10000];//現金マイナスして他の資産へ振替え
const kihuAc =[-5000,-7500,-10000,5000,7500,10000];//現金マイナスして他の資産へ振替え
const nyuugakuAc =[-10000,-7500,-5000,5000,7500,10000];//現金マイナスして他の資産へ振替え

//1-(4)アクション毎のメッセージ
const kozukaiMessage_0 ="お小遣いもらえて良かったね!"
const kozukaiMessage_1 ="いつもより多くのお小遣いがもらえたね!"
const kozukaiMessage_2 ="たくさんお小遣いもらえたね!新しいチャレンジできそうだね!"
const otetsudaiMessage_0 ="お手伝いするのは素晴らしい!"
const otetsudaiMessage_1 ="いつもよりたくさんお手伝いができましたね!"
const otetsudaiMessage_2 ="今日はたくさんのお手伝いができましたね!ありがとう!"
const youtubeMessage_0 ="YouTubeチャレンジ!素晴らしい!"
const youtubeMessage_1 ="YouTubeたくさん頑張りましたね!"
const youtubeMessage_2 ="プロYouTuberも夢じゃない!?新しいチャレンジができそうだね!"
const shukudaiMessage_0 ="宿題に取り組めて素晴らしい!"
const shukudaiMessage_1 ="いつもよりたくさん宿題ができましたね!"
const shukudaiMessage_2 ="宿題がんばりましたね!どんどん成長してるね!"
const jukuMessage_0 ="塾の勉強に取り組めて素晴らしい!"
const jukuMessage_1 ="いつもよりたくさん勉強ができましたね!"
const jukuMessage_2 ="たくさん勉強できましたね!塾でNo.1になれるよ!"
const dokushoMessage_0 ="本が読めて良かったね!"
const dokushoMessage_1 ="いつもよりたくさん本が読めましたね!"
const dokushoMessage_2 ="本をたくさん買って読むのは君の成長につながるよ!素晴らしい!"
const asobuMessage_0 ="友達と遊べて良かったね!"
const asobuMessage_1 ="今日は友達とたくさん遊べましたね!"
const asobuMessage_2 ="どんどん友達と仲良くなってるね!君はリーダーになれるよ!"
const okashiMessage_0 ="お菓子は美味しいよね!"
const okashiMessage_1 ="今日はいつもりたくさんお菓子を買えたね!"
const okashiMessage_2 ="お菓子の買いすぎには注意しようね!"
const tasukeruMessage_0 ="困っている人を助けられましたね!"
const tasukeruMessage_1 ="困っている人を助けてたくさん感謝されましたね!"
const tasukeruMessage_2 ="主体的に助けられて素晴らしい!君はお友達のお手本だよ!"
const ryokouMessage_0 ="初めての旅行!楽しみだね!"
const ryokouMessage_1 ="どんどん旅行が楽しくなってきたね!良い調子!"
const ryokouMessage_2 ="旅行はいろんな出会いや経験が得られて最高だね!"
const kihuMessage_0 ="初めての寄付!素晴らしい!"
const kihuMessage_1 ="どんどん寄付が楽しくなってきたね!良い調子!"
const kihuMessage_2 ="Giveの精神が素晴らしい!"
const nyuugakuMessage_0 ="G'sへ初めての入学!がんばろう!"
const nyuugakuMessage_1 ="G'sにチャレンジ!どんどん学ぼうね!"
const nyuugakuMessage_2 ="G'sに入ってGEEKを目指そうー!"

//1-(5)授業の回数をカウントする変数
let count = 0;

//シーン1（スタート画面）
//スタート画面のアニメーション
$(function(){
/* アニメーションさせたいクラス */
var container = $(".txtAnime");

/* アニメーションスピード */
var speed = 300;

/* テキストの間にスペースを入れます */
var content = container.html();
var text = $.trim(content);
var newHtml = "";

/* スペースで区切ったテキストを、テキストの数だけspanで囲む */
text.split("").forEach(function(v) {
   newHtml += '<span>' + v + '</span>';
});

/* spanで囲んだテキストをHTMLに戻す */
container.html(newHtml);

/* 1文字ずつ表示 */
var txtNum = 0;
container.css({opacity: 1});
setInterval(function() {
  container.find('span').eq(txtNum).css({opacity: 1});
  txtNum++
}, speed);
$(".btn_wrapper").fadeIn(1500);
});

// シーン1から2への遷移
$(function() {
    // 非表示に設定
    $(".scene1_btn").click(function() {
    $("#scene1").css("display","none");
    // 表示に設定
    $(".scene2").css({"display":"block"});
    });
});

//シーン2から3への遷移
$(function() {
    // 非表示に設定
    $(".scene2_btn").click(function() {
    $(".scene2").css("display","none");
    // 表示に設定
    $(".scene3").css({"display":"block"});
    });
});

//シーン3（授業の画面）
$("#kozukai").on("click", function(){
    const random = Math.floor(Math.random() * 3);
        if(random === 0){
            $("#message").text(kozukaiMessage_0);
            $(money).html(money_number += kozukaiAc[0]);
            $(credit).html(credit_number += kozukaiAc[0]);
            $(assets).html(assets_number += kozukaiAc[0]);
            $(netWorth).html(netWorth_number += kozukaiAc[0]);
            $("#count_num").html(count += 1);
            ok = kozukaiAc[0]
        }else if(random === 1){
            $("#message").text(kozukaiMessage_1);
            $(money).html(money_number += kozukaiAc[1]);
            $(credit).html(credit_number += kozukaiAc[1]);
            $(assets).html(assets_number += kozukaiAc[1]);
            $(netWorth).html(netWorth_number += kozukaiAc[1]);
            $("#count_num").html(count += 1);
            ok = kozukaiAc[1]
        }else{
            $("#message").text(kozukaiMessage_2);
            $(money).html(money_number += kozukaiAc[2]);
            $(credit).html(credit_number += kozukaiAc[2]);
            $(assets).html(assets_number += kozukaiAc[2]);
            $(netWorth).html(netWorth_number += kozukaiAc[2]);
            $("#count_num").html(count += 1);
            ok = kozukaiAc[2]
        }
        alert("お金が" + ok + "円増えたよ！")
        //お金10,000円を超過した場合に投資を選択する画面を表示
        if (money_number >= 10000) {
            alert("投資ができるようになったよ！")
            $("#invest").css("display", "block");
            $("#invest_item").css("height", "100%").css("opacity", "1");
        } 
});
$("#otetsudai").on("click", function(){
    const random = Math.floor(Math.random() * 3);
        if(random === 0){
            $("#message").text(otetsudaiMessage_0);
            $(physical).html(physical_number += otetsudaiAc[0]);
            $(human).html(human_number += otetsudaiAc[0]);
            $(credit).html(credit_number += otetsudaiAc[1]);
            $(assets).html(assets_number += otetsudaiAc[1]);
            $(netWorth).html(netWorth_number += otetsudaiAc[1]);
            $("#count_num").html(count += 1);
            ok = otetsudaiAc[0]
        }else if(random === 1){
            $("#message").text(otetsudaiMessage_1);
            $(physical).html(physical_number += otetsudaiAc[1]);
            $(human).html(human_number += otetsudaiAc[1]);
            $(credit).html(credit_number += otetsudaiAc[3]);
            $(assets).html(assets_number += otetsudaiAc[3]);
            $(netWorth).html(netWorth_number += otetsudaiAc[3]);
            $("#count_num").html(count += 1);
            ok = otetsudaiAc[1]
        }else{
            $("#message").text(otetsudaiMessage_2);
            $(physical).html(physical_number += otetsudaiAc[2]);
            $(human).html(human_number += otetsudaiAc[2]);
            $(credit).html(credit_number += otetsudaiAc[4]);
            $(assets).html(assets_number += otetsudaiAc[4]);
            $(netWorth).html(netWorth_number += otetsudaiAc[4]);
            $("#count_num").html(count += 1);
            ok = otetsudaiAc[2]
        }
    alert("体力と人間力がそれぞれ" + ok + "円増えたよ！")
});
$("#youtube").on("click", function(){
    const random = Math.floor(Math.random() * 3);
        if(random === 0){
            $("#message").text(youtubeMessage_0 );
            $(money).html(money_number += youtubeAc[0]);
            $(intelligence).html(intelligence_number += youtubeAc[0]);
            $(credit).html(credit_number += youtubeAc[0]);
            $(assets).html(assets_number += youtubeAc[0]);
            $(netWorth).html(netWorth_number += youtubeAc[0]);
            $("#count_num").html(count += 1);
            ok = youtubeAc[0]
        }else if(random === 1){
            $("#message").text(youtubeMessage_1);
            $(money).html(money_number += youtubeAc[1]);
            $(intelligence).html(intelligence_number += youtubeAc[1]);
            $(credit).html(credit_number += youtubeAc[1]);
            $(assets).html(assets_number += youtubeAc[1]);
            $(netWorth).html(netWorth_number += youtubeAc[1]);
            $("#count_num").html(count += 1);
            ok = youtubeAc[1]
        }else{
            $("#message").text(youtubeMessage_2);
            $(money).html(money_number += youtubeAc[2]);
            $(intelligence).html(intelligence_number += youtubeAc[2]);
            $(credit).html(credit_number += youtubeAc[2]);
            $(assets).html(assets_number += youtubeAc[2]);
            $(netWorth).html(netWorth_number += youtubeAc[2]);
            $("#count_num").html(count += 1);
            ok = youtubeAc[2]
    }
    alert("お金と知力がそれぞれ" + ok + "円増えたよ！")
    //お金10,000円を超過した場合に投資を選択する画面を表示
    if (money_number >= 10000) {
        alert("投資ができるようになったよ！")
        $("#invest").css("display", "block");
        $("#invest_item").css("height", "100%").css("opacity", "1");
    } 
});
$("#shukudai").on("click", function(){
    const random = Math.floor(Math.random() * 3);
        if(random === 0){
            $("#message").text(shukudaiMessage_0);
            $(intelligence).html(intelligence_number += shukudaiAc[0]);
            $(credit).html(credit_number += shukudaiAc[0]);
            $(assets).html(assets_number += shukudaiAc[0]);
            $(netWorth).html(netWorth_number += shukudaiAc[0]);
            $("#count_num").html(count += 1);
            ok = shukudaiAc[0]
        }else if(random === 1){
            $("#message").text(shukudaiMessage_1);
            $(intelligence).html(intelligence_number += shukudaiAc[1]);
            $(credit).html(credit_number += shukudaiAc[1]);
            $(assets).html(assets_number += shukudaiAc[1]);
            $(netWorth).html(netWorth_number += shukudaiAc[1]);
            $("#count_num").html(count += 1);
            ok = shukudaiAc[1]
        }else{
            $("#message").text(shukudaiMessage_2);
            $(intelligence).html(intelligence_number += shukudaiAc[2]);
            $(credit).html(credit_number += shukudaiAc[2]);
            $(assets).html(assets_number += shukudaiAc[2]);
            $(netWorth).html(netWorth_number += shukudaiAc[2]);
            $("#count_num").html(count += 1);
            ok = shukudaiAc[2]
    }
    alert("知力が" + ok + "円増えたよ！")
});
$("#juku").on("click", function(){
    const random = Math.floor(Math.random() * 3);
        if(random === 0){
            $("#message").text(jukuMessage_0);
            $(intelligence).html(intelligence_number += jukuAc[0]);
            $(credit).html(credit_number += jukuAc[0]);
            $(assets).html(assets_number += jukuAc[0]);
            $(netWorth).html(netWorth_number += jukuAc[0]);
            $("#count_num").html(count += 1);
            ok = jukuAc[0]
        }else if(random === 1){
            $("#message").text(jukuMessage_1);
            $(intelligence).html(intelligence_number += jukuAc[1]);
            $(credit).html(credit_number += jukuAc[1]);
            $(assets).html(assets_number += jukuAc[1]);
            $(netWorth).html(netWorth_number += jukuAc[1]);
            $("#count_num").html(count += 1);
            ok = jukuAc[1]
        }else{
            $("#message").text(jukuMessage_2);
            $(intelligence).html(intelligence_number += jukuAc[2]);
            $(credit).html(credit_number += jukuAc[2]);
            $(assets).html(assets_number += jukuAc[2]);
            $(netWorth).html(netWorth_number += jukuAc[2]);
            $("#count_num").html(count += 1);
            ok = jukuAc[2]
    }
    alert("知力が" + ok + "円増えたよ！")
});
$("#dokusho").on("click", function(){
    const random = Math.floor(Math.random() * 3);
        if(random === 0){
            $("#message").text(dokushoMessage_0);
            $(money).html(money_number += dokushoAc[0]);
            $(intelligence).html(intelligence_number += dokushoAc[3]);
            $(human).html(human_number += dokushoAc[3]);
            $("#count_num").html(count += 1);
            ok = dokushoAc[3]
        }else if(random === 1){
            $("#message").text(dokushoMessage_1);
            $(money).html(money_number += dokushoAc[1]);
            $(intelligence).html(intelligence_number += dokushoAc[4]);
            $(human).html(human_number += dokushoAc[4]);
            $("#count_num").html(count += 1);
            ok = dokushoAc[4]
        }else{
            $("#message").text(dokushoMessage_1);
            $(money).html(money_number += dokushoAc[2]);
            $(intelligence).html(intelligence_number += dokushoAc[5]);
            $(human).html(human_number += dokushoAc[5]);
            $("#count_num").html(count += 1);
            ok = dokushoAc[5]
    }
    alert("お金は減っちゃったけど、知力と人間力がそれぞれ" + ok + "円増えたよ！")
});
$("#asobu").on("click", function(){
    const random = Math.floor(Math.random() * 3);
        if(random === 0){
            $("#message").text(asobuMessage_0);
            $(physical).html(physical_number += asobuAc[0]);
            $(human).html(human_number += asobuAc[0]);
            $(credit).html(credit_number += asobuAc[1]);
            $(assets).html(assets_number += asobuAc[1]);
            $(netWorth).html(netWorth_number += asobuAc[1]);
            $("#count_num").html(count += 1);
            ok = asobuAc[0]
        }else if(random === 1){
            $("#message").text(asobuMessage_1);
            $(physical).html(physical_number += asobuAc[1]);
            $(human).html(human_number += asobuAc[1]);
            $(credit).html(credit_number += asobuAc[3]);
            $(assets).html(assets_number += asobuAc[3]);
            $(netWorth).html(netWorth_number += asobuAc[3]);
            $("#count_num").html(count += 1);
            ok = asobuAc[1]
        }else{
            $("#message").text(asobuMessage_2);
            $(physical).html(physical_number += asobuAc[2]);
            $(human).html(human_number += asobuAc[2]);
            $(credit).html(credit_number += asobuAc[4]);
            $(assets).html(assets_number += asobuAc[4]);
            $(netWorth).html(netWorth_number += asobuAc[4]);
            $("#count_num").html(count += 1);
            ok = asobuAc[2]
    }
    alert("体力と人間力がそれぞれ" + ok + "円増えたよ！")
});

$("#okashi").on("click", function(){
    const random = Math.floor(Math.random() * 3);
        if(random === 0){
            $("#message").text(okashiMessage_0);
            $(money).html(money_number += okashiAc[0]);
            $(physical).html(physical_number += okashiAc[3]);
            $("#count_num").html(count += 1);
            ok = okashiAc[3]
        }else if(random === 1){
            $("#message").text(okashiMessage_0);
            $(money).html(money_number += okashiAc[1]);
            $(physical).html(physical_number += okashiAc[4]);
            $("#count_num").html(count += 1);
            ok = okashiAc[4]
        }else{
            $("#message").text(okashiMessage_0);
            $(money).html(money_number += okashiAc[2]);
            $(physical).html(physical_number += okashiAc[5]);
            $("#count_num").html(count += 1);
            ok = okashiAc[5]
    }
    alert("お金は減っちゃったけど、体力が" + ok + "円増えたよ！")
});

$("#tasukeru").on("click", function(){
    const random = Math.floor(Math.random() * 3);
        if(random === 0){
            $("#message").text(tasukeruMessage_0);
            $(human).html(human_number += tasukeruAc[0]);
            $(credit).html(credit_number += tasukeruAc[0]);
            $(assets).html(assets_number += tasukeruAc[0]);
            $(netWorth).html(netWorth_number += tasukeruAc[0]);
            $("#count_num").html(count += 1);
            ok = tasukeruAc[0]
        }else if(random === 1){
            $("#message").text(tasukeruMessage_1);
            $(human).html(human_number += tasukeruAc[1]);
            $(credit).html(credit_number += tasukeruAc[1]);
            $(assets).html(assets_number += tasukeruAc[1]);
            $(netWorth).html(netWorth_number += tasukeruAc[1]);
            $("#count_num").html(count += 1);
            ok = tasukeruAc[1]
        }else{
            $("#message").text(tasukeruMessage_2);
            $(human).html(human_number += tasukeruAc[2]);
            $(credit).html(credit_number += tasukeruAc[2]);
            $(assets).html(assets_number += tasukeruAc[2]);
            $(netWorth).html(netWorth_number += tasukeruAc[2]);
            $("#count_num").html(count += 1);
            ok = tasukeruAc[2]   
    }
    alert("人間力が" + ok + "円増えたよ！")
});
$("#ryokou").on("click", function(){
    const random = Math.floor(Math.random() * 3);
    //ボタンを押下した時に確認画面を表示させるためにconfirm()メソッドを追記
    const result = confirm("借金もしてお財布のお金も減っちゃうけど…本当に旅に出てみる？");
    if( result ){
        if(random === 0){
            $("#message").text(ryokouMessage_0);
            $(money).html(money_number += ryokouAc[2]);
            $(intelligence).html(intelligence_number += ryokouAc[3]);
            $(human).html(human_number += ryokouAc[3]);
            $(debt).html(debt_number += ryokouAc[3]);
            $(assets).html(assets_number += ryokouAc[3]);
            $(liabilities).html(liabilities_number += ryokouAc[3]);
            $("#count_num").html(count += 1);
            ok = ryokouAc[3]
        }else if(random === 1){
            $("#message").text(ryokouMessage_0);
            $(money).html(money_number += ryokouAc[1]);
            $(intelligence).html(intelligence_number += ryokouAc[4]);
            $(human).html(human_number += ryokouAc[4]);
            $(debt).html(debt_number += ryokouAc[4]);
            $(assets).html(assets_number += ryokouAc[4]);
            $(liabilities).html(liabilities_number += ryokouAc[4]);
            $("#count_num").html(count += 1);
            ok = ryokouAc[4]
        }else{
            $("#message").text(ryokouMessage_0);
            $(money).html(money_number += ryokouAc[0]);
            $(intelligence).html(intelligence_number += ryokouAc[5]);
            $(human).html(human_number += ryokouAc[5]);
            $(debt).html(debt_number += ryokouAc[5]);
            $(assets).html(assets_number += ryokouAc[5]);
            $(liabilities).html(liabilities_number += ryokouAc[5]);
            $("#count_num").html(count += 1);
            ok = ryokouAc[5]
        }
    }
    alert("知力と人間力がそれぞれ" + ok + "円増えたよ！")       
});
$("#kihu").on("click", function(){
    const random = Math.floor(Math.random() * 3);
    //ボタンを押下した時に確認画面を表示させるためにconfirm()メソッドを追記
    const result = confirm("お金は減っちゃうけど…本当に寄付する？");
    if( result ){
        if(random === 0){
            $("#message").text(kihuMessage_0);
            $(money).html(money_number += kihuAc[0]);
            $(human).html(human_number += kihuAc[3]);
            $("#count_num").html(count += 1);
            ok = kihuAc[3]
        }else if(random === 1){
            $("#message").text(kihuMessage_0);
            $(money).html(money_number += kihuAc[1]);
            $(human).html(human_number += kihuAc[4]);
            $("#count_num").html(count += 1);
            ok = kihuAc[4]
        }else{
            $("#message").text(kihuMessage_0);
            $(money).html(money_number += kihuAc[2]);
            $(human).html(human_number += kihuAc[5]);
            $("#count_num").html(count += 1);
            ok = kihuAc[5]
        }
    }
    alert("人間力が" + ok + "円増えたよ！")    
});
$("#nyuugaku").on("click", function(){
    const random = Math.floor(Math.random() * 3);
    //ボタンを押下した時に確認画面を表示させるためにconfirm()メソッドを追記
    const result = confirm("借金もしてお財布のお金も減っちゃうけど…本当にチャレンジする？");
    if( result ){
        if(random === 0){
            $("#message").text(ryokouMessage_0);
            $(money).html(money_number += nyuugakuAc[2]);
            $(intelligence).html(intelligence_number += nyuugakuAc[3]);
            $(debt).html(debt_number += nyuugakuAc[3]);
            $(assets).html(assets_number += nyuugakuAc[3]);
            $(liabilities).html(liabilities_number += nyuugakuAc[3]);
            $("#count_num").html(count += 1);
            ok = nyuugakuAc[3]
        }else if(random === 1){
            $("#message").text(ryokouMessage_0);
            $(money).html(money_number += ryokouAc[1]);
            $(intelligence).html(intelligence_number += ryokouAc[4]);
            $(human).html(human_number += ryokouAc[4]);
            $(debt).html(debt_number += ryokouAc[4]);
            $(assets).html(assets_number += ryokouAc[4]);
            $(liabilities).html(liabilities_number += ryokouAc[4]);
            $("#count_num").html(count += 1);
            ok = nyuugakuAc[4]
        }else{
            $("#message").text(ryokouMessage_0);
            $(money).html(money_number += ryokouAc[0]);
            $(intelligence).html(intelligence_number += ryokouAc[5]);
            $(human).html(human_number += ryokouAc[5]);
            $(debt).html(debt_number += ryokouAc[5]);
            $(assets).html(assets_number += ryokouAc[5]);
            $(liabilities).html(liabilities_number += ryokouAc[5]);
            $("#count_num").html(count += 1);
            ok = nyuugakuAc[5]
         } 
    }  
    alert("知力と人間力がそれぞれ" + ok + "円増えたよ！")
});

//シーン３（コメント欄）
//save クリックイベント。ボタンを押すとローカルストレージへ保存
$("#save").on("click", function(){
    const date = $("#time").val();
    const obj = {
        // date  : $("#time").val(),
        key   : $("#key").val(),
        value : $("#memo").val()
    };
    const json = JSON.stringify(obj); //ローカルストレージへ保存するためにオブジェクトをテキスト化
    localStorage.setItem(date,json);
    const html = `
        <tr>
            <th style="width:100px;">${date}</th>
            <td style="width:150px;">${obj.key}</td>
            <td style="width:300px;">${obj.value}</td>
        </tr>
    `;
$("#list").append(html);
})

//clear クリックイベント
$("#clear").on("click", function(){
    localStorage.clear();
    $("#list").empty();
})

for(let i = 0; i<localStorage.length; i++){
    const key = localStorage.key(i);
    const reverse = JSON.parse(localStorage.getItem(key)); //オブジェクトへ変換
    const html = `
        <tr>
            <th style="width:100px;">${key}</th>
            <td style="width:150px;">${reverse.key}</td>
            <td style="width:300px;">${reverse.value}</td>
        </tr>
    `;
$("#list").append(html);
}

