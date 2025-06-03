// Creates a button on left sidebar that displays current time, and takes you to the bottom of Today's Daily Note on-click

setTimeout(timebutton, 500); //wait half a second just in case
const prefix = window.location.href.split('/')[5] + ' - ';

function timebutton() { //creates a new left sidebar log button below Daily Notes
  var divTime = document.getElementById('timeDiv');
  if (!divTime) {
    divTime = document.createElement('div');
    divTime.classList.add('log-button');
    divTime.id = 'timeDiv';
    var spanTime = document.createElement('span');
    spanTime.classList.add('bp3-icon', 'bp3-icon-time', 'icon');
    var sidebarcontent = document.querySelector("#app > div.roam-body > div.roam-app > div.roam-sidebar-container.noselect > div");
    var sidebartoprow = sidebarcontent.childNodes[0];
    if (sidebarcontent && sidebartoprow) {
      sidebartoprow.parentNode.insertBefore(divTime, sidebartoprow.nextSibling);    
    }
    divTime.onclick = toggletoday; //run the function onclick
    divTime.innerText = new Date().toLocaleTimeString();
    divTime.prepend(spanTime)
  }
  setInterval(function() {
    divTime.childNodes[1].nodeValue = new Date().toLocaleTimeString();
    // change tab name
        if(!document.hasFocus() && !document.title.includes(prefix)) {
          document.title = prefix + document.title;
        }
  }, 1000);
}

function toggletoday() { //creates the URL for today and opens it
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '-' + dd + '-' + yyyy;
  window.roamAlphaAPI.ui.mainWindow.openPage({page:
											  {uid: today}});
}
