'use strict';
//スライドショー//
    const images = ['images/mainvisual1.jpg','images/mainvisual2.jpg','images/mainvisual3.jpg'];

    let current = -1;
    
    function slideshowTimer(){
      if (current === 2){
        current = 0;
      }
      else {
        current ++;
      }
      document.getElementById("mainimage").src = images[current];
    }

    setInterval(slideshowTimer, 4000);

//スライドショー終わり//

//ハンバーガーメニュー//

    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click",function() {
      nav.classList.toggle("nav-active");

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          // console.log(index);
          link.style.animation = `navLinksFade 0.5s ease forwards ${
            index / 7 + 0.4
          }s`;
        }
      });
      //burger animataion
      burger.classList.toggle("toggle");

    });

//ハンバーガーメニュー終わり//

//fade in 下からふわっと//

    function fadeAnime(){

        // ふわっ
        $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
          var elemPos = $(this).offset().top-50;//要素より、50px上の
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll >= elemPos - windowHeight){
          $(this).addClass('fadeUp1');// 画面内に入ったらfadeUpというクラス名を追記
          }else{
          $(this).removeClass('fadeUp1');// 画面外に出たらfadeUpというクラス名を外す
          }
          });
      }
      
      // 画面をスクロールをしたら動かしたい場合の記述
        $(window).scroll(function (){
          fadeAnime();/* アニメーション用の関数を呼ぶ*/
        });// ここまで画面をスクロールをしたら動かしたい場合の記述
      
      // 画面が読み込まれたらすぐに動かしたい場合の記述
        $(window).on('load', function(){
          fadeAnime();/* アニメーション用の関数を呼ぶ*/
        });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

//fade in 下からふわっと終わり//





//FAQ アコーディオンメニュー//

    $(document).ready(function(){
      $(".js-accordion-title").on('click',function(){
          $(this).next().slideToggle(300);
          $(this).toggleClass("open",300)
      });      
  });

//FAQ アコーディオンメニュー終わり//

// スクロールトップボタン//
scrollTop('js-scroll-top', 150); // 遅すぎるとガクガクになるので注意

function scrollTop(el, duration) {
  const target = document.getElementById(el);
  target.addEventListener('click', function() {
    let currentY = window.pageYOffset; // 現在のスクロール位置を取得
    let step = duration/currentY > 1 ? 10 : 100; // 三項演算子
    let timeStep = duration/currentY * step; // スクロール時間
    let intervalId = setInterval(scrollUp, timeStep);
    // timeStepの間隔でscrollUpを繰り返す。
    // clearItervalのために返り値intervalIdを定義する。

    function scrollUp(){
      currentY = window.pageYOffset;
      if(currentY === 0) {
          clearInterval(intervalId); // ページ最上部に来たら終了
      } else {
          scrollBy( 0, -step ); // step分上へスクロール
      }
    }
  });
}
// スクロールトップボタン終わり//



