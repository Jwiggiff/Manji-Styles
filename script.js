// const styleElement = document.createElement("style");
// styleElement.textContent = styles;
// document.head.append(styleElement);

const linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.type = "text/css";
linkElement.href = chrome.runtime.getURL("styles.css");
document.head.append(linkElement);

// Add manji face
const header = document.querySelector("a[name='top'] center:nth-of-type(2)");
const manjiFace = document.createElement("img");
manjiFace.id = "face";
manjiFace.src = chrome.runtime.getURL("manji.png");
header.insertBefore(manjiFace, header.firstChild);
