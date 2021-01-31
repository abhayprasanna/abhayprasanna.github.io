//Set delay to trigger sidebars
setTimeout(loadToggleSidebars, 1000);
//Set delay to scroll to bottom of daily notes
setTimeout(ScrollToBottom, 2500);

//Define function to find first reference section and scroll it into view
function ScrollToBottom() {
 document.querySelector(".rm-reference-main").scrollIntoView();
}

//Define function to toggle sidebars using Roam default keyboard shortcuts
function loadToggleSidebars() {
  const rightsidebar = new KeyboardEvent("keydown", {
  bubbles: true, cancelable: true, keyCode: 220, ctrlKey: true, shiftKey: true
  });
const rightsidebarMac = new KeyboardEvent("keydown", {
  bubbles: true, cancelable: true, keyCode: 220, metaKey: true, shiftKey: true
  });
const leftsidebar = new KeyboardEvent("keydown", {
  bubbles: true, cancelable: true, keyCode: 220, ctrlKey: true, shiftKey: false
  });
const leftsidebarMac = new KeyboardEvent("keydown", {
  bubbles: true, cancelable: true, keyCode: 220, metaKey: true, shiftKey: false
  });

//Check if first run and only run once
if (typeof firstRun == 'undefined') {
  document.dispatchEvent(rightsidebar);
  document.dispatchEvent(rightsidebarMac);
//Check if left sidebar is already open
  if (document.getElementsByClassName("bp3-button bp3-minimal bp3-icon-menu-closed").length == 0) {
  document.dispatchEvent(leftsidebar);
  document.dispatchEvent(leftsidebarMac);
  }
  console.log('Both sidebars open!');
  window.firstRun = false;
}
}