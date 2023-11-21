Array.from(document.getElementsByTagName("a")).forEach((link) => {
  link.addEventListener("click", () => {
    chrome.tabs.create({ active: true, url: link.href });
  });
});
