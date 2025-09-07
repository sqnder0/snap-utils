const downloadIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/> </svg>`;

const style = document.createElement("style");
style.textContent = `
  #download-snap {
    height: 36px !important;
    aspect-ratio: 1/1 !important;
    border-radius: 100% !important;
    background-color: var(--sigButtonSecondary) !important;
    border: 0.8px solid rgba(255, 255, 255, 0) !important;
  }
  #download-snap:hover {
    background-color: var(--sigButtonSecondaryHover) !important;
  }
`;
document.head.appendChild(style);

// Disable snapchat from blurring everything
window.addEventListener("blur", (e) => e.stopImmediatePropagation(), true);
window.addEventListener("focus", (e) => e.stopImmediatePropagation(), true);

// Start observing
const main = document.querySelector("main");
const mutationObserver = new MutationObserver((entries) => {
  addDownloadBtn();
});

mutationObserver.observe(main, { childList: true, subtree: true });

function downloadCurrentSnap() {
  const mediaContent = document.querySelector('[aria-label="media content"]');

  if (!mediaContent) {
    return;
  }

  const image = mediaContent.querySelector('img[draggable="false"]');

  if (image) {
    const source = image.getAttribute("src");
    downloadURI(source, "snap");
  }
}

function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
}

mutationObserver.observe();

function addDownloadBtn() {
  const mediaContent = document.querySelector('[aria-label="media content"]');

  if (!mediaContent) return;

  const image = mediaContent.querySelector('img[draggable="false"]');

  if (!image) return;

  const chatBar = mediaContent.parentElement.lastChild.lastChild;

  const customBtnParent = chatBar.querySelector('div[contenteditable="true"]').parentElement.parentElement;

  if (customBtnParent.parentElement.querySelector("#download-snap")) return;

  const customBtn = document.createElement("button");
  customBtn.innerHTML = downloadIcon;
  customBtn.id = "download-snap";
  customBtn.type = "button";
  customBtn.addEventListener("click", downloadCurrentSnap);

  customBtnParent.parentElement.style.display = "flex";
  customBtnParent.parentElement.style.width = "100%";
  customBtnParent.parentElement.style.alignItems = "center";
  customBtnParent.parentElement.style.gap = "5px";

  customBtnParent.firstChild.style.width = "100%";

  customBtnParent.parentElement.appendChild(customBtn);
}
