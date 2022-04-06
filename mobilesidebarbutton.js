function isMobile() {
return /Android|webOS|iPhone|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {

//Add button (thanks Tyler Wince!)
  var nameToUse = "togglesidebar"; //Change to whatever
  //Find icons to use at: https://blueprintjs.com/docs/#icons
  var bpIconName = "menu-closed";
  
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
    mainButton.addEventListener("click", opensesame);
  }
  
  //function
  async function opensesame() {
    if (!document.getElementById("roam-right-sidebar-content")) {
      window.roamAlphaAPI.ui.rightSidebar.open();
      document.getElementById("togglesidebar-icon").classList.replace("bp3-icon-menu-closed","bp3-icon-menu-open");
    } else {
      window.roamAlphaAPI.ui.rightSidebar.close();
      document.getElementById("togglesidebar-icon").classList.replace("bp3-icon-menu-open","bp3-icon-menu-closed");
    }
  }
}
