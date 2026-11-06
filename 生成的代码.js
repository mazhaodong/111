// ============ 轻量 Toast 提示 ============
function toast(msg) {
  var t = document.createElement('div');
  t.textContent = msg;
  t.style.cssText = 'position:fixed;left:50%;bottom:40px;transform:translateX(-50%);' +
    'background:rgba(44,62,80,.92);color:#fff;padding:10px 18px;border-radius:999px;' +
    'font-size:14px;z-index:9999;opacity:0;transition:opacity .25s;';
  document.body.appendChild(t);
  requestAnimationFrame(function () { t.style.opacity = '1'; });
  setTimeout(function () {
    t.style.opacity = '0';
    setTimeout(function () { t.remove(); }, 300);
  }, 1600);
  return false;
}
