$(function () {
    $('.ham_btn').on('click', function () {
        $('.sp_nav_outer').fadeToggle();
        $('.ham_btn').toggleClass('open');
    });})





    // 足跡
    // document.addEventListener('DOMContentLoaded', function() {
    //     const footprintsContainer = document.getElementById('footprintsContainer');
    //     const footprintTemplate = document.getElementById('footprintTemplate');
    //     const numberOfFootprints = 50;// 足跡の個数
    //     const footprintSpacing = 50; // 足跡の間隔
      
    //     footprintTemplate.style.display = 'none';
      
        // 足跡の複製
        // for (let i = 0; i < numberOfFootprints; i++) {
        //     const footprint = footprintTemplate.cloneNode(true);
        //     footprint.removeAttribute('id');
        //     footprint.style.display = 'block';
        //     footprint.style.top = `${i * footprintSpacing}px`;
        //   if(i%2===0){
        //       footprint.classList.add('right')// 軌道に合わせて調整が必要
        //       footprint.style.right = '60px';
        //   }else{
        //       footprint.classList.add('left')// 軌道に合わせて調整が必要
        //       footprint.style.right = '40px';
        //   }
        //     footprintsContainer.appendChild(footprint);
        // }
      
        // スクロールイベント
    //     document.addEventListener('scroll', function() {
    //         const footprints = document.querySelectorAll('.footprint');
    //         const scrollTop = window.scrollY || document.documentElement.scrollTop;
    //         const windowHeight = window.innerHeight;
    //         const triggerPoint = scrollTop + windowHeight -100; // 画面中央のラインで足跡を表示
    //         const triggerPointHide=scrollTop+100 // 画面中央のラインで足跡を消す
      
    //         footprints.forEach((footprint, index) => {
    //             const footprintTop = parseFloat(footprint.style.top);
    //             if (footprintTop < triggerPoint && footprintTop>triggerPointHide) {
    //                 footprint.style.opacity = 1;
    //             } else {
    //                 footprint.style.opacity = 0;
    //             }
    //         });
    //     });
    //   });
      