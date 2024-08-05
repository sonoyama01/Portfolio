$(function () {
    $('.ham_btn').on('click', function () {
        $('.sp_nav_outer').fadeToggle();
        $('.ham_btn').toggleClass('open');
    });})


/* ============================
 * loading
 * ========================= */
/* 手書き風アニメーション */
/* ========================= */
new Vivus("loading", {
    duration: 250, //  アニメーションの長さ
    forceRender: false, //パスが更新で再レンダリングさせない
  });
  
  /* 初回のみloading画面発火 */
  /* ========================= */
  // セッションストレージからフラグを取得
  const isFirstLoad = sessionStorage.getItem("isFirstLoad");
  
  // ページの読み込みが完了したときに実行される関数
  window.addEventListener("load", function () {
    // フラグが 'true' でない場合（初回アクセス時またはフラグが削除された場合）
    if (isFirstLoad !== "true") {
      // ローディング画面を表示
      const loadingElement = document.querySelector("#loading__outer");
      loadingElement.classList.add("active");
  
      // 4.3秒後にローディング画面を非表示にする
      setTimeout(function () {
        // ローディング画面を非表示にする
        loadingElement.classList.remove("active");
        // コンテンツ要素を表示
        const contentsElement = document.querySelector(".contents.hidden");
        contentsElement.classList.remove("hidden"); // hiddenクラスを取り除くことでコンテンツを表示
        // セッションストレージにフラグを保存
        sessionStorage.setItem("isFirstLoad", "true");
      }, 3800);
      setTimeout(function () {
        loadingElement.style.display = "none"; // 非表示にする
      }, 4300);
    } else {
      // 2回目以降のアクセス時の処理を記述
      // コンテンツ要素を表示
      const contentsElement = document.querySelector(".contents.hidden");
      contentsElement.classList.remove("hidden"); // hiddenクラスを取り除くことでコンテンツを表示
    }
  });
  

/* ============================
* 足跡
* ========================= */
document.addEventListener('DOMContentLoaded', function() {
  const footprintsContainer = document.getElementById('footprintsContainer');
  const footprintTemplate = document.getElementById('footprintTemplate');
  const numberOfFootprints = 50;// 足跡の個数
  const footprintSpacing = 50; // 足跡の間隔

  footprintTemplate.style.display = 'none';

  // 足跡の複製
  for (let i = 0; i < numberOfFootprints; i++) {
      const footprint = footprintTemplate.cloneNode(true);
      footprint.removeAttribute('id');
      footprint.style.display = 'block';
      footprint.style.top = `${i * footprintSpacing}px`;
    if(i%2===0){
        footprint.classList.add('right')// 軌道に合わせて調整が必要
        footprint.style.right = '60px';
    }else{
        footprint.classList.add('left')// 軌道に合わせて調整が必要
        footprint.style.right = '40px';
    }
      footprintsContainer.appendChild(footprint);
  }

  // スクロールイベント
  document.addEventListener('scroll', function() {
      const footprints = document.querySelectorAll('.footprint');
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const triggerPoint = scrollTop + windowHeight /4; // 画面中央のラインで足跡を表示
      const triggerPointHide=scrollTop+100 // 画面中央のラインで足跡を消す

      footprints.forEach((footprint, index) => {
          const footprintTop = parseFloat(footprint.style.top);
          if (footprintTop < triggerPoint && footprintTop>triggerPointHide) {
              footprint.style.opacity = 1;
          } else {
              footprint.style.opacity = 0;
          }
      });
  });
});
