var s = document.createElement('script');
s.src = chrome.extension.getURL('Script.js');
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);


document.addEventListener("DOMTitleChanged", "InjectScript");

function InjectScript()
{
  var s = document.createElement('script');
  s.src = chrome.extension.getURL('Script.js');
  s.onload = function() {
      this.parentNode.removeChild(this);
  };
  (document.head||document.documentElement).appendChild(s);

}
