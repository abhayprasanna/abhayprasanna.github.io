// Creates a button on left sidebar that displays current time, and takes you to the bottom of Today's Daily Note on-click

setTimeout(timebutton, 500); //wait half a second just in case

function timebutton() { //creates a new left sidebar log button below Daily Notes
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
    divTime.onclick = toggletoday; //run the function onclick
  }
  setInterval(function() {
    divTime.innerHTML = new Date().toLocaleTimeString();
    divTime.prepend(spanTime);
  }, 1);
}

//Define function to find reference section and scroll it into view
function ScrollToBottom() {
 document.querySelector(".rm-reference-main").scrollIntoView();
 console.log('Scrolled to bottom!');
}

function toggletoday() { //creates the URL for today and opens it
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '-' + dd + '-' + yyyy;
  dbname = window.location.href.split('/')[5];
  let roamuri = "https://roamresearch.com/#/app/";
  let roamuritoday = roamuri+ dbname + "/page/" + today;
  window.open(roamuritoday,"_self");
  setTimeout(ScrollToBottom, 300);  //Set delay to scroll to bottom of daily note
}
