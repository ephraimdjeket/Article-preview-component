const shareOverlay = document.getElementById("share-overlay");
const arrowSVG = document.getElementById("arrow-down");
const shareIconBackground = document.getElementById("share-icon-background");
const shareIcon = document.getElementById("share-icon");

let displaySetting = "none";

shareOverlay.style.display = displaySetting;
arrowSVG.style.display = displaySetting;
shareIcon.style.color = "#6E8098";

shareIconBackground.addEventListener("click", () => {
  if (displaySetting === "none") {
    displaySetting = "flex"
    shareIconBackground.style.backgroundColor = "#6E8098";
    shareIcon.style.color = "white";
  } else {
    displaySetting = "none"
    shareIconBackground.style.backgroundColor = "#ECF2F8";
    shareIcon.style.color = "#6E8098";
  }
  shareOverlay.style.display = displaySetting;
  arrowSVG.style.display = displaySetting;
});