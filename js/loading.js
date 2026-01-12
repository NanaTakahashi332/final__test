window.addEventListener("load", function () {
  const loader = document.getElementById("loading");

  // ローディングを表示しておく時間（ミリ秒）
  const DURATION = 12000; 

  setTimeout(function () {
    if (loader) {
      loader.classList.add("is-hidden");
    }
  }, DURATION);
});