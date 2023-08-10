chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.executeScript({url: "https://www.youtube.com/*"}, {file: "content.js"});
});
