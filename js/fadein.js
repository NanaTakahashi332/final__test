//  // フェードインについて関数でまとめる
// function fadeIn() {
//   $('.fadeUpTrigger').each(function () { // fadeUpTriggerクラスの各要素に対して
//     let scroll = $(window).scrollTop(); // スクロール位置を取得する
//     let triTop = $(this).offset().top + 100; // 要素の上部より100px下の位置を取得
//     let winHeight = $(window).height(); // ウィンドウの高さを取得
//     if (scroll >= triTop - winHeight) { // 画面内に要素が入ったかを判断
//       $(this).addClass('fadeUp'); // fadeUpクラスを付与
//     } else {
//       $(this).removeClass('fadeUp'); // fadeUpクラスを削除
//     }
//   });
//   // フェードレフトについて
//   $('.fadeLeftTrigger').each(function () {
//     let scroll = $(window).scrollTop();
//     let triTop = $(this).offset().top + 100;
//     let winHeight = $(window).height();
//     if (scroll >= triTop - winHeight) {
//       $(this).addClass('fadeLeft');
//     } else {
//       $(this).removeClass('fadeLeft');
//     }
//   });
//   // フェードライトについて
//   $('.fadeRightTrigger').each(function () {
//     let scroll = $(window).scrollTop();
//     let triTop = $(this).offset().top + 100;
//     let winHeight = $(window).height();
//     if (scroll >= triTop - winHeight) {
//       $(this).addClass('fadeRight');
//     } else {
//       $(this).removeClass('fadeRight');
//     }
//   });
// }

// $(window).scroll(function () { // スクロールしたら
//   fadeIn(); // 関数を実行
// });

// ↑通常のJS

window.addEventListener("load", () => {
  const root = document.querySelector("#fv"); // スクロールしている要素
  if (!root) return;

  const targets = document.querySelectorAll(".fadeUpTrigger, .fadeLeftTrigger, .fadeRightTrigger");
  if (!targets.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;

        const el = e.target;
        if (el.classList.contains("fadeUpTrigger")) el.classList.add("fadeUp");
        if (el.classList.contains("fadeLeftTrigger")) el.classList.add("fadeLeft");
        if (el.classList.contains("fadeRightTrigger")) el.classList.add("fadeRight");

        // io.unobserve(el); // 1回だけ
      }
    },
    {
      root: root,
      threshold: 0.25,
    }
  );

  targets.forEach((t) => io.observe(t));
});