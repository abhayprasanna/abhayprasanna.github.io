var cssId = "masonry"; //Change to whatever
var cssLink = "https://gitmurf.github.io/masonry-vanilla/masonry-main.css"; //Change to the location of your CSS import URL

//Add button (thanks Tyler Wince!)
var nameToUse = "toggleMasonry"; //Change to whatever
//Find icons to use at: https://blueprintjs.com/docs/#icons
var bpIconName = "th-derived";

var checkForButton = document.getElementById(nameToUse + "-icon");
if (!checkForButton) {
  var mainButton = document.createElement("span");
  mainButton.id = nameToUse + "-button";
  mainButton.classList.add("bp3-popover-wrapper");
  var spanTwo = document.createElement("span");
  spanTwo.classList.add("bp3-popover-target");
  mainButton.appendChild(spanTwo);
  var mainIcon = document.createElement("span");
  mainIcon.id = nameToUse + "-icon";
  mainIcon.classList.add(
    "bp3-icon-" + bpIconName,
    "bp3-button",
    "bp3-minimal",
    "bp3-small"
  );
  spanTwo.appendChild(mainIcon);
  var roamTopbar = document.getElementsByClassName("rm-topbar");
  var nextIconButton = roamTopbar[0].lastElementChild;
  var flexDiv = document.createElement("div");
  flexDiv.id = nameToUse + "-flex-space";
  flexDiv.className = "rm-topbar__spacer-sm";
  nextIconButton.insertAdjacentElement("afterend", mainButton);
  mainButton.insertAdjacentElement("afterend", flexDiv);
  mainButton.addEventListener("click", toggleCSS);
}

//function
async function toggleCSS() {
  if (!document.getElementById(cssId)) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.id = cssId;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = cssLink;
    link.media = "all";
    head.appendChild(link);
  } else {
    var sheet = document.getElementById(cssId);
    sheet.disabled = true;
    sheet.parentNode.removeChild(sheet);
  }
}
