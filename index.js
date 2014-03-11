function onBoundsChanges() {
  var webview = document.getElementById('appwebview');
  if (webview !== null) {
    webview.style.height = document.documentElement.clientHeight + 'px';
    webview.style.width = document.documentElement.clientWidth + 'px';
  }
}

window.onresize = onBoundsChanges;
onBoundsChanges();
