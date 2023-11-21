const linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.type = "text/css";
linkElement.href = chrome.runtime.getURL("styles.css");
document.head.append(linkElement);

// Add manji face
const header = document.querySelector("a[name='top'] center:nth-of-type(2)");
const aEl = document.createElement("a");
aEl.href = "#";
const manjiFace = document.createElement("img");
manjiFace.id = "face";
manjiFace.src = chrome.runtime.getURL("manji.png");
aEl.appendChild(manjiFace);
header.insertBefore(aEl, header.firstChild);
