async function loadToggleSidebars() {
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

if (typeof firstRun == 'undefined') {
  document.dispatchEvent(rightsidebar);
  document.dispatchEvent(rightsidebarMac);
  if (document.getElementsByClassName("bp3-button bp3-minimal bp3-icon-menu-closed").length == 0) {
  document.dispatchEvent(leftsidebar);
  document.dispatchEvent(leftsidebarMac);
  }
  console.log('Both sidebars open!');
  window.firstRun = false;
}
}

loadToggleSidebars();
