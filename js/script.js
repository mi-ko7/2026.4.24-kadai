const hamburger = document.querySelector('.hamburger');
const drawerNav = document.querySelector('.drawer__nav');
const overlay = document.querySelector('.drawer__overlay');

// 共通の切り替え関数を作る
const toggleDrawer = () => {
  hamburger.classList.toggle('is-open'); // 三本線を✕にする
  drawerNav.classList.toggle('is-open'); // メニューを横から出す
  overlay.classList.toggle('is-open');   // 背景を暗くする
};

// ハンバーガーボタンをクリックした時
hamburger.addEventListener('click', toggleDrawer);

// 背景の暗幕をクリックした時（メニューを閉じる）
overlay.addEventListener('click', toggleDrawer);

// メニュー内のリンクをクリックした時（ページ内リンクで移動した後にメニューを閉じる）
const drawerLinks = document.querySelectorAll('.drawer__nav-list a');
drawerLinks.forEach(link => {
  link.addEventListener('click', toggleDrawer);
});