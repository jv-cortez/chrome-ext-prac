function clickHandler(e) {

  chrome.tabs.update({ url: "file:///home/victor/projects/homer/chrome-ext/user-guide-example/index.html" });
  window.close();
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('click-me').addEventListener('click', clickHandler)
});
