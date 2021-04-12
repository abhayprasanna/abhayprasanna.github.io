setTimeout(timebutton, 700); //wait half a second just in case

function timebutton() { //creates a new left sidebar log button
  if (!document.getElementById('timeDiv')) {
    var divTime = document.createElement('div');
    divTime.classList.add('log-button');
    divTime.id = 'timeDiv';
    var spanTime = document.createElement('span');
    spanTime.classList.add('bp3-icon', 'bp3-icon-time', 'icon');
    var sidebarcontent = document.querySelector("#app > div.roam-body > div.roam-app > div.roam-sidebar-container.noselect > div");
    var sidebartoprow = sidebarcontent.childNodes[0];
    if (sidebarcontent && sidebartoprow) {
      sidebartoprow.parentNode.insertBefore(divTime, sidebartoprow.nextSibling);    
    }
  }
  setInterval(function() {
    divTime.innerHTML = new Date().toLocaleTimeString(); //adds time
    divTime.prepend(spanTime); //adds clock icon
  }, 1);
}
