function genericOnClick(info, tab) {
  alert(info.selectionText);
}

var readMenuItemId = chrome.contextMenus.create({
  "title" : "Read Faster",
  "type" : "normal",
  contexts : ["selection"],
  documentUrlPatterns: ["http://*/*", "https://*/*"],
  "onclick" : genericOnClick
});
